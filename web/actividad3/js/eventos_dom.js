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
    // Obtenemos la referencia de la tabla  y creamos la nueva columna ([0] es la referencia al tbody)
    let table = document.querySelector("#sampleTable").getElementsByTagName("tbody")[0]
    let col = document.createElement("tr")
    // let row
    // let txt

    // Obtenemos el tamaño actual de las columnas
    let cell_len = table.rows[0].cells.length

    // Añadimos las filas de acuerdo al numero de columnas
    for (let i = 1; i <= cell_len; i++) {
        let row = document.createElement("td")
        let txt = document.createTextNode(`Row ${table.rows.length + 1} column ${i}`)
        
        row.appendChild(txt)
        col.appendChild(row)
    }         
    
    // Añadimos la columna ya con las filas
    table.appendChild(col)
}

function insertColumns(){
    // Obtenemos la referencia de la tabla ([0] es la referencia al tbody)
    let table = document.querySelector("#sampleTable").getElementsByTagName("tbody")[0]
    // let col
    // let txt

    // Obtenemos el tamaño actual de las celdas
    let cell_len = table.rows[0].cells.length

    // Añadimos cada nueva fila para la nueva comuna creada
    for (let i = 0; i < table.rows.length; i++) {
        let col = document.createElement("td")
        let txt = document.createTextNode(`Row ${i+1} column ${cell_len + 1}`)

        col.appendChild(txt)

        table.rows[i].appendChild(col)
    }
}

function changeContent(){
    //Leer las entradas
    let inputs = document.querySelector("#formChangeContent")
    let cell = inputs["cell"].value
    let row = inputs["row"].value
    let txt = inputs["txt"].value

    // Crear el elemento a remplazar
    let node = document.createTextNode(txt)

    // Obtener la referencia a la tabla 
    let table = document.querySelector("#myTable").getElementsByTagName("tbody")[0]
    
    // Remplazamos el texto actual con el nuevo 
    let pos = table.rows[row-1].cells[cell-1]
    pos.replaceChild(node, pos.firstChild)
}

function main(){
    mouseTrack()
}

