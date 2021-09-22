//concepto de los genericos

//me sirve para poder indicarle por ejemplo a una funcion , que el tipo de dato que le pasemos sera el tipo de dato que evolvera

//
function queTIpoSoy<T>(argumento: T){
    return argumento;
}

let soyString = queTIpoSoy('hola munco como estas ');
let soyNumero = queTIpoSoy(200);
let soyArreglo = queTIpoSoy([2 ,3 ,4 ,5 ,3 ,4,45, 5,4 ])

let soyExplicito  = queTIpoSoy<number>(20);

