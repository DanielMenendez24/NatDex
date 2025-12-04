document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.gen-btn');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const gen = button.getAttribute('data-gen');
            const regionName = button.textContent;
            console.log(`Navigating to Generation ${gen}: ${regionName}`);

            // Navigate to the generation page
            window.location.href = `gen${gen}.html`;
        });
    });
});
