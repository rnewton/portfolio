import { gql, GraphQLClient } from 'graphql-request';
import type Job from '$lib/types/Job';

export const load = async () => {
	const client = new GraphQLClient(import.meta.env.VITE_GRAPHQL_API);

	const query = gql`
		query GetJobs {
			jobs: jobs(orderBy: order_ASC, where: { volunteering: false }) {
				company
				title
				currentPosition
				startDate
				endDate
				description
				location
				skills
			}

			volunteering: jobs(orderBy: order_ASC, where: { volunteering: true }) {
				company
				title
				currentPosition
				startDate
				endDate
				description
				location
			}
		}
	`;

	const { jobs, volunteering } = await client.request<{ jobs: Job[]; volunteering: Job[] }, any>(
		query
	);

	return {
		jobs,
		volunteering
	};
};
