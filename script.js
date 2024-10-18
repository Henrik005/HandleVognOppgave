//Model
const model = {
    app: document.getElementById('App'),
    input: {
        cart: [],
        textStrg: '',
    }
}
// let app = document.getElementById('App')
// let cart = [];
// let textStrg = ''






//View
updateView();
function updateView(){
    model.app.innerHTML = /*HTML*/`
    <div>
    <ul> ${showCart()}</ul>
    </div>
    <input onchange ="saveInput(this.value)">
    <br>
    <button onclick ="addToCart()">Add To Cart</button>
    `
}
function showCart(){
    let html = ''
    for(let i = 0; i < model.input.cart.length; i++){
        html +=` <li>${model.input.cart[i]}</li>`
        }
        return html
}
// ^ What this function does is that it makes the variable inside it give- 
// -its value to the function wich can then be displayed like a variable. as seen on line
//




//Controller
function addToCart(){
    model.input.cart.push(model.input.textStrg)
updateView();
}

function saveInput(value){
    model.input.textStrg = value
}






