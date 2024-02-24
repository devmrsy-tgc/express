import { Router } from 'express';

const router = Router();

// controller
router.get('/login', (req, res) => {
	const { userName, password } = req.body;
	try {
		if (!(userName === 'frank' && password === 'admin@1234')) {
			throw new Error('wrong cred!!');
		}

		res.status(200).json({ success: true, token: 'qwer!@#$12323423' });
	} catch (error) {
		res.status(400).json({ success: false, error: error.message });
	}
});

router.post('/registration', (req, res) => {
	const { name, email, mobileNumber } = req.body;
	try {
		if (!(name && email && mobileNumber)) {
			throw new Error('enter complete details!!');
		}

		const resBody = {
			...req.body,
			userName: email.split('@')[0],
			id: Math.floor(Math.random() * 10000000000),
			success: true,
		};

		res.status(201).json({ ...resBody });
	} catch (error) {
		res.status(400).json({ success: false, error: error.message });
	}
});

export default router;
