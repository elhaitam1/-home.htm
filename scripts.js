const languageBtn = document.getElementById('language-btn');

languageBtn.addEventListener('click', () => {
  if (languageBtn.textContent === 'عربي') {
    document.documentElement.lang = 'en';
    document.documentElement.dir = 'ltr';
    languageBtn.textContent = 'English';
    document.querySelector('.site-name').textContent = 'InvestLink';
    document.querySelector('.container h1').textContent = 'Welcome to InvestLink';
    document.querySelector('.container p').textContent = 'Your platform for smart investment and easy project management.';
    document.querySelectorAll('.nav-links a')[0].textContent = 'Home';
    document.querySelectorAll('.nav-links a')[1].textContent = 'Projects';
    document.querySelectorAll('.nav-links a')[2].textContent = 'Contact';
    document.querySelectorAll('.nav-links a')[3].textContent = 'Login';
  } else {
    document.documentElement.lang = 'ar';
    document.documentElement.dir = 'rtl';
    languageBtn.textContent = 'عربي';
    document.querySelector('.site-name').textContent = 'InvestLink';
    document.querySelector('.container h1').textContent = 'مرحبا بك في InvestLink';
    document.querySelector('.container p').textContent = 'منصتك للاستثمار الذكي وإدارة المشاريع بسهولة وأمان.';
    document.querySelectorAll('.nav-links a')[0].textContent = 'الرئيسية';
    document.querySelectorAll('.nav-links a')[1].textContent = 'المشاريع';
    document.querySelectorAll('.nav-links a')[2].textContent = 'التواصل';
    document.querySelectorAll('.nav-links a')[3].textContent = 'تسجيل الدخول';
  }
});