import { SearchIcon, GlobeAltIcon } from '@heroicons/react/solid';

export default function Example(props) {
	let timeout;
	const handleChange = (e) => {
		if (timeout) {
			clearTimeout(timeout);
		}
		timeout = setTimeout(() => {
			props.callback(e.target.value);
		}, 500);
	};
	return (
		<div className='flex justify-center mt-6'>
			<div className='mt-1 flex rounded-md shadow-sm w-6/12 justify-center'>
				<div className='relative flex items-stretch flex-grow focus-within:z-10'>
					<div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
						<GlobeAltIcon
							className='h-5 w-5 text-gray-400'
							aria-hidden='true'
						/>
					</div>
					<input
						type='text'
						name='search'
						id='search'
						className='focus:ring-brand focus:border-brand block w-full rounded-none rounded-l-md pl-10 sm:text-sm border-gray-300'
						placeholder='Type here for search'
						onChange={handleChange}
					/>
				</div>
				<button
					type='button'
					className='-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500'>
					<SearchIcon className='h-5 w-5 text-gray-400' aria-hidden='true' />
				</button>
			</div>
		</div>
	);
}
