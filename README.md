# Lego Duplo Train Speed Hack

## Introduction

This project was born out of love for my son, Antonio, and his passion for Lego Duplo trains. As we played together, we noticed that his favorite train often struggled to climb the bridges we built. This limitation sparked an idea: what if we could enhance the train's capabilities?

## Motivation

Watching Antonio's excitement turn to disappointment when his train couldn't conquer the steeper tracks was heartbreaking. As a parent and a tech enthusiast, I knew I had to find a solution. This project is the result of that determination - a way to give Antonio's imagination the power it deserves, one train ride at a time.

## Technical Overview

This project demonstrates how to "hack" a Lego Duplo train to increase its speed using WebSocket technology and Node.js. By interfacing with the train's Bluetooth Low Energy (BLE) connection, we can override the default speed settings and give the train the extra boost it needs to climb those challenging bridges.

### Key Components:

1. **Node.js Backend**: Handles the WebSocket server and communicates with the Lego Duplo train via Bluetooth.
2. **WebSocket**: Enables real-time communication between the web interface and the Node.js server.
3. **Web Interface**: Provides a user-friendly slider and buttons to control the train's speed.
4. **Bluetooth Low Energy (BLE)**: Used to send commands to the Lego Duplo train.

## Features

- Connect to the Lego Duplo train via Bluetooth
- Control the train's speed using a slider (0-99)
- Instantly stop the train
- Set the train to maximum speed (99)
- Real-time speed updates

## Setup and Usage

```sh
npm install

npm run

```
## Ethical Considerations

This project is intended for personal use and educational purposes only. It's important to note that modifying toy behavior may void warranties and could potentially cause wear on the toy's components if used excessively. Always supervise children when using modified toys.

## Conclusion

This project represents more than just a technical achievement - it's a testament to the lengths we go to bring joy to our children. By combining web technologies with a beloved toy, we've not only solved a problem but also created new opportunities for imaginative play.

To Antonio: May your trains always reach the top of the mountain, and may your imagination never stop climbing.

## Disclaimer

This project is not affiliated with or endorsed by the Lego Group. Lego Duplo is a trademark of the Lego Group.
