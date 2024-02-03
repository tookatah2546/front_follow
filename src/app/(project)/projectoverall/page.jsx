
"use client"


import LoginUsers from "@/components/register/login";
import { DataProject } from "@/app/context/useDataproject";

const ProjectOverAllPage = () => {

    const {projects} = DataProject()

    return (
      <main className=" " >
       <div className="flex flex-row justify-between">
        <p className="font-extrabold my-3">โปรเจกต์ทั้งหมด</p>
        <a href="creategroup">
            <div className="">
              <button className=" w-36 h-12 text-mid-grey rounded-3xl border border-mid-grey drop-shadow-lg font-extrabold">+ สร้างโปรเจกต์</button>
          </div>
        </a>
       </div>
       <div>
            {projects.map((e)=>{
                return (
                    <div className="border rounded-lg my-4 px-5 w-full h-11 ">
                        <p className="my-2"> id : {e.id} {e.title}</p>
                    </div>
                )
            })}
       </div>
       
        
      </main>
    )
  }
  
  export default ProjectOverAllPage;