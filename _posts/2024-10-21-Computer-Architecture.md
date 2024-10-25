---
layout: post
title: "Introduction to Computer Architecture and Digital Logic"
date: 2024-10-25
categories: CS115 Computer-Architecture
---

## Introduction to Computer Architecture and Digital Logic

In this comprehensive post, we cover the essentials of computer architecture and digital logic. Understanding these foundational topics is crucial for exploring more advanced computing concepts, as they form the backbone of how modern computers operate. We’ll dive into binary arithmetic, logic gates, CPU components, memory hierarchy, and explore the nuances of different architectures and specialized processing units.

---

## Digital Logic and Binary Systems

In digital systems, everything is represented by binary values: **1s** and **0s**. Computers rely on **binary logic** to process data, make decisions, and perform calculations. This binary-based system of **logic gates**, **memory elements**, and structured architectures is essential for handling data, executing instructions, and interconnecting various computer components.

### Why Binary?

The binary, or **base-2**, system uses only the digits **0** and **1**. This system suits computers for several reasons:

1. **Simplicity of Electrical Circuits**: Binary logic is easy to implement in electronic circuits with **two states**: on and off. These states can represent:
   - **0** as a low voltage (off)
   - **1** as a high voltage (on)
     This setup allows computers to process and store data efficiently, as they use transistors as fundamental switching devices that toggle between these two states to carry out logic operations and data storage.
2. **Binary Arithmetic**: Operations like addition and multiplication are simpler with binary, using only basic logic gates (AND, OR, XOR) to perform arithmetic. This simplicity contributes to the reliability and speed of modern digital processors, which must handle billions of calculations per second.
3. **Historical Influence**: Binary’s use in computing can be traced back to **Gottfried Wilhelm Leibniz**, who proposed binary arithmetic as a universal language in 1703. However, it wasn’t until the 20th century’s electronic advancements that binary became the practical foundation of computing.

---

## Binary Arithmetic and Representing Negative Numbers

While positive numbers in binary are straightforward, negative numbers introduce complexity. Early systems used methods like **sign-magnitude**, **1’s complement**, and **2’s complement** to represent both positive and negative values.

### Sign-Magnitude Representation

In **sign-magnitude representation**:

- The most significant bit (leftmost) indicates the **sign** (0 for positive, 1 for negative).
- The remaining bits represent the **magnitude** (or absolute value) of the number.

For example, in an 8-bit system:

- **+5** = `00000101`
- **-5** = `10000101`

This method is simple but problematic because it introduces:

- **Two Zeros**: Positive (`00000000`) and negative (`10000000`) zeros create ambiguity and complicate arithmetic operations.
- **Complex Arithmetic**: Arithmetic operations require separate handling of the sign bit, complicating calculations and hardware design.

### 1's Complement

**1’s complement** representation addresses some issues of sign-magnitude by creating negative numbers through bitwise inversion (or complementing all bits). In 1’s complement:

- To represent **-5**, first write **+5** as `00000101`, then invert the bits: `11111010`.

However, 1’s complement still has:

- **Two Representations of Zero**: Both positive and negative zeros, which introduces ambiguity.
- **Complex Arithmetic**: Arithmetic with 1's complement requires extra steps to manage carry bits, as additions can overflow beyond the standard bit size, complicating hardware.

### 2's Complement (Standard Representation)

**2’s complement** is the standard for modern computers, as it resolves the challenges faced by earlier systems.

To find a number’s 2’s complement:

1. **Invert all bits** (as in 1’s complement).
2. **Add 1** to the result.

For example, to represent **-5** in 2’s complement:

1. Start with +5 (`00000101`).
2. Invert bits: `11111010`.
3. Add 1: `11111011`.

Advantages of 2’s complement:

- **Single Zero Representation**: Only one zero (`00000000`), simplifying calculations.
- **Efficient Arithmetic**: Addition and subtraction are straightforward, and overflow is naturally managed within the binary framework.
- **Automatic Negation**: Calculating the 2's complement directly provides the negative form, which simplifies processing in hardware and software.

---

## Logic Gates: The Building Blocks of Digital Circuits

Logic gates perform fundamental operations on binary inputs to produce binary outputs, forming the core of digital circuits.

### Common Logic Gates

 **NOT Gate**: Inverts the input.

  | Input (x) | Output (¬x) |
  | --------- | ----------- |
  | 0 | 1 |
  | 1 | 0 |
  
 **AND Gate**: Outputs 1 only if both inputs are 1.

  | x | y | AND (x \* y) |
  | --- | --- | ------------ |
  | 0 | 0 | 0 |
  | 1 | 1 | 1 |

 **OR Gate**: Outputs 1 if either input is 1.

  | x | y | OR (x + y) |
  | --- | --- | ---------- |
  | 0 | 1 | 1 |
  | 1 | 1 | 1 |
  
 **XOR Gate**: Outputs 1 if inputs differ, essential for binary addition in arithmetic circuits.

  | x | y | XOR (x ⊕ y) |
  | --- | --- | ----------- |
  | 0 | 1 | 1 |
  | 1 | 0 | 1 |

### De Morgan’s Laws

De Morgan’s laws provide rules for simplifying complex Boolean expressions:

1. ¬(x + y) = ¬x \* ¬y
2. ¬(x \* y) = ¬x + ¬y

These rules are essential for circuit optimization, allowing engineers to reduce the complexity of digital circuits.

---

## Memory Elements: Latches and Flip-Flops

### SR Latch

An **SR (Set-Reset) latch** is a simple storage device with two inputs (Set and Reset) and two outputs (Q and ¬Q). This latch is a fundamental building block for memory devices.

| S   | R   | Q (next) | Description      |
| --- | --- | -------- | ---------------- |
| 0   | 1   | 0        | Reset            |
| 1   | 0   | 1        | Set              |
| 1   | 1   | Hold     | Holds last state |

### D Latch

The **D (Data) latch** stores data based on a clock signal, ensuring more controlled storage. When the clock is active, the latch stores the input data; otherwise, it retains the previous state.

### Flip-Flops

**Flip-flops** are edge-triggered versions of latches that store data on clock transitions. They are used extensively in CPUs to synchronize data with a clock signal, forming the backbone of sequential circuits.

---

## Overview of Computer Architecture

Computer architecture refers to the structure and design of a computer system, defining how data flows and instructions are processed. The two primary models of architecture are **Von Neumann** and **Harvard** architectures.

### Von Neumann Architecture

Named after John von Neumann, this architecture integrates a single memory for both instructions and data, simplifying system design. Components include:

- **CPU**: Executes instructions.
- **Memory**: Stores both instructions and data.
- **Data Bus**: Transfers data within the system.

#### Pros

- **Cost-effective**: Shared memory and bus reduce costs.
- **Simple design**: Requires fewer components and is easier to manage.

#### Cons

- **Bottleneck**: Sharing a bus for data and instructions can create performance delays.
- **Risk of Memory Corruption**: Shared memory increases the risk of accidentally overwriting data or instructions.

### Harvard Architecture

In Harvard architecture, data and instructions are stored in separate memory units, allowing parallel data and instruction access. This architecture is widely used in embedded systems and high-performance applications.

#### Pros

- **Faster Processing**: Separate buses for data and instructions increase processing speed.
- **Improved Security**: Reduces data-instruction corruption risks.

#### Cons

- **Higher Cost**: Requires more components and design complexity.
- **Less Flexibility**: Hardware modifications can be challenging.

---

## Differences Between Von Neumann and Harvard Architectures

| **Von Neumann Architecture**                           | **Harvard Architecture**                               |
| ------------------------------------------------------ | ------------------------------------------------------ |
| Uses a single memory for both data and instructions.   | Uses separate memories for data and instructions.      |
| Common bus may lead to bottlenecks.                    | Parallel data and instruction access for higher speed. |
| Generally more cost-effective and easier to implement. | Higher cost but optimized for speed and security.      |
| Used in general-purpose systems (PCs, servers).        | Commonly used in embedded systems and DSPs.            |

---

## Random Access Memory (RAM)

Random Access Memory, or **RAM**, provides high-speed, temporary storage for data the CPU needs while running applications.

### RAM Structure and Operation

RAM is structured with addressable storage locations, where data can be read from or written to each location. For example:

- **Address Bits**: Used to specify the memory location.
- **Data Bits**: Represent the value stored in that memory location.
- **Read/Write Bit**: Determines whether the data is being read or written.

#### 2-Bit Decoder Example

A 2-bit decoder enables access to specific memory locations based on binary addresses:

| Input | Output |
| ----- | ------ |
| 00    | Row 1  |
| 01    | Row 2  |
| 10    | Row 3  |
| 11    | Row 4  |

This enables efficient data storage and retrieval in memory systems.

---

## CPU Overview: The Brain of the Computer

The **Central Processing Unit (CPU)** executes instructions, performs calculations, and controls data flow. It consists of several components:

### Key Components

1. **Registers**: Fast storage within the CPU for temporary data.
2. **Instruction Register**: Stores the current instruction being executed.
3. **Control Unit**: Directs the CPU, managing data flow and execution.
4. **Arithmetic Logic Unit (ALU)**: Performs mathematical and logical operations.

### The CPU Cycle: Fetch, Decode, Execute

The CPU operates in a cycle:

1. **Fetch**: Retrieves the next instruction.
2. **Decode**: Interprets the instruction.
3. **Execute**: Carries out the operation.

---

## Memory Hierarchy and Storage

Memory is organized hierarchically to optimize access speed and efficiency.

### Levels of Memory

1. **Registers**: Fast, small storage inside the CPU for immediate data.
2. **Cache**: Quick access memory near the CPU for frequently used data.
3. **RAM**: Main memory, slower but larger, storing active programs and data.
4. **Secondary Storage (HDD, SSD)**: Large, slow storage for files and applications.

---

## Assembly Language and Machine Language

Machine language, in binary, is directly executed by the CPU. Assembly language, using mnemonics like `MOV` and `ADD`, provides a readable way to program close to the hardware.

### Compiled vs. Interpreted Languages

- **Compiled Languages** (e.g., C++): Converted into machine code for faster execution.
- **Interpreted Languages** (e.g., Python): Executed line-by-line, allowing flexibility but generally slower.

---

## Alan Turing: The Father of Modern Computing

Alan Turing was a pioneer in computer science, mathematics, and cryptography.

- **Education**: Turing earned his Ph.D. from Princeton University, introducing theoretical computation concepts.
- **Key Contributions**:
   - **Turing Machine**: A model for computation that formalized the concept of algorithms.
   - **Breaking the Enigma Code**: His work at **Bletchley Park** during WWII helped decode German communications, impacting the war’s outcome.

---
