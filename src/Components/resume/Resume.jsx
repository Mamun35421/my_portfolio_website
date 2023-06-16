import React from 'react'
import Title from '../features/layouts/Title'
import ResumeCard from './ResumeCard'

const Resume = () => {
  return (
   <section id="resume" className='w-full py-20 border-b[1px] border-b-black'>
    <div className='flex justify-center items-center text-center'>
        <Title title="3+ Years of experience" des="My Resume" />
    </div>
    <div>
        <ul className='w-full grid grid-cols-4'>
            <li className='resumeLi'>Education</li>
            <li className='resumeLi'>Professional Skills</li>
            <li className='resumeLi'>Experience</li>
            <li className='resumeLi'>Achievements</li>
        </ul>
    </div>
   <div className='w-full flex gap-20'> 
    
    <div>
    <div className='py-12 font-titleFont'>
        <p className='text-sm text-designColor tracking-[4px]'>2020-2023</p>
        <h2 className='text-4xl font-bold'>Education Qualility</h2>
    </div>
    <div className='mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>
        <ResumeCard
        title="BSc in Software Engineering"
        subTitle="Daffodil International University"
        result="3.45/4"
        des="The traning provided by universitoes in order to prepare peopple to work in 
        various sector of the economy or areas of culture "
        
        />
     <ResumeCard
     title="BSc in Software Engineering"
     subTitle="Daffodil International University"
     result="3.45/4"
     des="The traning provided by universitoes in order to prepare peopple to work in 
     various sector of the economy or areas of culture "
     />
     <ResumeCard
       title="BSc in Software Engineering"
       subTitle="Daffodil International University"
       result="3.45/4"
       des="The traning provided by universitoes in order to prepare peopple to work in 
       various sector of the economy or areas of culture "
     />
     </div>
    </div>

    <div>
    <div className='py-12 font-titleFont'>
        <p className='text-sm text-designColor tracking-[4px]'>2020-2023</p>
        <h2 className='text-4xl font-bold'>Experience</h2>
    </div>
    <div className='mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>
        <ResumeCard
        title="Intern J.r Software Engineer "
        subTitle="Secure Ambit-(2023-Present)"
        result="Bangladesh"
        des="The traning provided by universitoes in order to prepare peopple to work in 
        various sector of the economy or areas of culture "
        
        />
     <ResumeCard
     title="Mern Stack Developer"
     result="2021-Present"
     des="The traning provided by universitoes in order to prepare peopple to work in 
     various sector of the economy or areas of culture "
     />
     <ResumeCard
       title="BSc in Software Engineering"
       subTitle="Daffodil International University"
       result="3.45/4"
       des="The traning provided by universitoes in order to prepare peopple to work in 
       various sector of the economy or areas of culture "
     />
     </div>
    </div>
   </div>

   </section>
  )
}

export default Resume