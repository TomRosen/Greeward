import Engagement from '@/models/Engagement';
import { dbConnect } from '@/helper/database/dbConnect';

export default async function handler(req, res) {
	if (req.method === 'POST') {
		await dbConnect();

		let { title, description, carrots, image } = req.body;

		const engagement = new Engagement({
			title: title,
			description: description,
			carrots: carrots,
			image: image,
		});
		engagement.save().catch((err) => {
			console.log(err);
			res.status(500).json({ message: 'Internal server error' });
		});

		res.status(200).send('Saved to Database');
	} else {
		console.log('Invalid request type!❌');
		res.status(400).send('Invalid request type!❌');
	}
}
