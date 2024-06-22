import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import Root from './pages/Root/Root'
import SearchPage from './pages/SearchPage/SearchPage'
import DetailsPage from './pages/DetailsPage/DetailsPage'
import { SearchLoader } from './pages/SearchPage/SearchLoader'
import { detailsLoader } from './pages/DetailsPage/DetailsLoader'
import { HomeLoader } from './pages/HomePage/HomePageLoader'


const router = createBrowserRouter([
	{
		path: '/',
		element: <Root/>,
		children: [
			{
				index: true,
				element: <HomePage/>,
				loader: HomeLoader
			},
			{
				path: "/search",
				element: <SearchPage/>,
				loader: SearchLoader,
			},
			{
				path: "/packages/:name",
				element: <DetailsPage/>,
				loader: detailsLoader
			}
		]
	}
])


function App() {


  return  <RouterProvider router={router}/>
}

export default App
