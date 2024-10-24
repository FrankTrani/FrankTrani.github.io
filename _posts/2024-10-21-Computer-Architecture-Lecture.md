---
layout: post
title: "Computer Architecture Lecture"
date: 2024-10-21
categories: CS115
---


In this post, we covered the foundation of modern computing, including the use of binary numbers, logic gates, and memory elements. We explored how negative numbers are represented using 1’s complement and 2’s complement, and why 2’s complement is the standard in modern systems. We also delved into the architecture of different machines, ranging from personal computers to supercomputers. Understanding these foundational concepts is essential for understanding how computers work at the most basic level, and how these principles are applied in modern computer systems.

---

## Introduction to Digital Logic, Binary Systems, and Computer Architecture

In digital systems, everything comes down to 1s and 0s. Computers rely on **binary logic** to process data, make decisions, and perform calculations. At the heart of it all are **logic gates**, **memory elements**, and the architecture that governs how computers handle data, execute instructions, and communicate with other components. In this post, we'll explore binary numbers, machine architecture, the differences between types of computing systems, and the evolution of binary number representation in computers.

---

## Why Base 2 (Binary) Became the Foundation of Computing

The **binary system (base-2)**, which uses only the digits 0 and 1, became the standard in computing for several reasons rooted in both practicality and simplicity.

### 1. Simplicity of Electrical Circuits

The binary system is particularly well-suited for electronic circuits because it only requires two states: **on** and **off**. These states are easily represented with electrical signals:

- **0** can represent a low voltage or off state.
- **1** can represent a high voltage or on state.

This makes binary simple to implement in hardware using transistors, which act as switches. Early computers used vacuum tubes to represent binary states, but these were later replaced by transistors, which are smaller, faster, and more reliable.

### 2. Binary Arithmetic

The binary system also simplifies arithmetic operations, especially when implemented in hardware. Addition, subtraction, and multiplication are easily performed with binary numbers using simple logic gates like AND, OR, and XOR. This efficiency in arithmetic operations is crucial for computers, which need to perform millions of calculations per second.

### 3. Historical Origins

The use of the binary system in computing can be traced back to **Gottfried Wilhelm Leibniz**, a German mathematician and philosopher. In 1703, he proposed the use of binary numbers in arithmetic as a universal language that could represent any number or idea. However, it wasn’t until the 20th century, with the development of electronic computers, that the binary system became a practical foundation for computing.

---

## Binary Arithmetic and Negative Numbers

As computers evolved, it became necessary to not only represent positive integers but also **negative numbers**. In binary, representing positive numbers is straightforward, but negative numbers posed a challenge. Early computers experimented with several methods to handle negative numbers, including **sign-magnitude representation**, **1’s complement**, and **2’s complement**.

### Sign-Magnitude Representation

In **sign-magnitude representation**, the leftmost bit (most significant bit) represents the **sign** of the number, and the remaining bits represent the **magnitude** (absolute value) of the number.

- **0** in the leftmost bit indicates a positive number.
- **1** in the leftmost bit indicates a negative number.

For example, in an 8-bit system:

- **+5** would be represented as `00000101`
- **-5** would be represented as `10000101`

While this method is intuitive, it has two major problems:

1. **Two Representations of Zero**: There is a **positive zero** (`00000000`) and a **negative zero** (`10000000`), which creates ambiguity.
2. **Complex Arithmetic**: Performing arithmetic with sign-magnitude numbers is inefficient because the sign bit has to be handled separately from the magnitude, complicating hardware design.

To address these issues, two better methods were developed: **1's complement** and **2's complement**.

---

## 1’s Complement Representation

**1’s complement** is an early method for representing negative numbers in binary. In this system, negative numbers are represented by inverting (or complementing) all the bits of their positive counterpart. For example:

- To represent **-5** in 1's complement, first write the binary representation of **+5**: `00000101`
- Then, invert all the bits: `11111010` (this is -5 in 1's complement).

### Properties of 1's Complement:

- **Inversion**: Negative numbers are formed by flipping the bits of the positive number.
- **Two Representations of Zero**: Like sign-magnitude, 1’s complement has two representations of zero:
  - Positive zero: `00000000`
  - Negative zero: `11111111`

#### Addition and Subtraction in 1's Complement

1’s complement arithmetic has some complications when it comes to addition. If the result of adding two numbers produces an overflow (a carry out of the leftmost bit), you must **add the overflow bit back** to the result.

Example:


  0011  (3 in decimal)
+ 1100  (-3 in decimal, 1's complement form)
--------
  1111  (0 in decimal, after adding overflow bit)


### Limitations of 1's Complement:

- **Ambiguous Zero**: Having both positive and negative zeros creates ambiguity.
- **Complex Arithmetic**: The need to handle carry-over bits in addition makes the hardware implementation of arithmetic more complex.

Because of these limitations, 1’s complement was largely replaced by **2’s complement**, which is still used in modern computers today.

---

## 2’s Complement Representation

**2’s complement** is the most widely used method for representing signed integers in modern computers. It solves the problems of sign-magnitude and 1’s complement by offering a more efficient and unambiguous way to represent negative numbers.

### How 2's Complement Works:

To find the 2’s complement of a number:

1. **Invert all the bits** (same as 1's complement).
2. **Add 1** to the result.

For example, to represent **-5** in 2’s complement:

1. Start with the binary representation of **+5**: `00000101`
2. Invert the bits: `11111010` (this is the 1's complement of 5)
3. Add 1 to the result: `11111011`

So, **-5** in 2’s complement is `11111011`.

### Advantages of 2’s Complement:

1. **Single Representation of Zero**: Unlike 1’s complement, 2’s complement has only one representation of zero (`00000000`), which simplifies arithmetic.

2. **Simple Arithmetic**: Adding and subtracting numbers in 2’s complement is simpler and faster for computers. There’s no need to handle carry bits separately, as the overflow is discarded naturally in binary addition.

3. **Automatic Negation**: Taking the 2’s complement of a number automatically gives you its negative counterpart, making negation straightforward.

#### Example of 2's Complement Arithmetic:

```
  00000110  (6 in decimal)
+ 11111101  (-3 in decimal, 2's complement form)
------------
  00000011  (3 in decimal)
```

As you can see, 2’s complement handles negative numbers seamlessly during arithmetic operations, making it ideal for hardware implementation.

---

## Why 2’s Complement is Used in Modern Systems

**2’s complement** became the standard for representing signed integers in computers for several reasons:

- **Simplified Arithmetic**: With 2’s complement, addition and subtraction can be performed using the same binary addition circuit, which simplifies hardware design.
- **Efficient Use of Bits**: It allows for a wide range of positive and negative numbers to be represented using a fixed number of bits.
- **No Ambiguous Zero**: Unlike sign-magnitude and 1’s complement, 2’s complement has only one representation for zero, which eliminates ambiguity and simplifies the design of arithmetic units.

---

## Logic Gates Overview

### 1. NOT Gate

The **NOT gate** is the simplest type of logic gate. It takes one input and produces an inverted output. If the input is 1, the output will be 0, and vice versa.

#### Truth Table:

| Input (x) | Output ($\neg$ x) |
|-----------|-------------------|
| 0         | 1                 |
| 1         | 0                 |

---

### 2. AND Gate

An **AND gate** produces an output of 1 only when both of its inputs are 1.

#### Truth Table:

| x | y | AND (x * y) |
|---|---|-------------|
| 0 | 0 | 0           |
| 0 | 1 | 0           |
| 1 | 0 | 0           |
| 1 | 1 | 1           |

---

### 3. OR Gate

The **OR gate** produces an output of 1 if at least one of its inputs is 1. If both inputs are 0, the output is 0.

#### Truth Table:

| x | y | OR (x + y) |
|---|---|------------|
| 0 | 0 | 0          |
| 0 | 1 | 1          |
| 1 | 0 | 1          |
| 1 | 1 | 1          |

---

### 4. XOR Gate (Exclusive OR)

The **XOR gate** produces an output of 1 if its inputs are different. If both inputs are the same, the output is 0.

#### Truth Table:

| x | y | XOR (x ⊕ y) |
|---|---|-------------|
| 0 | 0 | 0           |
| 0 | 1 | 1           |
| 1 | 0 | 1           |
| 1 | 1 | 0           |

---

## De Morgan's Laws: Simplifying Logic

De Morgan’s laws are important rules in Boolean algebra that show how the NOT operation interacts with AND and OR gates. These laws are crucial for simplifying logic expressions and designing digital circuits.

### 1. First Law

The negation of an OR operation is equivalent to the AND of the negations:

$$ \neg (x + y) = \neg x \times \neg y $$

### 2. Second Law

The negation of an AND operation is equivalent to the OR of the negations:

$$ \neg (x \times y) = \neg x + \neg y $$

---

## Advanced Logic Gates

### 1. NAND Gate

A **NAND gate** is the opposite of an AND gate. It produces a low output (0) only when both of its inputs are high (1). Otherwise, it outputs 1.

#### Truth Table:

| x | y | NAND (x, y) |
|---|---|-------------|
| 0 | 0 | 1           |
| 0 | 1 | 1           |
| 1 | 0 | 1           |
| 1 | 1 | 0           |

---

### 2. NOR Gate

A **NOR gate** is the opposite of an OR gate. It produces a high output (1) only when both inputs are low (0).

#### Truth Table:

| x | y | NOR (x, y) |
|---|---|------------|
| 0 | 0 | 1          |
| 0 | 1 | 0          |
| 1 | 0 | 0          |
| 1 | 1 | 0          |

---

## Memory Elements: Latches and Flip-Flops

### 1. SR Latch (Set-Reset Latch)

An **SR latch** is a simple memory device built using NAND or NOR gates. It has two inputs: Set (S) and Reset (R), and two outputs: Q and Q-bar ($\neg Q$). The SR latch stores one bit of data.

#### Truth Table for NAND-based SR Latch:

| S | R | Q (next state) | Description       |
|---|---|----------------|-------------------|
| 0 | 0 | Invalid        | Undefined state   |
| 0 | 1 | 0              | Reset state       |
| 1 | 0 | 1              | Set state         |
| 1 | 1 | Q (previous)   | Hold previous state |

---

### 2. D Latch (Data Latch)

A **D latch** is a modified SR latch with only one input, called **D (Data)**, and a clock signal **C**. It ensures that the latch does not enter an invalid state.

#### Truth Table for D Latch:

| C (Clock) | D (Data) | Q (Output) | $\neg Q$ (Inverted Output) |
|-----------|----------|------------|----------------------------|
| 0         | X        | Q (previous) | $\neg Q$ (previous)      |
| 1         | 0        | 0          | 1                          |
| 1         | 1        | 1          | 0                          |

---

### 3. Flip-Flops

A **flip-flop** is similar to a latch but is edge-triggered, meaning it changes state only at the rising or falling edge of a clock signal. Flip-flops are essential in sequential circuits, where data needs to be synchronized with a clock.

---

## Computer Architecture: How Machines Differ

**Computer architecture** refers to the design and structure of a computer system. Different architectures handle data, instructions, and memory in various ways. Let’s explore some important types of architectures and their characteristics.

### 1. Von Neumann Architecture

The **Von Neumann architecture**, named after John von Neumann, is the most widely used architecture in modern computers. It consists of:

- **Central Processing Unit (CPU)**: The brain of the computer that performs calculations and executes instructions.
- **Memory**: Stores data and instructions.
- **Input/Output (I/O)**: Handles communication between the computer and the external world.
- **Control Unit**: Directs the operation of the processor.
- **Data Bus**: Transfers data between the CPU, memory, and I/O devices.

### 2. Harvard Architecture

In contrast, the **Harvard architecture** separates memory for data and instructions. This allows the CPU to access data and instructions simultaneously, improving performance.

### 3. RISC vs. CISC Architectures

#### RISC (Reduced Instruction Set Computer)

- **Simple instructions** that execute in a single clock cycle.
- **Fewer instructions**, but optimized for performance.
- Commonly used in modern processors like ARM, which is widely used in mobile devices and embedded systems.

#### CISC (Complex Instruction Set Computer)

- **More complex instructions** that may take multiple clock cycles to execute.
- **More powerful instructions**, designed to perform complex operations in fewer lines of assembly code.
- **Intel x86** processors are an example of CISC architecture, used in most desktop and laptop computers.

### 4. Multicore Processors

Modern computers often feature **multicore processors**, where multiple CPU cores are integrated into a single chip. Each core can handle its own thread, allowing the processor to perform multiple tasks in parallel. This improves the overall performance of the system, especially in **multithreaded** applications like gaming or video editing.

---

## Machine Language and Assembly Language

At the lowest level, computers understand only **machine language**, which consists of binary instructions (0s and 1s). Each instruction tells the CPU to perform a specific operation, such as moving data, adding numbers, or jumping to a different part of the program.

### Machine Language

Machine language instructions are directly executed by the CPU. They consist of **opcodes** (operation codes) that specify the operation, and **operands** that provide the data.

### Assembly Language

**Assembly language** is a human-readable representation of machine language. Instead of writing binary instructions, assembly language uses **mnemonics** to represent operations.

---

## Memory Hierarchy and Storage

Modern computer systems use a **memory hierarchy** to manage data efficiently. Memory is categorized based on speed, size, and proximity to the CPU:

### 1. Registers

- **Fastest memory** directly inside the CPU.
- Stores small amounts of data (e.g., the result of a calculation).

### 2. Cache Memory

- **Very fast memory**, but smaller than main memory (RAM).
- Located close to the CPU to reduce the time it takes to access frequently used data.

### 3. Main Memory (RAM)

- **Larger but slower** than cache.
- Used to store data and instructions that the CPU needs to access frequently.

### 4. Secondary Storage (Hard Drives, SSDs)

- **Largest and slowest** form of memory.
- Used for long-term data storage, including files, programs, and the operating system.

---

## Key Differences Between Machines

The architecture of computers can vary significantly depending on the type of machine:

### 1. Personal Computers (PCs)

- **Desktop and Laptop Computers**: Typically use **CISC (x86)** processors like Intel and AMD.
- **General Purpose**: Designed to run a wide range of applications.

### 2. Servers

- **High-Performance Machines**: Designed for processing multiple tasks simultaneously.
- **Large Storage and RAM**: Optimized for handling vast amounts of data and network traffic.

### 3. Embedded Systems

- **RISC-Based**: Often use **ARM processors**.
- **Specialized Functions**: Found in devices like smartphones, routers, and appliances. These systems are optimized for power efficiency and specific tasks.

### 4. Supercomputers

- **Highly Parallel Architecture**: Supercomputers are designed for massive computation tasks, often using thousands of processors to perform complex calculations in parallel.

---


