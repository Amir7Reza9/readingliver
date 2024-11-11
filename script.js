document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var email = document.getElementById('email').value;
    
    if (email) {
        alert('ایمیل شما با موفقیت ثبت شد: ' + email);
        // اینجا می‌توانید کدی برای ارسال ایمیل به سرویس مورد نظر (مثل Mailchimp) قرار دهید.
    } else {
        alert('لطفاً ایمیل خود را وارد کنید');
    }
});
