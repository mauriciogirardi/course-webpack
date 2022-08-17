import './button.scss'

export class Button {
  createButton(title) {
    const button = document.createElement('button')
    button.textContent = title

    button.classList.add('btn')

    document.querySelector('body').appendChild(button)
  }
}
