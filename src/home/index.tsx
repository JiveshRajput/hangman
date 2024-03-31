import { Link } from 'react-router-dom'
import { LIST_OF_GAMES } from './utils/list-of-games'

function Home() {
    return (
        <div className='max-w-[1140px] m-auto p-2'>
            <h1 className='text-center text-3xl font-bold text-blue-700 mb-4'>Hub of Games</h1>
            <div className='flex gap-3 flex-wrap'>
                {
                    LIST_OF_GAMES.map(({ name, link }) => {
                        return (
                            <Link to={link} className='rounded-lg bg-gray-200 p-2 px-3 hover:bg-gray-300'>
                                {name}
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Home
