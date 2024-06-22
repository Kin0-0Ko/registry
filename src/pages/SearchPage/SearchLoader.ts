import { searchPackages } from '../../api/queries/searchPackages';
import { packageSummary } from '../../api/types/packageSummary';


export interface SearchLoaderResults {
	searchResults: packageSummary[]
}

export async function SearchLoader({request}: {request: Request}): Promise<SearchLoaderResults>{
	const {searchParams} = new URL(request.url)
	const term = searchParams.get('term')
	if(!term){
		throw new Error("Search term must be provided")
	}
	
	const results = await searchPackages(term);

	return {
		searchResults: results
	};
}