



function calcularTotal() {

const cantidadInput          = document.getElementById.value("cantidad");
const categoriaInput         = document.getElementById.value('categoria');
const totalPagarContainer    = document.getElementById.value('total-pagar');

let descuento = 0 ;
if (categoria === 'estudiante') {
    descuento = 0.8;

}
 else if (categoria === 'trainee') {
    descuento = 0.5;

} else if (categoria === 'junior') {
    descuento = 0.15;

} 


const totalPagar = cantidadInput * 200 * (1 - descuento)
document.getElementById("total-pagar").value = "cantidadInput"
// totalPagarContainer.textContent = "Total a Pagar: $" + totalPagar.toFixed(2)

}

function kalk() {
    var x = document.getElementById("myText").value = "Total a pagar $ 50 ";
    }



