document.addEventListener('DOMContentLoaded', function() {
    // --- Extra 3: Toggle Mobile Menu ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', function() {
        // Thêm/Xóa class 'active' để hiện/ẩn menu mobile
        navLinks.classList.toggle('active');
    });

    // --- Extra 4: Button Action ---
    const actionBtn = document.getElementById('action-btn');

    actionBtn.addEventListener('click', function() {
        alert('Cảm ơn bạn đã nhấn! Hành động JavaScript đã được kích hoạt thành công.');
    });

    // Đảm bảo các link điều hướng đóng menu sau khi click (trên mobile)
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
            }
        });
    });
});
