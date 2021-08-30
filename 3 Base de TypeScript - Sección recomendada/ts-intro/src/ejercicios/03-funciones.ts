
function sumar(a: number, b: number): number {
    return a + b;
}

const multiplicarFlecha = (a: number, b: number): number => a * b;


function multiplicar(a: number, b?: number, base: number = 10): number {
    return a * base
}


console.log(multiplicar(2, 8))

console.log(multiplicar(2, 8, 2))



const suma = sumar(123, Number("123.2"));

console.log(suma);


interface PersonajeLOR {
    nombre: string
    puntos: number
    mostrarPuntaje: () => void
}


function sumarPuntos(personaje: PersonajeLOR, puntos: number): void {

    personaje.puntos += puntos;
    console.log(personaje);

}


const nuevoPersonaje: PersonajeLOR = {
    nombre: "Isabela",
    puntos: 10,
    mostrarPuntaje() {
        console.log('Puntos de vida: ', this.puntos)
    }

}

sumarPuntos(nuevoPersonaje, 40)

nuevoPersonaje.mostrarPuntaje()