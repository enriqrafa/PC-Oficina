//Solicitar el peso de las 4 personas que ingresan a un ascensor
//Si el total del peso supera los 390kg, dar aviso ya que excede la capacidad
//sino imprimir el mensaje "Pueden Subir"

/* let persona1 = parseInt(prompt("Introduzca peso de persona 1"))
let persona2 = parseInt(prompt("Introduzca peso de persona 2"))
let persona3 = parseInt(prompt("Introduzca peso de persona 3"))
let persona4 = parseInt(prompt("Introduzca peso de persona 4"))
let total

do{
    total = persona1+persona2+persona3+persona4
    if(total<390)
    alert("Pueden subir")
    persona1 = parseInt(prompt("Introduzca peso de persona 1"))
    persona2 = parseInt(prompt("Introduzca peso de persona 2"))
    persona3 = parseInt(prompt("Introduzca peso de persona 3"))
    persona4 = parseInt(prompt("Introduzca peso de persona 4"))
}while(total<390)
alert("Excede la capacidad")
 */

/* 
let var1 = parseInt(prompt("Introduzca un número"))
let var2 = prompt("Introduzca una palabra")
let var3

for(let i = 1 ; i<11 ; i++){
    var3= var1*i
    console.log("Tu palabra fue "+var2+". Tu número multiplicado por el ciclo es: "+var3)
}

 */
/* 
let var1 = prompt("Intruduzca texto")

while(var1 != "ESC"){
    var1 = prompt("Intruduzca texto")
    switch(var1){
        case "Casa":
            console.log("Reconozco Casa")
            break
        case "Carro":
            console.log("Reconozco Carro")
            break
        case "Trabajo":
            console.log("Reconozco Trabajo")
            break
        default:
            console.log("No reconozco la palabra")
    }
}
console.log("Gracias por participar") */

let var1 = parseInt(prompt("Introduzca un número"))

do{
    
    for(let i = 0 ; i<var1; i++){
    console.log("Hola")
    }
    var1 = parseInt(prompt("Introduzca un número"))
}while(var1!=999)




