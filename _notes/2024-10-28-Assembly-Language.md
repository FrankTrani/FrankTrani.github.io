---
layout: post
title: " Assembly Language"
date: 2024-10-28
categories: Computer-Science Computer-Architecture
---

This post introduces assembly language fundamentals and the Harvey Mudd Miniature Machine (HMMM), covering essential commands and an example program. It offers a foundation in low-level programming and insights into how CPUs process instructions directly.

---

## What is Assembly Language?

**Assembly language** is a low-level programming language that allows programmers to write instructions directly for the CPU. Unlike high-level languages, which must be translated into machine code through a compiler, assembly language goes through an **assembler** to convert instructions into binary (1’s and 0’s) that the CPU can execute. This process makes assembly language one step above machine language and provides a way to interact directly with the hardware.

### Overview of the Harvey Mudd Miniature Machine (HMMM)

The **Harvey Mudd Miniature Machine (HMMM)** is a simplified assembly language environment used for learning purposes. The HMMM includes basic instructions for performing arithmetic, control flow, and data manipulation, making it ideal for understanding fundamental assembly concepts.

In HMMM assembly, each instruction directly corresponds to a low-level operation, making the language fast but limited in scope. Below are some of the basic commands in HMMM and their functions.

---

## Basic HMMM Assembly Commands

### Control Instructions

- **`halt`**: Stops the program.
- **`nop`**: No operation. It performs no action and is used to fill or align code.

### Arithmetic Instructions

- **`add r2 r2 r2`**: Adds the contents of register `r2` to itself. Result: `reg2 = reg2 + reg2`.
- **`sub r2 r1 r4`**: Subtracts the contents of register `r4` from `r1` and stores the result in `r2`. Result: `reg2 = reg1 - reg4`.
- **`mul r7 r6 r2`**: Multiplies the contents of `r6` and `r2`, storing the result in `r7`. Result: `reg7 = reg6 * reg2`.
- **`div r1 r1 r1`**: Divides the contents of `r1` by itself, performing integer division with no remainder. Result: `reg1 = reg1 / reg1`.

### Immediate Value Instructions

These instructions work with immediate values, meaning values are directly specified in the instruction.

- **`setn r1 42`**: Sets the value of `r1` to 42. You can use values from -128 to 127. Result: `reg1 = 42`.
- **`addn r1 -1`**: Subtracts 1 from `r1` by adding a negative immediate value. Result: `reg1 = reg1 - 1`.

### Data Movement Instructions

- **`copy r1 r2`**: Copies the contents of `r1` into `r2`. Result: `reg2 = reg1`.
- **`read r10`**: Reads an input from the keyboard and stores it in `r10`.
- **`write r1`**: Writes (prints) the value stored in `r1`.

### Jump and Conditional Instructions

HMMM assembly includes several jump commands, allowing control to move to different parts of the code.

- **`jumpn 42`**: Jumps to line 42 in the program.
- **`jeqzn r1 n`**: Jumps to line `n` if the value in `r1` is zero (`r1 == 0`).
- **`jgtzn r1 n`**: Jumps to line `n` if `r1` is greater than zero (`r1 > 0`).
- **`jltzn r1 n`**: Jumps to line `n` if `r1` is less than zero (`r1 < 0`).
- **`jnezn r1 n`**: Jumps to line `n` if `r1` is not zero (`r1 != 0`).
- **`jumpr r1`**: Jumps to the line number stored in `r1`.

---

## Example Program

Below is an example program in HMMM assembly language that takes two numbers as input, multiplies them, and outputs the result:

```assembly
00 read r1          # Read first number into r1
01 read r2          # Read second number into r2
02 mul r3 r1 r2     # Multiply r1 and r2, store result in r3
03 write r3         # Output the result in r3
04 halt             # Stop the program
```

### Explanation of the Program

1. **`read r1`**: The program starts by reading an integer from the user and storing it in register `r1`.
2. **`read r2`**: It then reads a second integer and stores it in register `r2`.
3. **`mul r3 r1 r2`**: Multiplies the values in `r1` and `r2`, storing the result in `r3`.
4. **`write r3`**: Outputs the contents of `r3`, which is the product of `r1` and `r2`.
5. **`halt`**: Ends the program.

---

## Understanding Registers and Memory in HMMM

Registers are small, fast storage locations within the CPU, and they are the primary way to store data temporarily during program execution. In HMMM, registers like `r1`, `r2`, and `r3` can store and manipulate data.

Memory in assembly is limited to the values stored in registers, as assembly doesn’t typically manage large data sets or complex data types. This design makes assembly highly efficient for specific low-level tasks but more challenging to use for large-scale applications.

---

## Further Reading and Reference

The Harvey Mudd Miniature Machine (HMMM) has a full set of commands available online for further exploration. To view the complete list of instructions and their uses, visit [HMMM Documentation](https://www.cs.hmc.edu/~cs5grad/cs5/hmmm/documentation/documentation.html).

Understanding assembly language opens up insights into how high-level programming languages translate into machine operations, offering a unique perspective on computer architecture and program execution.

---
