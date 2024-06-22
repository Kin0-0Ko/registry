import { packageDetails } from '../types/packageDetails'


const FUTURED_PACKAGES = [
	'react',
	'typescript',
	'redux-toolkit',
	'vite',
]

export async function getFeaturedPackages() {
	const promises = FUTURED_PACKAGES.map(async (name) => {
		const res = await fetch(`https://registry.npmjs.org/${name}`)
		return res.json()
	})
	const data = await Promise.all(promises)
	return data as packageDetails[]
}