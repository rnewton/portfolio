type Job = {
	company: string;
	title: string;
	startDate: string;
	endDate: string | null;
	currentPosition: boolean;
	description: string;
	location: string | null;
	skills: string[];
};

export default Job;
