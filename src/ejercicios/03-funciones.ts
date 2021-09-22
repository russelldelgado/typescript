/*
    ===== Código de TypeScript =====
*/


function sumar(a:number,b:number){
    return (a + b);
};

const valor : number = sumar(10,30);

//creamos una funcion de flecha 

const sumarFlecha = (a : number , b : number) : number => { return a + b}
//podemos trabajar con valores obligatorios , opcionales y por defecto colocados en el mismo orden para que no de errores

const multiplicar = (number  :number , otroNumero?:number , base:number = 20 ) : number =>{return number * base * otroNumero};

console.log(valor);



//vamos a crear funciones con objetos como argumentos
//toda función que no retorne nada retorna undefined
//en este caso indicamos que le vamos a pasar un personaje y le vamos a decir cuanto lo queremos curar

function curar(personaje : PersonajeLor , curarx:number ):void{
    personaje.hp += curarx;
    console.table(personaje);
}

interface PersonajeLor {
    hp : number;
    habilidades: string[];
    nombre : string;
    puebloNatal : string;
    mostrarHp : () =>void; //con esto indicamos que tenemos una función creada que no devuelve nada

}

var russellPersonaje : PersonajeLor = {
    habilidades : [],
    hp : 200,
    nombre : 'russell delgado muñoz',
    puebloNatal : 'ecuador manabi el carmen',
    mostrarHp  (){
        console.log('Puntos de vida' , this.hp);
    }
};


curar(russellPersonaje , 500);

russellPersonaje.mostrarHp();
