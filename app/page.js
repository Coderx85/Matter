"use client"
import { Button } from "@/components/ui/button"
import Typed from 'typed.js';
import React, {useRef, useEffect} from 'react';
import Image from 'next/image';
import Link from 'next/link'
import Footer from '@/components/Footer';

const Home = () => {
    // Create reference to store the DOM element containing the animation
    const el = useRef(null);

    useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ['Coding', 'Web Dev', 'Data Sci.'],
        typeSpeed: 50,
      });
  
      return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
      };
    }, []); 

  return (
    <div className="container mx-auto h-full min-h-[580px]">
      {/* <div className="flex xl:flex-row flex-col items-center sm:px-5 justify-between">
        <div className="text-center xl:text-left order-2 xl:order-none"> */}
          <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
            A <span className="font-semibold">free repository</span> for community <br className="hidden lg:block" /> components using <span className="font-semibold text-primary"><span ref={el} /></span>
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
            Open source Tailwind UI components and templates to <br className="hidden lg:block" /> bootstrap your new apps, projects or landing sites!
          </p>
          <div className="mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20">
            <form action="https://www.creative-tim.com/twcomponents/search" className="flex flex-wrap justify-between md:flex-row">
             
            </form>
          </div>
        {/* </div> */}
        {/* Form Section
        <div className="order-1 backdrop-blur-3xl bg-gray-800 py-8 mx-auto px-6 min-w-fit content-center h-4/5 w-6/12 justify-center rounded-lg shadow-md xl:order-none mb-8 xl:mb-0 items-center">
          <h2 className="text-3xl font-bold text-center mb-6 text-white">Login To Matters</h2>
          <form 
            className=" items-center justify-center w-full mb-4"  
          >
            <div className="py-8">
              <label htmlFor="email" className="block font-semibold mb-2">Email</label>
              <input
                type="email"
                // id="email"
                // name="email"
                className="w-full px-4 py-2 border border-red-500 rounded-md mb-8 bg-red-500 focus:outline-none focus:border-red-500"
                required
              />
              
              <label htmlFor="password" className="block font-semibold mb-2">Password</label>
              <input
                type="password"
                // id="password"
                // name="password"
                className="w-full px-4 py-2 border border-red-300 rounded-md focus:outline-none focus:border-red-500"
                required
              />
            </div>
            <Button type="submit" className="w-full text-white bg-primary font-semibold px-4 rounded-mdtransition duration-300"> Login </Button>
          </form>
          <Link href="/register" className='mt-20 underline text-red-300 mx-auto px-auto text-lg'>
            Create an account
          </Link>
        </div> */}
      {/* // </div> */}
      {/* <Footer /> */}
    </div>
  );
};

export default Home
