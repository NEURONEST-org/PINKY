
import {useEffect, useRef} from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { AppleCardsCarouselDemo } from './AppleCardsCarouseDemo'
import { BackgroundLines } from './ui/background-lines'
import { GoogleGeminiEffect } from './ui/google-gemini-effect'
import { motionValue } from 'motion/react'
import { motion } from 'motion/react'
import { ArrowRightIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import { AnimatedTestimonials } from './ui/animated-testimonials'
import { BackgroundBeams } from './ui/background-beams'
import { LampDemo } from './ui/lamp'
gsap.registerPlugin(ScrollTrigger)

function Home() {
    const AnimatedBox = () => {
        const boxRef = useRef(null);
        
        useEffect(() => {
          gsap.to(boxRef.current, { scale: 0, 
            x: 1900,
            opacity: 0,
        backgroundColor: "red",
        borderRadius: "100%",
        scrollTrigger: {
            trigger: boxRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
            
        },
        duration: 3, ease: "power2.out" });
        }, []);
       
      
        return(<>
             <div ref={boxRef} style={{ width: 1100, height: 1100, background: "blue"  }} className='absolute top-0 left-0 text-5xl font-bold bg-black' > 
                </div>
             {/* <div ref={sideBarRef} className="w-full opacity-0 bg-black "></div>    */}
            </>
        );
      };


      const AnimatedBox2 = () => {
        const sideBarRef = useRef(null);

        useEffect(() => {
            gsap.to(sideBarRef.current, { scale: 0,
                opacity: 0,
                borderRadius: "100%",
               scrollTrigger: {
                trigger: sideBarRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true,
                
               },
              
                rotation: "100%",
                backgroundColor: "black",
                duration: 3, ease: "power2.out" });
        }, []);


       
        return(
            <div ref={sideBarRef} style={{ width: 1100, height: 1100, background: "black"  }} className='absolute top-0 left-0 text-5xl font-bold bg-black' > 
               <BackgroundLines>
                <h1>Welcome to NeuroNest</h1> 
                <p>Your Personalized Memory Bank</p>

                
               </BackgroundLines>
            </div>
           
       );
      
    }

    const AnimatedText=()=>{
        const textRef=useRef(null);
        useEffect(()=>{
            gsap.to(textRef.current, {
                opacity: 1,
                x: 100, 
                
               
                duration: 10,
                scrollTrigger: {
                    trigger: textRef.current,
                    start: "top top",
                    end: "top 10%",
                    scrub: true,
                }
            })
        },[])
        return(
            <div ref={textRef} className='text-neutral-500  text-4xl font-bold bg-black pt-60 pl-10'>
                <h1>Valuable Reviews from our Users </h1>
            </div>
        )
    }


      return (<>
        <main className='bg-black h-screen w-full'>
        <div className='w-full h-screen bg-black flex justify-center items-between'>
            <div className="">
          <AnimatedBox />

          <h1 className='text-white text-4xl font-bold bg-black pt-60 pl-10'>NeuroNest </h1>
          <p className='text-white text-2xl font-bold bg-black pt-10 pl-10'>The AI-powered companion for your loved ones</p>

          </div>
          <div>




            {/* <button className='bg-white text-black px-4 py-2 rounded-md'>Get Started</button>
             */}
             <Link to="/dashboard">
             <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50   ml-96   mt-96 ">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                           <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-16 py-5 text-sm font-medium text-white backdrop-blur-3xl">
                  Get Started 
                  <ArrowRightIcon className='w-4 h-4 ml-4' />
  </span>
</button>
</Link>
          </div>
          {/* <GoogleGeminiEffect pathLengths={[motionValue(1), motionValue(1), motionValue(1), motionValue(1)]}/>    */}
           </div>

           <div className='w-full h-screen bg-black'>
            
            <AnimatedBox2></AnimatedBox2>
           <AppleCardsCarouselDemo/>
           </div>
           
     
          

           <motion.div
           whileInView={{opacity:1, y:0}}
           initial={{opacity:0, y:100}}
           transition={{duration:1}}
           className='w-full h-screen  bg-black'>
            {/* <BackgroundBeams>

                
            </BackgroundBeams> */}
            <AnimatedText/> 
            <AnimatedTestimonials testimonials={[
                {quote:" My grandfather can now identify familiar faces and everyday objects, reducing his confusion.", name:"John Doe", designation:"", src:"https://plus.unsplash.com/premium_photo-1682091376525-48bb2ed7a100?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RmFtaWx5JTIwRWxkZXJzJTIwaW1hZ2VzfGVufDB8fDB8fHww" },
                {quote:"this is an amazing app it's Helps keep track of medicines, dosages, and even provides information about them.", name:"Minny", designation:"", src:"https://images.unsplash.com/photo-1475503572774-15a45e5d60b9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
                {quote:"Finally, an app that understands dementia care, My father is in the middle stage of dementia, and this app has made a huge difference ", name:"Chiggyyy", designation:"", src:"https://plus.unsplash.com/premium_photo-1708334030738-4e0ba6a1223c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
                
            ]}/>
           </motion.div>
           <LampDemo/>
           </main></>
      );
}
export default Home
