/* This example requires Tailwind CSS v2.0+ */
const people = [
	{
		name: 'Lindsay Walton',
		title: 'Front-end Developer',
		department: 'Optimization',
		email: 'lindsay.walton@example.com',
		role: 'Member',
		image:
			'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
	},
	{
		name: 'Lindsay Walton',
		title: 'Front-end Developer',
		department: 'Optimization',
		email: 'lindsay.walton@example.com',
		role: 'Member',
		image:
			'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
	},
	{
		name: 'Lindsay Walton',
		title: 'Front-end Developer',
		department: 'Optimization',
		email: 'lindsay.walton@example.com',
		role: 'Member',
		image:
			'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
	},
	{
		name: 'Lindsay Walton',
		title: 'Front-end Developer',
		department: 'Optimization',
		email: 'lindsay.walton@example.com',
		role: 'Member',
		image:
			'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
	},
	// More people...
];

export default function Leaderboard(props) {
	return (
		<div className='px-4 sm:px-6 lg:px-8'>
			<div className='sm:flex sm:items-center'>
				<div className='sm:flex-auto'>
					<h1 className='text-xl font-semibold text-gray-900'>Leaderboad</h1>
				</div>
			</div>
			<div className='mt-8 flex flex-col'>
				<div className='-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8'>
					<div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
						<div className='overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg'>
							<table className='min-w-full divide-y divide-gray-300'>
								<thead className='bg-gray-50'>
									<tr>
										<th
											scope='col'
											className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6'>
											Name
										</th>
										<th
											scope='col'
											className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'>
											Department
										</th>
										<th
											scope='col'
											className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'>
											Carrots
										</th>
										<th
											scope='col'
											className='relative py-3.5 pl-3 pr-4 sm:pr-6'>
											<span className='sr-only'>Edit</span>
										</th>
									</tr>
								</thead>
								<tbody className='divide-y divide-gray-200 bg-white'>
									{props.people.map((person) => (
										<tr key={person.email}>
											<td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6'>
												<div className='flex items-center'>
													<div className='h-10 w-10 flex-shrink-0'>
														<img
															className='h-10 w-10 rounded-full'
															src='https://picsum.photos/200'
															alt=''
														/>
													</div>
													<div className='ml-4'>
														<div className='font-medium text-gray-900'>
															{person.firstame} {person.lastname}
														</div>
														<div className='text-gray-500'>{person.email}</div>
													</div>
												</div>
											</td>
											<td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
												<div className='text-gray-900'>{person.department}</div>
											</td>
											<td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
												<span className='inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800'>
													{person.carrots}
												</span>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
