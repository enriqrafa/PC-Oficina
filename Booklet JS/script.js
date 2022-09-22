/* //Actividad 1
let nombreH = "Homero"
let apellidoH = "Simpson"
let edadH = 43

//Actividad 2
const ciudad1 = "Springfield"
const ciudad2 = "Shelbyville"
const ciudad3 = "Nueva York"
const ciudad4 = "Santiago"
const ciudad5 = "Rancagua"

//Actividad 3
let CodigoLic = "B47U89RE243"
let NombreCompleto = "Bart Simpson"
let Direccion1 = "742 Evergreen Terr."
let Direccion2 = "Springfield, USA"
let Nacimiento = "02-11-70"
let Sexo = "M"
let Altura = "4'0"
let Ojos = "AZ"
let Peso = "85"

console.log("Licencia de Conducir"+"\n"+"Springfield"+"\n\n"+CodigoLic+"\n"+NombreCompleto+"\n"+Direccion1+"\n"+Direccion2+"\n\n"+"Nacimiento "+Nacimiento+"\n"+"Sex   HT   Eyes   WT"+"\n"+Sexo+"     "+Altura+"  "+Ojos+"     "+Peso)

//Actividad 4
let nombre1 = prompt("Ingrese nombre de primer integrante")
let nombre2 = prompt("Ingrese nombre de segundo integrante")
let nombre3 = prompt("Ingrese nombre de tercer integrante")
let nombre4 = prompt("Ingrese nombre de cuarto integrante")
let nombre5 = prompt("Ingrese nombre de quinto integrante")
let familia = nombre1+", "+nombre2+", "+nombre3+", "+nombre4+", "+nombre5

alert("Los integrantes de la familia son: "+familia)

 */

// Tarea de Clase 3

let num1 = parseInt(prompt("Introduzca un número"))

if(num1 > 1000){
    alert("El número ingresado es mayor a 1000")
}
else{
    alert("El número ingresado es menor o igual a 1000")
}

let texto = prompt("Introduzca un texto")

if(texto == "Hola"){
    alert("Escribiste Hola :)")
}
else{
    alert("No escribiste Hola :(")
}

let num2 = parseInt(prompt("Introduzca otro número"))

if(num2 > 10 && num2 < 50){
    alert("Tu número está entre 10 y 50")
}
else{
    alert("Tu número es menor que 10 o mayor que 50")
}