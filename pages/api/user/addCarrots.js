import { getSession } from 'next-auth/react';
import User from '@/models/User';
import { dbConnect } from '@/helper/database/dbConnect';

export default async function handler(req, res) {
	if (req.method === 'POST') {
		await dbConnect();
		const session = await getSession({ req });

		let { carrots } = req.body;
		carrots = carrots ? carrots : 0;
		let newCarrots = session.user?.carrots + carrots;
		let results = await User.findOneAndUpdate(
			{ email: session.user.email },
			{ carrots: newCarrots }
		).catch((err) => {
			console.log('Unexpected Database error!', err);
			res.status(500).send('Unexpected Database error!');
		});

		res.status(200).json(results);
	} else {
		console.log('Invalid request type!❌');
		res.status(400).send('Invalid request type!❌');
	}
}
