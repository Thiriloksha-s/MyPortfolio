import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <div className="mx-8 w-10 text-3xl"><h1>ST</h1></div>
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-3xl">
                
                <a href="https://www.linkedin.com/in/thiriloksha-s-797312258" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                
                
                <a href="https://github.com/Thiriloksha-s" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                
              
                <a href="mailto:thiriloksha@gmail.com">
                    <FaEnvelope />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;

