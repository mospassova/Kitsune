# 🦊 Kitsune and DuckySlayer Project  

---

## 🔐 Project Overview

Most people today know they shouldn’t plug in USB drives from untrusted sources.  
But how many truly consider the risk posed by malicious HID (Human Interface Device) attacks?

Our project, **Kitsune and DuckySlayer**, explores and demonstrates the dangers of HID-based security vulnerabilities — specifically **keystroke injection** and **keylogging attacks** using disguised USB devices.

---

## 🧩 Hardware Components

### 1. 🖱️ USB Mouse (Shell)
- The device is disguised as a regular USB mouse.
- This concealment exploits the lack of awareness surrounding HID threats.

### 2. 📡 ESP32 Devkit
- Hosts a **local web server** that listens for a trigger event (button press).
- Controls the **relay module** by toggling GPIO pins.
- Switches USB data lines between the mouse and Raspberry Pi Pico.

### 3. ⚡ Relay Module
- Managed by the ESP32 to switch control of the USB data lines (DATA+ and DATA–).
- Dynamically redirects the connection between:
  - The real USB mouse
  - The **attack vector** (Raspberry Pi Pico)
- Enables HID-based payload delivery on command.

### 4. 🐍 Raspberry Pi Pico (HID Emulator)
- Acts like a Rubber Ducky device.
- Identifies as a **USB keyboard** to the target system — a highly trusted interface.
- Uses a **Python interpreter layer** to execute `DuckyScript` payloads.
- Allows writing easy-to-understand malicious scripts (`payload.dd`) for keystroke injection.

---

## 🎯 Project Goals

### ✅ 1. Create Keystroke Injection Attacks
- Demonstrates real-world physical/port-based security threats.
- Raises awareness, especially among students, about how dangerous and simple HID attacks can be.

### ✅ 2. Develop a Defense Program for Keystroke Attacks
- We created a **background application** that automatically **locks Windows** when a new USB device is connected.
- This prevents a keystroke injection payload from running by redirecting the script input to the locked login screen, rendering it harmless.

### ✅ 3. Server-Controlled HID Activation
- The attack is remotely triggered from a **Node.js-based web server** using the `express` framework.
- The server interface is an `.html` page with embedded `<script>` logic for UI updates and sending XML requests.
- On button press, the server sends a request to the ESP32 to toggle the USB connection via the relay — switching from the mouse to the Raspberry Pi Pico (HID).

---
# 🦊 Kitsune and DuckySlayer Project  
**By Team Zaloopenite**

---

## 🔐 Project Overview

Most people today know they shouldn’t plug in USB drives from untrusted sources.  
But how many truly consider the risk posed by malicious HID (Human Interface Device) attacks?

Our project, **Kitsune and DuckySlayer**, explores and demonstrates the dangers of HID-based security vulnerabilities — specifically **keystroke injection** and **keylogging attacks** using disguised USB devices.

---

## 🧩 Hardware Components

### 1. 🖱️ USB Mouse (Shell)
- The device is disguised as a regular USB mouse.
- This concealment exploits the lack of awareness surrounding HID threats.

### 2. 📡 ESP32 Devkit
- Hosts a **local web server** that listens for a trigger event (button press).
- Controls the **relay module** by toggling GPIO pins.
- Switches USB data lines between the mouse and Raspberry Pi Pico.

### 3. ⚡ Relay Module
- Managed by the ESP32 to switch control of the USB data lines (DATA+ and DATA–).
- Dynamically redirects the connection between:
  - The real USB mouse
  - The **attack vector** (Raspberry Pi Pico)
- Enables HID-based payload delivery on command.

### 4. 🐍 Raspberry Pi Pico (HID Emulator)
- Acts like a Rubber Ducky device.
- Identifies as a **USB keyboard** to the target system — a highly trusted interface.
- Uses a **Python interpreter layer** to execute `DuckyScript` payloads.
- Allows writing easy-to-understand malicious scripts (`payload.dd`) for keystroke injection.

---

## 🎯 Project Goals

### ✅ 1. Create Keystroke Injection Attacks
- Demonstrates real-world physical/port-based security threats.
- Raises awareness, especially among students, about how dangerous and simple HID attacks can be.

### ✅ 2. Develop a Defense Program for Keystroke Attacks
- We created a **background application** that automatically **locks Windows** when a new USB device is connected.
- This prevents a keystroke injection payload from running by redirecting the script input to the locked login screen, rendering it harmless.

### ✅ 3. Server-Controlled HID Activation
- The attack is remotely triggered from a **Node.js-based web server** using the `express` framework.
- The server interface is an `.html` page with embedded `<script>` logic for UI updates and sending XML requests.
- On button press, the server sends a request to the ESP32 to toggle the USB connection via the relay — switching from the mouse to the Raspberry Pi Pico (HID).

---

## 📷 System Diagram

![System Diagram - HID Attack Flow](main/system_diagram.png)  
*Figure: Flowchart of the HID attack process. The device starts in Mouse Mode, then connects to a Node.js server. Upon user interaction (pressing the Kitsune button), it switches to Keystroke Injection Mode. If a prevention script is running in the background, the system is locked automatically; otherwise, the injection attack proceeds.*

---

## 🧠 Why This Matters

HID attacks are **stealthy, fast, and hard to detect**.  
Even secure systems are vulnerable if physical access is granted for just a few seconds.

Our project is a **learning tool** that helps cybersecurity enthusiasts and educators:
- Understand the **risks of HID devices**
- Build **defensive mechanisms**
- Think like an attacker to design **better protections**

---

## 🚀 Tech Stack

| Component           | Description                            |
|--------------------|----------------------------------------|
| `ESP32`            | Wi-Fi enabled microcontroller          |
| `Raspberry Pi Pico`| HID emulation via USB                  |
| `Node.js` + `Express` | Web server and API for trigger        |
| `Relay Module`     | Physical USB switching mechanism       |
| `DuckyScript`      | Payload scripting language             |
| `Python`           | Middleware to interpret DuckyScript    |
| `Windows Lock App` | USB monitoring & auto-lock tool        |

---

## ⚠️ Disclaimer

This project is for **educational and ethical hacking** purposes only.  
Use responsibly and **do not deploy on machines without explicit permission**.


