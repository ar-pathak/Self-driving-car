const canvas = document.getElementById('canvas');
canvas.width = 200;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');
const road = new Road(canvas.width / 2, canvas.width * 0.9);
const car = new Car(road.getLaneCenter(1), 100, 30, 50);

function animate() {
    canvas.height = window.innerHeight;

    car.update(road.borders);

    ctx.save();
    ctx.translate(0, -car.y + canvas.height * 0.7);

    road.draw(ctx);
    car.draw(ctx);

    ctx.restore();

    // Update status display
    const statusText = document.getElementById('statusText');
    const speedText = document.getElementById('speed');

    if (car.damaged) {
        statusText.textContent = '✗ CRASHED!';
        statusText.className = 'status-crashed';
    } else {
        statusText.textContent = '✓ Operational';
        statusText.className = 'status-ok';
    }

    speedText.textContent = `Speed: ${Math.abs(car.speed).toFixed(2)}`;

    requestAnimationFrame(animate);
}

animate();