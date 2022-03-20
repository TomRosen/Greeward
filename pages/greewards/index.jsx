import Search from '@/components/Search';
import ProductListGreewards from '@/components/ProductListGreewards';
import { useQueryClient, useQuery, useMutation } from 'react-query';
import { getGreewardsAll, getGreewardsQuery } from '@/helper/data/greewards';
import { useState } from 'react/cjs/react.development';

const Home = ({}) => {
	const queryClient = useQueryClient();
	const [searchQuery, setSearchQuery] = useState('');
	console.log(typeof searchQuery);
	const { data, error, status } = useQuery([`greewards_${searchQuery}`], () =>
		getGreewardsQuery({ title: { $regex: searchQuery } })
	);

	const searchCallback = (query) => {
		console.log('query', query);
		setSearchQuery(query);
	};

	return (
		<div>
			<Search
				callback={(text) => {
					searchCallback(text);
				}}></Search>
			{status !== 'loading' ? (
				<ProductListGreewards products={data}></ProductListGreewards>
			) : (
				<div class='flex justify-center items-center'>
					<div
						class='spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full'
						role='status'>
						<span class='visually-hidden'>Loading...</span>
					</div>
				</div>
			)}
		</div>
	);
};

export default Home;
