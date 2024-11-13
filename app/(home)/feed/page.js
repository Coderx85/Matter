import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

const Feed = () => {
  return (
    <div className='container mx-auto'>
        <div className='flex p-2 h-16'>
            {/* Display Button */}
            <Input 
                placeholder='Search Blog'
                className='w-11/12'
            />
            <Button className='w-1/12 bg-zinc-700'>
                Post
            </Button>
        </div>

        <div className='p-5 border-primary rounded-xl border-2'>
            <form>
                <Input 
                    placeholder='Enter The Title'
                    className='w-full bg-transparent text-xl font-semibold focus:border-0 focus:'
                />
                <hr className='h-2'/>
                <Textarea 
                    placeholder='Enter The Message'
                    className='w-full bg-transparent text-md mb-10 h-52'
                />
                <Button className='snap-end right self-end'>
                    Post
                </Button>
            </form>
        </div>

    </div>
  )
}

export default Feed