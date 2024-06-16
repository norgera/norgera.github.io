---
order: 2004
layout: default
toc: true
---
# BWT & MTF Coding


### The Burrows-Wheeler Transform (BWT)

  - The Burrows-Wheeler Transform (BWT) algorithm utilizes the context of the symbol being encoded to achieve lossless compression, but in a very different way.
  - The transform itself was initially developed by David Wheeler in 1983.
  - Yet, the BWT compression algorithm saw the light in 1994 by Michael Burrows and David Wheeler.
  - Currently, BWT is used in data compression techniques such as bzip2.
  - Unlike most of the previous algorithms that we have looked at:
    - The BWT algorithm requires the entire sequence to be available to the encoder before the encoding process takes place.
    - The BWT decoding procedure is not immediately obvious once we know the encoding procedure.

- **Algorithm Summary**:
  - Given a sequence of letters of length $N$:
    - Create $N - 1$ other sequences, where each of these $N - 1$ sequences is a cyclic shift of the original sequence; The total number of sequences is $N - 1 + 1$ (the original sequence) = $N$.
    - These $N$ sequences are sorted in lexicographic (alphabetical) order.
    - The encoder encodes the last letter in each cyclically shifted and sorted sequence (i.e., encoding a sequence of length $N$ letters).
    - The compressed file consists of two parts:
      - This sequence of Last letters, $L$.
      - The position of the original sequence in the sorted list.

#### Example Code

```python
SPECIAL_CHAR = '∆'

def print_cyclic_shifts(s: str) -> None:
    """Print all cyclic shifts of a given string."""
    n = len(s)
    for i in range(n):
        cyclic_shift = s[i:] + s[:i]
        print(f"{i} {cyclic_shift}")

def generate_cyclic_shifts(s: str) -> list[str]:
    """Generate all cyclic shifts of a given string."""
    n = len(s)
    return [s[i:] + s[:i] for i in range(n)]

def sort_cyclic_shifts_alphabetically(s: str) -> list[str]:
    """Sort cyclic shifts alphabetically, treating the special character as a space."""
    cyclic_shifts = generate_cyclic_shifts(s)
    return sorted(cyclic_shifts, key=lambda x: x.replace(SPECIAL_CHAR, ' '))

def last_chars_from_sorted_shifts(s: str) -> str:
    """Get the last characters from sorted cyclic shifts."""
    sorted_shifts = sort_cyclic_shifts_alphabetically(s)
    return ''.join(shift[-1] for shift in sorted_shifts)

def remove_repeated_chars(s: str) -> str:
    """Remove repeated characters, preserving order."""
    sorted_string = ''.join(sorted(s, key=lambda x: x.replace(SPECIAL_CHAR, ' ')))
    seen = set()
    result = [char for char in sorted_string if not (char in seen or seen.add(char))]
    return ''.join(result)

def process_string(s: str) -> None:
    """Process string by generating cyclic shifts, sorting, and performing further operations."""
    print("Cyclic Shifts:")
    print_cyclic_shifts(s)

    print("\nSorted Cyclic Shifts Alphabetically:")
    sorted_shifts = sort_cyclic_shifts_alphabetically(s)
    for i, shift in enumerate(sorted_shifts):
        print(f"{i} {shift}")

    last_chars = last_chars_from_sorted_shifts(s)
    print(f"\nL Sequence: {last_chars}")

    unique_sorted_string = remove_repeated_chars(last_chars)
    print(f"\nSymbols: {unique_sorted_string}")

# Example usage
original_string = "this∆is∆the"
process_string(original_string)
print("\n")
```

**Output**

Cyclic Shifts: \\
0 this∆is∆the \\
1 his∆is∆thet \\
2 is∆is∆theth \\
3 s∆is∆thethi \\
4 ∆is∆thethis \\
5 is∆thethis∆ \\
6 s∆thethis∆i \\
7 ∆thethis∆is \\
8 thethis∆is∆ \\
9 hethis∆is∆t \\
10 ethis∆is∆th

Sorted Cyclic Shifts Alphabetically: \\
0 ∆is∆thethis \\
1 ∆thethis∆is \\
2 ethis∆is∆th \\
3 hethis∆is∆t \\
4 his∆is∆thet \\
5 is∆is∆theth \\
6 is∆thethis∆ \\
7 s∆is∆thethi \\
8 s∆thethis∆i \\
9 thethis∆is∆ \\
10 this∆is∆the

L Sequence: sshtth∆ii∆e - (last column)

### Move-to-Front Encoding
- **Overview**:
  - A coding scheme that takes advantage of long runs of identical symbols is the Move-to-Front encoding scheme, or simply MTF (a.k.a. Global Structure Transformation, or simply GST).

- **Initial Setup**:
  - The scheme starts with an initial listing of the source alphabet, where each symbol in the alphabet is assigned a distinct number (code), for example:
    - The 1st alphabet symbol will be assigned `0`.
    - The 2nd alphabet symbol will be assigned `1`, and so on (codeword encoding).

- **Encoding Process**:
  - Once a particular symbol occurs:
    - The number (code) corresponding to its place in the list is transmitted.
    - The symbol is moved to the front of the list.

- **Efficiency in Encoding Repetitive Symbols**:
  - This way, any run of repetitive symbols will be encoded by:
    - a code for the symbol itself followed by a sequence of zeros.


```python
def move_to_front_encode(sequence, alphabet):
    # Convert the alphabet to a list for easy manipulation
    alphabet_list = list(alphabet)
    encoded_sequence = []
    
    # Encode each symbol in the sequence
    for symbol in sequence:
        index = alphabet_list.index(symbol)  # Find the index of the symbol
        encoded_sequence.append(index)  # Record the index
        alphabet_list.pop(index)  # Remove the symbol from its current position
        alphabet_list.insert(0, symbol)  # Move the symbol to the front
        print(f"After encoding '{symbol}': {alphabet_list}")  # Show the alphabet list after each shift
    
    return encoded_sequence

# Given sequence and alphabet
sequence = "this∆is∆the"
alphabet = "∆ehist"

# Encode the sequence
encoded_sequence = move_to_front_encode(sequence, alphabet)
print(f"Encoded Sequence: {encoded_sequence}\n")
```

**Output**

After encoding 't': ['t', '∆', 'e', 'h', 'i', 's'] \\
After encoding 'h': ['h', 't', '∆', 'e', 'i', 's'] \\
After encoding 'i': ['i', 'h', 't', '∆', 'e', 's'] \\
After encoding 's': ['s', 'i', 'h', 't', '∆', 'e'] \\
After encoding '∆': ['∆', 's', 'i', 'h', 't', 'e'] \\
After encoding 'i': ['i', '∆', 's', 'h', 't', 'e'] \\
After encoding 's': ['s', 'i', '∆', 'h', 't', 'e'] \\
After encoding '∆': ['∆', 's', 'i', 'h', 't', 'e'] \\
After encoding 't': ['t', '∆', 's', 'i', 'h', 'e'] \\
After encoding 'h': ['h', 't', '∆', 's', 'i', 'e'] \\
After encoding 'e': ['e', 'h', 't', '∆', 's', 'i'] \\
Encoded Sequence: [5, 3, 4, 5, 4, 2, 2, 2, 4, 4, 5]

### Move-to-Front Decoding

- **Setup**:
  - To decode a move-to-front encoded sequence, it starts with an initial listing of the source alphabet, where each symbol in the alphabet is assigned a distinct number (code). For example:
    - The 1st alphabet symbol will be assigned `0`.
    - The 2nd alphabet symbol will be assigned `1`, and so on.

- **Decoding Process**:
  - Once reading a code from the encoded sequence:
    - The symbol corresponding to this code is decoded.
    - The symbol is moved to the front of the list.


```python
def move_to_front_decode(encoded_sequence, alphabet):
    # Convert the alphabet to a list for easy manipulation
    alphabet_list = list(alphabet)
    decoded_sequence = ""
    
    # Decode each index in the encoded sequence
    for index in encoded_sequence:
        symbol = alphabet_list[index]  # Retrieve the symbol from the alphabet list
        decoded_sequence += symbol  # Append the symbol to the decoded sequence
        alphabet_list.pop(index)
        alphabet_list.insert(0, symbol)
        print(f"After decoding index {index}: {alphabet_list}")  # Show the alphabet list after each shift
    
    return decoded_sequence

# Use the previously encoded sequence and the same alphabet for decoding
encoded_sequence = [5, 3, 4, 5, 4, 2, 2, 2, 4, 4, 5]
alphabet = "∆ehist"

# Decode the sequence
decoded_sequence = move_to_front_decode(encoded_sequence, alphabet)
print(f"Decoded Sequence: {decoded_sequence}")
```

**Output:**

After decoding index 5: ['t', '∆', 'e', 'h', 'i', 's'] \\
After decoding index 3: ['h', 't', '∆', 'e', 'i', 's'] \\
After decoding index 4: ['i', 'h', 't', '∆', 'e', 's'] \\
After decoding index 5: ['s', 'i', 'h', 't', '∆', 'e'] \\
After decoding index 4: ['∆', 's', 'i', 'h', 't', 'e'] \\
After decoding index 2: ['i', '∆', 's', 'h', 't', 'e'] \\
After decoding index 2: ['s', 'i', '∆', 'h', 't', 'e'] \\
After decoding index 2: ['∆', 's', 'i', 'h', 't', 'e'] \\
After decoding index 4: ['t', '∆', 's', 'i', 'h', 'e'] \\
After decoding index 4: ['h', 't', '∆', 's', 'i', 'e'] \\
After decoding index 5: ['e', 'h', 't', '∆', 's', 'i'] \\
Decoded Sequence: this∆is∆the


### Further Processing of Move-to-Front Encoding Output

  While the resulting sequence from Move-to-Front encoding is not too impressive initially, we should expect to see a large number of `0`s if the sequence to be encoded is larger.

  - **Run-Length Encoding**:
    - The output of the Move-to-Front (also known as Global Structure Transformation) is sent to a Run-Length Encoder to efficiently encode the repetitive zeros.
  - **Codeword Encoding**:
    - The output from the Run-Length Encoder is then sent to a Codeword Encoder, such as Huffman or arithmetic encoder, for further compression.
