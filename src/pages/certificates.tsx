import { Button } from "@mui/material"
import logo from "../assets/logo.png"

export default function Certificates() {

    return (
        <div className="flex flex-col pl-[20%] pr-[20%] pb-[5%] gap-10">
            <div className="flex flex-row justify-between align-center rounded-xl bg-[rgba(165,219,240,1)] p-[5%] h-[22vh] w-full">
                <div className="flex flex-col gap-2 w-[25%]">
                    <Button variant="contained" sx={{ background: "rgb(18, 47, 87)", width: "70%" }}>Get Quote</Button>
                    <h3 className="text-black text-1xl leading-tight">International Standards at best price</h3>
                </div>

                <div className="w-[25%] bg-black">

                </div>

                <div className="flex flex-row w-[30%] gap-1">
                    <h3 className="text-black text-1xl text-right self-center leading-tight">ISO 9001 Certified Company</h3>
                    <img src="./certificate.png" className="h-[138%] w-[50%] self-center" />
                </div>
            </div>

            <div className="flex flex-col justify-between align-center rounded-xl bg-[#d6d3d1] p-[5%] h-[50vh] w-full">
                <div className="bg-white h-[10%]"></div>

                <div className="flex flex-row justify-between">
                    <div className="flex flex-col w-[50%] justify-end align-start ">
                        <div className="relative flex flex-row h-[50%] right-[6.5%]">
                            <img src={logo} className="h-35 self-center" />
                            <div className="self-center">
                                <h1 className="font-bold text-4xl">Alcoglaze</h1>
                                <h3 className="text-1xl">Building Facia Decor</h3>
                            </div>
                        </div>
                        <Button variant="contained" sx={{ background: "rgb(18, 47, 87)", width: "60%" }}>View Products</Button>
                    </div>
                    <div className="flex flex-col justify-evenly bg-black h-[10%]">

                    </div>
                </div>
            </div>
        </div>
    )
}