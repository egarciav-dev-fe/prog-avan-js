import Animal from "./Animal.js"

// Clase hija
class Serpiente extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido)
  }
  sisear() {
    console.log(this.sonido)
  }
}

export { Serpiente }
