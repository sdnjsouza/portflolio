let progress = 20;
let startx = 0;
let active = 0;
let isDown = false;

const speed_wheel = 0.02;
const speedDrag = -0.1;

const items = document.querySelectorAll('.sliderItem');

const getZIndex = (array, index) =>
    array.map((idx, i) =>
        index === i ? array.length : array.length - Math.abs(index - i)
    );


const showItem = (item, index, active) => {
    const zIndex = getZIndex([...items], active)[index];
    item.style.setProperty('--zIndex', zIndex);
    item.style.setProperty('--active', (index - active) / items.length);
}

const animate = () => {
    progress = Math.max(0, Math.min(progress, 100))
    active = Math.floor(progress / 100 * (items.length - 1))

    items.forEach((item, index) => showItem(item, index, active));
};
animate();


items.forEach((item, i) => {
    item.addEventListener('click', () => {
        progress = (i / items.length) * 100 + 10;
        animate();
    });
});


const wheel = e => {
    const wheelProgress = e.deltaY * speed_wheel;
    progress += wheelProgress;

    animate();
};

const move = e => {
    if (!isDown) return;

    const x = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    const mouseProgress = (x - startx) * speedDrag;

    progress += mouseProgress;
    startx = x;

    animate();
};
const down = e => {
    isDown = true;

    startx = e.clientX || (e.touches && e.touches[0].clientX) || 0;
};
const up = e => {
    isDown = false;
};


document.addEventListener('wheel', wheel);
document.addEventListener('mousemove', move);
document.addEventListener('mousedown', down);
document.addEventListener('mouseup', up);

document.addEventListener('touchmove', move);
document.addEventListener('touchstart', down);
document.addEventListener('touchend', up);
