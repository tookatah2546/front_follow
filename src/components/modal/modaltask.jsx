import React from "react";

const ModalTask = ({ closebacklog })=>{

    return(
        <>
            <div className="justify-center fixed inset-0 top-2/4 z-10 -translate-y-2/4 -translate-x-2/4 left-2/4 w-96 h-auto border 
            rounded-xl drop-shadow-xl bg-white">
                <div className="flex flex-col pd-25">
                    <div className="text-center text-2xl font-extrabold my-9">
                        <h1>แก้ไข</h1>
                    </div>
                    <div className="flex flex-col px-4 ">
                        <p className="">ชื่อ</p>
                        <input placeholder="ชื่อ"  className="shadow px-5 w-auto h-12 rounded-xl sm:w-auto lg:w-auto border-gray-700"></input>
                    
                    </div>
                    <div className="my-2 flex flex-row justify-around">
                    </div>
                    <div className="my-2 flex flex-row justify-around">
                    <button className="h-10 w-20 border border-danger rounded-md text-danger" onClick={() => closedelete(false)}>ยกเลิก</button>
                    <button className="h-10 w-20 border bg-primary rounded-md text-white" >ตกลง</button>
                    </div>
                </div>
            </div>
            <div className="fixed top-0 left-0 w-full h-full backdrop-blur-none"></div>
            <div className="fixed top-0 left-0  bg-black w-full h-full opacity-40 backdrop-blur-3xl"></div>
        </>
    );
}

export default ModalTask;
