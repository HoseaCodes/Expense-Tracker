const Category = require("../models/category");
const Transaction = require("../models/transactions");
const Loan = require("../models/loans");

const categoryCtrl = {
	getCategories,
	createCategory,
	deleteCategory,
	updateCategory,
};

async function getCategories(req, res) {
	try {
		const categories = await Category.find();
		res.json(categories);
	} catch (err) {
		return res.status(500).json({ msg: err.message });
	}
}

async function createCategory(req, res) {
	try {
		const newCategory = req.body;
		
        const category = await Category.create(newCategory);

        return res.status(201).json({ 
            success: true,
            data: category,
            msg: "Created a new category" 
        });
	} catch (err) {
		return res.status(500).json({ 
            success: false,
            msg: 'Server Error'
        })
	}
}

async function deleteCategory(req, res) {
	try {
		const transactions = await Transaction.findOne({ category: req.params.id });
		// You cannot delete a category if it has transaction associated with it.
		if (transactions) {
			return res
			.status(400)
			.json({ msg: "Please delete all transactions with a relationship." });
		}
		await Category.findByIdAndDelete(req.params.id);
		res.json({ msg: "Deleted a category" });
	} catch (err) {
		return res.status(500).json({ msg: err.message });
	}
}

async function updateCategory(req, res) {
	try {
		const { name } = req.body;
		await Category.findOneAndUpdate({ _id: req.params.id }, { name });
		res.json({ msg: "Updated a category" });
	} catch (err) {
		return res.status(500).json({ msg: err.message });
	}
}

module.exports = categoryCtrl;
