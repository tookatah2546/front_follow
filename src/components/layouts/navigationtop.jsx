"use client"
import React from "react";
import Link from "next/link";
import { useAuth } from "@/app/context/authentication";
const NavigationTop = ()=>{
    const {currentUser,submitLogout} = useAuth()

    
    return(
      <section id="top-navigation" className="block mb-6 h-12  bg-primary shadow">
      {
        currentUser ? (
          
          
          <div id="tabs" className="w-full flex  ">
          
            <a href="#"
              className="w-full text-xl my-1 text-white focus:text-secondary hover:text-secondary justify-center inline-block text-center pt-2 pb-1">
              <span className="tab tab-kategori block text-base ">โปรไฟล์</span>
            </a>
            <a
              onClick={submitLogout}
              className="w-full my-1 text-white focus:text-secondary hover:text-secondary justify-center inline-block text-center pt-2 pb-1">  
              <button type="submit" className="tab tab-kategori block text-base ">ออกจากระบบ</button>
            </a>
          </div>
        
        ) : (
          
            <div id="tabs" className="w-full flex  ">
            
              <a href="Profile"
                className="w-full text-xl my-1 text-white focus:text-secondary hover:text-secondary justify-center inline-block text-center pt-2 pb-1">
                <span className="tab tab-kategori block text-base ">โปรไฟล์</span>
              </a>
              <a
                href="login_users"
                className="w-full my-1 text-white focus:text-secondary hover:text-secondary justify-center inline-block text-center pt-2 pb-1">  
                <span className="tab tab-kategori block text-base font-extrabold ">เข้าสู่ระบบ</span>
              </a>
            </div>
          
        )
      }
         </section>
    )   
}
//<Link href="/inputformdaily">test</Link>
export default NavigationTop;