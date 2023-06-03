"use strict"

    var miTablaBody = document.getElementById("miTablaBody");
    var total = document.getElementById("total");
    var items = [];

    let botonAdd = document.querySelector("#btnAdd");
    botonAdd.addEventListener("click", agregarItem);    

    let botonBorr = document.querySelector("#btnBorr");
    botonBorr.addEventListener("click", eliminarItem);  

    let botonBorrTodo = document.querySelector("#btnBorrTodo");
    botonBorrTodo.addEventListener("click", eliminarTodo);  

    let botonAdd3 = document.querySelector("#btnAdd3");
    botonAdd3.addEventListener("click", agregarTres);  

    function agregarItem() {
      var nombre = document.getElementById("nombre").value;
      var cantidad = document.getElementById("cantidad").value;
      var precio = document.getElementById("precio").value;
      var subtotal = cantidad * precio;

      var item = {
        "nombre": nombre,
        "cantidad": cantidad,
        "precio": precio,
        "subtotal": subtotal
      };

      items.push(item);

      var nuevaFila = miTablaBody.insertRow(-1);
      var celdaNombre = nuevaFila.insertCell(0);
      var celdaCantidad = nuevaFila.insertCell(1);
      var celdaPrecio = nuevaFila.insertCell(2);
      var celdaSubtotal = nuevaFila.insertCell(3);

      celdaNombre.innerHTML = item.nombre;
      celdaCantidad.innerHTML = item.cantidad;
      celdaPrecio.innerHTML = item.precio;
      celdaSubtotal.innerHTML = item.subtotal;
     

      actualizarTotal();
    }

    
    function eliminarItem(indice) {
        items.splice(indice, 1);
        miTablaBody.deleteRow(indice);
        actualizarTotal();
      }
 

      
    function eliminarTodo(){
        items = [];

    // Eliminar todas las filas de la tabla
    while (miTablaBody.firstChild) {
            miTablaBody.removeChild(miTablaBody.firstChild);
    }

    // Reiniciar el total
    total.innerHTML = 0;

    }  

    function agregarTres(){
        var itemsAutomaticos = [
            { nombre: "Remera Rosa Pastel", cantidad: 1, precio: 0 },
            { nombre: "Gorro animal print", cantidad: 1, precio: 0 },
            { nombre: "Medias 3/4", cantidad: 1, precio: 0 }
          ];
        
          for (let i = 0; i < itemsAutomaticos.length; i++) {
            let item = itemsAutomaticos[i];
            let subtotal = 0;
        
            items.push(item);
        
            let nuevaFila = miTablaBody.insertRow(-1);
            let celdaNombre = nuevaFila.insertCell(0);
            let celdaCantidad = nuevaFila.insertCell(1);
            let celdaPrecio = nuevaFila.insertCell(2);
            let celdaSubtotal = nuevaFila.insertCell(3);
    
        
            celdaNombre.innerHTML = item.nombre;
            celdaCantidad.innerHTML = item.cantidad;
            celdaPrecio.innerHTML = item.precio;
            celdaSubtotal.innerHTML = subtotal;
            
          }
        
    }


    function actualizarTotal() {
      var totalValor = 0;

      for (var i = 0; i < items.length; i++) {
        totalValor += items[i].subtotal;
      }

      total.innerHTML = totalValor;
    }

   