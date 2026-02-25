// انیمیشن‌های سبک و بهینه
document.addEventListener('DOMContentLoaded', function() {
    // افزودن افکت hover به کارت‌ها
    const actionCards = document.querySelectorAll('.action-card');
    
    actionCards.forEach(card => {
        // افکت hover نرم
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transition = 'all 0.3s ease';
        });
        
        // افکت کلیک موجی (سبک)
        card.addEventListener('click', function(e) {
            // حذف موج‌های قبلی
            const existingRipple = this.querySelector('.ripple-effect');
            if (existingRipple) {
                existingRipple.remove();
            }
            
            // ایجاد موج جدید
            const ripple = document.createElement('span');
            ripple.className = 'ripple-effect';
            
            // محاسبه موقعیت کلیک
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            // استایل‌دهی موج
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.15);
                width: ${size}px;
                height: ${size}px;
                top: ${y}px;
                right: ${x}px;
                transform: scale(0);
                animation: rippleAnimation 0.6s ease-out;
                pointer-events: none;
                z-index: 1;
            `;
            
            this.appendChild(ripple);
            
            // حذف موج بعد از انیمیشن
            setTimeout(() => {
                if (ripple.parentNode === this) {
                    ripple.remove();
                }
            }, 600);
        });
    });
    
    // اضافه کردن استایل برای انیمیشن موج
    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = `
        @keyframes rippleAnimation {
            0% {
                transform: scale(0);
                opacity: 1;
            }
            100% {
                transform: scale(2.5);
                opacity: 0;
            }
        }
        
        .action-card {
            position: relative;
            overflow: hidden;
        }
        
        .ripple-effect {
            position: absolute;
        }
    `;
    document.head.appendChild(rippleStyle);
    
    // افکت اسکرول پارالاکس (سبک)
    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                const scrolled = window.pageYOffset;
                const heroSection = document.querySelector('.header-section');
                
                if (heroSection && scrolled < 500) {
                    heroSection.style.transform = `translateY(${scrolled * 0.05}px)`;
                }
                
                ticking = false;
            });
            
            ticking = true;
        }
    });
    
    // انیمیشن لودینگ صفحه
    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.4s ease';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 50);
    });
    
    // افزودن افکت تایپ برای تیتر (اختیاری)
    const highlightText = document.querySelector('.highlight');
    if (highlightText) {
        highlightText.style.animation = 'glowPulse 3s infinite';
    }
});

// تابع کپی آیدی به کلیپ‌بورد
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
        // نمایش بازخورد
        const copyBtn = event.target.closest('.copy-btn');
        if (copyBtn) {
            const originalText = copyBtn.innerHTML;
            copyBtn.innerHTML = '<i class="fas fa-check"></i> کپی شد!';
            copyBtn.classList.add('copied');
            
            setTimeout(() => {
                copyBtn.innerHTML = originalText;
                copyBtn.classList.remove('copied');
            }, 2000);
        }
        
        // نمایش نوتیفیکیشن ملایم
        showNotification('آیدی با موفقیت کپی شد!');
    }).catch(function(err) {
        console.error('خطا در کپی کردن: ', err);
        showNotification('خطا در کپی کردن!', 'error');
    });
}

// تابع نمایش نوتیفیکیشن
function showNotification(message, type = 'success') {
    // حذف نوتیفیکیشن قبلی اگر وجود دارد
    const oldNotification = document.querySelector('.notification');
    if (oldNotification) {
        oldNotification.remove();
    }
    
    // ایجاد نوتیفیکیشن جدید
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(notification);
    
    // نمایش نوتیفیکیشن
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // حذف خودکار بعد از 3 ثانیه
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 3000);
}

// اضافه کردن استایل نوتیفیکیشن
const notificationStyle = document.createElement('style');
notificationStyle.textContent = `
    .notification {
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: var(--card-bg);
        backdrop-filter: blur(10px);
        border: 1px solid var(--border-color);
        border-radius: 12px;
        padding: 15px 20px;
        display: flex;
        align-items: center;
        gap: 12px;
        color: var(--text-primary);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
        transform: translateY(100px);
        opacity: 0;
        transition: all 0.3s ease;
        z-index: 1000;
        max-width: 350px;
    }
    
    .notification.show {
        transform: translateY(0);
        opacity: 1;
    }
    
    .notification.success {
        border-right: 4px solid var(--accent-green);
    }
    
    .notification.error {
        border-right: 4px solid var(--accent-red);
    }
    
    .notification i {
        font-size: 1.3rem;
    }
    
    .notification.success i {
        color: var(--accent-green);
    }
    
    .notification.error i {
        color: var(--accent-red);
    }
    
    .notification span {
        font-size: 0.95rem;
    }
    
    @media (max-width: 768px) {
        .notification {
            bottom: 20px;
            right: 20px;
            left: 20px;
            max-width: none;
        }
    }
`;
document.head.appendChild(notificationStyle);