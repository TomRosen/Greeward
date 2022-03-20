import User from '@/models/User';
import { dbConnect } from '@/helper/database/dbConnect';

export default async function handler(req, res) {
	if (req.method === 'POST') {
		await dbConnect();

		let { limit, skip } = req.body;
		limit = limit ? limit : 100;
		skip = skip ? skip : 0;
		let results = await User.find({}, null, {
			sort: { date: 1 },
			limit: limit,
			skip: skip,
		}).catch((err) => {
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
