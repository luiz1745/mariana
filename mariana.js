document.addEventListener('DOMContentLoaded', () => {
    const btnNao = document.getElementById('btn-nao');

    document.addEventListener('mousemove', (event) => {
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        const btnRect = btnNao.getBoundingClientRect();
        const btnX = btnRect.left + btnRect.width / 2;
        const btnY = btnRect.top + btnRect.height / 2;
        const distance = Math.hypot(mouseX - btnX, mouseY - btnY);

        const moveDistance = 100; // Distância máxima que o botão vai se mover
        const maxDistance = 200; // Distância máxima do cursor onde o botão começa a se mover

        if (distance < maxDistance) {
            const angle = Math.atan2(mouseY - btnY, mouseX - btnX);
            const offsetX = Math.cos(angle) * moveDistance;
            const offsetY = Math.sin(angle) * moveDistance;
            btnNao.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        } else {
            btnNao.style.transform = 'translate(0, 0)';
        }
    });
});
