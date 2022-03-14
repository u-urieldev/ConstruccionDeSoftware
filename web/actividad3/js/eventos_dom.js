const CSS_COLOR_NAMES = [
    "AliceBlue",
    "AntiqueWhite",
    "Aqua",
    "Aquamarine",
    "Azure",
    "Beige",
    "Bisque",
    "Black",
    "BlanchedAlmond",
    "Blue",
    "BlueViolet",
    "Brown",
    "BurlyWood",
    "CadetBlue",
    "Chartreuse",
    "Chocolate",
    "Coral",
    "CornflowerBlue",
    "Cornsilk",
    "Crimson",
    "Cyan",
    "DarkBlue",
    "DarkCyan",
    "DarkGoldenRod",
    "DarkGray",
    "DarkGrey",
    "DarkGreen",
    "DarkKhaki",
    "DarkMagenta",
    "DarkOliveGreen",
    "DarkOrange",
    "DarkOrchid",
    "DarkRed",
    "DarkSalmon",
    "DarkSeaGreen",
    "DarkSlateBlue",
    "DarkSlateGray",
    "DarkSlateGrey",
    "DarkTurquoise",
    "DarkViolet",
    "DeepPink",
    "DeepSkyBlue",
    "DimGray",
    "DimGrey",
    "DodgerBlue",
    "FireBrick",
    "FloralWhite",
    "ForestGreen",
    "Fuchsia",
    "Gainsboro",
    "GhostWhite",
    "Gold",
    "GoldenRod",
    "Gray",
    "Grey",
    "Green",
    "GreenYellow",
    "HoneyDew",
    "HotPink",
    "IndianRed",
    "Indigo",
    "Ivory",
    "Khaki",
    "Lavender",
    "LavenderBlush",
    "LawnGreen",
    "LemonChiffon",
    "LightBlue",
    "LightCoral",
    "LightCyan",
    "LightGoldenRodYellow",
    "LightGray",
    "LightGrey",
    "LightGreen",
    "LightPink",
    "LightSalmon",
    "LightSeaGreen",
    "LightSkyBlue",
    "LightSlateGray",
    "LightSlateGrey",
    "LightSteelBlue",
    "LightYellow",
    "Lime",
    "LimeGreen",
    "Linen",
    "Magenta",
    "Maroon",
    "MediumAquaMarine",
    "MediumBlue",
    "MediumOrchid",
    "MediumPurple",
    "MediumSeaGreen",
    "MediumSlateBlue",
    "MediumSpringGreen",
    "MediumTurquoise",
    "MediumVioletRed",
    "MidnightBlue",
    "MintCream",
    "MistyRose",
    "Moccasin",
    "NavajoWhite",
    "Navy",
    "OldLace",
    "Olive",
    "OliveDrab",
    "Orange",
    "OrangeRed",
    "Orchid",
    "PaleGoldenRod",
    "PaleGreen",
    "PaleTurquoise",
    "PaleVioletRed",
    "PapayaWhip",
    "PeachPuff",
    "Peru",
    "Pink",
    "Plum",
    "PowderBlue",
    "Purple",
    "RebeccaPurple",
    "Red",
    "RosyBrown",
    "RoyalBlue",
    "SaddleBrown",
    "Salmon",
    "SandyBrown",
    "SeaGreen",
    "SeaShell",
    "Sienna",
    "Silver",
    "SkyBlue",
    "SlateBlue",
    "SlateGray",
    "SlateGrey",
    "Snow",
    "SpringGreen",
    "SteelBlue",
    "Tan",
    "Teal",
    "Thistle",
    "Tomato",
    "Turquoise",
    "Violet",
    "Wheat",
    "White",
    "WhiteSmoke",
    "Yellow",
    "YellowGreen",
]

//Ejercicio 1
function mouseTrack(){
    let bd = document.querySelector("body")
    bd.addEventListener("mouseover", (event) => {
        document.querySelector("#mousePosition").innerHTML = `Posición del mouse:  X: ${event.clientX}, Y: ${event.clientY}`
    })
}

// Ejercicio 2
function editName(event){
    let new_name = prompt("Ingrese el nuevo nombre: ")

    if (new_name != null) {
        event.target.parentNode.firstChild.textContent = new_name
    }
}

function createDivPre(fname, lname){
    // Crear el bloque a insertar
    let div_ap = document.createElement("div")
    div_ap.setAttribute("class", "div_form")

    // Creamos el div que contendra el nombre
    let div_name = document.createElement("div")
    div_name.setAttribute("class", "div_name")
    div_name.appendChild(document.createTextNode(`${fname} ${lname}`))

    // Creamos el div que contendra el elemento editar
    let div_edit = document.createElement("div")
    div_edit.setAttribute("class", "div_edit")
    div_edit.appendChild(document.createTextNode("✎"))
    div_edit.addEventListener("click", editName)

    // Creamos el div que contendra el elemento eliminar
    let div_close = document.createElement("div")
    div_close.setAttribute("class", "div_close")
    div_close.appendChild(document.createTextNode("✖"))
    div_close.addEventListener("click", (event) => {event.target.parentNode.remove()})

    //Anidamos los divs
    div_ap.appendChild(div_name)
    div_ap.appendChild(div_edit)
    div_ap.appendChild(div_close)

    return div_ap
}

function getFormvalue(event){
    // Evitar que se recarge la pagina cuando se clicka submit
    event.preventDefault() 

    //Leer las entradas
    let inputs = document.querySelector("#form1")
    let fname = inputs["fname"].value
    let lname = inputs["lname"].value
   
    // Insetar debajo del form
    //let cont = document.querySelector("#ex2")
    let cont = document.querySelector("#names_list")

    // Llamamos a la funcion para que agregue el elemento prediseñado
    cont.appendChild(createDivPre(fname, lname))

    // Limpiar el form
    inputs.reset()
}

// Ejercicio 3
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

// Ejercicio 4
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

// Ejercicio 5
function addColor(){
    
    // Obtenemos la referencia al select del form
    let options = document.querySelector("#colorSelect")

    // Creamos la opcion del color y le añadimos un color aleatorio
    let color_add = document.createElement("option")
    let col_text = document.createTextNode(CSS_COLOR_NAMES[Math.floor(Math.random() * (CSS_COLOR_NAMES.length))])
    color_add.appendChild(col_text)

    // Lo añadimos a la lista
    options.appendChild(color_add)
}

function removeColor(){
    // Obtenemos la referencia al select del form
    let options = document.querySelector("#colorSelect")

    // Seleccionamos el elemento a remover de la lista de opciones de forma aleatoria
    options.removeChild(options[Math.floor(Math.random() * options.length)])
}

function changeDivColor(){
    //Obtenemos la referencia a la lista y el div que cambiara de color
    let list = document.querySelector("#colorSelect")
    let div = document.querySelector("#divColor")

    //Modificaos el estilo del div de acuerdo al valor del select
    div.style.border = `2px solid ${list.value}`
}

//Ejercicio 6
function changeImg(){
    // Obtenemos la referencia de la imagen
    let img = document.querySelector("#imgChange")

    // Creamos la funcion que generara los numeros aleatorios
    const randomNum = () => {return Math.floor(Math.random() * ((600 + 1) - 300) + 300)}

    // Añadimos el evento
    img.addEventListener("mouseover", () =>{
        img.src = `http://placekitten.com/${randomNum()}/${randomNum()}`
    })
}

function main(){
    mouseTrack()
    changeDivColor()
    changeImg()
}

