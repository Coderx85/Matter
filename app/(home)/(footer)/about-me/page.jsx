import React from 'react'
import Image from 'next/image'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card'
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip'
import { ScrollArea } from '@/components/ui/scroll-area'
import { aboutData, experienceData, educationData } from '@/data/about'
import { SiAppwrite, SiCplusplus, SiDocker, SiExpress, SiGit, SiGithub, SiGithubactions, SiGithubpages, SiMongodb, SiNextdotjs, SiPhp, SiSqlite, SiStreamlit, SiTypescript, SiVercel, SiVite } from 'react-icons/si'
import { FaCss3, FaHtml5, FaJs, FaNodeJs, FaPython, FaReact } from 'react-icons/fa'

const skillsData = {
  title: 'skills',
  description: 'I am proficient in Python, MERN stack, and front-end technologies.',
  items: [
    {
      section: 'Programming Languages',
      techStack: [
        {
          title: 'TypeScript',
          icon: <SiTypescript />,
          level: 'Advanced'
        },
        {
          title: 'Python',
          icon: <FaPython />,
          level: 'Advanced'
        },
        {
          title: 'C++',
          icon: <SiCplusplus />,
          level: 'Intermediate'
        },
        {
          title: 'JavaScript',
          icon: <FaJs />,
          level: 'Intermediate'
        },
      ]
    },
    {
      section: 'Frontend Development',
      techStack: [
        {
          title: 'Next.js',
          icon: <SiNextdotjs />,
          level: 'Advanced'
        },
        {
          title: 'Vite.js',
          icon: <SiVite />,
          level: 'Advanced'
        },
        {
          title: 'React.js',
          icon: <FaReact />,
          level: 'Intermediate'
        },
        {
          title: 'Html',
          icon: <FaHtml5 />,
          level: 'Advanced'
        },
        {
          title: 'Css',
          icon: <FaCss3 />,
          level: 'Advanced'
        },
      ]
    },
    {
      section: 'Backend Development',
      techStack: [
        {
          title: 'Node.js',
          icon: <FaNodeJs />,
          level: 'Intermediate'
        },
        {
          title: 'Express.js',
          icon: <SiExpress />,
          level: 'Intermediate'
        },
        {
          title: 'Php',
          icon: <SiPhp />,
          level: 'Intermediate'
        },
      ]
    },
    {
      section: 'Database',
      techStack: [
        {
          title: 'MongoDB',
          icon: <SiMongodb />,
          level: 'Intermediate'
        },
        {
          title: 'Sql',
          icon: <SiSqlite />,
          level: 'Intermediate'
        },
        {
          title: 'Appwrite',
          icon: <SiAppwrite />,
          level: 'Intermediate'
        },
      ]
    },
    {
      section: 'DevOps & VCS',
      techStack: [
        {
          title: 'Docker',
          icon: <SiDocker />,
          level: 'Intermediate'
        },
        {
          title: 'Git',
          icon: <SiGit />,
          level: 'Intermediate'
        },
        {
          title: 'Vercel',
          icon: <SiGithubactions />,
        },
        {
          title: 'Github',
          icon: <SiGithub />,
        }
      ]
    },
    {
      section: 'Deployment',
      techStack: [
        {
          title: 'Vercel',
          Icon: <SiVercel />,
          level: 'Intermediate'
        },
        {
          title: 'Streamlit',
          icon: <SiStreamlit />,
          level: 'Intermediate'
        },
        {
          title: 'Github Pages',
          icon: <SiGithubpages />,
          level: 'Intermediate'
        }
      ]
    },
  ]
}
const AboutPage = () => {
  return (
    <div className='flex min-h-[80vh] py-12 xl:py-0 gap-[60px]'>
      {/* <div className='bg-zinc-900 flex flex-row'>
        <div className='p-4'>
            <Image src='/about.png' alt='About Us' width={500} height={500} />
        </div>
        <div className='m-auto container'>
          <h1 className='text-3xl font-bold'>About Us</h1>
          <ul className=' list-disc px-auto'>
            <li>Name : Priyanshu</li>
            <li>Role : Developer</li>
            <li>Location : India</li>
            <li>Skills : React, Next.js, Node.js, Express, MongoDB, MySQL and more</li>
            <li>Experience : 1+ Years</li>
            <li>Education : B.Tech</li>

          </ul>
        </div>
      </div> */}
      <div className='container mx-auto'>
        <Tabs
          defaultValue="experience"
          className='flex flex-row md:flex-row gap-[60px] items-center'
        >
          <TabsList
            className='flex flex-col bg-transparent capitalize md:flex-nowrap w-full max-w-[380px] gap-5 mx-auto xl:mx-0'
          >
            <TabsTrigger value='about'>{aboutData.title}</TabsTrigger>
            <TabsTrigger value='experience'>{experienceData.title}</TabsTrigger>
            <TabsTrigger value='education'>{educationData.title}</TabsTrigger>
            <TabsTrigger value='skills'>{skillsData.title}</TabsTrigger>
          </TabsList>

          {/* Resume Section */}
          <div className="w-full min-h-[70vh]">
            
            {/* About Section */}
            <TabsContent
              value='about'
              className='w-full text-center xl:text-left'
            >
              {/* About Section content */}
              <div className='flex flex-col gap-[30px]'>
                <h3 className='font-bold text-outline space-x-1 tracking-[5px] text-transparent text-4xl uppercase border-white border-b-2 pb-2'>
                  {aboutData.title}
                </h3>
                <p className='max-w-[680px] break-all text-white/60 mx-auto xl:mx-0'>
                  {aboutData.description}
                </p>
                <ul className='grid grid-cols-1 xl:grid-cols-2 max-w-[850px] gap-y-4 gap-14 mx-auto xl:mx-0'>
                  {aboutData.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className='items-center flex justify-start gap-6 px-4 py-2'
                      >
                        <span className='text-white/60'>{item.fieldName}</span>
                        <span className='text-lg'>{item.fieldValue}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* Experience Section */}
            <TabsContent value="experience" className='w-full'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='font-bold text-outline space-x-1 tracking-[5px] text-transparent text-4xl uppercase border-white border-b-2 pb-2'>
                  {experienceData.title}
                </h3>
                {/* Experience Section content */}
                <ScrollArea className='h-[480px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {experienceData.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className='bg-primary-foreground items-center py-6 px-10 rounded-xl flex flex-col justify-center lg:items-start gap-1'
                        >
                          <span className='text-primary'>{item.duration}</span>
                          <h4 className='text-xl max-w-[300px] min-h-[60px] text-center lg:text-left'>{item.title}</h4>
                          <div className='flex items-center gap-3'>
                            <span className='w-[6px] h-[6px] rounded-full bg-primary'></span>
                            <p className='text-white/60'>{item.company}</p>
                          </div>
                          {/* <p>{item.description}</p> */}
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Education Section */}
            <TabsContent value="education">
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                {/* Education Section content */}
                <h3 className='font-bold text-outline space-x-1 tracking-[5px] text-transparent text-4xl uppercase border-white border-b-2 pb-2'>
                  {educationData.title}
                </h3>
                <p className='max-w-[680px] text-white/60 mx-auto xl:mx-0'>
                  {educationData.description}
                </p>
                <ScrollArea className='h-[480px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {educationData.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className='bg-primary-foreground items-center py-6 px-10 rounded-xl flex flex-col justify-center lg:items-start gap-1'
                        >
                          <span className='text-primary'>{item.duration}</span>
                          <h4 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.title}</h4>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Skills Section */}
            <TabsContent value="skills">
              <div className='flex flex-col gap-[30px] text-center lg:text-left'>
                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                  {/* Skills Section content */}
                  <h3 className='font-bold text-outline space-x-1 tracking-[5px] text-transparent text-4xl uppercase border-white border-b-2 pb-2'>
                    {skillsData.title}
                  </h3>
                </div>
                <ul className='grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-[30px]'>
                  {skillsData.items.map((item, index) => {
                    return (
                      <li
                        key={index}
                      >
                        <Card>
                          <CardHeader>
                            <CardTitle className='mx-auto text-primary text-left'>{item.section}</CardTitle>
                          </CardHeader>
                          <CardContent
                            className='mx-auto w-full'
                          >
                            <ul className={`grid ${(item.techStack.length % 2) ? 'grid-cols-3' : 'grid-cols-2'} gap-2 md:gap-[30px]`}>
                              {item.techStack.map((tech, index) => {
                                return (
                                  <li
                                    key={index}
                                    className={` items-center justify-between gap-2 mx-auto ${item.techStack.length === 5 && index > 2 ? 'col-span-1' : ''}`}
                                  >
                                    <TooltipProvider delayDuration={150}>
                                      <Tooltip>
                                        <TooltipTrigger className='w-full h-[50px] rounded-xl-row mx-auto flex justify-center items-center group'>
                                          <div className='text-4xl group-hover:text-primary transition-all duration-300'>
                                            {tech.icon}
                                          </div>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                          <p>{tech.title}</p>
                                        </TooltipContent>
                                      </Tooltip>
                                    </TooltipProvider>
                                  </li>
                                )
                              })}
                            </ul>
                          </CardContent>
                        </Card>
                      </li>
                    )
                  })}
                </ul>            
                    {/* <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className='w-full h-[150px] bg-primary rounded-xl flex justify-center items-center group'>
                          <div className='text-6xl group-hover:text-primary transition-all duration-300'>
                            {item.icon}                                
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{item.title}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider> */}
                  
              </div>
            </TabsContent>

          </div>
        </Tabs>
      </div>

    </div>
  )
}

export default AboutPage