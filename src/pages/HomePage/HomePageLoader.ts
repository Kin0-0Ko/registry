import { getFeaturedPackages } from '../../api/queries/getFuturedPackages';
import { packageDetails } from '../../api/types/packageDetails';


export interface HomeLoaderResults{
	featuredPackages: packageDetails[]
}

export async function HomeLoader(): Promise<HomeLoaderResults>{
	const featuredPackages = await getFeaturedPackages()

	return {
		featuredPackages
	}
}