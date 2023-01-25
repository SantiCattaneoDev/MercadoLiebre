const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	index: (req, res) => {
		return res.render("index", { products });
	},
	search: (req, res) => {
		const search = req.query.keywords;
		const product = products.find(product => product.name.toLowerCase().indexOf(search.toLowerCase()) >= 0);
		return res.render("results", { product })
	},
	login: (req, res) => {
		return res.render("login")
	},
	register: (req, res) => {
		return res.render("register")
	},
	cart: (req, res) => {
		return res.render("product-cart")
	}
};

module.exports = controller;
