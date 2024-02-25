import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceKissBeam, faI } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faLinkedin, faTelegram, faYoutube } from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return (
    <footer class="bg-slate-900">
    <div class="container mx-auto flex flex-col-reverse text-white px-5 py-10 justify-between space-y-8 md:flex-row md:space-y-0">
        
        <div class="flex flex-col items-center justify-between space-y-8 md:space-y- md:items-start">
            <div class="text-center mt-6 md:mt-0">
                Copyright © 2023, All Rights Reserved
            </div>
            <div>
            <h1 className="font-bold "><span className="text-orange-300">L</span>ogo</h1>
            </div>
            <div class="flex space-x-4">
                <a href="#" className="hover:text-orange-500 "><FontAwesomeIcon icon={faFacebook}  className="w-10" /> </a>
                <a href="#" className="hover:text-orange-500 "><FontAwesomeIcon icon={faInstagram}  className="w-10" /></a>
                <a href="#" className="hover:text-orange-500 "><FontAwesomeIcon icon={faTelegram}  className="w-10" /></a>
                <a href="#" className="hover:text-orange-500 "><FontAwesomeIcon icon={faLinkedin}  className="w-10" /></a>
            </div>
        </div>

        <div class="flex justify-around space-x-32">
            <div class="flex flex-col space-y-2">
                <a href="#" class="hover:text-slate-300">Home</a>
                <a href="#" class="hover:text-slate-300">About</a>
                <a href="#" class="hover:text-slate-300">Contact</a>
            </div>
            <div class="flex flex-col space-y-2">
                <a href="#" class="hover:text-slate-300">Imprint</a>
                <a href="#" class="hover:text-slate-300">Privacy</a>
                <a href="#" class="hover:text-slate-300">Credits</a>
            </div>
        </div>

        <div class="flex flex-col justify-between">
            <form action="#">
                <div class="flex space-x-3">
                    <input type="text" placeholder="Subscribe to Newsletter" class="flex-1 py-2 px-6 rounded-full" />
                    <button class="bg-orange-500 hover:bg-slate-500 rounded-full px-4 py-2 transition-all ease-in-out">Go</button>
                </div>
            </form>
            <div class="hidden md:block">
                Copyright © 2023, All Rights Reserved
            </div>
        </div>
        
    </div>
</footer>
  );
}

export default Footer;
