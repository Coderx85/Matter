import { Button } from '@/components/ui/button'
import React from 'react'

const Feed = () => {
  return (
    <div className='border-zinc-500 border-2 container mx-auto'>
        <div className='flex p-2 h-16'>
            {/* Display Button */}
            <input 
                placeholder='New Blog'
                className='w-11/12'
            />
            <button className='w-1/12 bg-zinc-700'>
                Post
            </button>
        </div>

        <div className='bg-gray-900 p-5 border-green-500 border-2'>
            <form>
                <input 
                    placeholder='Enter The Title'
                    className='w-full bg-transparent text-xl font-semibold focus:border-0 focus:'
                />
                <hr className='h-2'/>
                <input 
                    placeholder='Enter The Message'
                    className='w-full bg-transparent text-md mb-10'
                />
                <Button className='snap-end self-end'>
                    Post
                </Button>
            </form>
        </div>

    </div>
  )
}

export default Feed