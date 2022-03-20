import Leaderboard from '@/components/Leaderboard';
import ProductHighlightList from '@/components/ProductHighlightList';
import { useQuery, useQueryClient } from 'react-query';
import { getGreewardsAll, getGreewardsQuery } from '@/helper/data/greewards';
import { getLeaderboardAll } from '@/helper/data/leaderboard';

export default function Home() {
	const queryClient = useQueryClient();
	const {
		data: dataGreewards,
		error: errorGreewards,
		status: statusGreewards,
	} = useQuery('greewards', () => getGreewardsAll(4, 0));
	const {
		data: dataLeaderboard,
		error: errorLeaderboard,
		status: statusLeaderboard,
	} = useQuery('leaderboard', () => getLeaderboardAll(20, 0));

	return (
		<div>
			<ProductHighlightList></ProductHighlightList>
			<Leaderboard></Leaderboard>
		</div>
	);
}
