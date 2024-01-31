
"use client"


import LoginUsers from "@/components/register/login";
import { DataProject } from "@/app/context/useDataproject";

const ProjectOverAllPage = () => {

    const {projects} = DataProject()

    return (
      <main className=" " >
       
       <p>โปรเจกต์ทั้งหมด</p>
       <div>
            {projects.map((e)=>{
                return (
                    <div className="border rounded-lg my-4 px-5 w-full h-11 ">
                        <p className="my-2"> id : {e.id} {e.title}</p>
                    </div>
                )
            })}
       </div>
       <a href="creategroup">
          <div className="">

            <button className=" w-36 h-12 text-extar-light-grey rounded-3xl border drop-shadow-lg fixed ">+ สร้างโปรเจกต์</button>

          </div>
        </a>
        
      </main>
    )
  }
  
  export default ProjectOverAllPage;