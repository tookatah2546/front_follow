'use client'
import { useAuth } from "@/app/context/authentication";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function({children}){
    const {currentUser} = useAuth()
    const router = useRouter()
    
    useEffect(()=>{
        if (currentUser != null){
            if (currentUser.role == "TCH") {

            }else {
                
                router.replace('/')
            }
        }
    },[])

    return children
}