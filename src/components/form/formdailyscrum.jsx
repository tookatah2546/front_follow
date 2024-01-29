"use client"
import React from "react";
import { useForm } from "react-hook-form"
import Select from "react-select"

const FormDailyScrum = () =>{

    const Status = [
        {value: '1',label: "วันนี้ทำงาน"},
        {value: '2',label: "ป่วย"},
        {value: '3',label: "ติดธุระ"},
        {value: '4',label: "ตกลงกันว่าวันนี้ไม่ทำงาน"},
        {value: '5',label: "อื่น ๆ"},

    ]

    const {
        register,
        handleSubmit,
        setValue,
        reset,
        formState: { errors },
      } = useForm()

    const onSubmit = (data) => {
        console.log(data)
      }
    
    const handleSelectStatus = (e) =>{
        setValue('Groupid',e.value)
        console.log("setValue",setValue);
    }
    
    return (
        <form className="mt-5  border rounded-xl p-5" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
                <p className="text-3xl text-dark-grey">ฟอร์ม Daily Scrum</p>
            </div>
            <div className="flex flex-col   ">
                <label className="after:content-['*'] after:ml-0.5 after:text-red-500 pb-3 pt-4">ชื่อ</label>
                <input placeholder="ชื่อ"  className="shadow px-5 w-auto h-16 rounded-xl sm:w-auto lg:w-auto "  {...register("FirstName",{required: "* กรุณากรอกข้อมูล"})} aria-invalid={errors.FirstName? "true":"false"}></input>
                {errors.FirstName && <p  role="alert" className="text-red-500 ">{errors.FirstName?.message}</p>}

                <label className="after:content-['*'] after:ml-0.5 after:text-red-500 pb-3 pt-4">รหัสโปรเจกต์</label>
                <input placeholder="รหัสโปรเจกต์" className="px-5 shadow w-auto h-16 rounded-xl sm:w-auto lg:w-auto"{...register("IdProject",{required: "* กรุณากรอกข้อมูล"})} aria-invalid={errors.IdProject? "true":"false"}></input>
                {errors.IdProject && <p  role="alert" className="text-red-500 ">{errors.IdProject?.message}</p>}

                <label className="after:content-['*'] after:ml-0.5 after:text-red-500 pb-3 pt-4">วันที่</label>
                <input placeholder="วันที่" className="px-5 shadow w-auto h-16 rounded-xl sm:w-auto lg:w-auto" type="date"></input>

                <label className="after:content-['*'] after:ml-0.5 after:text-red-500 pb-3 pt-4">เมื่อวานทำอะไร</label>
                <input placeholder="เมื่อวานทำอะไร" className="px-5 shadow w-auto h-16 rounded-xl sm:w-auto lg:w-auto"></input>

                <label className="after:content-['*'] after:ml-0.5 after:text-red-500 pb-3 pt-4">วันนี้จะทำอะไร</label>
                <input placeholder="วันนี้จะทำอะไร" className="px-5 shadow w-auto h-16 rounded-xl sm:w-auto lg:w-auto"></input>

                <label className="after:content-['*'] after:ml-0.5 after:text-red-500 pb-3 pt-4">ติดปัญหาตรงไหน</label>
                <input placeholder="ติดปัญหาตรงไหน" className="px-5 shadow w-auto h-16 rounded-xl sm:w-auto lg:w-auto"></input>
            </div>
            <div className="mb-8">
                <p className="after:content-['*'] after:ml-0.5 after:text-red-500 mb-3 mt-4">หมายเหตุ</p>
                <Select
        
                    options={Status}
                    {...register("Status",{required: "* กรุณากรอกข้อมูล"})} aria-invalid={errors.Status? "true":"false"}
                    onChange={handleSelectStatus}
                    ></Select>
                    {errors.Status && <p  role="alert" className="text-red-500 ">{errors.Status?.message}</p>}
                
            </div>
            <div className="flex flex-row justify-between ">
                <button className="w-44 h-12 border rounded-xl border-danger hover:bg-danger hover:text-white text-danger text-center ml-5 sm:ml-24 md:mr-9 ">ยกเลิก</button>
                <button className="w-44 h-12 border rounded-xl mr-5 sm:mr-24 bg-primary hover:bg-secondary text-center text-white">ตกลง</button>
            </div>
        </form>
        )
}

export default FormDailyScrum;