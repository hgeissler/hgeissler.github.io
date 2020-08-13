var smallMe = document.getElementById('smallMe')
var hiddenContainer = document.getElementById('hiddenContainer')

smallMe.onclick = function () {
  hiddenContainer.style.display = 'block'
}

var spanClose = document.getElementById('close')
spanClose.onclick = function () {
  hiddenContainer.style.display = 'none'
}

var footerText = document.getElementById('footerText')
var footerButton = document.querySelector('#footerButton')
footerButton.onmouseover = function () {
  footerText.style.fontSize = '1.1rem'
}
footerButton.onmouseout = function () {
  footerText.style.fontSize = '1rem'
}

window.onload = function () {
  document.onclick = function (e) {
    if (e.target.id !== 'smallMe') {
      hiddenContainer.style.display = 'none'
    }
  }
}

function toggleLinks() {
  let navlinks = document.querySelector('.navlinks')
  navlinks.classList.toggle('navlinksToggleShow')
}

document.querySelector('#burgerMenu').addEventListener('click', toggleLinks)

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    })
    setTimeout(() => {
      toggleLinks()
    }, 100)
  })
})

const footer = document.querySelector('.footer')
function checkPos() {
  let windowY = window.scrollY
  if (windowY < 100) {
    footer.classList.add('is-visible')
    footer.classList.remove('is-hidden')
  } else {
    footer.classList.add('is-hidden')
    footer.classList.remove('is-visible')
  }
}

window.addEventListener('scroll', checkPos)

var vsThemeImage = document.getElementById('vsThemeImg')
vsThemeImage.addEventListener('click', function () {
  var win = window.open(
    'https://marketplace.visualstudio.com/items?itemName=geisslerh.ayu-mirage-bold-italic',
    '_blank'
  )
  if (win) {
    //Browser has allowed it to be opened
    win.focus()
  } else {
    //Browser has blocked it
    alert('Please allow popups for this website')
  }
})
