import { Router } from 'express';
import { userModel } from '../model/user.js';

const router = Router();

// controller
router.post('/login', async (req, res) => {
	const { userName, password } = req.body;
	try {
		console.log('-----------', userName, password, '----------------------');

		const response = await userModel.findOne({ userName: userName, password: password });

		if(!response) {
			res.status(401).json({ success: false, response: 'Unauthorized user' });
		}

		console.log('response&&&&&&&&&&&&&&&7', response);

		res.status(200).json({ success: true, response: response });
	} catch (error) {
		res.status(400).json({ success: false, error: error.message });
	}
});

router.post('/registration', async (req, res) => {
	const { name, email, mobileNumber, password } = req.body;
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

		res.status(201).json({ ...response._doc }); // Only returning document data
	} catch (error) {
		res.status(400).json({ success: false, error: error.message });
	}
});

export default router;
