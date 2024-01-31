"use client"

import { createContext,useContext,useState } from "react"

export const ProjectContext = createContext({
    projects: [],
})

export const ProjectProvider = ({children}) => {
    const [projects, setProjects] = useState([
        {
            id: 1,
            title: "กลุ่ม 1"
        },
        {
            id:2,
            title: 'กลุ่ม 2',
        },
        {
            id:3,
            title: 'กลุ่ม 3',
        }
    ])

    return(
        <ProjectContext.Provider value={{projects}}>
            {children}
        </ProjectContext.Provider>
    )
}

export const DataProject = () => useContext(ProjectContext)