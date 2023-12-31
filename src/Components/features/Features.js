import React from 'react'
import Title from './layouts/Title'
import Card from './Card'
import{AiFillAppstore} from 'react-icons/ai'
import { SiAntdesign, SiProgress } from 'react-icons/si'
import { FaGlobe, FaMobile} from 'react-icons/fa'

const Features = () => {
  return (
    <section id='features' className='w-full  py-20  border-b-[1px] border-b-black'>
     <Title title="Features" des="What I Do"/>
 <div className='grid grid-cols-3 gap-20'>
    <Card
    title="Business Stratagy"
    des="Lorem ipsum sit amet constructor adipisicing elit. Atque soluta hic consequuntur eum repellendus ad."
  
    
    />
    <Card
      title="App Development"
      des="Lorem ipsum sit amet constructor adipisicing elit. Atque soluta hic consequuntur eum repellendus ad."
      icon={<AiFillAppstore/>}/>

     <Card
     title="SEO Optimisation"
     des="Lorem ipsum sit amet constructor adipisicing elit. Atque soluta hic consequuntur eum repellendus ad."
     icon={<SiProgress/>}
     />
    <Card
     title="Mobile Development"
     des="Lorem ipsum sit amet constructor adipisicing elit. Atque soluta hic consequuntur eum repellendus ad."
     icon={<FaMobile/>}
    
    />
 
    <Card
    title="UX Design"
    des="Lorem ipsum sit amet constructor adipisicing elit. Atque soluta hic consequuntur eum repellendus ad."
    icon={<SiAntdesign/>}
    
    />
    <Card 
     title="Hosting"
     des="Lorem ipsum sit amet constructor adipisicing elit. Atque soluta hic consequuntur eum repellendus ad."
     icon={<FaGlobe/>}
    />
 </div>
    </section>
  )
}

export default Features