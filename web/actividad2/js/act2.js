/*
    Uriel Aguilar
    A01781698
    Actividad 2: Practicando concetos de Javascript
*/

/* 1. Escribe una función que encuentre el primer carácter de un cadena 
de texto que no se repite. Prueba tu función con: 'abacddbec'          */
function f_char(text){
    for (let i = 0; i < text.length; i++) {
        let actual = text.charAt(i)
        let count = 0

        for (let j = 0; j < text.length; j++) {
            if (actual == text.charAt(j)) {
                count++
            }
        } 
        
        if (count == 1) {
            return actual
        }
    }
}

/* 2. Escribe una función que implemente el algoritmo 'bubble-sort'
para ordenar una lista de números.                          */
function bubble_sort(vec){
    for (let i = 0; i < vec.length ; i++) {
        for(let j = 0 ; j < vec.length - i - 1; j++){ 
            if (vec[j] > vec[j + 1]) {
                [vec[j], vec[j+1]] = [vec[j+1], vec[j]] //Swap
            }
        } 
    }
    return vec;
}

/* 3. Escribe una función que implemente el algoritmo 'merge-sort' 
para ordenar una lista de números. */
function merge(left, right) {
    let nw = []
    
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            nw.push(left.shift())  
        } else {
            nw.push(right.shift()) 
        }
    }
    
    return [ ...nw, ...left, ...right ]
}

function merge_sort(vec){
    const half = vec.length / 2
    
    if(vec.length < 2){
      return vec 
    }
    
    const left = vec.splice(0, half)
    return merge(merge_sort(left), merge_sort(vec))
}

/* 4. Escribe dos funciones: la primera que invierta un arreglo de números 
y regrese un nuevo arreglo con el resultado; la segunda que modifique el 
mismo arreglo que se pasa como argumento. No se permite usar la función integrada 'reverse'.*/
function reverse_new(vec){
    let new_vec = []
    for (let i = vec.length-1; i >= 0 ; i--) {
        new_vec.push(vec[i])
    }
    return new_vec
}

function reverse_not_new(vec){
    const LEN = vec.length

    for (let i = 0; i < LEN; i++) {
        vec.splice(i, 0, vec[LEN-1])
        vec.pop()
    }

    return vec
}

/* 5. Usando la definición de clase de Javascript ES6, crea una clase que se llame 
'Vector' que represente un vector de 3 dimensiones. La clase debe de poder sumar y 
restar vectores, obtener su magnitud, obtener el vector unitario, y multiplicar por un escalar.*/
class Vector{
    constructor(x, y, z){
        this._x = x
        this._y = y
        this._z = z
    }

    get x(){ return this._x }
    get y(){ return this._y }
    get z(){ return this._z }

    suma(other){
        return new Vector(this.x + other.x, 
                          this.y + other.y, 
                          this.z + other.z)
    }

    resta(other){
        return new Vector(this.x - other.x, 
                          this.y - other.y, 
                          this.z - other.z)
    }

    magnitud(){
        return Math.sqrt( Math.pow(this.x, 2) +
                          Math.pow(this.y, 2) +
                          Math.pow(this.z, 2) )
    }

    unitario(){
        let mag = this.magnitud()
        return new Vector( this.x/mag,
                           this.y/mag,
                           this.z/mag,
        )
    }

    print_v(){
        return ("(" + this.x + ", " + this.y + ", " + this.z + ")")
    }

    multiply(n){
        return new Vector(this.x * n,
                          this.y * n,
                          this.z * n )
    }
}

/* 6. Escribe una función que calcule el máximo común divisor de dos números. */
function mcd(a, b) {
    let aux

    while (b !== 0) {
        aux = b
        b = a % b
        a = aux
    }

    return a
}

/* 7. Usando ojetos de tu clase 'Vector', crea una función que reciba dos vectores,
   y que indique si esos vectores son ortogonales o no. */
function octogonales(a, b){
    let ab = (a.x * b.x) + (a.y * b.y) + (a.z * b.z)
    return (ab == 0 ? true : false)  
}

/* 8. Crea una función que cambie una cadena de texto a 'Hacker Speak'. Por ejemplo, 
para la cadena 'Javascript es divertido', su hacker speak es: 'J4v45c1pt 35 d1v3rt1d0'. */
function hack_speaker(text){
    let newText = new String()
    let letras= new Map()
    letras.set("a", "4")
    letras.set("e", "3")
    letras.set("i", "1")
    letras.set("o", "0")
    letras.set("s", "5")
    
    for (let i = 0; i < text.length; i++) {
        if ( letras.has(text[i]) ) {
            newText = newText + letras.get(text[i])
        } else {
            newText = newText + text[i]
        }
    }

    return newText
}

/* 9. Escribe una función que reciba un número, y regrese una lista con todos sus factores. 
   Por ejemplo: factoriza(12) -> [1, 2, 3, 4, 6, 12]. */
function factores(num){
    let fac = []
    for (let i = 1; i <= num; i++){
        if ( (num % i) == 0 ) {
            fac.push(i)
        }
    }
    return fac
}

/* 10. Escribe una función que quite los elementos duplicados de un arreglo y regrese una
lista con los elementos que quedan. Por ejemplo: quitaDuplicados([1, 0, 1, 1, 0, 0]) -> [1, 0]*/
function dup(vec){
    // nodup_set = new Set(vec)
    return Array.from(new Set(vec))
}

/* Funcion para imprimir las salidas */
function aux_print(i, o){
    console.log("Input: " + i + " -> " + "Output: " + o)
}

function main(){
    //1
    console.log("1. -----")
    aux_print("abacddbec", f_char("abacddbec"))
    aux_print("ssssssssd", f_char("ssssssssd"))
    aux_print("abcdefghi", f_char("abcdefghi"))

    //2
    console.log("\n2. -----")
    aux_print("[2,3,5,6,4,1]", bubble_sort([2,3,5,6,4,1]))
    aux_print("[10,54,23,1,768]", bubble_sort([10,54,23,1,768]))
    aux_print("[1.01 ,1.001, 1, 1.0001]", bubble_sort([1.01 ,1.001, 1, 1.0001]))

    //3
    console.log("\n3. -----")
    aux_print("[2,3,5,6,4,1]", merge_sort([2,3,5,6,4,1]))
    aux_print("[10,54,23,1,768]", merge_sort([10,54,23,1,768]))
    aux_print("[1.01 ,1.001, 1, 1.0001]", merge_sort([1.01 ,1.001, 1, 1.0001]))
    
    //4
    console.log("\n4.1 -----")
    aux_print("[1,2,3,4]", reverse_new([1,2,3,4]))
    aux_print("[4,3,2,1]", reverse_new([4,3,2,1]))
    aux_print("[5,10,4,3]", reverse_new([5,10,4,5]))
    console.log("4.2 ")
    let v1 = [1,2,3,4]
    let v2 = [4,3,2,1]
    let v3 = [5,10,4,5]
    aux_print("[1,2,3,4]", reverse_not_new(v1))
    aux_print("[4,3,2,1]", reverse_not_new(v2))
    aux_print("[5,10,4,3]", reverse_not_new(v3))

    //5
    console.log("\n5. -----")
    let vec1 = new Vector(1,1,1)
    let vec2 = new Vector(3,3,3)
    console.log("Vector 1: " + vec1.print_v() + "   |   Vector 2: " + vec2.print_v())
    console.log("Suma: " + vec1.suma(vec2).print_v())
    console.log("Resta: " + vec2.resta(vec1).print_v())
    console.log("Magnitud v1: " + vec1.magnitud())
    console.log("Magnitud v2: " + vec2.magnitud())
    console.log("Vector unitario v1: " + vec1.unitario().print_v())
    console.log("Vector unitario v2: " + vec2.unitario().print_v())
    console.log("Multiplicar v1 * 2: " + vec1.multiply(2).print_v())
    console.log("Multiplicar v2 * 3: " + vec2.multiply(3).print_v())

    //6
    console.log("\n6. -----")
    aux_print("18, 9", mcd(18, 9))
    aux_print("12, 4", mcd(12, 4))
    aux_print("242, 4", mcd(242, 4))

    //7
    console.log("\n7. -----")
    aux_print("(-8, -3, 10), (2, -2, 1)", octogonales(new Vector(-8, -3, 10), new Vector(2, -2, 1)) ?
                                           "Son octogonales" : "No octogonales" )
    aux_print("(-8, -3, 10), (2, -2, 0)", octogonales(new Vector(-8, -3, 10), new Vector(2, -2, 0)) ?
                                           "Son octogonales" : "No octogonales" )
    aux_print("v1, v2",                   octogonales(vec1, vec2) ?
                                           "Son octogonales" : "No octogonales" )
    
    //8
    console.log("\n8. -----")
    aux_print("javascript es divertido", hack_speaker("javascript es divertido"))
    aux_print("hello world", hack_speaker("hello world"))
    aux_print("hack speaker", hack_speaker("hack speaker"))
    
    //9
    console.log("\n9. -----")
    aux_print("12", factores(12))
    aux_print("13", factores(13))
    aux_print("13", factores(33))

    //10
    console.log("\n10. -----")
    aux_print("[1, 0, 1, 1, 0, 0]", dup([1, 0, 1, 1, 0, 0]))
    aux_print("[1, 1, 2, 2, 3, 3, 4, 4]", dup([1, 1, 2, 2, 3, 3, 4, 4]))
    aux_print("[9, 10, 11, 12]", dup([9, 10, 11, 12]))
}


