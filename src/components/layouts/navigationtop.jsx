"use client"
import React from "react";
import Link from "next/link";
import { useAuth } from "@/app/context/authentication";
const NavigationTop = ()=>{
    const {currentUser} = useAuth()

    if (currentUser) {
        return(
          <section id="top-navigation" className="block mb-6 h-12  bg-primary shadow">
          
            <div id="tabs" className="w-full flex  ">
            
              <a href="#"
                className="w-full text-xl my-1 text-white focus:text-secondary hover:text-secondary justify-center inline-block text-center pt-2 pb-1">
                <span className="tab tab-kategori block text-base ">โปรไฟล์</span>
              </a>
              <a
                href="login_users"
                className="w-full my-1 text-white focus:text-secondary hover:text-secondary justify-center inline-block text-center pt-2 pb-1">  
                <span className="tab tab-kategori block text-base font-extrabold ">ออกจากระบบ</span>
              </a>
            </div>
          </section>
        )  
    }
    return(
        <section id="top-navigation" className="block mb-6 h-12  bg-primary shadow">
          
          <div id="tabs" className="w-full flex  ">
          
            <a href="#"
              className="w-full text-xl my-1 text-white focus:text-secondary hover:text-secondary justify-center inline-block text-center pt-2 pb-1">
              <span className="tab tab-kategori block text-base ">โปรไฟล์</span>
            </a>
            <a
              href="login_users"
              className="w-full my-1 text-white focus:text-secondary hover:text-secondary justify-center inline-block text-center pt-2 pb-1">  
              <span className="tab tab-kategori block text-base font-extrabold ">เข้าสู่ระบบ</span>
            </a>
          </div>
      </section>
    )   
}
//<Link href="/inputformdaily">test</Link>
export default NavigationTop;