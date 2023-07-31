import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Animation(props) {
    const {animate, duration, offset, once, random, className} = props
    const animations = [
    "fade-up", "fade-down", "fade-left", "fade-right", "fade-up-right", "fade-up-left", "fade-down-right", "fade-down-left",
    "flip-up", "flip-down", "flip-left", "flip-right",
    "zoom-in", "zoom-in-up", "zoom-in-down", "zoom-in-left", "zoom-in-right", "zoom-out", "zoom-out-up", "zoom-out-down", "zoom-out-left", "zoom-out-right",
    ];

    useEffect(() => {
        AOS.init();
    }, [])

    const onRandom = ()=>{ // get a random animation
        const random_index = Math.floor(Math.random() * animations.length);
        return animations[random_index];
    }

    return (
        <div className={className} data-aos={random ? onRandom() : animate } data-aos-duration ={duration} data-aos-offset={offset} data-aos-once={once}>
            {props.children}
        </div>
    )
}
Animation.defaultProps={
    animate:"fade-up",
    duration: "2500",
    offset: "100",
    once: false,
    random: false,
}

/**
 *  ATTRIBUTES
 * 
 * data-aos-offset           : Change offset to trigger animations sooner or later (px)
 * data-aos-duration         : *Duration of animation (ms)
 * data-aos-easing           :	Choose timing function to ease elements in different ways
 * data-aos-delay            :	Delay animation (ms)
 * data-aos-anchor           : 	Anchor element, whose offset will be counted to trigger animation instead of actual elements offset
 * data-aos-anchor-placement :	Anchor placement - which one position of element on the screen should trigger animation
 * data-aos-once             :	Choose wheter animation should fire once, or every time you scroll up/down to element
 */

/**
Fade animations:
    fade
    fade-up
    fade-down
    fade-left
    fade-right
    fade-up-right
    fade-up-left
    fade-down-right
    fade-down-left

Flip animations:
    flip-up
    flip-down
    flip-left
    flip-right

Slide animations:
    slide-up
    slide-down
    slide-left
    slide-right

Zoom animations:
    zoom-in
    zoom-in-up
    zoom-in-down
    zoom-in-left
    zoom-in-right
    zoom-out
    zoom-out-up
    zoom-out-down
    zoom-out-left
    zoom-out-right

Anchor placement:

    top-bottom
    top-center
    top-top
    center-bottom
    center-center
    center-top
    bottom-bottom
    bottom-center
    bottom-top

Easing functions:
You can choose one of these timing function to animate elements nicely:

    linear
    ease
    ease-in
    ease-out
    ease-in-out
    ease-in-back
    ease-out-back
    ease-in-out-back
    ease-in-sine
    ease-out-sine
    ease-in-out-sine
    ease-in-quad
    ease-out-quad
    ease-in-out-quad
    ease-in-cubic
    ease-out-cubic
    ease-in-out-cubic
    ease-in-quart
    ease-out-quart
    ease-in-out-quart

 */