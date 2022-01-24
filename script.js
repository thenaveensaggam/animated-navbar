let openEl = document.querySelector('.open');
let closeEl = document.querySelector('.close');
let containerEl = document.querySelector('.container');

openEl.addEventListener('click', () => {
   containerEl.classList.add('show-nav');
   closeEl.style.display = 'block';
   openEl.style.display = 'none';
});

closeEl.addEventListener('click', () => {
    containerEl.classList.remove('show-nav');
    closeEl.style.display = 'none';
    openEl.style.display = 'block';
});