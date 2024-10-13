import { RiReactjsLine } from "react-icons/ri"
import { TbBrandNextjs } from "react-icons/tb"
import { SiMongodb } from "react-icons/si"
import { FaNodeJs } from "react-icons/fa"
import { BiLogoPostgresql } from "react-icons/bi"
import { DiRedis } from "react-icons/di"
import { SiPhp } from "react-icons/si";
import { FaLaravel } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiDjango } from "react-icons/si";
// import { SiNestjs } from "react-icons/si";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <h2 className="my-20 text-center text-4xl">Technologies</h2>
        <div className="flex flex-wrap items-center justify-center gap-2">
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                 <RiReactjsLine className="text-7xl text-cyan-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                 <TbBrandNextjs className="text-7xl"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                 <SiMongodb className="text-7xl text-green-500"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                 <FaNodeJs className="text-7xl text-green-500"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                 <BiLogoPostgresql className="text-7xl text-sky-700"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                 <DiRedis className="text-7xl text-red-700"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                 <SiPhp className="text-7xl text-purple-600"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                 <FaLaravel  className="text-7xl text-red-600"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                 <FaVuejs className="text-7xl text-green-500"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                 <FaPython className="text-7xl text-blue-500"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                 <SiDjango className="text-7xl text-green-700"/>
            </div>
            {/* <div className="rounded-2xl border-4 border-neutral-800 p-4">
                 <SiNestjs className="text-7xl text-red-500"/>
            </div> */}
        </div>
    </div>
  )
}

export default Technologies