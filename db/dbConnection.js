import mongoose from 'mongoose'; // ORM -> object relational model

const dbConnection = async () => {
	try {
        await mongoose.connect('mongodb+srv://soorajtgc:admin1234@cluster0.e75nkes.mongodb.net/');
		console.log('Connected to database');
	} catch (error) {
		console.error(error.message);
	}
};

export default dbConnection;
