import Leaderboard from '@/components/Leaderboard';
import ProductHighlightList from '@/components/ProductHighlightList';
import { useQuery, useQueryClient } from 'react-query';
import { getGreewardsAll, getGreewardsQuery } from '@/helper/data/greewards';

export default function Home() {
	const queryClient = useQueryClient();
	const { data, error, status } = useQuery('greewards', () =>
		getGreewardsAll(4, 0)
	);

	return (
		<div>
			<ProductHighlightList></ProductHighlightList>
			<Leaderboard></Leaderboard>
		</div>
	);

}
