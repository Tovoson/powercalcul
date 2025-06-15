import { Minus, Square, X } from 'lucide-react'
import { useMyUserStore } from '../store/myUserStore'

function Headers() {
  const {toggleFetch} = useMyUserStore()
  
  return (
    <div className='flex pt-0'>
        <div className='flex items-center justify-between w-full'
          onClick={() => toggleFetch(false)}
        >
            <h3 className='pl-2 text-xs'>Calculatrice</h3>
            <div className='flex items-center justify-between flex-row h-8 '>
                <Minus color="white" size={20} className='h-full w-11 p-2 hover:bg-red-800'/>
                <Square color="white" size={20} className='h-full w-11 p-2 hover:bg-amber-800'/>
                <X color="white" size={20} className='h-full w-11 p-2 hover:bg-red-800'/>
            </div>
        </div>
    </div>
  )
}

export default Headers