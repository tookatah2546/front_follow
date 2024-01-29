"use client"
import React from "react";
import Link from "next/link";
const NavigationTop = ()=>{
    
   
    return(
        <section
        id="top-navigation"
        className="block mb-8 bg-primary shadow"
      >
        <div id="tabs" className="w-full flex 
         ">
        
          <a
            href="#"
            className="w-full text-white focus:text-secondary hover:text-secondary justify-center inline-block text-center pt-2 pb-1"
          >
            profile
          </a>

          <a
            href="login_users"
            className="w-full text-white focus:text-secondary hover:text-secondary justify-center inline-block text-center pt-2 pb-1"
          >
            
            <svg
              width="30"
              height="30"
              viewBox="0 0 42 42"
              className="inline-block mb-1 "
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" data-slot="icon" className="w-6 h-6">
               <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>

            </svg>
            <span className="tab tab-kategori block text-xs">เข้าสู่ระบบ</span>
          </a>
        </div>
        
      </section>
    )   
}
//<Link href="/inputformdaily">test</Link>
export default NavigationTop;