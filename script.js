function toggleSubmenu(event) {
    event.preventDefault();
    const submenu = event.target.nextElementSibling;
    submenu.style.display = submenu.style.display === "block" ? "none" : "block";
}
document.addEventListener('click', (e) => {
    if (!e.target.closest('.menu-item')) {
        document.querySelectorAll('.submenu').forEach(sub => {
            sub.style.display = 'none';
        });
    }
});

document.querySelectorAll('.details-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const card = this.closest('.catalog-card');
        const title = card.querySelector('.catalog-card-header').textContent;

        // Заполняем модальное окно данными из карточки
        document.getElementById('modalTitle').textContent = title;

        // Показываем модальное окно
        document.getElementById('productModal').style.display = 'block';
    });
});

document.addEventListener('click', function(event) {
    const modal = document.getElementById('productModal');

    // Закрытие по крестику
    if (event.target.classList.contains('close-modal')) {
        modal.style.display = 'none';
    }

    // Закрытие по клику вне окна
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        document.getElementById('productModal').style.display = 'none';
    }
});

document.querySelector('.contact-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Форма отправлена! Мы свяжемся с вами в ближайшее время.');
    this.reset();
});