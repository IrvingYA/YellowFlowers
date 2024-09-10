document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('animation-container');
    const centralFlower = document.querySelector('.central-flower');

    function createFlower() {
        const flower = document.createElement('div');
        flower.classList.add('flower');

        // Limitar el área donde pueden aparecer las flores
        const containerRect = container.getBoundingClientRect();
        const centralFlowerRect = centralFlower.getBoundingClientRect();

        let top, left;
        do {
            top = Math.random() * (containerRect.height - 50); // Ajustar para que no se salga del margen
            left = Math.random() * (containerRect.width - 50); // Ajustar para que no se salga del margen
        } while (
            top > centralFlowerRect.top - containerRect.top - 50 &&
            top < centralFlowerRect.bottom - containerRect.top &&
            left > centralFlowerRect.left - containerRect.left - 50 &&
            left < centralFlowerRect.right - containerRect.left
        );

        flower.style.top = `${top}px`;
        flower.style.left = `${left}px`;
        container.appendChild(flower);

        setTimeout(() => {
            flower.remove();
        }, 2000); // Eliminar la flor después de 2 segundos
    }

    setInterval(createFlower, 500); // Crear una flor cada 0.5 segundos
});
