class Product{ //clase para el producto
    constructor(name, price, year){ //metodo contructor
   this.name= name;
   this.price= price;
   this.year= year;
    }
}

class UI{ //clase de la interfaz. la iterfaz accede al html
    addproduct(product){
       const productList = document.getElementById('product-list');
       const element = document.createElement('div'); //dentro del div agrefo el producto
       element.innerHTML="<div class ='card text-center mb-4'> <div class='card-body'> <strong> product Name </strong>: "+product.name+" <strong> product Name </strong> : "+product.price+"  <strong> product Price </strong> : "+product.year +" <a href='#' class='btn btn-danger' name=delate>Delate</a>   </div> </div> ";
             
             //  
             //  ///Llama el objeto producto
              
              //
        
        
        //<strong> product Year </strong> :${product.year} 
       productList.appendChild(element)
       this.resetform();
       
    

      
    }//esta clase viene de boostrap, el contenido estara centrado y cada tarjeta tendra un marjen de 4
    resetform(){
        document.getElementById('product-form').reset();
    }

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
//console.log(name,price,year);
const ui = new UI(); //Creamos una nueva instancia de la clase ui
const product=(new Product(name, price, year)); //los datos creados se convierten en un objeto unico
ui.addproduct(product); 
evita.preventDefault(); //evita el refrescamiento por defecto de la pagina

})



