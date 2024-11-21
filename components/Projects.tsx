// import { useInView } from 'framer-motion'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { heroText } from './anim'

const works = [
    {
        title: "BudgetMate",
        description: "Tech & Finance",
    },
    {
        title: "TripTrove",
        description: "Tech & Travel",
    },
    {
        title: "Dropit",
        description: "Tech & Engineering",
    },
]

const Projects = () => {
    const phrase = "Frustrated with websites that don't reflect your brand or drive growth? I craft premium web experiences that captivate and help you focus on growing your business."
    //const container = useRef(null)
    //const isInView = useInView(container)
    let num = 1

  return (
    <div className='py-[72px] px-4 font-generalSans'>
        <h1 className='font-semibold text-7xl relative'>SELECTED WORKS/<span className='absolute top-0 text-5xl'>(3)</span></h1>
        <p></p>
        <div className='pt-16'>
            <div className='grid grid-cols-2'>
                <div></div>
                <div className='flex gap-8 max-w-[600px] py-8'>
                    <h3 className='opacity-80'>[Projects]</h3>
                    <p className='text-2xl'>
                        {phrase.split(" ").map((word,i) => (
                            <span key={i} className='inline-block overflow-hidden'>
                                <motion.span variants={heroText} className='inline-block' initial="initial" whileInView={"animate"} custom={i}>{word + "\u00a0"}</motion.span>
                            </span>
                        ))}
                    </p>
                </div>
            </div>
            {works.map(({title,description},i) => (
                <div key={i} className='grid grid-cols-2'>
                    <h3 className='sticky h-fit top-0 text-[11rem] leading-none'>{`0${i + 1}.`}</h3>
                    <div>
                        <div className='bg-[#e2e2e2] rounded-md h-[700px]'>
                        {/* <video width="800" height="1200" controls autoPlay loop muted>
                            <source src="../public/assets/dropit.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video> */}
                        </div>
                        <div className='pt-4 pb-16'>
                            <p className='pb-1 opacity-60 text-[#111]'>
                                {description.split(" ").map((word,i) => (
                                    <span key={i} className=''>
                                        <motion.span variants={heroText} initial="initial" whileInView="animate" custom={i} className='inline-block'>{word + "\u00A0"}</motion.span>
                                    </span>
                                ))}
                            </p>
                            <div className='flex justify-between items-center gap-4'>
                                <h3 className='text-5xl font-semibold'>
                                    {title.split("").map((word,i) => (
                                        <span key={i} className='inline-block overflow-hidden'>
                                            <motion.span variants={heroText} initial="initial" whileInView="animate" custom={i} className='inline-block'>{word}</motion.span>
                                        </span>
                                    ))}
                                </h3>
                                <div className='flex items-center gap-2'>
                                    <div className='border border-[#111] py-1 px-3 rounded-full'>
                                        <p>Design</p>
                                    </div>
                                    <div className='border border-[#111] py-1 px-3 rounded-full'>
                                        <p>Development</p>
                                    </div>
                                    <div className='bg-[#111] text-[#e2e2e2] py-1 px-3 rounded-full'>
                                        <p>2024</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Projects