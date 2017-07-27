let shoppingCart = []
let itemPrice = []
let total = 0
const cart_item_count = document.getElementById('cart-item-count')
const cart_button = document.getElementById("cart-button")
const onion_button = document.getElementById("onion-button")
const tomato_button = document.getElementById("tomato-button")
const carrot_button = document.getElementById("carrot-button")
const cold_cut_button = document.getElementById("cold-cut-button")
const orange_juice_button = document.getElementById("orange-juice-button")
const ice_cream_button = document.getElementById("ice-cream-button")
const pizza_button = document.getElementById("pizza-button")
const clear_button = document.getElementById("clear-button")
const elem = document.getElementById("my-list")
const total_amount = document.getElementById("total-amount")

function clearList() {
	while (elem.firstChild) {
		elem.removeChild(elem.firstChild);
	}
}

clear_button.addEventListener("click", function () {
	clearList()
	total_amount.innerHTML = '0'
	cart_item_count.innerHTML = '0'
	shoppingCart = []
	itemPrice = []
})

if (!total) {
	total_amount.innerHTML = '0'
}

if (!shoppingCart) {
	cart_item_count.innerHTML = '0'
} else {
	cart_item_count.innerHTML = shoppingCart.length
}

function createShoppingList(array) {
	while (elem.firstChild) {
		elem.removeChild(elem.firstChild);
	}
	let ul = document.getElementById('my-list')

	for (let i = 0; i < array.length; i++) {
		let li = document.createElement('li')
		li.appendChild(document.createTextNode(array[i]))
		ul.appendChild(li)
	}
}

cart_button.addEventListener("click", function () {
	createShoppingList(shoppingCart)
})

function htmlUpdate() {
	cart_item_count.innerHTML = shoppingCart.length

	total_amount.innerHTML = Math.ceil(itemPrice.map(function (x) {
		return parseFloat(x, 10)
	}).reduce((a, b) => a + b, 0) * 100) / 100
}

onion_button.addEventListener("click", function () {
	shoppingCart.push(["Onion", " $1.11"])
	itemPrice.push("1.11")
	htmlUpdate()
})

tomato_button.addEventListener("click", function () {
	shoppingCart.push(["Tomato", " $1.56"])
	itemPrice.push("1.56")
	htmlUpdate()
})

carrot_button.addEventListener("click", function () {
	shoppingCart.push(["Carrots", " $2.88"])
	itemPrice.push("2.88")
	htmlUpdate()
})

cold_cut_button.addEventListener("click", function () {
	shoppingCart.push(["Cold Cuts", " $1.47"])
	itemPrice.push("1.47")
	htmlUpdate()
})

orange_juice_button.addEventListener("click", function () {
	shoppingCart.push(["Orange Juice", " $2.52"])
	itemPrice.push("2.52")
	htmlUpdate()
})

ice_cream_button.addEventListener("click", function () {
	shoppingCart.push(["Ice Cream", " $14.08"])
	itemPrice.push("14.08")
	htmlUpdate()
})

pizza_button.addEventListener("click", function () {
	shoppingCart.push(["Pizza", " $16.61"])
	itemPrice.push("16.61")
	htmlUpdate()
})

// function roundNearest(num, acc) {
// 	if (acc < 0) {
// 		return Math.round(num * acc) / acc;
// 	} else {
// 		return Math.round(num / acc) * acc;
// 	}
// }


// Modal Code


var modal = document.getElementById('myModal')
var btn = document.getElementById("cart-button")
var span = document.getElementsByClassName("close")[0]

btn.onclick = function () {
	modal.style.display = "block"
}

span.onclick = function () {
	modal.style.display = "none"
}

window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none"
	}
}