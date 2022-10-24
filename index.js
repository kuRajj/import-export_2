import './index.css';
const cookieBtn = document.querySelector('.cookie-consent__button');
const cookieConsent = document.querySelector('.cookie-consent');
const ItemInlocalStorage = localStorage.getItem('visibility');

if(ItemInlocalStorage) {
    cookieConsent.classList.add(ItemInlocalStorage);
}

cookieBtn.addEventListener('click', () => {
    localStorage.setItem('visibility', 'hide');
    cookieConsent.classList.add(localStorage.getItem('visibility'));
})