import {useState,useRef} from 'react'
import { motion } from 'framer-motion'
import {styles} from "../styles"
import emailjs from '@emailjs/browser'
import {EarthCanvas} from './canvas'
import {SectionWrapper} from '../hoc'
import { slideIn } from '../utils/motion'
// template_1x51tvc  service_q5crg1g vQB7EkO-d0eccxHxF

const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: "",
    email: "",
    message:""
  })
  const [loading,setLoading] = useState(false)
  
  const handleChange = (e) => {
    const {name,value} = e.target;
    setForm({...form,[name]:value})
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    emailjs.send(
      "service_q5crg1g",
      "template_1x51tvc",{
        from_name:form.name,
        to_name: "Shraddha",
        from_email:form.email,
        to_email: 'shraddhasinghbhadoria@gmail.com',
        message:form.message
      },
    'vQB7EkO-d0eccxHxF'
    )
    .then(()=> {
      setLoading(false);
      alert('Thank you I will get back to you as soon as possible!')
      setForm({
        name:'',
        email:'',
        message:''
      })
    },(error)=>{
      setLoading(false)
      console.log(error)
      alert('something went wrong')
    })
  }


  return (
    <div className='x;:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
    <motion.div
    variants={slideIn('left',"tween",0.2,1)}
    className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
    >
    <p className={styles.sectionSubText}>Get in touch</p>
    <h3 className={styles.sectionHeadText}>Contact.</h3>
    <form 
    ref={formRef}
    onSubmit={handleSubmit}
    className='mt-12 flex flex-col gap-8'
    >
    <label className='flex flex-col'>
      <span className='text-white mb-4 font-medium'>Your Name</span>
      <input 
      type="text" 
      name= "name" 
      value = {form.name} 
      onChange={handleChange} 
      placeholder="what's your name?" 
      className='bg-tertiary py-4 px-6 placeholder:text-seondary text-white rounded-lg outlined-none border-none font-medium'/>
    </label>
    <label className='flex flex-col'>
      <span className='text-white mb-4 font-medium'>Your Email</span>
      <input 
      type="email" 
      name= "email" 
      value = {form.email} 
      onChange={handleChange} 
      placeholder="what's your email?" 
      className='bg-tertiary py-4 px-6 placeholder:text-seondary text-white rounded-lg outlined-none border-none font-medium'/>
    </label>
    <label className='flex flex-col'>
      <span className='text-white mb-4 font-medium'>Your Message</span>
      <textarea
      rows="7" 
      name= "message" 
      value = {form.message} 
      onChange={handleChange} 
      placeholder="what do you want to say?" 
      className='bg-tertiary py-4 px-6 placeholder:text-seondary text-white rounded-lg outlined-none border-none font-medium'/>
    </label>
    <button
    type='submit'
    className='py-3 bg-tertiary px-8 ouline-none text-white font-bold  w-fit shadow-md shadow-primary rounded-xl'
    >
    {loading? 'Sending...' : "Send"}
    </button>
    </form>
    </motion.div>

    <motion.div
    variants={slideIn('right',"tween",0.2,1)}
    className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
    >
     <EarthCanvas />
    </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact,"contact")