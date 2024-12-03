import { FaWindowClose } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdHome } from "react-icons/io";
import { IoMdContact } from "react-icons/io";
import { FcBusiness } from "react-icons/fc";
import { FaEnvelopeOpen } from "react-icons/fa";
import { IoMoon } from "react-icons/io5";

function Navbar() {
  return (
    <div className="w-full h-[50px] ">
      <div>
        <AiOutlineMenu size={27} color="white"/>
      </div>
      
      <div>
        <IoMoon size={60}/>
        <IoMdHome size={60} />
        <IoMdContact size={60}/>
        <FcBusiness size={60} />
        <FaEnvelopeOpen size={60}/>
      </div>
    </div>
  )
}

export default Navbar