document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    const g1 = document.querySelector('.g1');
    const g2 = document.querySelector('.g2');

    // Move the blobs slightly based on mouse position
    g1.style.transform = `translate(-${x * 30}px, -${y * 30}px)`;
    g2.style.transform = `translate(${x * 50}px, ${y * 50}px)`;
});