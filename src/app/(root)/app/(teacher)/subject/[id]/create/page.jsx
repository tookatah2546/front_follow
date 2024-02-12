"use client"

import FromCreateGroup from "@/components/form/createproject";

export default function({params}){
    return (
        <main className="px-6 h-screen">
            <div>form for create project for subject id {params.id} </div>
            <FromCreateGroup/>

            <div>
                <p>Show Subject BY ID : {params.id} โหลดข้อมูลโปรเจคในรายวิชานี้ออกมา </p>
                <p>name : </p>
            </div>
         
        
        </main>
    
    )
}