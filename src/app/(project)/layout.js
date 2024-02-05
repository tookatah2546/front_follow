import NavigationMenu from "@/components/layouts/navigationmanu";
import NavigationTop from "@/components/layouts/navigationtop";

const ProjectLayout = ({ children }) => {
    return <section className="w-full h-screen px-8">
        <NavigationTop/>
        {children}
        <NavigationMenu/>
      
      </section>
  };
  
  export default ProjectLayout;