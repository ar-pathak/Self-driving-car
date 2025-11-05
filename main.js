const canvas = document.getElementById('canvas');
canvas.style.height = window.innerHeight + 'px';

const ctx = canvas.getContext('2d');
const road = new Road(canvas.width / 2, canvas.width * .9);
const car = new Car(road.getLaneCenter(1), 100, 30, 50);// Create a new car instance 100 x ,100 y , 30 width , 50 height
car.draw(ctx);

animate();
function animate() {
    canvas.height = window.innerHeight;
    car.update();

    ctx.save();
    ctx.translate(0, -car.y + canvas.height * 0.7);

    road.draw(ctx);
    car.draw(ctx);

    ctx.restore();
    requestAnimationFrame(animate);
}