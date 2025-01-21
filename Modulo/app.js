let a = document.getElementById('a')
let b = document.getElementById('b')
let answer = document.getElementById("answer")
let a_val = document.getElementById("a-val")
let b_val = document.getElementById("b-val")
let mod_val = document.getElementById("mod-val")


answer.onclick = () => {
    let number1 = a.value
    let number2 = b.value
    let mod = number1%number2
    a_val.innerText = number1
    b_val.innerText = number2
    mod_val.innerText = mod
}
