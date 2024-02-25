import React from 'react'
import Img1 from "./../img/img1";

function Hero() {
  return (
    <div class="container mx-auto px-6 space-x-6 flex flex-col-reverse md:flex-row">

    <div class="md:w-1/2 flex flex-col justify-center space-y-5 py-8 text-center md:text-left text-slate-900">
        <h1 class="font-bold text-3xl md:text-5xl">Rapidly build modern websites without ever leaving your HTML.</h1>
        <p>A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.</p>
        <a href="#" class="py-2 px-6 rounded-full self-center md:self-start text-white bg-orange-500 hover:bg-slate-900 transition-all ease-in-out">Get Started</a>
    </div>

    <div class="md:w-1/2">
    <Img1 />
    </div>
</div>
  )
}

export default Hero
