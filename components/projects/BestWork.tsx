import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
export default function BestWork() {
    return (
        <>

            <div className=" group  md:w-[90%] w-[95%] lg:w-[90%] mx-auto min-h-screen md:py-[150px] py-[100px] lg:py-[200px] ">
                <div className="   relative w-full md:h-[600px] h-[300px] lg:h-[700px] my-20 md:rounded-[40px] rounded-[30px] lg:rounded-[50px] overflow-hidden bg-slate-200  ">
                    <video src={`/flemingo.mov`} autoPlay loop muted className="  object-cover absolute top-0 left-0    !w-full !h-full  "></video>
                    <div className="  mix-blend-difference  absolute  bg-white rounded-[80px]  w-fit mx-auto h-fit  flex  items-center justify-center flex-col bottom-5 left-5  md:bottom-5 lg:bottom-10 md:left-5 lg:left-10 z-[300] ">
                        <Link href={'/'} className=' text-black font-[antonio]   px-3 py-2 flex items-center justify-center  ' > <p>Flemingo Ui</p> </Link>
                   </div>


                </div>
                <div className="   relative w-full md:h-[600px] h-[300px] lg:h-[700px] my-20 md:rounded-[40px] rounded-[30px] lg:rounded-[50px] overflow-hidden bg-slate-200  ">
                    <video src={`/flemingo.mov`} autoPlay loop muted className="  object-cover absolute top-0 left-0    !w-full !h-full  "></video>
                    <div className="  mix-blend-difference  absolute  bg-white rounded-[80px]  w-fit mx-auto h-fit  flex  items-center justify-center flex-col bottom-5 left-5  md:bottom-5 lg:bottom-10 md:left-5 lg:left-10 z-[300] ">
                        <Link href={'/'} className=' text-black font-[antonio]   px-3 py-2 flex items-center justify-center  ' > <p>Flemingo Ui</p> </Link>
                   </div>


                </div>
            </div>

        </>
    )
}
