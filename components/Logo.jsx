import Link from 'next/link'

const Logo = () => {
  return (
    <div className='mx-auto container'>
        <Link href={"/"} className="flex group items-center gap-1">
            <p className="text-[26px] text-white font-extrabold max-sm:hidden capitalize group-hover:text-primary">
                Matters<span className='text-primary group-hover:text-white'>.</span>
            </p>
        </Link>
    </div>
  )
}

export default Logo