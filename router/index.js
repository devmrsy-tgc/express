import { Router } from 'express';
import { userModel } from '../model/user.js';

const router = Router();

// controller
router.post('/login', async (req, res) => {
	const { userName, password } = req.body;
	try {
		console.log('-----------', userName, password, '----------------------');

		const response = await userModel.findOne({
			$and: [{ userName: userName, password: password }],
		});

		if (!response) {
			res.status(401).json({ success: false, response: 'Unauthorized user' });
		}

		console.log('response&&&&&&&&&&&&&&&7', response);

		res.status(200).json({ success: true, response: response });
	} catch (error) {
		res.status(400).json({ success: false, error: error.message });
	}
});

router.post('/registration', async (req, res) => {
	const { email } = req.body;
	try {
		// if (!(name && email && mobileNumber )) {
		// 	throw new Error('enter complete details!!');
		// }

		console.log('#########', email.split('@')[0], typeof email.split('@')[0]);

		const resBody = {
			...req.body,
			userName: email.split('@')[0],
		};

		const response = await userModel.create(resBody);

		console.log(response);

		res.status(201).json({ ...response._doc, success: true });
	} catch (error) {
		res.status(400).json({ success: false, error: error.message });
	}
});

router.get('/findAll', async (req, res) => {
	try {
		const response = await userModel.find({});

		res.status(200).json({ data: response, success: true });
	} catch (error) {
		res.status(400).json({ success: false, error: error.message });
	}
});

router.get('/findById/:id', async (req, res) => {
	const id = req.params.id;

	console.log('##########', id);

	try {
		const response = await userModel.findOne({ _id: id });

		if (response === null || response === undefined) {
			throw new Error(`No record found with given id ${id}`);
		}

		res.status(200).json({ data: response, success: true });
	} catch (error) {
		res.status(400).json({ success: false, error: error.message });
	}
});

router.delete('/delete', async (req, res) => {
	const id = req.body.id;

	try {
		const response = await userModel.findByIdAndDelete({ _id: id });

		if (response === null || response === undefined) {
			throw new Error(`No record found with given id ${id}`);
		}

		res.status(200).json({ data: response, success: true, message: `successfully deleted ${id}` });
	} catch (error) {
		res.status(400).json({ success: false, error: error.message });
	}
});

export default router;
