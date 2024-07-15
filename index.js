const MIN_TRAIN_SPEED = 0;
const MAX_TRAIN_SPEED = 100;

let characteristic;
let socket;

const speedSlider = document.getElementById('speedSlider');
const speedDisplay = document.getElementById('speedDisplay');
const p = document.querySelector("p.success");

speedSlider.addEventListener('input', updateSpeed);

function updateSpeed() {
    const speed = parseInt(speedSlider.value);
    speedDisplay.textContent = `Speed: ${speed}`;
    if (socket) {
        socket.emit('pitch', speed);
    }
}

async function connect() {
    try {
        let device = await navigator.bluetooth.requestDevice({
            filters: [
                {
                    services: ["00001623-1212-efde-1623-785feabcd123"],
                },
            ],
        });

        let server = await device.gatt.connect();

        let service = await server.getPrimaryService(
            "00001623-1212-efde-1623-785feabcd123"
        );

        characteristic = await service.getCharacteristic(
            "00001624-1212-efde-1623-785feabcd123"
        );

        p.innerText = "Successfully connected to train 🥳";
        
        // Connect to Socket.IO server
        socket = io();
        
        // Set initial speed after connection
        updateSpeed();
    } catch (e) {
        alert(e);
    }
}

const buttonConnect = document.querySelector("button.connect");
buttonConnect.addEventListener("click", () => {
    connect();
    buttonConnect.disabled = true;
});