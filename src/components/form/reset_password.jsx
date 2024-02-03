"use client";

import Button from "../shared/button";
import * as React from "react"
import { useForm } from "react-hook-form"
import axios from "axios";
import { useAuth } from "@/app/context/authentication";


const ResetPassword = () =>{

  const {register,handleSubmit,setError,formState: { errors },} = useForm()

  const {submitlogin,currentUser} = useAuth()
    
  const onSubmit = (data) => {
    console.log(data)
  }

    return (
        <form className="flex flex-col border rounded-xl p-5 mt-14 " onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-8">
                <p className="text-xl font-extrabold text-center">เปลี่ยนรหัสผ่าน</p>
            </div>
            <div className="flex flex-col pb-6 ">
                <label className="after:content-['*'] after:ml-0.5 after:text-red-500 pb-3">ชื่อผู้ใช้</label>
                <input placeholder="ชื่อผู้ใช้"  className="shadow px-5 w-80 h-12 rounded-xl sm:w-auto lg:w-auto mb-6"{...register("username",{required: "* กรุณากรอกข้อมูล"})} aria-invalid={errors.username? "true":"false"}></input>
                {errors.username && <p  role="alert" className="text-red-500 ">{errors.username?.message}</p>}

                <label className="after:content-['*'] after:ml-0.5 after:text-red-500 pb-3">รหัสผ่านเดิม</label>
                <input placeholder="รหัสผ่านเดิม"  className="shadow px-5 w-80 h-12 rounded-xl sm:w-auto lg:w-auto mb-6"{...register("username",{required: "* กรุณากรอกข้อมูล"})} aria-invalid={errors.username? "true":"false"}></input>
                {errors.username && <p  role="alert" className="text-red-500 ">{errors.username?.message}</p>}

                <label className="after:content-['*'] after:ml-0.5 after:text-red-500 pb-3">รหัสผ่านใหม่</label>
                <input placeholder="รหัสผ่านใหม่"  className="shadow px-5 w-80 h-12 rounded-xl sm:w-auto lg:w-auto mb-6"{...register("username",{required: "* กรุณากรอกข้อมูล"})} aria-invalid={errors.username? "true":"false"}></input>
                {errors.username && <p  role="alert" className="text-red-500 ">{errors.username?.message}</p>}

                <label className="after:content-['*'] after:ml-0.5 after:text-red-500 pb-3 pt-3">ยืนยันรหัสผ่านใหม่</label>
                <input type="password" placeholder="ยืนยันรหัสผ่านใหม่"  className="shadow px-5 w-80 h-12 rounded-xl sm:w-auto lg:w-auto mb-6"{...register("password",{required: "* กรุณากรอกข้อมูล"})} aria-invalid={errors.password? "true":"false"}></input>
                {errors.password && <p  role="alert" className="text-red-500 ">{errors.password?.message}</p>}

            </div>
            
            {
              currentUser ? (
              <Button  color="primary" onClick={submitlogin} title="ยืนยันการเปลี่ยนรหัสผ่าน"/>
              ):(
                <Button  color="primary" onClick={onSubmit} title="ยืนยันการเปลี่ยนรหัสผ่าน"/>
                )
            }
            
        </form>
    )
}

export default ResetPassword;
/*<div className="pt-4 pb-3">
    <input type="checkbox" className="border w-4 h-4 accent-black  " {...register("Checkbox",{required: "* กรุณากรอกข้อมูล"})} aria-invalid={errors.Checkbox? "true":"false"}></input>
    <label className="ml-2 after:content-['*'] after:ml-0.5 after:text-red-500">ฉันได้อ่านและยอมรับเงื่อนไขการเป็นสมาชิกและนโยบายความเป็นส่วนตัว</label>
    {errors.Checkbox && <p  role="alert" className="text-red-500 ">{errors.Checkbox?.message}</p>}
</div>*/