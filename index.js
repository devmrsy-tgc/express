import express from 'express';
import router from './router/index.js';
import dbConnection from './db/dbConnection.js';

const app = express();
const PORT = 8000;
app.use(express.json());

app.use('/api', router);

dbConnection()

try {
	app.listen(PORT, () => console.log(`application is running on port number ${PORT}`));
} catch (error) {
	console.log(error.message);
}
