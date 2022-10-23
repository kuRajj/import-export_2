import './index.css';
document.querySelector('.cookie-consent').style.display = localStorage.getItem('style.display');
const cookieBtn = document.querySelector('.cookie-consent__button');

cookieBtn.addEventListener('click', () => {
    localStorage.setItem('style.display', 'none');
    document.querySelector('.cookie-consent').style.display = localStorage.getItem('style.display');
})