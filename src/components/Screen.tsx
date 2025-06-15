
import { useMyUserStore } from '../store/myUserStore'

function Screen() {
  const {toggleFetch} = useMyUserStore()
  return (
    <div className='flex h-26'>
        <div className='flex flex-1/2 flex-col items-end justify-start w-full h-full '
        onClick={() => toggleFetch(false)}
        >
            <h3 className='mt-3 mr-2 text-gray-200'>55</h3>
            <h1 className='text-4xl mr-2 font-bold text-white'>433</h1>
        </div>
    </div>
  )
}

export default Screen