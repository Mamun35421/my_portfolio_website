import React from 'react'
import Title from '../features/layouts/Title'
import { projectOne,projectTwo,projectThree } from '../../assets/index'
import ProjectsCard from './ProjectsCard'

const Projects = () => {
  return (
   <section id="projects" className="w-full py-20 border-b-[1px] border-b-black ">
    <div className='flex justify-center items-center text-center'>
        <Title
        title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
        des="My Projects"
        />
    </div>
    <div className='grid grid-cols-3 gap-14'>
        <ProjectsCard
        title="Social Media Clone"
        des ="Lorem, ipsum dolor sit amet consectetur adipisiscing eleit
        Expelities quibosom volute sapatice volupobus harum quidem"
        src={projectOne}
        
        />
        <ProjectsCard
        title="E-comerce webwiste"
        des ="Lorem, ipsum dolor sit amet consectetur adipisiscing eleit
        Expelities quibosom volute sapatice volupobus harum quidem"
        src={projectTwo}
        />
        <ProjectsCard
         title="E-comerce webwiste"
         des ="Lorem, ipsum dolor sit amet consectetur adipisiscing eleit
         Expelities quibosom volute sapatice volupobus harum quidem"
         src={projectThree}
        
        />
        <ProjectsCard
          title="E-comerce webwiste"
          des ="Lorem, ipsum dolor sit amet consectetur adipisiscing eleit
          Expelities quibosom volute sapatice volupobus harum quidem"
          src={projectThree}
        />
        <ProjectsCard
         title="E-comerce webwiste"
         des ="Lorem, ipsum dolor sit amet consectetur adipisiscing eleit
         Expelities quibosom volute sapatice volupobus harum quidem"
         src={projectTwo}
        />
        <ProjectsCard
         title="Social Media Clone"
         des ="Lorem, ipsum dolor sit amet consectetur adipisiscing eleit
         Expelities quibosom volute sapatice volupobus harum quidem"
         src={projectOne}
        />
    </div>

   </section>
  )
}

export default Projects