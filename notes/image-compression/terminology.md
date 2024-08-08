---
order: 2000
layout: default
toc: true
---

# Digital Image Fundamentals


## What Is an Image?
- An **image** is a representation of the visual information in a given object or scene.
- Discusses the dimension of images including:
  - Two-dimensional image
  - Three-dimensional image

**Composition of Images**
- Images are made up of discrete units known as **picture elements (pixels)**.
- Each pixel occupies a small rectangular region and displays one color.
- Pixels are arranged in a two-dimensional array to form the complete image.

**Image Compositions**
- Adjusting the color of individual pixels constructs images.
- Explains the count of pixels and the number of possible images based on pixel count and color variability.

**Image Formats**
 Bitmap Format
- Bitmap images are displayed as a two-dimensional array, with each array element representing a single color.
- Discusses the drawbacks and advantages of bitmap images including size dependency and quality.

 **Vector Format**
- Vector format uses a series of drawing commands to represent images.
- Suitable for editing and scaling but not ideal for reproducing photographs.

Examples of Vector Format
- Provided Postscript commands to demonstrate vector image construction.

**Digitization**
- Discusses the process of converting analog signals to digital form, utilizing devices like scanners and image grabbers.

**Resolution Versus Density**
- Defines **resolution** as the detail measure in pixels and **density** as the detail per unit surface.
- Examples illustrating the impact of changing density on the appearance of images.

**Pixel Depth and Bit Plane**
- **Pixel depth** determines the number of bits used per pixel, affecting the color depth.
- **Bit plane** represents a two-dimensional array of bits, contributing to the overall depth of a bitmap image.

**Display Devices**
 Computer Monitors
- Typically about 100 pixels per inch, with each pixel corresponding to a memory location controlled by the monitor's controller.

 **Computer Printers**
- Higher pixel density compared to monitors, capable of 600, 1200, or more pixels per inch.

**Frame and Animation**
- Definition of a frame and the concept of animation through rapid sequence display.
- Calculation of data size for video animations based on frame size and playback speed.

**Color Components in Images**
- Categorizes images into:
  - Binary (black/white)
  - Gray (shades of gray)
  - Color (multiple colors)


## How Do We See Things?
- Objects are seen when visible light is reflected from them. Without light, sight is not possible.
- When white light shines on a green object, most wavelengths are absorbed except for the green light, which is reflected.

**Image Acquisition**
- **Image Acquisition** is akin to how we perceive scenes, involving illumination of the scene by an energy source and capturing reflected or transmitted energy using sensors.

**Digital Sensors and Digitization**
- Digital sensors return a discrete set of energy levels.
- **Digitization** (also known as quantization) converts continuous analog signals into a digital representation, resulting in numerical values rather than colors.

 **Displaying Digital Images**
- Image viewers convert numerical values back into colors, noting that a digital image is always an approximation of a real-world scene.

 **Acquiring Color Images**
- Color images are acquired using three filters sensitive to red, green, and blue, and three sensors measure the intensity output from each filter. This results in three monochrome images, where each image's intensity is proportional to one of the filters' responses.

 **Electromagnetic Waves and Image Modalities**
- The energy source for human vision is visible light. Various image modalities are based on the wavelength of the electromagnetic waves used, requiring specific sensors to record and quantize the reflected energy.

 **Medical Imaging Modalities**
- Different modalities like X-ray, Angiography, Video Fluoroscopy, CT, MRI, Ultrasound, and Nuclear Medicine are used based on the need to visualize specific aspects of the human body.

## Color Models
- Numerous methods exist to numerically represent colors through different color models, designed to optimize display device characteristics.

 **RGB Color Model**
- **RGB Color Model** is commonly used where colors are created by combining red, green, and blue light. In a 24-bit RGB model, (0, 0, 0) represents black and (255, 255, 255) represents white.
- Explains the total number of colors possible by dividing each of the main three axes into 256 quantization levels.

 **YCbCr Color Model**
- The **YCbCr Color Model** is used primarily in video systems. Y represents the luminance component, while Cb and Cr represent the chrominance components, specifying the blue and red content of the image respectively.
- Transformations between RGB and YCbCr involve linear algebra to shift from RGB values to YCbCr and back.

 **CMYK Color Model**
- **CMYK** is a subtractive color model used in printing. The model uses cyan, magenta, yellow, and key (black) inks. This model is efficient for printing as it reduces ink usage and drying times compared to mixing CMY to achieve black.

 **HSI Color Model**
- The **HSI (Hue, Saturation, Intensity) Color Model** offers a cylindrical-coordinate representation of RGB colors, useful for image processing applications involving color manipulation.
- Conversion between RGB and HSI involves calculating hue as an angle, saturation as a radius, and intensity as the vertical axis.

**Grayscale versus Color**
- Explains the conversion of color images to grayscale by averaging the RGB components or using the luminance component (Y) from the YCbCr model. Grayscale devices display images in shades of gray, achieved when R, G, and B values are equal.

**True-Color versus Color-Palette Systems**
- True-color systems use 24 bits per pixel to match human vision under normal conditions. Color-palette systems, using a look-up table of colors, reduce memory usage by storing images as indices from this table.

**Byte Ordering and Bit Ordering**
- Discusses the storage of integers in bitmap files and the compatibility issues among different processors based on byte ordering. Big-endian systems store the most significant byte first, while little-endian systems do the opposite.


## PBM, PGM, and PPM
- **PBM** (Portable Bit Map), **PGM** (Portable Gray Map), and **PPM** (Portable Pixel Map) are simple bitmap image formats.
- Images consist of an ASCII text header followed by image data.

 **Image Data and Headers**
- Headers in these formats:
  - Start with a magic value (file identifier) like `P1` for PBM ASCII mode or `P4` for PBM raw mode.
  - Include image dimensions.
  - May contain comments that start with `#` and are ignored by image processing software.
- Image data:
  - Begins right after the header.
  - Can be in ASCII with values separated by whitespace or in a raw format with values stored continuously without whitespace.

**PBM Specifics**
- **PBM** format:
  - `1` represents black and `0` represents white.
  - Only binary values are acceptable.
- Example of PBM ASCII format:


P1 8 8 \\
11111111 \\
10000001 \\
10000001 \\
...


 **PGM and PPM Headers**
- **PGM** headers also include a maximum gray value, affecting the bytes per pixel in raw format:
- `P2` for ASCII and `P5` for raw pixel values.
- **PPM** extends this concept to color, with headers specifying maximum color values for red, green, and blue:
- `P3` for ASCII and `P6` for raw pixel values.

 **PNM (Portable aNy Map)**
- Sometimes, PBM, PGM, and PPM are collectively referred to as **PNM**.
- Conversion tools:
- `pnmtops` for converting to Postscript.
- `pnmtotiff` for converting to TIFF format.

 **Viewing PNM Files**
- Recommendations for viewing PNM files on various operating systems:
- **Linux**: xv viewer
- **Windows**: Irfan View
- **Mac**: Toy Viewer

- **Example PBM Image**:

P1 8 8 \\
11111111 \\
10000001 \\
10000001 \\
11111111 \\
...

- **Note**: In raw PBM format (`P4`), pixels are stored as bits (8 pixels per byte) and must not cross byte boundaries.

 **Raw Data Handling**
- In raw formats like `P4`, `P5`, and `P6`, the image data starts immediately after the header without any spaces or comments, requiring careful handling of byte and bit ordering, especially considering big-endian and little-endian differences.


## Introduction to Image Compression

 **What is Compression?**
- **Compression** in the digital sense involves representing information in fewer bytes, not physically making objects smaller.
- The goal is to reduce the digital representation's bit rate while maintaining acceptable or near-original quality.

 **Why Compression?**
- **Necessity from the 1950s**: As digital imaging evolved, the need to efficiently store and transmit large image files became apparent.
- **Example**: A 12-megapixel color image can take up 36 MB of storage and 19.2 seconds to upload with a 15 Mbit/s connection.
- **Applications**: From digital TV and video conferencing to medical imaging and remote sensing, compression is crucial for managing large data volumes.

 **Data vs. Information**
- **Distinction**: Data is raw material; information is the final product.
- **Efficiency**: Different amounts of data can represent the same information; reducing data redundancy improves efficiency.

 **Types of Redundancy**
1. **Psychovisual Redundancy**: Not all visual information has equal importance to the human eye, allowing some data to be discarded without significant loss of perceived quality.
2. **Encoding Redundancy**: Refers to the inefficiencies in using code symbols to represent information, where optimizing the coding can lead to smaller file sizes.
3. **Inter-pixel Redundancy**: Leveraging the correlations between adjacent pixels can significantly reduce the amount of data needed to represent an image.

 **Psychovisual Redundancy**
- **Human Visual System (HVS)**: More sensitive to certain visual information than others, allowing less critical data to be compressed or removed.
- **Reduction Techniques**: By quantizing and removing less important data, we can compress images without greatly affecting visual quality.

 **Lossless vs. Lossy Compression**
- **Lossless Compression**: No data is lost during compression; the decompressed image is identical to the original.
- **Lossy Compression**: Some data is discarded, which means the decompressed image may not be identical to the original but is often sufficient for the intended use.

 **Fidelity Criteria**
- **Objective Criteria**: Measures like Mean Absolute Error (MAE) and Peak Signal-to-Noise Ratio (PSNR) provide quantifiable metrics for assessing compression impact.
- **Subjective Criteria**: Human assessment of image quality, which can vary based on individual perceptions and conditions.

**Image Compression Techniques**
- **Transformation**: Converts image data into a format that makes it easier to compress.
- **Quantization**: Reduces the number of bits needed to store the transformed data by approximating its values.
- **Encoding**: Applies a coding scheme to the quantized values to reduce the file size.

**Decompression**
- **Reversal Process**: Decompression involves reversing the compression steps to reconstruct the original image data.

