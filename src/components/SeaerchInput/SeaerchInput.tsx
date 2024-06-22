import { FC } from 'react';
import { VscSearch } from 'react-icons/vsc';
import { Form } from 'react-router-dom';


interface SeaerchInputProps {}

const SeaerchInput: FC<SeaerchInputProps> = () => {
// 	const navigate = useNavigate();
// 	const [term, setTerm] = useState('')
// 	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
// 		e.preventDefault()
// 		navigate(`/search?term=${term}`)
// 	}

//   return <form action="" onSubmit={handleSubmit}>
// 	<input type="text" value={term} onChange={e => setTerm(e.target.value)}/>
//   </form>
return <Form action='/search'>
	<div className='relative'>
		<div className='absolute inset-y-0 flex items-center pl-3'>
			<VscSearch className='h-5 w-5 text-gray-500'/>
		</div>
		<input name='term' placeholder='Search Packages' className='pl-10 py-2 w-full border-0 shadow-none'/>
	</div>
</Form>
};

export default SeaerchInput;
