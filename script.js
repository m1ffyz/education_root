document.addEventListener("DOMContentLoaded", () => {
    const areaInput = document.getElementById("areaInput");
    const drawButton = document.getElementById("drawButton");
    const lengthDisplay = document.getElementById("lengthDisplay");
    const gridCanvas = document.getElementById("gridCanvas");
    const ctx = gridCanvas.getContext("2d");

    const drawGrid = () => {
        const size = 25; // 方眼のサイズ（25ピクセルを1cmとする）
        const width = gridCanvas.width;
        const height = gridCanvas.height;
        ctx.clearRect(0, 0, width, height);
        ctx.strokeStyle = "#ddd";
        
        for (let x = 0; x <= width; x += size) {
            ctx.moveTo(x, 0);
            ctx.lineTo(x, height);
        }

        for (let y = 0; y <= height; y += size) {
            ctx.moveTo(0, y);
            ctx.lineTo(width, y);
        }

        ctx.stroke();
    };

    const drawSquare = (sideLength) => {
        ctx.strokeStyle = "#000";
        const size = sideLength * 25; // 1cmあたり25ピクセルでスケーリング
        ctx.strokeRect(0, 0, size, size);
    };

    drawButton.addEventListener("click", () => {
        const area = parseFloat(areaInput.value);
        if (isNaN(area) || area <= 0) {
            alert("正しい面積を入力してください。");
            return;
        }

        const sideLength = Math.sqrt(area);
        lengthDisplay.textContent = `1辺の長さ: ${sideLength.toFixed(2)} cm`;

        ctx.clearRect(0, 0, gridCanvas.width, gridCanvas.height);
        drawGrid();
        drawSquare(sideLength);
    });

    drawGrid();
});
