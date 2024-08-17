document.querySelectorAll('.switch-tab').forEach(tab => {
    tab.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelectorAll('.auth-container').forEach(container => {
            container.style.display = container.style.display === 'none' ? 'flex' : 'none';
        });
    });
});
