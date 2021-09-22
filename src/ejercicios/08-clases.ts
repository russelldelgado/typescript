//clases en typescript



//la principal diferencia entre un interfaz y una clase , es que las interfaces no existen en javascript y no aparecen , pero las clases si que aparecen cuando el codigo se transpila.

//la principal diferencia entre una clase y una interfaz es que en las interfaces no puedo definir mis propiedades o metodos , solo puedo delclararlas y los encargados de implementarlas son las variables o clases que la extiendan
//en las classes puedo implementar mis propios métodos y puedo utilizar los atributos y metodos que cree dentro de estas mismas

//cuando no indicamos si un atributo es de tipo publico , privado o estático , siempre será publico 

//que es eso de extender una clase 
class PersonaNormal{
    constructor(public nombre:string , public direccion:string ){}
}


class Heroe extends PersonaNormal{
    constructor(public alterEgo : string , public edad? : number,  public nombreReal? : string){
        //el llamado al super es necesario cuando extendemos una clase , ya que tenemos que indicar las propiedades del padre
        super(nombreReal , 'new york'); //esto es como decir llama al constructor de persona normal

    };

}


var miHeroe : Heroe = new Heroe('ironman' , 34 , 'russell delgado muñoz');
console.table(miHeroe);


var miHeroe : Heroe = new Heroe('NOmbre real' , 34 , 'jhoel');
console.table(miHeroe);
