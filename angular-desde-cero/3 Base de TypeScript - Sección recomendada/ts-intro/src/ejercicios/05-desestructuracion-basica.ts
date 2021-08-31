


interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 35,
    cancion: "Mess",
    segundo: 25,
    detalles: {
        anio: 2015,
        autor: "Ed Sheeran"
    }
}

const autor = 'Fulano';
const cancion = 'Cualquiera';

// const { volumen, cancion:tema, segundo, detalles: { autor: autorTema } } = reproductor;  (no muy claro de leer)

const { volumen, cancion: tema, segundo, detalles } = reproductor;

const { autor: autorTema } = detalles;


console.log("El volumen actual es: ", volumen);
console.log("El segundo actual es: ", segundo);
console.log("El cancion actual es: ", tema);
console.log("El autor es: ", autorTema);



const dbz: string[] = ['Goku', 'Vegeta', 'Gohan'];

const [, , p3] = dbz;


console.log('Personaje 1: ', dbz[0]);
console.log('Personaje 2: ', dbz[1]);
console.log('Personaje 3: ', p3);

