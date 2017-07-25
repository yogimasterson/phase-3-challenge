const promise = require('bluebird')

const options = {
	promiseLib: promise
}

const pgp = require('pg-promise')(options)
const connectionString = 'postgres://localhost:5432/grocery_store'
const db = pgp(connectionString)

function allItems () {
    return db.any('SELECT * FROM grocery_items')
}

function itemsInSection(section) {
    return db.any('SELECT id, name FROM grocery_items WHERE section = $1', section)
}

function cheapItems() {
    return db.any('SELECT id, price FROM grocery_items WHERE price < 10.00 ORDER BY price ASC')
}

function countItemsInSection(section) {
    return db.any('SELECT COUNT(id) FROM grocery_items WHERE section = $1', section)
}

function mostRecentOrders() {
    return db.any('SELECT order_id, order_date FROM orders ORDER BY order_date DESC LIMIT 10')
}

function lastShopperName() {
    return db.any('SELECT name FROM orders ORDER BY order_date DESC LIMIT 1')
}

function orderTotal(id) {
    return db.any('SELECT SUM(price) FROM grocery_items LEFT JOIN orders on grocery_items.name = orders.name WHERE order_id = $1', id)
}


module.exports = {
	allItems,
	itemsInSection,
	cheapItems,
	countItemsInSection,
	mostRecentOrders,
	lastShopperName,
	orderTotal
}