import FormDailyScrum from "@/components/form/formdailyscrum";
import ChooseStatus from "@/components/layouts/choosestatus";
import NavigationMenu from "@/components/layouts/navigationmanu";
import NavigationTop from "@/components/layouts/navigationtop";
import LoginUsers from "@/components/register/login";
import Image from "next/image";

export default function Home() {
  
  return (
    <main className="w-full md:w-2/4 h-screen  mx-auto   items-center justify-between ">
            
        
        <ChooseStatus/>
       
            
    </main>
  );
}
