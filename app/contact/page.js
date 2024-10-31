import React from 'react'
import { Button } from '@/components/ui/button';
// import { FaEnvelope, FaLinkedin, FaLocationArrow, FaPhone } from 'react-icons/fa'

const contactInfo = [
    {
      title: 'Email',
      description: 'work.priyanshu085@gmail.com',
    //   icon: <FaEnvelope />
    },
    {
      title: 'Phone',
      description: '(+91) 707 191 5785',
    //   icon: <FaPhone />
    },
    {
      title: 'Location',
      description: 'New Delhi, India',
    //   icon: <FaLocationArrow />
    },
    {
      title: 'LinkedIn',
      description: 'coderx85',
    //   icon: <FaLinkedin />
    }
  ]

const Contact = () => {
  return (
    <div className='container mx-auto'>
        <div className="flex flex-col xl:flex-row gap-[30px]">
            <div className='xl:h-[54%] order-2 xl:order-none' id='contact'>
          <form 
            // onSubmit={handleSubmit}
            className="flex flex-col gap-6 p-10 bg-black rounded-xl"
          >
            <h2 className="text-4xl text-primary">
              Let&apos;s Work Together
            </h2>
            <p className="text-white/60">
              {" "}
              I&apos;m currently looking for new opportunities, my inbox is always
              open. Whether you have a question or just want to say hi, I&apos;ll
              try my best to get back to you!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="email"
                id="email"
                required
                placeholder="Email address"
                // onChange={(e) => {
                //   setFormData({ ...formData, email: e.target.value });
                // }}
              />
              <input
                type="text"
                id="name"
                placeholder='Name'
                required
                // onChange={(e) => {
                //   setFormData({ ...formData, name: e.target.value });
                // }}
              />
              <input
                type="text"
                id="company"
                placeholder='Company'
                required
                // onChange={(e) => {
                //   setFormData({ ...formData, company: e.target.value });
                // }}
              />
              <input
                type="text"
                id="phone"
                placeholder='Phone'
                required
                // onChange={(e) => {
                //   setFormData({ ...formData, phone: e.target.value });
                // }}
              />

            </div>
              <textarea
                name="message"
                id="message"
                className="h-[200px]"
                placeholder="Let's talk about..."
                required
                // onChange={(e) => {
                //   setFormData({ ...formData, message: e.target.value });
                // }}
              />  
              {/* <Select
                name="role"
                required
                onValueChange={(value) => {
                  setFormData({ ...formData, role: value });
                }}
              >
                <SelectTrigger 
                  className="w-[180px]"
                  >
                  <SelectValue placeholder="Select Role" />
                </SelectTrigger>
                <SelectContent

                >
                  <SelectGroup>
                    <SelectLabel>Role</SelectLabel>
                    <SelectItem value="UI/UX Designer">UI/UX Designer</SelectItem>
                    <SelectItem value="Software Developer Engineer">Software Developer Engineer</SelectItem>
                    <SelectItem value="Frontend Developer">Frontend Developer</SelectItem>
                    <SelectItem value="Backend Developer">Backend Developer</SelectItem>
                    <SelectItem value="Fullstack Developer">Fullstack Developer</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select> */}
            <Button
              type="submit" 
              size={'md'}
              className="bg-accent hover:bg-primary text-white font-medium"
            >
              Send Message
            </Button>
          </form>
          </div>
          <div className='flex flex-1 items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0'>
            <ul className='flex flex-col gap-10'>
                {contactInfo.map((info, index) => {
                    return <li key={index} className='flex items-center gap-6'>
                        <div className='w-[52px] h-[52px] xl:h-[72px] xl:w-[72px] bg-gray-800 text-accent rounded-md flex items-center justify-center'>
                        <div className='text-[28px]'>{info.icon}</div>
                        </div>
                        <div className='flex-1'>
                        <p className='text-white/60'>{info.title}</p>
                        <h3 className='text-lg'>{info.description}</h3>
                        </div>
                    </li>
                })}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Contact