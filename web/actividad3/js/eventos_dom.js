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
    // incrementar el nuemero de filas en la tabla
    row_len++

    // obtenemos la referencia de la tabla  y creamos la nueva columna 
    let table = document.querySelector("tbody")
    let col = document.createElement("tr")
    let row
    let txt

    // Añadimos las filas de acuerdo al numero de columnas
    for (let j = 1; j <= col_len; j++) {
        row = document.createElement("td")
        txt = document.createTextNode(`Row ${row_len} column ${j}`)
        
        row.appendChild(txt)
        col.appendChild(row)
    }         
    
    // añadimos la columna ya con las filas
    table.appendChild(col)
}

function insertColumns(){
    //Incrementar el numero de columnas
    col_len++

    // obtenemos la referencia de la tabla
    let table = document.querySelector("tbody")
    let col
    let txt

    // Añadimos cada nueva fila para la nueva comuna creada
    for (let i = 0; i < table.rows.length; i++) {
        col = document.createElement("td")
        txt = document.createTextNode(`Row ${i+1} column ${col_len}`)

        col.appendChild(txt)

        table.rows[i].appendChild(col)
    }
}

function main(){
    mouseTrack()
}

