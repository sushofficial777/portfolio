import React, { useLayoutEffect, useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";
import { useIsomorphicLayoutEffect } from "@/components/common/Memo";

import Image from 'next/image';
gsap.registerPlugin(ScrollTrigger);
export default function MyProjects() {


    const projects = [

        {

            title: "creed staffing",

            src: "/st2.jpg",

            color: "#000000"

        },

        {

            title: "flemingo ui",

            src: "/flemingo.mov",

            color: "#8C8C8C"

        },

        {

            title: "virtual Educare",

            src: "/lms.jpg",

            color: "#EFE8D3"

        },

        {

            title: "creed infotech",

            src: "/cr.jpg",

            color: "#706D63"

        },
        {

            title: "flio travels",

            src: "/fl.jpg",

            color: "#706D63"

        }

    ]

    useIsomorphicLayoutEffect(() => {
        const gsapCtx = gsap.context(() => {
            // Horizontal Scroll
            const sectionTwo = document.getElementById("horizontal_projects");
            const boxItems = gsap.utils.toArray(".horizontal__item_projects");

            gsap.to(boxItems, {
                xPercent: -101 * boxItems.length,
                ease: "sine.out",
                scrollTrigger: {
                    trigger: sectionTwo,
                    pinnedContainer: sectionTwo,
                    pin: true,
                    scrub: 0.5,
                    // snap: 1 / (boxItems.length - 1),
                    end: () => `+=${sectionTwo?.offsetWidth}`,
                },
            });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: "#horizontal_projects",
                    start: "top center",
                    end: "bottom center",
                    scrub: true
                }
            });


            tl.to(".projects_text1", { scale: 1, left: 0, opacity: 1 })
                .to(".projects_text2", { scale: 1, left: 0, opacity: 1 })
                .to(".projects_text3", { scale: 1, left: 0, opacity: 1 })
                .to(".projects_text4", { scale: 1, left: 0, opacity: 1 })
                .to(".projects_text5", { scale: 1, left: 0, opacity: 1 })
                .to(".projects_text6", { scale: 1, left: 0, opacity: 1 })
                .to(".projects_text7", { scale: 1, left: 0, opacity: 1 })
                .to(".projects_text8", { scale: 1, left: 0, opacity: 1 })



            ScrollTrigger.refresh();
        });

        return () => {

            gsapCtx.revert();
        }
    }, []);


    return (
        <>
            <div className=" w-full md:h-[20vh]  h-0 lg:h-[30vh] "></div>

            <div id='horizontal_projects' className=' w-full md:h-screen h-[90vh] pt-[180px] md:pt-20 lg:pt-20  lg:h-screen md:py-20 py-0 lg:py-20 bg-primary overflow-hidden ' >
                <div className="   uppercase font-extrabold  gredient_lefttt text-white font-[antonio] pl-10 leading-[12vh] text-[5vw] absolute lg:flex flex-col md:flex hidden   items-start justify-center  top-0 left-0 w-[8%] h-full z-[4] ">
                    <p style={{ left: -200, opacity: 0, transform: 'scale(5)' }} className=' left-0  relative projects_text1 ' >
                        p
                    </p>
                    <p style={{ left: -200, opacity: 0, transform: 'scale(5)' }} className=' left-0  relative projects_text2 ' >
                        r
                    </p>
                    <p style={{ left: -200, opacity: 0, transform: 'scale(5)' }} className=' left-0  relative projects_text3 ' >
                        o
                    </p>
                    <p style={{ left: -200, opacity: 0, transform: 'scale(5)' }} className=' left-0  relative projects_text4 ' >
                        j
                    </p>
                    <p style={{ left: -200, opacity: 0, transform: 'scale(5)' }} className=' left-0  relative projects_text5 ' >
                        e
                    </p>
                    <p style={{ left: -200, opacity: 0, transform: 'scale(5)' }} className=' left-0  relative projects_text6 ' >
                        c
                    </p>
                    <p style={{ left: -200, opacity: 0, transform: 'scale(5)' }} className=' left-0  relative projects_text7 ' >
                        t
                    </p>
                    <p style={{ left: -200, opacity: 0, transform: 'scale(5)' }} className=' left-0  relative projects_text8 ' >
                        s
                    </p>
                </div>
                <div style={{ left: 0 }} className=" myskillls z-[0] absolute top-[50%]  w-[150vw]  translate-y-[-50%] ">
                    <p className='  text-[15vw] font-[fahkwang] text-secondry font-extrabold capitalize ' >My Projects</p>
                </div>
                <div className=" lg:hidden md:hidden block absolute  top-10 left-0 text-white font-[antonio] px-5 text-[70px]   capitalize  ">
                     <p> my  </p>
                     <p>projects</p>
                
                </div>
                <main className='  w-fit h-full md:ml-[70%] ml-5 lg:ml-[70%] flex  items-center justify-center  gap-x-[100px]  '>
                    {
                        projects.map((data, index) => {
                            return (
                                <>
                                    <div className="  horizontal__item_projects relative md:py-[170px] py-0 lg:py-[200px] w-[90vw] md:w-[800px] lg:w-[800px] rounded-[50px] overflow-hidden md:h-[400px] h-[300px]  lg:h-[600px] mx-auto ">

                                        {
                                            index === 1 ? (
                                                <>

                                                    <video src={data.src} autoPlay loop muted className="  object-cover absolute top-0 left-0    !w-full !h-full z-2  "></video>

                                                </>
                                            ) : <>
                                                <Image src={data.src} alt={data.title} fill className=' w-full h-full object-cover' />

                                            </>
                                        }
                                        <div className="   absolute top-0 bg-black/20 left-0 w-full h-full  z-[2]">

                                            <div className="  absolute   w-full h-full flex items-center justify-center  top-0 left-0 ">
                                                <p className='  text-white text-[6vw] font-[fahkwang]  font-extrabold capitalize ' >{data.title}</p>
                                            </div>


                                            <svg className=' w-full h-full   opacity-60   ' xmlns='http://www.w3.org/2000/svg'>
                                                <filter id='noiseFilter'>
                                                    <feTurbulence
                                                        type='fractalNoise'
                                                        baseFrequency='1.6'
                                                        numOctaves='1'
                                                        stitchTiles='stitch' />
                                                </filter>

                                                <rect width='100%' height='100%' filter='url(#noiseFilter)' />
                                            </svg>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </main>
            </div>



        </>
    )
}
