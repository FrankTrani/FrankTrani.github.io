---
layout: post
title: "Computer Architecture Lecture Part 2"
date: 2024-10-23
categories: CS115
---

In this lecture, we covered essential building blocks of computer architecture, including D-Latches, random access memory, and the basic operation of a CPU. Understanding these concepts is crucial for diving deeper into the design and functionality of modern computing systems.

---

## From SR-Latches to D-Latches

### De Morgan's Theorem Review:

De Morgan’s theorem is a fundamental principle in Boolean algebra, which is the basis for digital logic. It provides a way to simplify complex logic expressions by expressing AND and OR gates in terms of each other using NOT gates (inverters).

The two forms of De Morgan’s Theorem are:

1. **NOT (A AND B) = NOT A OR NOT B**
2. **NOT (A OR B) = NOT A AND NOT B**

This means:

- If you don’t have an AND gate, you can use OR gates and inverters to replicate its behavior.
- If you don’t have an OR gate, you can use AND gates and inverters to achieve the same outcome.

### D-Latch

A D-Latch, also known as a **Data Latch** or **Delay Latch**, is a fundamental building block in sequential logic circuits. It is used to store a single bit of data. The latch operates with a **strobe** or **enable** signal, which controls when the data is latched or stored.

Here’s the basic structure of a D-Latch:

- **2 NOR gates**: Used in the set-reset (SR) configuration to control the state of the output.
- **2 NAND gates**: Help manage the input and control logic.
- **1 NOT gate**: Used for inverting signals where needed.

The D-Latch has three main signals:

- **D (Data)**: The input bit that you want to store (either a 1 or a 0).
- **Strobe/Enable**: A control signal that determines when the latch is active. When this signal is high (1), the latch captures the value on the D input. When it’s low (0), the latch holds its previous state.
- **Q (Output)**: The stored output bit.

#### How the D-Latch Works:

- When the strobe signal is high, the latch is "open" and will continuously output whatever is present at the D input.
- When the strobe signal is low, the latch is "closed" and it retains the value that was present at D just before the strobe signal dropped.

This mechanism introduces a delay between the input and the stored value, hence the name **Delay Latch**. It allows for precise control over when data is written into storage.

---

## Alan Turing

### Brief Biography:

Alan Turing was a pioneer in the field of computer science, mathematics, and cryptography. His work laid the groundwork for modern computers and artificial intelligence.

- **Education**: Turing earned his Ph.D. from Princeton University, where he studied under the renowned mathematician Alonzo Church. His dissertation introduced concepts related to the limits of computation, which influenced future developments in theoretical computer science.
- **Key Contributions**:
  - **Turing Machine**: A theoretical model that represents the basic principles of computation. The Turing Machine formalized the idea of an algorithm or program, showing that machines could solve problems through a series of simple, predefined steps.
  - **Breaking the Enigma Code**: During World War II, Turing played a critical role in the British effort to decode German military communications encrypted by the Enigma machine. His work at **Bletchley Park** contributed to shortening the war and saving countless lives.

Turing's legacy continues to influence the fields of computer science and artificial intelligence today.

---

## Random Access Memory (RAM)

Random Access Memory, or **RAM**, is a key component of modern computing systems. It provides temporary storage that can be read from and written to, allowing the CPU to access data quickly while performing operations.

### Basic Structure of RAM

In a simplified 4-row RAM model, the memory consists of:

- **2 Address Bits**: These bits are used to select one of the four rows (memory locations).
- **3 Data Bits**: These bits represent the actual data stored in each memory location.
- **Read/Write Bit**: This control signal determines whether data is being written to or read from the memory.

In this model, we assume the RAM has 4 rows, each holding 3 bits of data. Therefore, the total memory size is 12 bits.

- **Address Bits**: Specify which row (memory location) is being accessed.
- **Data Bits**: Represent the value stored in that row.
- **Read Operation**: The data from the selected memory location is output.
- **Write Operation**: Data is stored in the selected memory location.

#### Example Memory Map:

| Address Bit | Row |
| ----------- | --- |
| 00          | 1   |
| 01          | 2   |
| 10          | 3   |
| 11          | 4   |

In this example, if the address bits are `00`, the first row is accessed. If the address bits are `11`, the fourth row is accessed.

### 2-Bit Decoder

The 2-bit decoder is an essential component for selecting which row of memory to access based on the 2-bit address.

#### Decoder Truth Table:

| Input | Output |
| ----- | ------ |
| 00    | 1      |
| 01    | 2      |
| 10    | 3      |
| 11    | 4      |

#### How the 2-Bit Decoder Works:

- The decoder takes in the 2 address bits as input.
- It outputs a high signal (1) on one of four output lines corresponding to the address.
- For example, if the address is `01`, the second output line is activated, selecting the second row of memory.

Decoders are used in conjunction with RAM to ensure that data is written to or read from the correct memory location.

---

## CPU Overview

The **Central Processing Unit (CPU)** is the brain of the computer. It is responsible for executing instructions, performing calculations, and controlling other components.

### Key Components of a CPU:

1. **Registers**: Small, fast storage locations within the CPU used to hold temporary data and instructions.
   - **General-purpose registers**: Used for temporary data storage during calculations.
   - **Special-purpose registers**: Include the instruction register and program counter.
2. **Instruction Register**: Holds the current instruction being executed by the CPU.
3. **Control Unit**: Manages the execution of instructions by coordinating data flow between the CPU, memory, and input/output devices.
4. **Arithmetic Logic Unit (ALU)**: Performs mathematical and logical operations, such as addition, subtraction, AND, OR, etc.

### CPU Operation: Fetch, Decode, Execute

The CPU operates in a continuous cycle, executing one instruction at a time. This process can be broken down into three main steps:

1. **Fetch**: The CPU retrieves the next instruction from memory, based on the address in the program counter.
2. **Decode**: The control unit interprets the instruction, determining what action to perform.
3. **Execute**: The ALU or other parts of the CPU carry out the operation (e.g., a calculation or data transfer).

This cycle happens millions of times per second in modern processors, allowing computers to perform complex tasks quickly and efficiently.

---
