const chai = require('chai')
const expect = chai.expect
const db = require('../database')

describe('itemsInSection()', function() {
	it('should find the IDs and names of all grocery items in the given section', function(done) {
		db.itemsInSection('bulk')
		.then( function(result) {
			expect(result[0].product_name).to.equal('Flour')
			expect(result[1].product_name).to.equal('Pasta')
			expect(result[2].product_name).to.equal('Rice')
			expect(result.length).to.eql(3)
        	done()
		})
		.catch(console.log)
	})
})

describe('cheapItems()', function() {
	it('should find the IDs and prices of all grocery items that cost less than $10.00, ordered from lowest to highest price', function(done) {
		db.cheapItems()
		.then( function(result) {
			expect(result[0].product_name).to.equal('Fish')
			expect(result[24].product_name).to.equal('Honey')
			expect(result.length).to.eql(25)
			done()
		})
		.catch(console.log)
	})
})

describe('countItemsInSection()', function() {
	it('should get the count of all grocery items in the given section', function(done) {
		db.countItemsInSection('packaged') 
		.then( function(result) {
			expect(result[0].count).to.eql('5')
			done()
		})
		.catch(console.log)
	})
})