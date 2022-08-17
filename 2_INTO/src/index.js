console.log(_.difference([1, 2, 3], [4, 5, 2]))

function createButton() {
  const btn = document.createElement('button')
  btn.innerHTML = 'Lazy loading'

  document.querySelector('body').appendChild(btn)

  btn.onclick = (e) =>
    import('./lazy').then((module) => {
      const lazy = module.default

      lazy()
    })
}

createButton()
