export interface Producto{
    desc:string;
    precio : number;
}


const telefono :Producto ={
    desc : 'telefono nokia',
    precio : 234,
}


const tablet :Producto ={
    desc : 'tableta samsung',
    precio : 100,
}


export function calculaISV(productos : Producto[]) : [number ,number]{
    let total  = 0 ; //Esto lo pongo como let y no como constante porque es algo que va a variar y no sera constante 
    productos.forEach((producto) =>{ //podemos desestructurar el precio directamtne en la funcion metiendo { precio } si es lo unico que necesitamos 

        total += producto.precio;

    });

    return [ total , total * 0.15];

}

const articulos = [telefono , tablet];

//ahora puedo desestructurar para devolver lo que yo quiera en este caso un array con el total y el impuesto sobre la venta del producto


const [total , isv]  = calculaISV(articulos)



 console.log('el impuesto sobre ventas es : ' ,  isv );  
 console.log('el total es : : ' ,  total );  

