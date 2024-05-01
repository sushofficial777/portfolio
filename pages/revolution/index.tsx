import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Utopia_2 from '@/components/projects/Utopia_2';
import { motion } from 'framer-motion'
gsap.registerPlugin(ScrollTrigger);
export default function Index() {

    const images = [
        "/frame_1/scene00001.jpg",
        "/frame_1/scene00002.jpg",
        "/frame_1/scene00003.jpg",
        "/frame_1/scene00004.jpg",
        "/frame_1/scene00005.jpg",
        "/frame_1/scene00006.jpg",
        "/frame_1/scene00007.jpg",
        "/frame_1/scene00008.jpg",
        "/frame_1/scene00009.jpg",
        "/frame_1/scene00010.jpg",
        "/frame_1/scene00011.jpg",
        "/frame_1/scene00012.jpg",
        "/frame_1/scene00013.jpg",
        "/frame_1/scene00014.jpg",
        "/frame_1/scene00015.jpg",
        "/frame_1/scene00016.jpg",
        "/frame_1/scene00017.jpg",
        "/frame_1/scene00018.jpg",
        "/frame_1/scene00019.jpg",
        "/frame_1/scene00020.jpg",
        "/frame_1/scene00021.jpg",
        "/frame_1/scene00022.jpg",
        "/frame_1/scene00023.jpg",
        "/frame_1/scene00024.jpg",
        "/frame_1/scene00025.jpg",
        "/frame_1/scene00026.jpg",
        "/frame_1/scene00027.jpg",
        "/frame_1/scene00028.jpg",
        "/frame_1/scene00029.jpg",
        "/frame_1/scene00030.jpg",
        "/frame_1/scene00031.jpg",
        "/frame_1/scene00032.jpg",
        "/frame_1/scene00033.jpg",
        "/frame_1/scene00034.jpg",
        "/frame_1/scene00035.jpg",
        "/frame_1/scene00036.jpg",
        "/frame_1/scene00037.jpg",
        "/frame_1/scene00038.jpg",
        "/frame_1/scene00039.jpg",
        "/frame_1/scene00040.jpg",
        "/frame_1/scene00041.jpg",
        "/frame_1/scene00042.jpg",
        "/frame_1/scene00043.jpg",
        "/frame_1/scene00044.jpg",
        "/frame_1/scene00045.jpg",
        "/frame_1/scene00046.jpg",
        "/frame_1/scene00047.jpg",
        "/frame_1/scene00048.jpg",
        "/frame_1/scene00049.jpg",
        "/frame_1/scene00050.jpg",
        "/frame_1/scene00051.jpg",
        "/frame_1/scene00052.jpg",
        "/frame_1/scene00053.jpg",
        "/frame_1/scene00054.jpg",
        "/frame_1/scene00055.jpg"
    ]

    const [currentProgress, setCurrentProgress] = useState('0%');
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    console.log(currentImageIndex);

    const canvasRef = useRef(null);
    const pageRef = useRef(null);
    const mainTitleRef = useRef(null);
    const mainTextRef = useRef(null);
    const progressRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const pageRefElement = pageRef.current;
        const ctx = canvas.getContext('2d');
        const image = new Image();

        image.src = images[0]; // Path to your drow image

        const imagess = [];
        const imageCount = 55;

        images.map((image, index) => {
            const img = new Image();
            img.src = image;
            imagess.push(img);
        })

        const renderImage = (index: number) => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            // Calculate scaling factors to fit the image into the canvas with "object-cover" aspect ratio
            const scaleFactor = Math.max(canvas.width / image.width, canvas.height / image.height);
            const scaledWidth = image.width * scaleFactor;
            const scaledHeight = image.height * scaleFactor;


            // Calculate centering offsets
            const xOffset = (canvas.width - scaledWidth) / 2;
            const yOffset = (canvas.height - scaledHeight) / 2;
            // Draw the image with object-cover aspect ratio
            ctx.drawImage(imagess[index], xOffset, yOffset, scaledWidth, scaledHeight);
        }
        image.onload = () => {
            // Set canvas size to window size
            renderImage(currentImageIndex);
        };

        const handleResize = () => {
            renderImage(currentImageIndex);
        }

        console.log(pageRefElement.clientHeight, "pageRefElement.clientHeight");

        gsap.to(canvas, {
            scrollTrigger: {
                trigger: pageRefElement,
                start: "top top",
                end: () => "+=" + pageRefElement.clientHeight,
                scrub: true,

                pin: true,
                // markers: true,
                onUpdate: (self) => {
                    const index = Math.round(self.progress * (imageCount - 1));
                    const image = imagess[index];
                    const scaleFactor = Math.max(canvas.width / image.width, canvas.height / image.height);
                    const scaledWidth = image.width * scaleFactor;
                    const scaledHeight = image.height * scaleFactor;
                    const xOffset = (canvas.width - scaledWidth) / 2;
                    const yOffset = (canvas.height - scaledHeight) / 2;
                    // Clear the canvas before drawing the next image
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(image, xOffset, yOffset, scaledWidth, scaledHeight);


                    setCurrentProgress(`${Math.round(self.progress * 100)}%`);

                    setCurrentImageIndex(index);
                    //    renderImage(index);
                },


            },
        })

        // const handleScroll = () => {
        //     const scrollY = window.scrollY;
        //     const pageHeight = pageRef.current.offsetHeight;
        //     const windowHeight = window.innerHeight;

        //     if (scrollY / (pageHeight - windowHeight) >= 1) {
        //         gsap.to(canvas, {
        //             y: -(scrollY / (pageHeight - windowHeight) - 0.9) * 100 + '%',
        //             opacity: 0,
        //             overwrite: 'auto',
        //         });
        //     } else {
        //         gsap.to(canvas, {
        //             y: 0,
        //             opacity: 1,
        //             overwrite: 'auto',
        //         });
        //     }
        // };

        // window.addEventListener('scroll', handleScroll);


        window.addEventListener('resize', handleResize);

        return () => {
            gsap.killTweensOf(canvas);
            window.removeEventListener('resize', handleResize);
            // window.removeEventListener('scroll', handleScroll);
        }

    }, []);

    const utopia = ["u", "t", "o", "p", "i", "a"];



    return (
        <>
            <div className=" bg-white  ">
                <div ref={pageRef} className=" w-full h-[180vh] ">
                    {/* <div className="relative w-full h-screen "> */}
                    {/* <Image src={images[0]} className=' w-full h-full object-cover ' fill alt='' /> */}
                    {/* </div> */}
                    <canvas ref={canvasRef} className="w-full h-screen relative top-0 left-0" />

                    <div ref={mainTitleRef} className=" w-full flex flex-col items-center justify-center h-[80vh]  relative   ">
                        {/* <p ref={mainTextRef} className='utopia font-bold text-slate-300  md:text-[50px] text-[30px] lg:text-[80px]  md:tracking-[2.5em] tracking-[1.3em] lg:tracking-[2em]  uppercase  pl-[9vw] ' >utopia</p>
                    */}
                        <motion.p
                           initial={{ opacity: 0 }}
                           whileInView={{ opacity: 1 }}
                           viewport={{ once: true }}
                           transition={{ duration: 1 }}
                        
                        className=' tracking-[2em] utopia  uppercase  ' > welcome to </motion.p>
                        <div className=" flex items-center justify-center gap-10 ">
                            {
                                utopia.map((item, index) => {
                                    return (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 2 }}


                                            key={index} className=" text-red-300 relative z-[3] lg:w-[100px]   flex items-center justify-center mx-1  utopia   font-extrabold  md:text-[50px] text-[30px] lg:text-[80px]    uppercase   " >
                                            <p> {item}</p>
                                        </motion.div>
                                    )
                                })
                            }
                        </div>
                        {/* <div className="absolute text-slate-100 flex items-center z-0 justify-center top-0 left-0 w-full h-full  text-[30vw] ">
                    <p> Future </p>
                   </div> */}
                    </div>
                </div>
            </div>

            <div style={{ opacity: currentProgress === '100%' ? 0 : 1 }} className=" fixed duration-200 left-[6%]  top-[50%] translate-y-[-50%] w-[2px] h-[70vh] rounded-full bg-slate-200 ">
                <div style={{ height: `${currentProgress}`}} ref={progressRef} className="  h-full bg-red-300 "></div>
            </div>


        </>
    )
}
