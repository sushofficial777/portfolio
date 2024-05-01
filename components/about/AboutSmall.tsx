import { useEffect, useLayoutEffect, useRef } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

export default function AboutSmall() {
  const textRef = useRef(null);
  const containerRef = useRef(null);
  const textRefRight = useRef(null);

  useLayoutEffect(() => {
    const textRefElement = textRef.current;
    const containerRefElement = containerRef.current;
    const textRefRightElement = textRefRight.current;

    if (textRefElement && containerRefElement && textRefRightElement) {
      const context = gsap.context(() => {
        const tl = gsap.timeline({ yoyo: true });

        tl.to(textRefElement, {
          duration: .3,
          left: '-46vw',
          opacity: 1,
          scrollTrigger: {
            trigger: containerRefElement,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true, // animates smoothly during scroll
          },
        });


      
         
        return () => {
          tl.kill();
          context.revert();
        }
      })
    }

  }, []);

  return (
    <>
      <div ref={containerRef} className=" relative w-full h-[80vh] overflow-hidden bg-primary  ">
        <div className=" absolute top-[50%] left-0 translate-y-[-50%] inline-block w-[300%] ">
          <p ref={textRef} className=' pl-[20vw] text-[240px] font-[fahkwang]  w-fit inline-block  relative text-secondry font-extrabold capitalize ' >about me</p>

        </div>
        <div className=" absolute top-0 flex items-center justify-start right-0 w-[50%] h-full  gredient_right">
          <p ref={textRefRight} className=' mix-blend-difference relative text-[50px] font-[fahkwang] text-white font-extrabold ' >Hey there! I am a Just a Developer and Designer.</p>
        </div>
      </div>
    </>
  )
}
