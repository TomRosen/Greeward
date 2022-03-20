import Greeward from '@/models/Greeward';
import { dbConnect } from '@/helper/database/dbConnect';

export default async function handler(req, res) {
	if (req.method === 'POST') {
		await dbConnect();

		const { filter } = req.body;
		filter ? filter : (filter = {});
		let results = await Greeward.find(filter).catch((err) => {
			console.log('Unexpected Database error!', err);
			res.status(500).send('Unexpected Database error!');
		});

		res.status(200).json(results);
	} else {
		console.log('Invalid request type!❌');
		res.status(400).send('Invalid request type!❌');
	}
}

function convertToArray(a) {
	a.constructor.name !== 'Array' ? (a = [a]) : (a = a);
	return a;
}
