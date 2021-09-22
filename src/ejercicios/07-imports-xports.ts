//EN typescript para importar algo primero tenemos que exportarlo
//ponemos delante del archivo que queramos exportar export y ya
//cuando importamos otro documento vuelve a ejecutar todo el código que tuvieramos en el otro archivo
//tenemos que tener en cuenta que cuando importemos un archivo el código que este en ese archivo se va a ejecutar , pero las interfaces no .

import './06-desestructuracion-funcion';
import { Producto  , calculaISV } from './06-desestructuracion-funcion';





const carritoCompras : Producto[] =  [
    {
        desc:'esta es la descripción de mi producto',
        precio: 200,
    }  ,
    {
        desc:'esta es la nueva descripcion del otro producto que tneog',
        precio: 874,

    }
];


const [total , isv] =  calculaISV(carritoCompras);

console.table(carritoCompras);
console.log(total ,  isv)


