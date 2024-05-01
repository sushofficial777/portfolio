import React from 'react'
import Image from 'next/image';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useIsomorphicLayoutEffect } from "@/components/common/Memo";

// GSAP Register Plugin
gsap.registerPlugin(ScrollTrigger);


export default function Skills() {
    const data = [
        {
            data: [
                {
                    name: "REACT JS",
                    icon: "/icons/react.svg"
                },
                {
                    name: "Next js",
                    icon: "/icons/next.svg"
                },
            ]
        },
        {
            data: [
                {
                    name: "node js",
                    icon: "/icons/node.svg"
                },
                {
                    name: "javascript",
                    icon: "/icons/js.svg"
                },
            ]
        },
        {
            data: [
                {
                    name: "html",
                    icon: "/icons/html.svg"
                },
                {
                    name: "css",
                    icon: "/icons/css.svg"
                },
            ]
        },
        {
            data: [
                {
                    name: "tailwind css",
                    icon: "/icons/tailwind.svg"
                },
                {
                    name: "frammer motion",
                    icon: "/icons/framer.svg"
                },
            ]
        },
        {
            data: [
                {
                    name: "mongodb",
                    icon: "/icons/mongo.svg"
                },
                {
                    name: "mysql",
                    icon: "/icons/mysql.svg"
                },
            ]
        },
        {
            data: [
                {
                    name: "three js",
                    icon: "/icons/three.svg"
                },
                {
                    name: "d3js",
                    icon: "/icons/d3.svg"
                }
            ]
        }
    ]


    useIsomorphicLayoutEffect(() => {
        const gsapCtx = gsap.context(() => {
            // Horizontal Scroll
            const sectionTwo = document.getElementById("horizontal");
            const boxItems = gsap.utils.toArray(".horizontal__item");

            gsap.to(boxItems, {
                xPercent: -70 * boxItems.length,
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
                    trigger: "#horizontal",
                    start: "top center",
                    end: "bottom center",
                    scrub: true
                }
            });


            tl.to(".text1", { scale: 1, top: 0 })
                .to(".text2", { scale: 1, top: 0 })
                .to(".text3", { scale: 1, top: 0 })



            ScrollTrigger.refresh();
        });

        return () => {

            gsapCtx.revert();
        }
    }, []);


    return (


        <>
            <div id='horizontal' className=" relative w-full min-h-[100vh] !overflow-hidden   bg-primary  ">
                <div style={{ left: 0 }} className=" myskillls z-[0] absolute top-[50%]  w-[150vw]  translate-y-[-50%] ">
                    <p className='  text-[15vw] font-[fahkwang] text-secondry font-extrabold ' >MY SKILLS</p>
                </div>

                <div className="  uppercase font-semibold  gredient_left  text-white font-[antonio] pl-20 text-[8vw] absolute  lg:flex md:flex hidden flex-col  items-start justify-center  top-0 left-0 w-[40%] h-full z-[4] ">
                    <p style={{ top: 200, transform: 'scaleY(2)' }} className=' left-0 mix-blend-difference relative text1 ' >Code,</p>
                    <p style={{ top: 200, transform: 'scaleY(2)' }} className=' left-0 mix-blend-difference relative text2  ' >JAVASCRIPT,</p>
                    <p style={{ top: 200, transform: 'scaleY(2)' }} className=' left-0 mix-blend-difference relative text3 ' >JOY,</p>
                </div>

                <div className=" relative ml-[40vw]  ">
                    <div className=" pt-[20vh] relative items-center justify-start gap-10 px-20 z-3 w-full   flex  ">
                        {
                            data.slice(0, 6).map((values: any, index: number) => {
                                return (
                                    <>
                                        <div className=" horizontal__item flex flex-col gap-10  ">
                                            {
                                                values.data.map((value: any, index: number) => {
                                                    return (
                                                        <>
                                                            <div key={index} className="   flex items-center justify-center w-[300px] h-[230px] border  border-[#363636] bg-secondry rounded-xl ">
                                                                <div className="  flex justify-center flex-col items-center ">
                                                                    <div className="  relative w-[70px] h-[70px]  "> <Image fill src={value.icon} alt='' /> </div>
                                                                    <p className=' font-[fahkwang] mix-blend-difference text-[1.5vw] mt-3 text-white ' >{value.name}</p>
                                                                </div>
                                                            </div>
                                                        </>
                                                    )
                                                })
                                            }
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
