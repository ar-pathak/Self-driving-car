const canvas = document.getElementById('canvas');
canvas.style.height = window.innerHeight + 'px';

const ctx = canvas.getContext('2d');
const car = new Car(100, 100, 30, 50);// Create a new car instance 100 x ,100 y , 30 width , 50 height
car.draw(ctx);

animate();
function animate() {
    car.update();
    canvas.height = window.innerHeight;
    car.draw(ctx);
    requestAnimationFrame(animate);
}