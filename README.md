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

## 📷 System Flow Diagram (Recommended)

> _Insert diagram here and describe it:_
```markdown
![System Diagram](images/system_diagram.png)
*Figure: Overview of the system showing ESP32, relay switching, Raspberry Pi Pico, and USB host.*
