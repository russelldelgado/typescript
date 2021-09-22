//encadenamiento opcional

interface Pasajero{
    nombre :string;
    hijos? : string[]; //utilizamos el ? para indicar que este valor es opcional
}


const pasajero1 : Pasajero  = {nombre : 'russell'};
const pasajero2 : Pasajero  = {nombre : 'melisa' , hijos : ['pepe' , 'juna' , 'maria']};


function imprimeHijos(pasajero : Pasajero) : void{
                                                            //si por alguna razon el valor es undefined colocaremos cero en el numero de hijos
        const cuantosHijos  = pasajero.hijos?.length || 0; //el ? en este caso me sirve para indicar que si la propiedad es undefined que no me realize lo siguiente


        console.log('numero de hijos : ' , cuantosHijos);

}

imprimeHijos(pasajero1);
imprimeHijos(pasajero2);