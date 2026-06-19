const list = document.querySelector('.directions-list');
if (list) {
  list.addEventListener('wheel', (e) => {
    e.preventDefault();
    list.scrollLeft += e.deltaX || e.deltaY;
  }, { passive: false });
}



