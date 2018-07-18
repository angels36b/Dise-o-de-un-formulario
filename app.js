class product{ //clase para el producto
    constructor(name, price, year){ //metodo contructor
   this.name= name;
   this.price= price;
   this.year= year;
    }
}

class UI{ //clase de la interfaz. la iterfaz accede al html
    addproduct(producte){
       const productList = document.getElementById('product-list');
       const element = document.createElement("div"); //dentro del div agrefo el producto
       element.innerHTML = "<div class='card text-center mb-4'> <div class='card-body'> <strong> product Name </strong>:${product.name}  <strong> product Price </strong> :${product.price} <strong> product Year </strong> :${product.year} </div>  </div>  " ;
       productList.appendChild(element)
       
       
       

      
    }//esta clase viene de boostrap, el contenido estara centrado y cada tarjeta tendra un marjen de 4
    
    deleteProduct(){

    }

    showMessage(){
        
    }

}
//DOM EVENT
//COLOCAMOS EVENTO DE TIPO SUBMIT
document.getElementById('product-form').addEventListener('submit', function(evita) { 

const name = document.getElementById('name').value;
const price = document.getElementById('price').value;
const year = document.getElementById('year').value;
console.log(name,price,year);
const producte (new product(name, price, year)); //los datos creados se convierten en un objeto unico
const ui = new UI(); //Creamos una nueva instancia de la clase ui
ui.addproduct(producte);
evita.preventDefault(); //evita el refrescamiento por defecto de la pagina
})
     
