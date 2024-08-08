---
order: 2003
layout: default
toc: true
---
## The Precision Issue
- Is it possible to encode the whole British encyclopedia using just a number?
- Note that, each succeeding interval, i.e., sub-interval, is contained in the preceding interval.
- An undesirable consequence of this process is that the intervals get smaller and smaller and require higher precision as the string gets longer.
- Theoretically speaking, there are infinite numbers in the interval [0, 1).
- However, in practice, the number of numbers that can be uniquely represented on a machine is limited by the maximum number of bits used to represent the number.
- In order to uniquely represent all of the sub-intervals, an increasing precision is needed, as the length of the encoded string increases.

- To overcome this precision problem, we should deal with binary codes directly during the encoding/decoding processes.
  - An interval rescaling scheme is needed.
  - This rescaling scheme must preserve the already encoded information.

## Rescaling Scheme (Encoding)
- As the interval becomes narrower, there are three possibilities that need action:
  - The interval is entirely confined to the lower half of the unit interval, i.e., [0, 1/2).
  - The interval is entirely confined to the upper half of the unit interval, i.e., [1/2, 1).
  - The interval contains the midpoint of the unit interval, and it is contained in the interval [1/4, 3/4).
- Once the interval is confined to either the upper, or lower, half of the unit interval, it is forever confined to that half of the unit interval, i.e., the most significant bit of the binary representation of all numbers in the interval [0, 1/2) is 0 and of all numbers in the interval [1/2, 1) is 1.
- How to convert a decimal fraction to binary fraction?

- Therefore, without waiting to see what the rest of the sequence looks like:
  - This most significant bit can be sent/stored in the compressed file.
  - Both the encoder and decoder can re-scale the interval as follow: from [0, 1/2) to [0, 1) ....Let us call it E1, or from [1/2, 1) to [0, 1) ....Let us call it E2.
  - As soon as we perform either of these mapping, all information about the most significant bit is lost; however, this should not matter, since we have already stored/sent this bit to the decoder.
  - This procedure is repeated each time we have a similar situation.

**Example**
- Consider having 3 symbols, A1, A2, and A3.
- The probabilities of these symbols are 0.8, 0.02, and 0.18, respectively.
- It is required to encode the string A1A3A2A2.


- **Lower Bound Update Formula**:  
$$
\text{lower}^{(k)} = \text{lower}^{(k-1)} + [\text{upper}^{(k-1)} - \text{lower}^{(k-1)}] \times F_X(A^{(k-1)})
$$

- **Upper Bound Update Formula**:  
$$
\text{upper}^{(k)} = \text{lower}^{(k-1)} + [\text{upper}^{(k-1)} - \text{lower}^{(k-1)}] \times F_X(A^{(k)})
$$

- $F_X(3) = 1.0$ (A3)
- $F_X(2) = 0.82$ (A2)
- $F_X(1) = 0.8$ (A1)
- $F_X(0) = 0.0$


**Without scaling**

Initial interval → $[0.0, 1.0)$

After encoding A1 → $[0.0, 0.8)$

After encoding A3 → $[0.656, 0.8)$

After encoding A2 → $[0.7712, 0.77408)$

After encoding A2 → $[0.773504, 0.7735616)$

- The final interval is $[0.7735040, 0.7735616)$
- The length of the final interval is $0.0000576$

**With rescaling:**
- The final interval is $[0.2723840, 0.5083136)$
- The length of the final interval is $0.2359296$
- In this example, rescaling is applied 12 times:

The ratio between final intervals is:
$$ \frac{0.2359296}{0.0000576} = 4096 = 2^{12} $$

i.e., the final interval has been enlarged by $2^{\text{number of rescaling applications}}.$ The bits that we have sent during the rescaling process represent the tag itself.

 ---
## Rescaling Scheme (Decoding)

**Note that:**
- Before decoding a symbol, the decoder ensures that there are enough bits to unambiguously decode this symbol.
- Based on the smallest interval, the decoder can determine how many bits it needs before starting the decoding procedure.
- If $P(x)$ is the probability of the smallest interval, the minimum number of bits required to start decoding is:
  $$ \lceil \log_2 \left(\frac{1}{P(x)}\right) + 1 \rceil + 2  $$
- In the previous example, the probability of the smallest interval was 0.02, hence the minimum number of bits required to start decoding is 7 + 2 bits, since $0.02 = 2^{-5.644}$.
- The decoder mimics the rescaling process that the encoder performed.
- This process continues until all symbols are decoded.

**Example 3:**
- Consider having 3 symbols, A1, A2, and A3 with probabilities 0.8, 0.02, and 0.18 respectively.
- The encoded bit-stream is $(0.1100011000001)_2$.
- It is required to decode 4 symbols using the above encoded bit-stream.

**To decode, follow these steps:**
1. Initialize all cumulative distribution function (CDF) values:
   - $F_X(0) = 0.0$
   - $F_X(1) = 0.8$
   - $F_X(2) = 0.82$
   - $F_X(3) = 1.0$
2. Read the first $n$ bits of the compressed file to initialize the tag.
3. Initialize the lower and upper limits to 0 and 1, respectively:
   - $\text{lower}^{(0)} = 0$
   - $\text{upper}^{(0)} = 1$
4. Repeat the following steps until decoding all required symbols:
   - Decode a symbol using:
     $$
F_x(A^{(k)}-1) \leq \frac{\text{tag} - \text{lower}^{(k-1)}}{\text{upper}^{(k-1)} - \text{lower}^{(k-1)}} < F_x(A^{(k)})
$$

   - Find the value of $A(k)$ that satisfies the above equation.
   - Adjust the limits using:
     $$
\text{lower}^{(k)} = \text{lower}^{(k-1)} + [\text{upper}^{(k-1)} - \text{lower}^{(k-1)}] \times F_X(A^{(k-1)})
$$
     $$
\text{upper}^{(k)} = \text{lower}^{(k-1)} + [\text{upper}^{(k-1)} - \text{lower}^{(k-1)}] \times F_X(A^{(k)})
$$
   - If possible, apply the rescaling procedures and adjust the limits and the tag.



So far, we addressed the cases when the interval is entirely confined to:
- the lower half of the unit interval, i.e., $[0, 1/2)$, or
- the upper half of the unit interval, i.e., $[1/2, 1)$

For the last case, i.e., when the interval is containing the midpoint of the unit interval and the interval is contained in the interval $[1/4, 3/4)$:
- Double the interval by using the $[1/4, 3/4) \rightarrow [0, 1)$ mapping, Let us call it E3
- After the encoder doing this map, no immediate information is stored/sent to the decoder; instead, the fact that we have used the $[1/4, 3/4) \rightarrow [0, 1)$ mapping is recorded at the encoder side
- Later on,
  - if the interval gets confined to the lower half of the unit interval, the encoder stores/sends to the decoder 0, followed by 1 (or more) to represent the number of applications of the $[1/4, 3/4) \rightarrow [0, 1)$ mapping
  - if the interval gets confined to the upper half of the unit interval, the encoder stores/sends to the decoder 1, followed by 0 (or more) to represent the number of applications of the $[1/4, 3/4) \rightarrow [0, 1)$ mapping



Applying the rescaling scheme:
- Allows us to better utilize the limited precision that we possess.
- Allows us to produce the same result as if we had unlimited precision.
- Guarantees that the interval used to encode any symbol will never be less than 0.25.


Similar to the floating-point algorithm, but:
- The initial interval length is set to $2^m$, where $m$ is defined as:
  - $m = \lceil \log_2(\text{Total\_count})\rceil + 2 $
- The internal $[0,1)$ will be mapped to $[0, 2^m)$, i.e,
  - $0$ gets mapped to 0000...0
  - $0.5$ gets mapped to 1000...0
  - $1$ gets mapped to 1111...1

Instead of updating the intervals as:

$$
\text{lower}^{(k)} = \text{lower}^{(k-1)} + [\text{upper}^{(k-1)} - \text{lower}^{(k-1)}] \times F_X(A^{(k-1)})
$$

$$
\text{upper}^{(k)} = \text{lower}^{(k-1)} + [\text{upper}^{(k-1)} - \text{lower}^{(k-1)}] \times F_X(A^{(k)})
$$

Intervals are updated as follows:

$$
\text{new_} L = \text{current_} L + \left(\frac{\text{current_} U - \text{current_} L + 1 \times \text{cumulative_count}(\text{symbol} - 1)}{\text{Total_count}}\right)
$$

$$
\text{new_} U = \text{current_} L + \left(\frac{\text{current_} U - \text{current_} L + 1 \times \text{cumulative_count}(\text{symbol})}{\text{Total_count}} - 1\right)
$$


- **E1 during encoding**:
  - Let $L = 0 x_{m-1} x_{m-2} x_{m-3} \ldots x_1$ and $U = 0 y_{m-1} y_{m-2} y_{m-3} \ldots y_1$:
    - Transmit/store zero.
    - Transmit/store a sequence of ones equal to `number_of_useage_of_E3`.
    - Set `number_of_useage_of_E3` to zero.
    - Shift out the zero in the MSB of $L$ and shift in a zero to its LSB.
    - Shift out the zero in the MSB of $U$ and shift in a one to its LSB.

- **E2 during encoding**:
  - Let $L = 1 x_{m-1} x_{m-2} x_{m-3} \ldots x_1$ and $U = 1 y_{m-1} y_{m-2} y_{m-3} \ldots y_1$:
    - Transmit/store one.
    - Transmit/store a sequence of zeros equal to `number_of_useage_of_E3`.
    - Set `number_of_useage_of_E3` to zero.
    - Shift out the one in the MSB of $L$ and shift in a zero to its LSB.
    - Shift out the one in the MSB of $U$ and shift in a one to its LSB.

- **E3 during encoding**:
  - Let $L = 0 1 x_{m-2} x_{m-3} \ldots x_1$ and $U = 1 0 y_{m-2} y_{m-3} \ldots y_1$:
    - If the 2nd MSB of $L$ is one:
      - Flip the 2nd MSB of $L$ from one to zero.
      - Shift out the zero in the MSB of $L$ and shift in a zero to its LSB.
    - If the 2nd MSB of $U$ is zero:
      - Flip the 2nd MSB of $U$ from zero to one.
      - Shift out the one in the MSB of $U$ and shift in a one to its LSB.
    - Increment the `number_of_useage_of_E3` by 1.


The decoded symbol is k, where k is the smallest value that satisfy the following condition:


$
while \left( \left\lfloor \frac{(tag - currentL + 1) \times TotalCount - 1}{currentU - currentL + 1} \right\rfloor \geq cumulativeCount(k) \right)
$



**E1 during decoding**:
  - Let $L = 0 x_{m-1} x_{m-2} x_{m-3} \ldots x_1$ and $U = 0 y_{m-1} y_{m-2} y_{m-3} \ldots y_1$:
    - Shift out the zero in the MSB of $L$ and shift in a zero to its LSB.
    - Shift out the zero in the MSB of $U$ and shift in a one to its LSB.
    - Shift out the zero in the MSB of the tag and read the next bit from the received bit stream into the tag’s LSB.

**E2 during decoding**:
  - Let $L = 1 x_{m-1} x_{m-2} x_{m-3} \ldots x_1$ and $U = 1 y_{m-1} y_{m-2} y_{m-3} \ldots y_1$:
    - Shift out the one in the MSB of $L$ and shift in a zero to its LSB.
    - Shift out the one in the MSB of $U$ and shift in a one to its LSB.
    - Shift out the one in the MSB of the tag and read the next bit from the received bit stream into the tag’s LSB.

**E3 during decoding**:
  - Let $L = 0 1 x_{m-2} x_{m-3} \ldots x_1$ and $U = 1 0 y_{m-2} y_{m-3} \ldots y_1$:
    - If the 2nd MSB is one:
      - Flip the 2nd MSB of $L$ from one to zero.
      - Shift out the zero in the MSB of $L$ and shift in a zero to its LSB.
    - If the 2nd MSB is zero:
      - Flip the 2nd MSB of $U$ from zero to one.
      - Shift out the one in the MSB of $U$ and shift in a one to its LSB.
    - Flip the 2nd MSB of the tag.
    - Shift out the MSB of the tag and read the next bit from the received bit stream into the tag’s LSB.



## Integer Implementation (Encoding)

- **Initialize**:
  - `current_L` and `current_U`
  - `number_of_useage_of_E3` to zero

- **Encoding Process**:
  - **While** there is a symbol to be encoded:
    - Get a symbol.
    - Calculate `new_L` and `new_U`.

    - **While E1, E2, or E3 condition holds**:
      - **If E1 or E2 condition holds** (i.e., the MSB of `new_L` and `new_U` are the same and equal to `b`):
        - Shift `new_L` to the left by 1 bit and shift in a zero to its LSB.
        - Shift `new_U` to the left by 1 bit and shift in a one to its LSB.
        - Transmit/store `b`.

        - **While** (`number_of_useage_of_E3` > 0):
          - Transmit/store complement of `b`.
          - Decrement `number_of_useage_of_E3`.

      - **If E3 condition holds**:
        - Shift `new_L` to the left by 1 bit and shift in a zero to its LSB.
        - Shift `new_U` to the left by 1 bit and shift in a one to its LSB.
        - Complement the new MSB of `new_L` and `new_U`.
        - Increment `number_of_useage_of_E3`.

    - Set `current_L` to `new_L`.
    - Set `current_U` to `new_U`.

    - Transmit/store the MSB of `current_L` (assume that it is equal to `c`).
    - Shift `current_L` to the left by 1 bit and shift in a zero to its LSB.

    - **While** (`number_of_useage_of_E3` > 0):
      - Transmit/store complement of `c`.
      - Decrement `number_of_useage_of_E3`.

    - Transmit/store the `current_L`.


## Integer Implementation (Decoding)

- **Initialization**:
  - Initialize `current_L` and `current_U`.
  - Read the first `m` bits of the received bitstream into `tag`.

- **Decoding Process**:
  - **While** there is a symbol to be decoded:
    - Decode a symbol.
    - Calculate `new_L` and `new_U`.

    - **While E1, E2, or E3 condition holds**:
      - **If E1 or E2 condition holds** (i.e., the MSB of `new_L` and `new_U` are the same and equal to `b`):
        - Shift `new_L` to the left by 1 bit and shift in a zero to its LSB.
        - Shift `new_U` to the left by 1 bit and shift in a one to its LSB.
        - Shift `tag` to the left by 1 bit and read the next bit from the received bit stream into the LSB of `tag`.

      - **If E3 condition holds**:
        - Shift `new_L` to the left by 1 bit and shift in a zero to its LSB.
        - Shift `new_U` to the left by 1 bit and shift in a one to its LSB.
        - Complement the new MSB of `new_L`, `new_U`, and `tag`.
        - Flip the 2nd MSB of the `tag`.
        - Shift `tag` to the left by 1 bit and read the next bit from the received bit stream into the LSB of `tag`.

    - Set `current_L` to `new_L`.
    - Set `current_U` to `new_U`.

## Arithmetic Encoding vs Huffman Encoding

- **Arithmetic Encoding**:
  - Arithmetic encoding is especially useful when dealing with:
    - Small alphabets, such as binary.
    - Alphabets with highly skewed probabilities.
  - In arithmetic encoding, there is no need to build the entire codebook to encode a message.
  - It is much easier to make the arithmetic encoder becomes adaptive to changed input statistics than that in Huffman encoder.
    - There is no need to generate/preserve a tree. Consequently, it is easy to separate the modeling procedure from the encoding procedure.
