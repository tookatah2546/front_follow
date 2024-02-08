import React from "react";
import Select from "react-select"
import { useForm } from "react-hook-form";

const ModalDetail = ({ closedetail })=>{

    const {
        register,
        handleSubmit,
        setValue,
        reset,
        formState: { errors },
      } = useForm()

    const Status = [
        {value: 'todo',label: "todo"},
        {value: 'doing',label: "doing"},
        {value: 'done',label: "done"},
        
    ]

    const Priority = [
        {value: 'low',label: "low"},
        {value: 'midium',label: "midium"},
        {value: 'high',label: "high"},
        
    ]

    const handleSelectStatus = (e) =>{
        setValue('Status',e.value)
        console.log("setValue",setValue);
    }
    
    return(
        <form className="">
            <div className="justify-center fixed overflow-y-auto inset-0 top-2/4 z-10 -translate-y-2/4 -translate-x-2/4 left-2/4 w-96  h-4/5 my-6 border 
            rounded-xl drop-shadow-xl bg-white">
                <div className="flex flex-col px-4 ">
                    <div className="text-center text-2xl font-extrabold my-9">
                        <h1>รายละเอียด</h1>
                    </div>
                    <div className="flex flex-col  ">
                        <p className="">ชื่อ task</p>
                        <input placeholder="ชื่อ task" className="shadow px-5 w-auto h-12 rounded-xl sm:w-auto lg:w-auto border-gray-700" disabled ></input>
                    </div>
                    <div className="flex flex-col mt-4">
                        <p className="">คำอธิบายสำหรับ Task </p>
                        <input placeholder="คำอธิบาย"  className="shadow px-5 w-auto h-12 rounded-xl sm:w-auto lg:w-auto border-gray-700" disabled></input>
                    </div>
                    <div className="flex flex-col mt-4">
                        <p className="">รหัสนิสิต</p>
                        <input placeholder="รหัสนิสิต"  className="shadow px-5 w-auto h-12 rounded-xl sm:w-auto lg:w-auto border-gray-700" disabled></input>
                    </div>
                    <div className="" >
                        <p className=" mb-3 mt-4">สถานะ</p>
                        <Select className="cursor-not-allowed pointer-events-none bg-gray-300 text-gray-600 border-gray-300"
                
                            options={Status}
                           
                            onChange={handleSelectStatus}
                            ></Select>
                            
                    </div>
                    <div className="" >
                        <p className=" mb-3 mt-4 ">ความสำคัญ</p>
                        <Select className="cursor-not-allowed pointer-events-none bg-gray-300 text-gray-600 border-gray-300"
                
                            options={Priority}
                           
                            onChange={handleSelectStatus}
                            ></Select>
                            
                    </div>
                    <div className="flex flex-col mt-4">
                        <label className=" pb-3 pt-4">วันที่คาดว่าจะทำงานเสร็จ</label>
                        <input placeholder="วันที่"  type="date" className="px-5 shadow w-auto h-12 rounded-xl sm:w-auto lg:w-auto " disabled></input>
                
                    </div>
                    <div className="flex flex-col mt-4">
                        <label className=" pb-3 pt-4">วันที่ทำงานเสร็จ</label>
                        <input placeholder="วันที่" type="date" className="px-5 shadow w-auto h-12 rounded-xl sm:w-auto lg:w-auto " disabled></input>
                   
                    </div>
                    
                    <div className="my-8 flex flex-row justify-around">
                    <button className="h-10 w-36 border bg-primary rounded-md text-white" onClick={() => closedetail(false)}>ปิด</button>
                    </div>
                </div>
            </div>
            <div className="fixed top-0 left-0 w-full h-full backdrop-blur-none"></div>
            <div className="fixed top-0 left-0  bg-black w-full h-full opacity-40 backdrop-blur-3xl " onClick={() => closedetail(false)}></div>
        </form>
    );
}

export default ModalDetail;
