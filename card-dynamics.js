document.querySelectorAll('[data-bg]').forEach(el => {
  el.style.backgroundImage = `url('${el.getAttribute('data-bg')}')`;
  console.log(`url('${el.getAttribute('data-bg')}')`)
});
