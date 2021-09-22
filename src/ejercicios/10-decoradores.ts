//decoradores 

//un decorador es algo que expande mi clase añadiendole funcionalidades adicionales

//este es el ejemplo de mi decorador
function classDecorator<T extends { new (...arg : any[]) : {}}>(constructor:T){

    return class extends constructor{
        newProperty = "mi nueva propiedad";
        hello = 'override';
    }
}


@classDecorator
class MiSuperClase {
    public miPropiedad = "abcdkaifekdkl";
    imprimir(){
        console.log(this.miPropiedad);
    }

}


var probandoSUperClase : MiSuperClase = new MiSuperClase();
probandoSUperClase.imprimir();
console.log(probandoSUperClase.miPropiedad);



