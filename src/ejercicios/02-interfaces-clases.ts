/*
    ===== Código de TypeScript =====
*/



//las [] significa que es un arreglo , el any indica que hay que meter lo que sea ...
let habilidades : (boolean |string | number)[] = [2, 'fernando' , false , 3 ];
let habilidades2 : string[] = ["2", 'fernando' , "false" ," 3" ];

//nuestro objetivo es que no coja any si no solo el tipo de dato que nosotro queremos


let otrasHabilidades = ['fuerza' , 'bash' , 'center' , 'healding'];

otrasHabilidades.push('fasdf');



//una interfaz es algo que nosotros creamos para que una clase funcione como nosotros queramos

interface Personaje{
    nombre : string;
    hp :number ;
    habilidades : string[];
    puebloNatal? : string; //con esto indicamos que pueblo natal es algo opcional y que si no viene tampoco pasa nada
}


//const y let son usados para inicializar varibales.

const personaje :Personaje = {
    nombre : 'russell',
    hp : 200,
    habilidades : ['fuerza' , 'calistenia' , 'headling'],
};

personaje.puebloNatal = "ecuador ";


console.table(personaje);