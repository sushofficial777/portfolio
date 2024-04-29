
import styles from "@/styles/Cursor.module.scss";
import { MutableRefObject, useEffect, useLayoutEffect, useRef } from "react";
import { gsap, Linear } from "gsap";

const isSmallScreen = (): boolean => document.body.clientWidth < 767;


const MouseFollower = ({ isDesktop }: {
    isDesktop: boolean;
}) => {
    const cursor: any = useRef(null);
    const follower: any = useRef(null);
 
    const onHover = () => {
        gsap.to(cursor.current, {
            scale: 2,
            duration: 0.3,
        });
        gsap.to(follower.current, {
            scale: 3,
            duration: 0.3,
        });
    };

    const onUnhover = () => {
        gsap.to(cursor.current, {
            scale: 1,
            duration: 0.3,
        });
        gsap.to(follower.current, {
            scale: 1,
            duration: 0.3,
        });
    };
    const onImageHover = () => {
        console.log("image hover");
        
        gsap.to(cursor.current, {
            scale: 3,
            duration: 0.3,
        });
        gsap.to(follower.current, {
            scale: 6,
            duration: 0.3,
        });
    };

    const hideCursor = () => {
        console.log("image hover");
        
        gsap.to(cursor.current, {
            width: 0,
            height:0,
            duration: 0.3,
        });
        
    };
     const RemovehideCursor = () => {
        
        gsap.to(cursor.current, {
            width: 70,
            height:70,
            duration: 0.3,
        });
       
    };
    
    const onImageUnhover = () => {
        gsap.to(cursor.current, {
            scale: 1,
            duration: 0.3,
        });
        gsap.to(follower.current, {
            scale: 1,
            duration: 0.3,
        });
    };

    const moveCircle = (e: MouseEvent) => {
        //  console.log(e);

        gsap.to(cursor.current, {
            x: e.clientX,
            y: e.clientY,
            duration: .12,
            ease: Linear.easeNone,
        });
        gsap.to(follower.current, {
            x: e.clientX,
            y: e.clientY,
            duration: .12,
            ease: Linear.easeNone,
        });
    };

  

    const initCursorAnimation = () => {
        follower.current.classList.remove("hidden");
        cursor.current.classList.remove("hidden");

        document.addEventListener("mousemove", moveCircle);

        document.querySelectorAll(".link").forEach((el) => {
            el.addEventListener("mouseenter", onHover);
            el.addEventListener("mouseleave", onUnhover);
        });
        document.querySelectorAll(".special_image").forEach((el) => {
            el.addEventListener("mouseenter", onImageHover);
            el.addEventListener("mouseleave", onImageUnhover);
        });
        document.querySelectorAll(".no_follow").forEach((el) => {
            el.addEventListener("mouseenter", hideCursor);
            el.addEventListener("mouseleave", RemovehideCursor);
        });

    };

    useEffect(() => {
        if (isDesktop && !isSmallScreen()) {
            initCursorAnimation();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cursor, follower, isDesktop]);

    return (
        <>
            <div
                ref={cursor}
                style={{ width: '70px', height: '70px' }}
                className={`${styles.cursor} fixed     border     select-none pointer-events-none z-50`}
            ></div>
            <div
                ref={follower}
                className={`${styles.cursorFollower} fixed hidden    select-none pointer-events-none z-50`}
            ></div>
        </>
    );
};

export default MouseFollower;