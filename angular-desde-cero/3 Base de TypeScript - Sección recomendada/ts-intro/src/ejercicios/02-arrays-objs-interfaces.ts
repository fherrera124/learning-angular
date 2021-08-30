

console.log('Hola Mundo!');

/*
    ===== Código de TypeScript =====
*/

let habilidades = [3,5,"string",true,[]] // (string | number | boolean | any[])[]


console.log(habilidades)


let test: (boolean | number)[] = [12,56.3]

test.push(false)

console.log(test[2]) // should return false


interface Personaje {
    nombre:string;
    habilidades:string[];
    casado:boolean;
    paisNatal?:string;
}


const personaje:Personaje = {
    nombre: "Jorge",
    habilidades: ["java", "python", "docker"],
    casado: false
}

personaje.paisNatal = "Argentina"


console.table(personaje)