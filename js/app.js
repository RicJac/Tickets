
//alert ("hola mundo")


//function calcularTotal() {

function kalk() {
    const cantidad = parseInt(document.getElementById('cantidad').value);
    const categoria = document.getElementById('inputState').value;
    
    let descuento = 0 ;
    if (categoria == 'estudiante') {
        descuento = 0.8;
    
    }
     else if (categoria == 'trainee') {
        descuento = 0.5;
    
    } else if (categoria == 'junior') {
        descuento = 0.15;
    
    } 

    const totalPagar = cantidad * 200 * (1 - descuento)
    var x = document.getElementById("myText").value = "Total a pagar $  " + totalPagar.toFixed(2);
    }



