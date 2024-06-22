import { Params } from 'react-router-dom'
import { getPackage } from '../../api/queries/getPackage'
import { packageDetails } from '../../api/types/packageDetails';

export interface detailsLoaderResult{
	details: packageDetails
}

export async function detailsLoader({params} : {params: Params}): Promise<detailsLoaderResult>{

	const {name} = params;
	if(!name){
		throw new Error('name must be provided')
	}
	const details = await getPackage(name)

	return {
		details
	}
}