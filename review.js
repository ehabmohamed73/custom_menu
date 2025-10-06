let selectedRating = 0;

function openModal() {
    document.getElementById('reviewModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('reviewModal').classList.remove('active');
    document.body.style.overflow = 'auto';
    resetForm();
}

function closeModalOnOverlay(event) {
    if (event.target.id === 'reviewModal') {
        closeModal();
    }
}

function setRating(rating) {
    selectedRating = rating;
    const stars = document.querySelectorAll('.star');
    const ratingTexts = {
        1: 'سيء جداً',
        2: 'سيء',
        3: 'متوسط',
        4: 'جيد',
        5: 'ممتاز'
    };

    stars.forEach(star => {
        const starRating = parseInt(star.dataset.rating);
        if (starRating <= rating) {
            star.classList.add('active');
        } else {
            star.classList.remove('active');
        }
    });

    document.getElementById('ratingText').textContent = ratingTexts[rating];
    document.getElementById('submitBtn').disabled = false;
}

function submitReview(event) {
    event.preventDefault();

    if (selectedRating === 0) {
        alert('الرجاء اختيار تقييم');
        return;
    }

    const formData = {
        rating: selectedRating,
        name: document.getElementById('nameInput').value,
        email: document.getElementById('emailInput').value,
        review: document.getElementById('reviewText').value
    };

    console.log('تم إرسال المراجعة:', formData);

    // عرض رسالة النجاح
    document.getElementById('successMessage').classList.add('show');

    // إخفاء الرسالة وإغلاق النافذة بعد 2 ثانية
    setTimeout(() => {
        closeModal();
    }, 2000);
}

function resetForm() {
    document.getElementById('reviewForm').reset();
    selectedRating = 0;
    document.querySelectorAll('.star').forEach(star => {
        star.classList.remove('active');
    });
    document.getElementById('ratingText').textContent = 'اختر تقييمك';
    document.getElementById('successMessage').classList.remove('show');
    document.getElementById('submitBtn').disabled = false;
}

// إغلاق النافذة عند الضغط على مفتاح Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});