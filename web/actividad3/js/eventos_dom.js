function mouseTrack(){
    let bd = document.querySelector("body")
    bd.addEventListener("mouseover", (event) => {
        document.querySelector("#mousePosition").innerHTML = `Posición del mouse:  X: ${event.clientX}, Y: ${event.clientY}`
    })
}

function getFormvalue(event){
    // Evitar que se recarge la pagina cuando se clicka submit
    event.preventDefault() 

    //Leer las entradas
    let inputs = document.querySelector("#form1")
    let fname = inputs["fname"].value
    let lname = inputs["lname"].value
    
    // Crear el bloque a insertar 
    let div_ap = document.createElement("div")
    div_ap.setAttribute("id", "div_form")
    div_ap.appendChild(document.createTextNode(`${fname} ${lname}`))
    
    // Insetar debajo del form
    let cont = document.querySelector("#ex2")
    cont.appendChild(div_ap)

    // Limpiar el form
    inputs.reset()
}

function main(){
    mouseTrack()
}
