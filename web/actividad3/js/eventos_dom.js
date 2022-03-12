let col_len = 2
let row_len = 2 

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

function insertRows(){
    // obtenemos la referencia de la tabla  y creamos la nueva columna 
    let table = document.querySelector("tbody")
    let col = document.createElement("tr")
    let row
    let txt

    for (let j = 1; j <= row_len; j++) {
        row = document.createElement("td")
        txt = document.createTextNode(`Row ${col_len+1} column ${j}`)
        
        row.appendChild(txt)
        col.appendChild(row)
    }         
    col_len++
    table.appendChild(col)
}

function main(){
    mouseTrack()
}

