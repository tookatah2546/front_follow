"use client"

export default function({params}){
    return (
        <main className="px-6 h-screen">
            <div className="flex justify-between mb-4">
                <div className="my-2">create project {params.id} </div>
                    <a href="create">
                    <div className="">
                        <button className=" w-32 h-12 text-mid-grey rounded-3xl border block  sticky inset-x-0 bottom-0 z-10  border-mid-grey drop-shadow-lg font-extrabold">+ สร้างโปรเจกต์</button>
                    </div>
                    </a>
                </div>
            <div>
                <p>Show Subject BY ID : {params.id} โหลดข้อมูลโปรเจคในรายวิชานี้ออกมา </p>
                <p>name : </p>
            </div>
         

        </main>
    
    )
}