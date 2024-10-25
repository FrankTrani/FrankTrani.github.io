---
layout: post
title: "Run-Length Encoding in Python: CS115 Homework 6"
date: 2024-10-24
categories: CS115 Python Run-Length-Encoding
author: Frank Trani
---

In this post, I'll walk through my solution for **CS115 Homework 6** on run-length encoding (RLE). The task is to implement compression and decompression functions for binary images, represented as strings, using RLE. The challenge is to avoid loops, recursion, or any imports, making it an interesting problem of pure recursive programming.

Let’s dive into the details of the implementation.

---

## Problem Breakdown

### What is Run-Length Encoding (RLE)?

**Run-Length Encoding (RLE)** is a simple form of data compression where consecutive runs of the same data (e.g., `1111` or `000`) are replaced by a single value representing the length of the run. This is particularly effective when we have repetitive sequences of the same bit in a binary string.

### Constraints

1. Each run can have a maximum length determined by `COMPRESSED_BLOCK_SIZE`, which is set to 5 in the problem. This means each run can be represented by up to `2^5 - 1 = 31` consecutive bits.
2. We are restricted to recursion, meaning no loops are allowed in the solution.
3. We must write both compression and decompression functions for this format.

---

## Solution

### Constants

```python
COMPRESSED_BLOCK_SIZE = 5
MAX_RUN_LENGTH = 2**COMPRESSED_BLOCK_SIZE - 1
```

- **COMPRESSED_BLOCK_SIZE** is set to 5, meaning we have 5 bits to represent the run length in binary.
- **MAX_RUN_LENGTH** calculates the maximum run length, which is `31` in this case.

These constants ensure that we never exceed the block size limits when encoding or decoding.

### Compression Function: `compress(S)`

```python
def compress(S):
    """
    Compresses a 64-bit binary image string using run-length encoding.
    """
    def compress_recursive(S, current_bit):
        if not S:
            return ""
        else:
            def count_run(S, current_bit, count):
                if count == MAX_RUN_LENGTH or not S or S[0] != current_bit:
                    return count, S
                else:
                    return count_run(S[1:], current_bit, count + 1)

            count, rest_S = count_run(S, current_bit, 0)
            binary_count = format(count, "0" + str(COMPRESSED_BLOCK_SIZE) + "b")
            next_bit = "1" if current_bit == "0" else "0"
            return binary_count + compress_recursive(rest_S, next_bit)

    if not S:
        return ""

    if S[0] == "0":
        initial_bit = "0"
        return compress_recursive(S, initial_bit)
    else:
        zero_count = format(0, "0" + str(COMPRESSED_BLOCK_SIZE) + "b")
        return zero_count + compress_recursive(S, "1")
```

#### Explanation:

1. **compress_recursive(S, current_bit)**: This helper function compresses the binary string recursively by:

   - Counting how many consecutive bits are the same as the current bit.
   - Storing this count as a binary string of length `COMPRESSED_BLOCK_SIZE`.
   - Recursively processing the rest of the string with the opposite bit.

2. **count_run(S, current_bit, count)**: Another recursive helper to count consecutive bits until either the run ends or the maximum run length is reached.

3. The function begins by checking if the string starts with `0` or `1` and ensures we account for any initial runs of zeros.

### Decompression Function: `uncompress(C)`

```python
def uncompress(C):
    """
    Uncompresses a compressed binary string back to the original 64-bit image.
    """
    def uncompress_recursive(C, current_bit):
        if not C:
            return ""
        else:
            block = C[:COMPRESSED_BLOCK_SIZE]
            rest_C = C[COMPRESSED_BLOCK_SIZE:]
            count = int(block, 2)
            bits = current_bit * count
            next_bit = "1" if current_bit == "0" else "0"
            return bits + uncompress_recursive(rest_C, next_bit)

    return uncompress_recursive(C, "0")
```

#### Explanation:

1. **uncompress_recursive(C, current_bit)**: This helper function works recursively by:

   - Reading a block of length `COMPRESSED_BLOCK_SIZE` from the compressed string.
   - Converting this block from binary to decimal to determine the run length.
   - Reconstructing the original bits by repeating the current bit for the decoded run length.
   - Recursively processing the rest of the compressed string, alternating between `0` and `1`.

2. The function starts the decompression with the assumption that the first run is zeros (`"0"`).

---

### Conclusion

This solution for compressing and decompressing binary images using **run-length encoding** is efficient and concise, while also adhering to the constraints of avoiding loops or imports. By leveraging recursion, we were able to solve the problem cleanly.

Feel free to experiment with the code and tweak the **COMPRESSED_BLOCK_SIZE** for different results. This is a great example of how recursion and binary arithmetic work together in data compression tasks.

Let me know if you have any questions or suggestions!

---
