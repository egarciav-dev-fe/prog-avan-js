import Animal from "./Animal.js"

// Clase hija
class Leon extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido)
  }
  rugir() {
    console.log(this.sonido)
  }
}

export { Leon }
