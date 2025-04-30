// import { FaLeaf } from "react-icons/fa6";
import { VscAzure } from "react-icons/vsc";

const Footer = () => {
    return (
      <footer className=" text-accent/60 mt-12 py-4 ">
        <div className="container mx-auto text-center">
          <p className="text-lg flex justify-center items-center">
            &copy; {new Date().getFullYear()} 
            &nbsp; 
            <span className="text-accent/60"> <VscAzure /></span> &nbsp; AS Developers. All Rights Reserved.
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  