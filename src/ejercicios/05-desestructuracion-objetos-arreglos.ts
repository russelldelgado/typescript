
interface Reproductor{
    volumen : number;
    segundo : number ;
    cancion : string;
    detalles : Detalles;
}

interface Detalles{
    autor : string;
    anio : number;
}

var reproductor : Reproductor = {
    cancion: 'primera cancion',
    segundo:23,
    volumen:34,
    detalles : {
        anio : 2000,
        autor : 'russelll'
    }
}


//vamos a aprender a desestructurar los dato
//con esto le digo toma el objeto reproductor y coje las siguientes propiedades

const { cancion , segundo , volumen , detalles } = reproductor;
const { anio , autor }  = detalles;

//podemos tambien desestructurar todo en una sola linea para eso solo tengo que poner los  : abrir corchetes y ya dentro meter el resto de datos
// const { cancion , segundo , volumen , detalles :{ autor , anio }} = reproductor;
//tambien podemos darle otro nombre a la hora de extraerlo para que no vayamos a tener problemas si tenemos algguna otra propiedad que se llame igual que esa.
// const { cancion , segundo , volumen , detalles :{ autor:autorDetalle , anio:esteEsElAnio.... }} = reproductor;


//con esto tenemos todos los datos independientes sin tener que poner antes de cada dato la palabra reproductor.cancion , reproductor.......
console.log(reproductor);



//vamos a trabjar con la desustructuracion de arreblos


const dbz : string[] = ['goku' , 'vegeta' , 'trunk'];
//tenemos que tener encuenta que para desestructurar objetos lo hacemos con llaves pero para desestructurar arrays lo hacemos con [] corchetes
//en la desestructuración de arrays lo importante no es el nombre si no la posicion
const [nombre1 , nombre2 , nombre3] = dbz;

console.log('personaje : ' , dbz[0]);  
console.log('personaje : ' , dbz[1]);  
console.log('personaje : ' , dbz[2]);  

console.log('personaje : ' , nombre1);  
console.log('personaje : ' , nombre2);  
console.log('personaje : ' , nombre3);  
