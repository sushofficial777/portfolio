import React from 'react';
const Dust = () => {




    return (
        <>

            <div className=" mix-blend-screen  grain fixed top-0 left-0 w-full h-full z-[200]  ">



                <svg className=' w-full h-full  layer_two   ' xmlns='http://www.w3.org/2000/svg'>
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
        </>
    );
};

export default Dust;
