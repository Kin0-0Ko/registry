import { FC } from 'react';
import { useLoaderData } from 'react-router-dom';
import { SearchLoaderResults } from './SearchLoader';
import PackageListItem from '../../components/PackageListItem/PackageListItem';


interface SearchPageProps {}

const SearchPage: FC<SearchPageProps> = () => {

	const {searchResults} = useLoaderData() as SearchLoaderResults;
	
	const renderedResults = searchResults.map((res) => {
		return <PackageListItem pack={res} key={res.name}/>
	}) 
	

return  <div>
    <h1 className='text-2xl font-bold my-6'>Search Page</h1>
	<div className="space-y-4 mt-4">
		{renderedResults}
	</div>
  </div>
};

export default SearchPage;
