import Engagement from '@/models/Engagement';
import { dbConnect } from '@/helper/database/dbConnect';

export default async function handler(req, res) {
	if (req.method === 'POST') {
		await dbConnect();

		const { limit, skip } = req.body;
		limit ? limit : (limit = 100);
		skip ? skip : (skip = 0);
		let datesArr = convertToArray(dates);
		let results = await Engagement.find({}, null, {
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
