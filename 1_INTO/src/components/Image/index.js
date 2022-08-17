import pandaJpg from '../../img/panda.jpg'

export class Image {
  insertImage() {
    const img = document.createElement('img')
    img.src = pandaJpg
    img.width = 200

    document.querySelector('body').appendChild(img)
  }
}
