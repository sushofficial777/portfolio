import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);
export default function Index() {

    const images = [
        "/frame_2/scene00001.jpg",
        "/frame_2/scene00002.jpg",
        "/frame_2/scene00003.jpg",
        "/frame_2/scene00004.jpg",
        "/frame_2/scene00005.jpg",
        "/frame_2/scene00006.jpg",
        "/frame_2/scene00007.jpg",
        "/frame_2/scene00008.jpg",
        "/frame_2/scene00009.jpg",
        "/frame_2/scene00010.jpg",
        "/frame_2/scene00011.jpg",
        "/frame_2/scene00012.jpg",
        "/frame_2/scene00013.jpg",
        "/frame_2/scene00014.jpg",
        "/frame_2/scene00015.jpg",
        "/frame_2/scene00016.jpg",
        "/frame_2/scene00017.jpg",
        "/frame_2/scene00018.jpg",
        "/frame_2/scene00019.jpg",
        "/frame_2/scene00020.jpg",
        "/frame_2/scene00021.jpg",
        "/frame_2/scene00022.jpg",
        "/frame_2/scene00023.jpg",
        "/frame_2/scene00024.jpg",
        "/frame_2/scene00025.jpg",
        "/frame_2/scene00026.jpg",
        "/frame_2/scene00027.jpg",
        "/frame_2/scene00028.jpg",
        "/frame_2/scene00029.jpg",
        "/frame_2/scene00030.jpg",
        "/frame_2/scene00031.jpg",
        "/frame_2/scene00032.jpg",
        "/frame_2/scene00033.jpg",
        "/frame_2/scene00034.jpg",
        "/frame_2/scene00035.jpg",
        "/frame_2/scene00036.jpg",
        "/frame_2/scene00037.jpg",
        "/frame_2/scene00038.jpg",
        "/frame_2/scene00039.jpg",
        "/frame_2/scene00040.jpg",
        "/frame_2/scene00041.jpg",
        "/frame_2/scene00042.jpg",
        "/frame_2/scene00043.jpg",
        "/frame_2/scene00044.jpg",
        "/frame_2/scene00045.jpg",
        "/frame_2/scene00046.jpg",
        "/frame_2/scene00047.jpg",
        "/frame_2/scene00048.jpg",
        "/frame_2/scene00049.jpg",
        "/frame_2/scene00050.jpg",
        "/frame_2/scene00051.jpg",
        "/frame_2/scene00052.jpg",
        "/frame_2/scene00053.jpg",
        "/frame_2/scene00054.jpg",
        "/frame_2/scene00055.jpg",
        "/frame_2/scene00056.jpg",
        "/frame_2/scene00057.jpg",
        "/frame_2/scene00058.jpg",
        "/frame_2/scene00059.jpg",
        "/frame_2/scene00060.jpg",
        "/frame_2/scene00061.jpg",
        "/frame_2/scene00062.jpg",
        "/frame_2/scene00063.jpg",
        "/frame_2/scene00064.jpg",
        "/frame_2/scene00065.jpg",
        "/frame_2/scene00066.jpg",
        "/frame_2/scene00067.jpg",
        "/frame_2/scene00068.jpg",
        "/frame_2/scene00069.jpg",
        "/frame_2/scene00070.jpg",
        "/frame_2/scene00071.jpg",
        "/frame_2/scene00072.jpg",
        "/frame_2/scene00073.jpg",
        "/frame_2/scene00074.jpg",
        "/frame_2/scene00075.jpg",
        "/frame_2/scene00076.jpg",
        "/frame_2/scene00077.jpg",
        "/frame_2/scene00078.jpg",
        "/frame_2/scene00079.jpg",
        "/frame_2/scene00080.jpg",
        "/frame_2/scene00081.jpg",
        "/frame_2/scene00082.jpg",
        "/frame_2/scene00083.jpg",
        "/frame_2/scene00084.jpg",
        "/frame_2/scene00085.jpg",
        "/frame_2/scene00086.jpg",
        "/frame_2/scene00087.jpg",
        "/frame_2/scene00088.jpg",
        "/frame_2/scene00089.jpg",
        "/frame_2/scene00090.jpg",
        "/frame_2/scene00091.jpg",
        "/frame_2/scene00092.jpg",
        "/frame_2/scene00093.jpg",
        "/frame_2/scene00094.jpg",
        "/frame_2/scene00095.jpg",
        "/frame_2/scene00096.jpg",
        "/frame_2/scene00097.jpg",
        "/frame_2/scene00098.jpg",
        "/frame_2/scene00099.jpg",
        "/frame_2/scene00100.jpg",
        "/frame_2/scene00101.jpg",
        "/frame_2/scene00102.jpg",
        "/frame_2/scene00103.jpg",
        "/frame_2/scene00104.jpg",
        "/frame_2/scene00105.jpg",
        "/frame_2/scene00106.jpg",
        "/frame_2/scene00107.jpg",
        "/frame_2/scene00108.jpg",
        "/frame_2/scene00109.jpg",
        "/frame_2/scene00110.jpg",
        "/frame_2/scene00111.jpg",
        "/frame_2/scene00112.jpg",
        "/frame_2/scene00113.jpg",
        "/frame_2/scene00114.jpg",
        "/frame_2/scene00115.jpg",
        "/frame_2/scene00116.jpg",
        "/frame_2/scene00117.jpg",
        "/frame_2/scene00118.jpg",
        "/frame_2/scene00119.jpg",
        "/frame_2/scene00120.jpg",
        "/frame_2/scene00121.jpg",
        "/frame_2/scene00122.jpg",
        "/frame_2/scene00123.jpg",
        "/frame_2/scene00124.jpg",
        "/frame_2/scene00125.jpg",
        "/frame_2/scene00126.jpg",
        "/frame_2/scene00127.jpg",
        "/frame_2/scene00128.jpg",
        "/frame_2/scene00129.jpg",
        "/frame_2/scene00130.jpg",
        "/frame_2/scene00131.jpg",
        "/frame_2/scene00132.jpg",
        "/frame_2/scene00133.jpg",
        "/frame_2/scene00134.jpg",
        "/frame_2/scene00135.jpg",
        "/frame_2/scene00136.jpg",
        "/frame_2/scene00137.jpg",
        "/frame_2/scene00138.jpg",
        "/frame_2/scene00139.jpg",
        "/frame_2/scene00140.jpg",
        "/frame_2/scene00141.jpg",
        "/frame_2/scene00142.jpg",
        "/frame_2/scene00143.jpg",
        "/frame_2/scene00144.jpg",
        "/frame_2/scene00145.jpg",
        "/frame_2/scene00146.jpg",
        "/frame_2/scene00147.jpg",
        "/frame_2/scene00148.jpg",
        "/frame_2/scene00149.jpg",
        "/frame_2/scene00150.jpg",
        "/frame_2/scene00151.jpg",
        "/frame_2/scene00152.jpg",
        "/frame_2/scene00153.jpg",
        "/frame_2/scene00154.jpg",
        "/frame_2/scene00155.jpg",
        "/frame_2/scene00156.jpg",
        "/frame_2/scene00157.jpg",
        "/frame_2/scene00158.jpg",
        "/frame_2/scene00159.jpg",
        "/frame_2/scene00160.jpg",
        "/frame_2/scene00161.jpg",
        "/frame_2/scene00162.jpg",
        "/frame_2/scene00163.jpg",
        "/frame_2/scene00164.jpg",
        "/frame_2/scene00165.jpg",
        "/frame_2/scene00166.jpg",
        "/frame_2/scene00167.jpg",
        "/frame_2/scene00168.jpg",
        "/frame_2/scene00169.jpg",
        "/frame_2/scene00170.jpg",
        "/frame_2/scene00171.jpg",
        "/frame_2/scene00172.jpg",
        "/frame_2/scene00173.jpg",
        "/frame_2/scene00174.jpg",
        "/frame_2/scene00175.jpg",
        "/frame_2/scene00176.jpg",
        "/frame_2/scene00177.jpg",
        "/frame_2/scene00178.jpg",
        "/frame_2/scene00179.jpg",
        "/frame_2/scene00180.jpg",
        "/frame_2/scene00181.jpg",
        "/frame_2/scene00182.jpg",
        "/frame_2/scene00183.jpg",
        "/frame_2/scene00184.jpg",
        "/frame_2/scene00185.jpg",
        "/frame_2/scene00186.jpg",
        "/frame_2/scene00187.jpg",
        "/frame_2/scene00188.jpg",
        "/frame_2/scene00189.jpg",
        "/frame_2/scene00190.jpg",
        "/frame_2/scene00191.jpg",
        "/frame_2/scene00192.jpg",
        "/frame_2/scene00193.jpg",
        "/frame_2/scene00194.jpg",
        "/frame_2/scene00195.jpg",
        "/frame_2/scene00196.jpg",
        "/frame_2/scene00197.jpg",
        "/frame_2/scene00198.jpg",
        "/frame_2/scene00199.jpg",
        "/frame_2/scene00200.jpg",
        "/frame_2/scene00201.jpg",
        "/frame_2/scene00202.jpg",
        "/frame_2/scene00203.jpg",
        "/frame_2/scene00204.jpg",
        "/frame_2/scene00205.jpg",
        "/frame_2/scene00206.jpg",
        "/frame_2/scene00207.jpg",
        "/frame_2/scene00208.jpg",
        "/frame_2/scene00209.jpg",
        "/frame_2/scene00210.jpg",
        "/frame_2/scene00211.jpg",
        "/frame_2/scene00212.jpg",
        "/frame_2/scene00213.jpg",
        "/frame_2/scene00214.jpg",
        "/frame_2/scene00215.jpg",
        "/frame_2/scene00216.jpg",
        "/frame_2/scene00217.jpg",
        "/frame_2/scene00218.jpg",
        "/frame_2/scene00219.jpg",
        "/frame_2/scene00220.jpg",
        "/frame_2/scene00221.jpg",
        "/frame_2/scene00222.jpg",
        "/frame_2/scene00223.jpg",
        "/frame_2/scene00224.jpg",
        "/frame_2/scene00225.jpg",
        "/frame_2/scene00226.jpg",
        "/frame_2/scene00227.jpg",
        "/frame_2/scene00228.jpg",
        "/frame_2/scene00229.jpg",
        "/frame_2/scene00230.jpg",
        "/frame_2/scene00231.jpg",
        "/frame_2/scene00232.jpg",
        "/frame_2/scene00233.jpg",
        "/frame_2/scene00234.jpg",
        "/frame_2/scene00235.jpg",
        "/frame_2/scene00236.jpg",
        "/frame_2/scene00237.jpg",
        "/frame_2/scene00238.jpg",
        "/frame_2/scene00239.jpg",
        "/frame_2/scene00240.jpg",
        "/frame_2/scene00241.jpg",
        "/frame_2/scene00242.jpg",
        "/frame_2/scene00243.jpg",
        "/frame_2/scene00244.jpg",
        "/frame_2/scene00245.jpg",
        "/frame_2/scene00246.jpg",
        "/frame_2/scene00247.jpg",
        "/frame_2/scene00248.jpg",
        "/frame_2/scene00249.jpg",
        "/frame_2/scene00250.jpg",
        "/frame_2/scene00251.jpg",
        "/frame_2/scene00252.jpg",
        "/frame_2/scene00253.jpg",
        "/frame_2/scene00254.jpg",
        "/frame_2/scene00255.jpg",
        "/frame_2/scene00256.jpg",
        "/frame_2/scene00257.jpg",
        "/frame_2/scene00258.jpg",
        "/frame_2/scene00259.jpg",
        "/frame_2/scene00260.jpg",
        "/frame_2/scene00261.jpg",
        "/frame_2/scene00262.jpg",
        "/frame_2/scene00263.jpg",
        "/frame_2/scene00264.jpg",
        "/frame_2/scene00265.jpg",
        "/frame_2/scene00266.jpg",
        "/frame_2/scene00267.jpg",
        "/frame_2/scene00268.jpg",
        "/frame_2/scene00269.jpg",
        "/frame_2/scene00270.jpg",
        "/frame_2/scene00271.jpg",
        "/frame_2/scene00272.jpg",
        "/frame_2/scene00273.jpg",
        "/frame_2/scene00274.jpg",
        "/frame_2/scene00275.jpg",
        "/frame_2/scene00276.jpg",
        "/frame_2/scene00277.jpg",
        "/frame_2/scene00278.jpg",
        "/frame_2/scene00279.jpg",
        "/frame_2/scene00280.jpg",
        "/frame_2/scene00281.jpg",
        "/frame_2/scene00282.jpg",
        "/frame_2/scene00283.jpg",
        "/frame_2/scene00284.jpg",
        "/frame_2/scene00285.jpg",
        "/frame_2/scene00286.jpg",
        "/frame_2/scene00287.jpg",
        "/frame_2/scene00288.jpg",
        "/frame_2/scene00289.jpg",
        "/frame_2/scene00290.jpg",
        "/frame_2/scene00291.jpg",
        "/frame_2/scene00292.jpg",
        "/frame_2/scene00293.jpg",
        "/frame_2/scene00294.jpg",
        "/frame_2/scene00295.jpg",
        "/frame_2/scene00296.jpg",
        "/frame_2/scene00297.jpg",
        "/frame_2/scene00298.jpg",
        "/frame_2/scene00299.jpg",
        "/frame_2/scene00300.jpg",
        "/frame_2/scene00301.jpg",
        "/frame_2/scene00302.jpg",
        "/frame_2/scene00303.jpg",
        "/frame_2/scene00304.jpg",
        "/frame_2/scene00305.jpg",
        "/frame_2/scene00306.jpg",
        "/frame_2/scene00307.jpg",
        "/frame_2/scene00308.jpg",
        "/frame_2/scene00309.jpg",
        "/frame_2/scene00310.jpg",
        "/frame_2/scene00311.jpg",
        "/frame_2/scene00312.jpg",
        "/frame_2/scene00313.jpg",
        "/frame_2/scene00314.jpg",
        "/frame_2/scene00315.jpg",
        "/frame_2/scene00316.jpg",
        "/frame_2/scene00317.jpg",
        "/frame_2/scene00318.jpg",
        "/frame_2/scene00319.jpg",
        "/frame_2/scene00320.jpg",
        "/frame_2/scene00321.jpg",
        "/frame_2/scene00322.jpg",
        "/frame_2/scene00323.jpg",
        "/frame_2/scene00324.jpg",
        "/frame_2/scene00325.jpg",
        "/frame_2/scene00326.jpg",
        "/frame_2/scene00327.jpg",
        "/frame_2/scene00328.jpg"
    ]

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    console.log(currentImageIndex);

    const canvas1Ref1 = useRef(null);
    const pageRef = useRef(null);
    const mainTitleRef1 = useRef(null);
    const mainTextRef = useRef(null);

    useEffect(() => {
        const canvas1 = canvas1Ref1.current;
        const pageRefElement = pageRef.current;
        const mainTitleRef1Element = mainTitleRef1.current;
        const mainTextRefElement = mainTextRef.current;
        const ctx = canvas1.getContext('2d');
        const image = new Image();

        image.src = images[0]; // Path to your drow image

        const imagess = [];
        const imageCount = 328;

        images.map((image, index) => {
            const img = new Image();
            img.src = image;
            imagess.push(img);
        })

        const renderImage = (index: number) => {
            canvas1.width = window.innerWidth;
            canvas1.height = window.innerHeight;

            // Calculate scaling factors to fit the image into the canvas1 with "object-cover" aspect ratio
            const scaleFactor = Math.max(canvas1.width / image.width, canvas1.height / image.height);
            const scaledWidth = image.width * scaleFactor;
            const scaledHeight = image.height * scaleFactor;


            // Calculate centering offsets
            const xOffset = (canvas1.width - scaledWidth) / 2;
            const yOffset = (canvas1.height - scaledHeight) / 2;
            // Draw the image with object-cover aspect ratio
            ctx.drawImage(imagess[index], xOffset, yOffset, scaledWidth, scaledHeight);
        }
        image.onload = () => {
            // Set canvas1 size to window size
            renderImage(currentImageIndex);
        };

        const handleResize = () => {
            renderImage(currentImageIndex);
        }

        console.log(pageRefElement.clientHeight, "pageRefElement.clientHeight");

        gsap.to(canvas1, {
            scrollTrigger: {
                trigger: pageRefElement,
                start: "top top",
                end: () => "+=" + pageRefElement.clientHeight,
                scrub: true,

                pin: true,
                markers: true,
                onUpdate: (self) => {
                    const index = Math.round(self.progress * (imageCount - 1));
                    const image = imagess[index];
                    const scaleFactor = Math.max(canvas1.width / image.width, canvas1.height / image.height);
                    const scaledWidth = image.width * scaleFactor;
                    const scaledHeight = image.height * scaleFactor;
                    const xOffset = (canvas1.width - scaledWidth) / 2;
                    const yOffset = (canvas1.height - scaledHeight) / 2;
                    // Clear the canvas1 before drawing the next image
                    ctx.clearRect(0, 0, canvas1.width, canvas1.height);
                    ctx.drawImage(image, xOffset, yOffset, scaledWidth, scaledHeight);

                    setCurrentImageIndex(index);
                    //    renderImage(index);
                },


            },
        })

        const handleScroll = () => {
            const scrollY = window.scrollY;
            const pageHeight = pageRef.current.offsetHeight;
            const windowHeight = window.innerHeight;

            // if (scrollY / (pageHeight - windowHeight) >= 1) {
            //     gsap.to(canvas1, {
            //         // y: -(scrollY / (pageHeight - windowHeight) - 0.9) * 100 + '%',
            //         opacity: 0,
            //         overwrite: 'auto',
            //     });
            // } else {
            //     gsap.to(canvas1, {
            //         // y: 0,
            //         opacity: 1,
            //         overwrite: 'auto',
            //     });
            // }
        };

        window.addEventListener('scroll', handleScroll);


        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        }

    }, []);



    return (
        <>
            <div className=" bg-white ">
                <div ref={pageRef} className=" w-full h-[150vh] ">
                    {/* <div className="relative w-full h-screen "> */}
                    {/* <Image src={images[0]} className=' w-full h-full object-cover ' fill alt='' /> */}
                    {/* </div> */}
                    <canvas ref={canvas1Ref1} className="w-full h-screen relative top-0 left-0" />

                    <div ref={mainTitleRef1} className=" w-full flex items-center justify-center h-[30vh] relative z-[2]  ">
                        <p ref={mainTextRef} className='utopia md:text-[50px] text-[30px] lg:text-[60px]  md:tracking-[2.5em] tracking-[1.3em] lg:tracking-[3em]  uppercase text-center pl-[9vw] ' >utopia</p>
                    </div>
                </div>
            </div>
        </>
    )
}
