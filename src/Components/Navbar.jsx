import logo from '../assets/kevinRushLogo.png'
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
// import { BsTwitterX } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img src={logo} alt="Logo" />
        </div>
        <div className='m-8 flex items-center justify-center gap-4'>

            <a href="https://www.linkedin.com/in/md-tahmid-chowdhury-731737146/" target='_blank'>
                <FaLinkedin size={25}/>
            </a>
            <a href="https://github.com/tahmid-12" target='_blank'>
                <FaGithub size={25}/>
            </a>
            {/* <BsTwitterX /> */}
            <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Fmd.tahmidchowdhury%3Ffbclid%3DIwZXh0bgNhZW0CMTAAAR1EcczEf90aV2azuFdnhCZza8eVCeXsDjqhfAi0_PjjX8TbCvUqyTGpUiE_aem_qWgP7nAdNS5_h7GnvyYQVA&h=AT32Y6D9Y-1OY5s-ogw9RSxLsnh_6zAbi2N4o0uAe5eWXDb7m-a3HbLGzz3xFVYbr_T0hQMI-7lrjkJ_rTZ70yEA4SByC8cqw_HIc_q6D2xOVcSLBKb54L30tBMYjKe3CW1m" target='_blank'>
                <FaInstagram size={25}/>
            </a>
        </div>
    </nav>
  )
}

export default Navbar