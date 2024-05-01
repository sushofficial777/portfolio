import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { motion } from 'framer-motion'
gsap.registerPlugin(ScrollTrigger);
export default function Index() {

    const images = [
        "/frame_3/scene00001.jpg",
        "/frame_3/scene00002.jpg",
        "/frame_3/scene00003.jpg",
        "/frame_3/scene00004.jpg",
        "/frame_3/scene00005.jpg",
        "/frame_3/scene00006.jpg",
        "/frame_3/scene00007.jpg",
        "/frame_3/scene00008.jpg",
        "/frame_3/scene00009.jpg",
        "/frame_3/scene00010.jpg",
        "/frame_3/scene00011.jpg",
        "/frame_3/scene00012.jpg",
        "/frame_3/scene00013.jpg",
        "/frame_3/scene00014.jpg",
        "/frame_3/scene00015.jpg",
        "/frame_3/scene00016.jpg",
        "/frame_3/scene00017.jpg",
        "/frame_3/scene00018.jpg",
        "/frame_3/scene00019.jpg",
        "/frame_3/scene00020.jpg",
        "/frame_3/scene00021.jpg",
        "/frame_3/scene00022.jpg",
        "/frame_3/scene00023.jpg",
        "/frame_3/scene00024.jpg",
        "/frame_3/scene00025.jpg",
        "/frame_3/scene00026.jpg",
        "/frame_3/scene00027.jpg",
        "/frame_3/scene00028.jpg",
        "/frame_3/scene00029.jpg",
        "/frame_3/scene00030.jpg",
        "/frame_3/scene00031.jpg",
        "/frame_3/scene00032.jpg",
        "/frame_3/scene00033.jpg",
        "/frame_3/scene00034.jpg",
        "/frame_3/scene00035.jpg",
        "/frame_3/scene00036.jpg",
        "/frame_3/scene00037.jpg",
        "/frame_3/scene00038.jpg",
        "/frame_3/scene00039.jpg",
        "/frame_3/scene00040.jpg",
        "/frame_3/scene00041.jpg",
        "/frame_3/scene00042.jpg",
        "/frame_3/scene00043.jpg",
        "/frame_3/scene00044.jpg",
        "/frame_3/scene00045.jpg",
        "/frame_3/scene00046.jpg",
        "/frame_3/scene00047.jpg",
        "/frame_3/scene00048.jpg",
        "/frame_3/scene00049.jpg",
        "/frame_3/scene00050.jpg",
        "/frame_3/scene00051.jpg",
        "/frame_3/scene00052.jpg",
        "/frame_3/scene00053.jpg",
        "/frame_3/scene00054.jpg",
        "/frame_3/scene00055.jpg",
        "/frame_3/scene00056.jpg",
        "/frame_3/scene00057.jpg",
        "/frame_3/scene00058.jpg",
        "/frame_3/scene00059.jpg",
        "/frame_3/scene00060.jpg",
        "/frame_3/scene00061.jpg",
        "/frame_3/scene00062.jpg",
        "/frame_3/scene00063.jpg",
        "/frame_3/scene00064.jpg",
        "/frame_3/scene00065.jpg",
        "/frame_3/scene00066.jpg",
        "/frame_3/scene00067.jpg",
        "/frame_3/scene00068.jpg",
        "/frame_3/scene00069.jpg",
        "/frame_3/scene00070.jpg",
        "/frame_3/scene00071.jpg",
        "/frame_3/scene00072.jpg",
        "/frame_3/scene00073.jpg",
        "/frame_3/scene00074.jpg",
        "/frame_3/scene00075.jpg",
        "/frame_3/scene00076.jpg",
        "/frame_3/scene00077.jpg",
        "/frame_3/scene00078.jpg",
        "/frame_3/scene00079.jpg",
        "/frame_3/scene00080.jpg",
        "/frame_3/scene00081.jpg",
        "/frame_3/scene00082.jpg",
        "/frame_3/scene00083.jpg",
        "/frame_3/scene00084.jpg",
        "/frame_3/scene00085.jpg",
        "/frame_3/scene00086.jpg",
        "/frame_3/scene00087.jpg",
        "/frame_3/scene00088.jpg",
        "/frame_3/scene00089.jpg",
        "/frame_3/scene00090.jpg",
        "/frame_3/scene00091.jpg",
        "/frame_3/scene00092.jpg",
        "/frame_3/scene00093.jpg",
        "/frame_3/scene00094.jpg",
        "/frame_3/scene00095.jpg",
        "/frame_3/scene00096.jpg",
        "/frame_3/scene00097.jpg",
        "/frame_3/scene00098.jpg",
        "/frame_3/scene00099.jpg",
        "/frame_3/scene00100.jpg",
        "/frame_3/scene00101.jpg",
        "/frame_3/scene00102.jpg",
        "/frame_3/scene00103.jpg",
        "/frame_3/scene00104.jpg",
        "/frame_3/scene00105.jpg",
        "/frame_3/scene00106.jpg",
        "/frame_3/scene00107.jpg",
        "/frame_3/scene00108.jpg",
        "/frame_3/scene00109.jpg",
        "/frame_3/scene00110.jpg",
        "/frame_3/scene00111.jpg",
        "/frame_3/scene00112.jpg",
        "/frame_3/scene00113.jpg",
        "/frame_3/scene00114.jpg",
        "/frame_3/scene00115.jpg",
        "/frame_3/scene00116.jpg",
        "/frame_3/scene00117.jpg",
        "/frame_3/scene00118.jpg",
        "/frame_3/scene00119.jpg",
        "/frame_3/scene00120.jpg",
        "/frame_3/scene00121.jpg",
        "/frame_3/scene00122.jpg",
        "/frame_3/scene00123.jpg",
        "/frame_3/scene00124.jpg",
        "/frame_3/scene00125.jpg",
        "/frame_3/scene00126.jpg",
        "/frame_3/scene00127.jpg",
        "/frame_3/scene00128.jpg",
        "/frame_3/scene00129.jpg",
        "/frame_3/scene00130.jpg",
        "/frame_3/scene00131.jpg",
        "/frame_3/scene00132.jpg",
        "/frame_3/scene00133.jpg",
        "/frame_3/scene00134.jpg",
        "/frame_3/scene00135.jpg",
        "/frame_3/scene00136.jpg",
        "/frame_3/scene00137.jpg",
        "/frame_3/scene00138.jpg",
        "/frame_3/scene00139.jpg",
        "/frame_3/scene00140.jpg",
        "/frame_3/scene00141.jpg",
        "/frame_3/scene00142.jpg",
        "/frame_3/scene00143.jpg",
        "/frame_3/scene00144.jpg",
        "/frame_3/scene00145.jpg",
        "/frame_3/scene00146.jpg",
        "/frame_3/scene00147.jpg",
        "/frame_3/scene00148.jpg",
        "/frame_3/scene00149.jpg",
        "/frame_3/scene00150.jpg",
        "/frame_3/scene00151.jpg",
        "/frame_3/scene00152.jpg",
        "/frame_3/scene00153.jpg",
        "/frame_3/scene00154.jpg",
        "/frame_3/scene00155.jpg",
        "/frame_3/scene00156.jpg",
        "/frame_3/scene00157.jpg",
        "/frame_3/scene00158.jpg",
        "/frame_3/scene00159.jpg",
        "/frame_3/scene00160.jpg",
        "/frame_3/scene00161.jpg",
        "/frame_3/scene00162.jpg",
        "/frame_3/scene00163.jpg",
        "/frame_3/scene00164.jpg",
        "/frame_3/scene00165.jpg",
        "/frame_3/scene00166.jpg",
        "/frame_3/scene00167.jpg",
        "/frame_3/scene00168.jpg",
        "/frame_3/scene00169.jpg",
        "/frame_3/scene00170.jpg",
        "/frame_3/scene00171.jpg",
        "/frame_3/scene00172.jpg",
        "/frame_3/scene00173.jpg",
        "/frame_3/scene00174.jpg",
        "/frame_3/scene00175.jpg",
        "/frame_3/scene00176.jpg",
        "/frame_3/scene00177.jpg",
        "/frame_3/scene00178.jpg",
        "/frame_3/scene00179.jpg",
        "/frame_3/scene00180.jpg",
        "/frame_3/scene00181.jpg",
        "/frame_3/scene00182.jpg",
        "/frame_3/scene00183.jpg",
        "/frame_3/scene00184.jpg",
        "/frame_3/scene00185.jpg",
        "/frame_3/scene00186.jpg",
        "/frame_3/scene00187.jpg",
        "/frame_3/scene00188.jpg",
        "/frame_3/scene00189.jpg",
        "/frame_3/scene00190.jpg",
        "/frame_3/scene00191.jpg",
        "/frame_3/scene00192.jpg",
        "/frame_3/scene00193.jpg",
        "/frame_3/scene00194.jpg",
        "/frame_3/scene00195.jpg",
        "/frame_3/scene00196.jpg",
        "/frame_3/scene00197.jpg",
        "/frame_3/scene00198.jpg",
        "/frame_3/scene00199.jpg",
        "/frame_3/scene00200.jpg",
        "/frame_3/scene00201.jpg",
        "/frame_3/scene00202.jpg",
        "/frame_3/scene00203.jpg",
        "/frame_3/scene00204.jpg",
        "/frame_3/scene00205.jpg",
        "/frame_3/scene00206.jpg",
        "/frame_3/scene00207.jpg",
        "/frame_3/scene00208.jpg",
        "/frame_3/scene00209.jpg",
        "/frame_3/scene00210.jpg",
        "/frame_3/scene00211.jpg",
        "/frame_3/scene00212.jpg",
        "/frame_3/scene00213.jpg",
        "/frame_3/scene00214.jpg",
        "/frame_3/scene00215.jpg",
        "/frame_3/scene00216.jpg",
        "/frame_3/scene00217.jpg",
        "/frame_3/scene00218.jpg",
        "/frame_3/scene00219.jpg",
        "/frame_3/scene00220.jpg",
        "/frame_3/scene00221.jpg",
        "/frame_3/scene00222.jpg",
        "/frame_3/scene00223.jpg",
        "/frame_3/scene00224.jpg",
        "/frame_3/scene00225.jpg",
        "/frame_3/scene00226.jpg",
        "/frame_3/scene00227.jpg",
        "/frame_3/scene00228.jpg",
        "/frame_3/scene00229.jpg",
        "/frame_3/scene00230.jpg",
        "/frame_3/scene00231.jpg",
        "/frame_3/scene00232.jpg",
        "/frame_3/scene00233.jpg",
        "/frame_3/scene00234.jpg",
        "/frame_3/scene00235.jpg",
        "/frame_3/scene00236.jpg",
        "/frame_3/scene00237.jpg",
        "/frame_3/scene00238.jpg",
        "/frame_3/scene00239.jpg",
        "/frame_3/scene00240.jpg",
        "/frame_3/scene00241.jpg",
        "/frame_3/scene00242.jpg",
        "/frame_3/scene00243.jpg",
        "/frame_3/scene00244.jpg",
        "/frame_3/scene00245.jpg",
        "/frame_3/scene00246.jpg",
        "/frame_3/scene00247.jpg",
        "/frame_3/scene00248.jpg",
        "/frame_3/scene00249.jpg",
        "/frame_3/scene00250.jpg",
        "/frame_3/scene00251.jpg",
        "/frame_3/scene00252.jpg",
        "/frame_3/scene00253.jpg",
        "/frame_3/scene00254.jpg",
        "/frame_3/scene00255.jpg",
        "/frame_3/scene00256.jpg",
        "/frame_3/scene00257.jpg",
        "/frame_3/scene00258.jpg",
        "/frame_3/scene00259.jpg",
        "/frame_3/scene00260.jpg",
        "/frame_3/scene00261.jpg",
        "/frame_3/scene00262.jpg",
        "/frame_3/scene00263.jpg",
        "/frame_3/scene00264.jpg",
        "/frame_3/scene00265.jpg",
        "/frame_3/scene00266.jpg",
        "/frame_3/scene00267.jpg",
        "/frame_3/scene00268.jpg",
        "/frame_3/scene00269.jpg",
        "/frame_3/scene00270.jpg",
        "/frame_3/scene00271.jpg",
        "/frame_3/scene00272.jpg",
        "/frame_3/scene00273.jpg",
        "/frame_3/scene00274.jpg",
        "/frame_3/scene00275.jpg",
        "/frame_3/scene00276.jpg",
        "/frame_3/scene00277.jpg",
        "/frame_3/scene00278.jpg",
        "/frame_3/scene00279.jpg",
        "/frame_3/scene00280.jpg",
        "/frame_3/scene00281.jpg",
        "/frame_3/scene00282.jpg",
        "/frame_3/scene00283.jpg",
        "/frame_3/scene00284.jpg"
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
        const imageCount = 284;

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
                end: () => "=" + pageRefElement.clientHeight ,
                scrub: true,

                pin: true,
                // markers: true,
                onUpdate: (self) => {
                    const index = Math.round(self.progress * (imageCount - 1)/* 284 */);
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
                <div className=" w-full fit ">
                    {/* <div className="relative w-full h-screen "> */}
                    {/* <Image src={images[0]} className=' w-full h-full object-cover ' fill alt='' /> */}
                    {/* </div> */}

                    <div ref={pageRef} className="  relative w-full h-[300vh] ">

                        <canvas ref={canvasRef} className="w-full h-screen relative top-0 left-0" />
                   </div>

                    <div ref={mainTitleRef} className=" w-full flex flex-col items-center justify-center h-[80vh]  relative   ">
                        {/* <p ref={mainTextRef} className='utopia font-bold text-slate-300  md:text-[50px] text-[30px] lg:text-[80px]  md:tracking-[2.5em] tracking-[1.3em] lg:tracking-[2em]  uppercase  pl-[9vw] ' >utopia</p>
                    */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}

                            className='tracking-[2em] utopia  uppercase  ' > welcome to </motion.p>
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
                <div style={{ height: `${currentProgress}` }} ref={progressRef} className="  h-full bg-red-300 "></div>
            </div>


        </>
    )
}
