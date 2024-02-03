
"use client"

import React, { useState } from "react";

const ProfilePage = () => {
    const [profileuser, setProfileUser] = useState(true)
    
 
    return (
      <main className="flex flex-col" >
        
        <p className="font-extrabold">โปรไฟล์</p>
        <div className="flex flex-col w-full mt-80">
            <img></img> 
            <p className="mb-3">ชื่อผู้ใช้</p>
            <p className="border w-25 h-12 rounded-2xl mb-5"></p>
            <p className="mb-3">รหัสนิสิต</p>
            <p className="border w-25 h-12 rounded-2xl mb-5"></p>
            <p className="mb-3">ชื่อจริง</p>
            <p className="border w-25 h-12 rounded-2xl mb-5"></p>
            <p className="mb-3">นามสกุล</p>
            <p className="border w-25 h-12 rounded-2xl mb-5"></p>
        </div>
      </main>
    )
  }
  
  export default ProfilePage;