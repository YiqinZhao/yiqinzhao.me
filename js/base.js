window.onload = function () {
  document.body.style.opacity = 1
}

window.onscroll = function () {
  const header = document.getElementById('header')

  if (window.scrollY > 0) {
    if (!header.classList.contains('header-shadow')) {
      header.classList.add('header-shadow')
    }
  } else header.classList.remove('header-shadow')
}
