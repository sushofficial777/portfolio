'use client';

import { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Svg from '../common/Svg';
import SvgReverse from '../common/SvgReverse';
import Image from 'next/image';
gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
    const textRef = useRef(null);
    const textReverseRef = useRef(null);
    const HeroTextRef = useRef(null);
    const containerRef = useRef(null);
    const ScrollRef = useRef(null);


    const text = "sush";
    const textArray = text.split('');


    useLayoutEffect(() => {
        const textElement: any = textRef.current;
        const textReverseElement: any = textReverseRef.current;
        const textHeroRefElement: any = HeroTextRef.current;
        const containerRefElement: any = containerRef.current;
        const ScrollRefElement: any = ScrollRef.current;

        // Calculate the duration based on the width of the text element
        if (textElement && textReverseElement && textHeroRefElement && containerRefElement && ScrollRefElement) {
            const duration = textElement.clientWidth / 50;
            const ReverseDuration = textReverseElement.clientWidth / 50;

            const tl = gsap.timeline({ repeat: -1 });
            const tlReverse = gsap.timeline({ repeat: -1 });
            const heroTextTl = gsap.timeline();

            tl.to(textElement, {
                x: -textElement.clientWidth, // Move the text to the left by its width
                duration: duration, // Adjust duration based on the width
                ease: "linear",

            });
            tlReverse.to(textReverseElement, {
                x: textReverseElement.clientWidth, // Move the text to the left by its width
                duration: ReverseDuration, // Adjust duration based on the width
                ease: "linear",
            });
            heroTextTl.to(textHeroRefElement, {
                opacity: 1,
                letterSpacing: 0,
                duration: 2,
            });


            gsap.to(textHeroRefElement, {
                duration: .3,
                scaleY: 2,
                top: '-200px',
                scrollTrigger: {
                    trigger: containerRefElement,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true, // animates smoothly during scroll
                },
            });

            gsap.to(ScrollRefElement, {
                duration: .3,
                bottom: '-60vh',
                opacity: 0,
                scrollTrigger: {
                    trigger: containerRefElement,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true, // animates smoothly during scroll
                },
            });


            return () => {
                tl.kill();
                tlReverse.kill();
                heroTextTl.kill();
                ScrollTrigger.killAll();
            };



        }

    }, []);



    // hover 
    const CircleRef = useRef<HTMLDivElement>(null);


    useLayoutEffect(() => {

        const handleMouseMove = (e: any) => {
            const { clientX, clientY } = e;

            if (HeroTextRef.current) {
                const { width, height, left, top } = HeroTextRef.current.getBoundingClientRect();

                gsap.to(CircleRef.current, {
                    x: clientX - left,
                    y: clientY - top,
                    duration: 0.5,
                    width: "150px",
                    height: "150px",
                    display: "block",
                    opacity: 1
                })
            }

        }
        const handleMouseEnter = (e: any) => {
        }
        const handleMouseLeave = (e: any) => {
            gsap.to(CircleRef.current, {
                width: 0,
                height: 0,
                opacity: 0,
                display: "hidden"

            })

        }



        if (HeroTextRef.current) {
            HeroTextRef.current.addEventListener('mousemove', handleMouseMove);
            HeroTextRef.current.addEventListener('mouseenter', handleMouseEnter);
            // window.addEventListener('resize', handleResize)
            HeroTextRef.current.addEventListener('mouseleave', handleMouseLeave)
        }

        return () => {
            if (HeroTextRef.current) {
                HeroTextRef.current.removeEventListener('mousemove', handleMouseMove);
                HeroTextRef.current.removeEventListener('mouseenter', handleMouseEnter);
                // window.addEventListener('resize', handleResize)
                HeroTextRef.current.removeEventListener('mouseleave', handleMouseLeave)
            }
        }
    }, [])



    return (
        <>
            <div ref={containerRef} className=" w-full relative h-screen bg-primary  overflow-hidden   ">
                <div ref={textRef} className=" text-secondry font-['Fahkwang'] w-fit  capitalize font-extrabold    h-fit absolute top-[30%] left-0 translate-y-[-50%] text-[180px] md:text-[213px] lg:text-[212px]   inline-block   items-center justify-start ">
                    <p className=" flex  " >
                        <span>Dev</span>
                        <span className='rounded-full w-12 h-12   mx-10 mt-[12vw] ' >
                            <Svg />
                        </span>
                        <span>Design</span>
                        <span className='   rounded-full w-12 h-12   mx-10 mt-[12vw] ' >
                            <Svg />
                        </span>
                        <span>Branding</span>

                        <span className='   rounded-full w-12 h-12   mx-10 mt-[12vw] ' >
                            <Svg />
                        </span>
                        <span>Dev</span>
                        <span className='   rounded-full w-12 h-12   mx-10 mt-[12vw] ' >
                            <Svg />
                        </span>
                        <span>Design</span>
                        <span className='   rounded-full w-12 h-12   mx-10 mt-[12vw] ' >
                            <Svg />
                        </span>
                        <span>Branding</span>

                        <span className='   rounded-full w-12 h-12   mx-10 mt-[12vw] ' >
                            <Svg />
                        </span>
                        <span>Dev</span>
                        <span className='   rounded-full w-12 h-12   mx-10 mt-[12vw] ' >
                            <Svg />
                        </span>
                        <span>Design</span>
                        <span className='   rounded-full w-12 h-12   mx-10 mt-[12vw] ' >
                            <Svg />
                        </span>
                        <span>Branding</span>

                        <span className='   rounded-full w-12 h-12   mx-10 mt-[12vw] ' >
                            <Svg />
                        </span>
                        <span>Dev</span>
                        <span className='   rounded-full w-12 h-12   mx-10 mt-[12vw] ' >
                            <Svg />
                        </span>
                        <span>Design</span>
                        <span className='   rounded-full w-12 h-12   mx-10 mt-[12vw] ' >
                            <Svg />
                        </span>
                        <span>Branding</span>


                    </p>
                </div>
                <div ref={textReverseRef} style={{
                    left: "-500%",
                }} className="   text-secondry font-['Fahkwang']  capitalize font-extrabold    h-fit absolute top-[70%]  translate-y-[-50%] w-full bg-secondry/20 text-[180px] md:text-[213px] lg:text-[212px]   flex   items-center justify-start ">
                    <p className="  flex  " >
                        <span>Dev</span>
                        <span className='   rounded-full w-12 h-12   mx-10 mt-[12vw] ' >
                            <SvgReverse />
                        </span> <span>Design</span>
                        <span className='   rounded-full w-12 h-12   mx-10 mt-[12vw] ' >
                            <SvgReverse />
                        </span> <span>Branding</span>

                        <span className='   rounded-full w-12 h-12   mx-10 mt-[12vw] ' >
                            <SvgReverse />
                        </span> <span>Dev</span>
                        <span className='   rounded-full w-12 h-12   mx-10 mt-[12vw] ' >
                            <SvgReverse />
                        </span> <span>Design</span>
                        <span className='   rounded-full w-12 h-12   mx-10 mt-[12vw] ' >
                            <SvgReverse />
                        </span> <span>Branding</span>

                        <span className='   rounded-full w-12 h-12   mx-10 mt-[12vw] ' >
                            <SvgReverse />
                        </span> <span>Dev</span>
                        <span className='   rounded-full w-12 h-12   mx-10 mt-[12vw] ' >
                            <SvgReverse />
                        </span> <span>Design</span>
                        <span className='   rounded-full w-12 h-12   mx-10 mt-[12vw] ' >
                            <SvgReverse />
                        </span><span>Branding</span>

                        <span className='   rounded-full w-12 h-12   mx-10 mt-[12vw] ' >
                            <SvgReverse />
                        </span> <span>Dev</span>
                        <span className='   rounded-full w-12 h-12   mx-10 mt-[12vw] ' >
                            <SvgReverse />
                        </span><span>Design</span>
                        <span className='   rounded-full w-12 h-12   mx-10 mt-[12vw] ' >
                            <SvgReverse />
                        </span><span>Branding</span>
                    </p>


                </div>
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    transition={{ duration: 2, delay: 2 }}
                    className=" z-[100] absolute top-0 left-0 w-full h-full bg-secondry ">

                    </motion.div>

                <div className=" w-[90%]   flex items-center justify-center relative  mx-auto h-full   ">

                    <div style={{
                        fontSize: "10em",

                    }} ref={HeroTextRef} id='myname' className=" md:ml-0 lg:ml-0 -ml-10 overflow-hidden rounded-full px-20 relative no_follow   font-[antonio]   z-[210] mix-blend-difference bg-black text-white brand-name uppercase m-0 p-0 flex items-start justify-start  ">
                        <div style={{
                            width: 0,
                            height: 0,
                            opacity: 0
                        }} ref={CircleRef} className=" translate-x-[-50%]  rounded-full  translate-y-[-50%] shadow-ball dark:shadow-darkball absolute top-[-4rem] left-[-4rem] z-[300] scale-[1.4]  bg-white ">
                            <Image src={"/icons/gsap.svg"} fill alt="circle" className=' object-cover ' />
                        </div>

                        {textArray.map((char, index) => (
                            <motion.p
                                className=' relative    '
                                initial={{ opacity: 0, x: '-200px' }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.3 }}
                                key={index}>{char}</motion.p>
                        ))}
                    </div>

                   
                    <div ref={ScrollRef} className=" absolute left-0 flex items-center  flex-col justify-center bottom-[13vh]   ">
                        <p className=' text-white text-[11px] font-bold text-white/20 rotate-[-90deg] font-[Fahkwang] tracking-[.3em]  ' >SCROLL </p>
                        <div className=" relative h-7 w-[14px]  mt-14   ">
                            <div className=" w-[1.5px] absolute top-1 left-0 rounded-full h-[20px] bg-white "></div>
                            <div className=" w-[1.5px] rounded-full h-[40px] absolute left-[50%] translate-x-[-50%] -bottom-2 bg-white "></div>
                            <div className=" w-[1.5px] rounded-full h-[20px] absolute right-0 -bottom-1 bg-white "></div>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}
