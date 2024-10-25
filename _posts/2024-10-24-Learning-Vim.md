---
layout: post
title: "Learning Vim"
date: 2024-10-24
categories: Vim Text-Editor
---

### **Vim Cheat Sheet**

---

#### **Modes in Vim**

| Mode           | Description                                      |
|----------------|--------------------------------------------------|
| `Normal`       | Default mode (move around, use commands)         |
| `Insert`       | For inserting/editing text (press `i` to enter)  |
| `Visual`       | For selecting text (press `v` to enter)          |
| `Command-line` | For performing commands (press `:` to enter)     |

---

#### **Basic Navigation (Normal Mode)**

| Command                         | Description                               |
|----------------------------------|-------------------------------------------|
| `h`                              | Move left                                |
| `j`                              | Move down                                |
| `k`                              | Move up                                  |
| `l`                              | Move right                               |
| `w`                              | Move to the beginning of the next word    |
| `b`                              | Move to the beginning of the previous word|
| `e`                              | Move to the end of the current word       |
| `0`                              | Move to the beginning of the line         |
| `$`                              | Move to the end of the line               |
| `gg`                             | Go to the beginning of the file           |
| `G`                              | Go to the end of the file                 |
| `:number`                        | Go to line `number`                       |
| `Ctrl-d`                         | Scroll half a page down                  |
| `Ctrl-u`                         | Scroll half a page up                    |

---

#### **Editing Text (Normal Mode)**

| Command                         | Description                               |
|----------------------------------|-------------------------------------------|
| `i`                              | Enter insert mode before the cursor       |
| `I`                              | Enter insert mode at the beginning of the line |
| `a`                              | Enter insert mode after the cursor        |
| `A`                              | Enter insert mode at the end of the line  |
| `o`                              | Insert a new line below the cursor        |
| `O`                              | Insert a new line above the cursor        |
| `x`                              | Delete the character under the cursor     |
| `dd`                             | Delete the current line                   |
| `d$`                             | Delete from the cursor to the end of the line |
| `d0`                             | Delete from the cursor to the beginning of the line |
| `dw`                             | Delete a word                             |
| `cw`                             | Change (replace) a word                   |
| `u`                              | Undo the last change                      |
| `Ctrl-r`                         | Redo the last undone change               |
| `p`                              | Paste after the cursor                    |
| `P`                              | Paste before the cursor                   |
| `yy`                             | Yank (copy) the current line              |
| `yw`                             | Yank (copy) a word                        |
| `Y`                              | Yank the rest of the line                 |
| `J`                              | Join the current line with the next       |

---

#### **Visual Mode**

| Command                         | Description                               |
|----------------------------------|-------------------------------------------|
| `v`                              | Start visual mode (select text)           |
| `V`                              | Start visual line mode (select entire lines) |
| `Ctrl-v`                         | Start visual block mode (select columns)  |
| `o`                              | Move to the other end of the selection    |
| `d`                              | Delete the selected text                  |
| `y`                              | Yank (copy) the selected text             |
| `p`                              | Paste after the selection                 |
| `>`                              | Indent the selected lines                 |
| `<`                              | Outdent the selected lines                |

---

#### **Search and Replace**

| Command                         | Description                               |
|----------------------------------|-------------------------------------------|
| `/pattern`                       | Search for `pattern`                      |
| `n`                              | Jump to the next occurrence of the search pattern |
| `N`                              | Jump to the previous occurrence of the search pattern |
| `?pattern`                       | Search backward for `pattern`             |
| `:%s/old/new/g`                  | Replace all occurrences of `old` with `new` in the file |
| `:s/old/new/g`                   | Replace all occurrences of `old` with `new` in the current line |
| `:noh`                           | Clear search highlighting                 |

---

#### **File Management**

| Command                         | Description                               |
|----------------------------------|-------------------------------------------|
| `:e filename`                    | Open a file                              |
| `:w`                             | Save the current file                    |
| `:w filename`                    | Save as `filename`                       |
| `:q`                             | Quit                                     |
| `:q!`                            | Quit without saving changes              |
| `:wq`                            | Write and quit                           |
| `:x`                             | Write and quit (same as `:wq`)           |
| `:qa`                            | Quit all open files                      |
| `:wqa`                           | Save all files and quit                  |

---

#### **Window Management (Splits)**

| Command                         | Description                               |
|----------------------------------|-------------------------------------------|
| `:split filename`                | Split window horizontally and open file   |
| `:vsplit filename`               | Split window vertically and open file     |
| `Ctrl-w h`                       | Move to the window on the left            |
| `Ctrl-w l`                       | Move to the window on the right           |
| `Ctrl-w j`                       | Move to the window below                  |
| `Ctrl-w k`                       | Move to the window above                  |
| `Ctrl-w q`                       | Close the current window                  |
| `Ctrl-w o`                       | Close all other windows except current    |
| `Ctrl-w =`                       | Make all windows equal in height and width|

---

#### **Buffers (Multiple Files)**

| Command                         | Description                               |
|----------------------------------|-------------------------------------------|
| `:bnext`                         | Go to the next buffer                     |
| `:bprev`                         | Go to the previous buffer                 |
| `:bfirst`                        | Go to the first buffer                    |
| `:blast`                         | Go to the last buffer                     |
| `:b #`                           | Switch to buffer `#`                      |
| `:bd`                            | Close the current buffer                  |
| `:ls`                            | List all open buffers                     |

---

#### **Miscellaneous**

| Command                         | Description                               |
|----------------------------------|-------------------------------------------|
| `.`                              | Repeat the last command                   |
| `:%!`                            | Execute an external command on the whole file |
| `u`                              | Undo last change                          |
| `Ctrl-r`                         | Redo last undone change                   |
| `gg=G`                           | Reindent the entire file                  |
| `:%!fmt`                         | Format the text                           |

---

### **Vim Notation Guide:**
- **`:`** = Command-line mode
- **`/`** = Search
- **`Ctrl`** = Hold Control key and press the key that follows
- **`n`** = A number can be added before some commands to repeat them (e.g., `5j` moves 5 lines down).

---
