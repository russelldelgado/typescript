
interface SuperHeroe{
    nombre :String;
    edad: number;
    direccion : Direccion;
    mostrarDireccion : ()=>string;
}

interface Direccion{
    calle : string;
    pais : string;
    ciudad:string;
}




const superHeroe : SuperHeroe= {
    nombre : 'spiderman',
    edad : 30,
    direccion : {
        calle : 'llana de san juan',
        pais : 'usa',
        ciudad : 'manabi el carmen',
    },
    mostrarDireccion (){
        return this.nombre + ',' + this.direccion.pais + ', ' + this.direccion.ciudad;
    }

}

const direccion = superHeroe.mostrarDireccion();
console.log(direccion);