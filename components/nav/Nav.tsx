import React from 'react';


export default function Nav() {

    
    return (
        <>

            <div className=" mix-blend-difference fixed right-[5vw] flex items-center  flex-col justify-center top-[13vh] z-[4]   ">
                <p className=' text-white text-[11px] font-bold text-white/20 rotate-[-90deg] font-[Fahkwang] tracking-[.3em]  ' >MENU</p>
                <div className=" relative h-7 w-[9px]  mt-10   ">
                    <div className=" w-[1.5px] absolute -top-1 left-0 rounded-full h-[30px] bg-white "></div>
                    <div className=" w-[1.5px] rounded-full h-[30px] absolute right-0 -bottom-2 bg-white "></div>
                </div>
            </div>
        </>
    )
}
