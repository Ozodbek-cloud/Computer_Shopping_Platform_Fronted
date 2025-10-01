'use client'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React, { useState } from 'react'
import img from "../../img/Group 114.png"
import img29 from "../../img/image 9.png"
import Image from 'next/image'
import primary1 from "../../computer_images/primary 1.png"
import vecto from "../../computer_images/Vector 10.png"
import img11 from "../../img/Rectangle 11.png"
import { ChevronRight } from 'lucide-react'
import img1 from "../../img_img/image 16.png"
import img2 from "../../img_img/image 17.png"
import img3 from "../../img_img/image 18.png"
import img4 from "../../img_img/image 19.png"
import img5 from "../../img_img/image 22.png"
function Page() {
    const colors = ["#6b21a8", "#f3f4f6", "#e5e7eb"];
    const [selected, setSelected] = useState(0);
    const [active, setActive] = useState("about")
    return (
        <div>
            <Navbar />
            <main className='big-container'>
                <div className='container'>
                    <section className=''>
                        <div className='py-5 flex    justify-between items-center'>
                            <div>
                                <button onClick={() => setActive("about")} className="p-2 px-5"  >  <span className={`border-b-2 transition-all duration-200 ${active === "about" ? "border-blue-600" : "border-white hover:border-blue-600"}`}>About Product</span>
                                </button>

                                <button onClick={() => setActive("detail")} className="p-2 px-5"  >      <span className={`border-b-2 transition-all duration-200 ${active === "detail" ? "border-blue-600" : "border-white hover:border-blue-600"}`}>Details</span>
                                </button>
                                <button onClick={() => setActive("spec")} className="p-2 px-5"     >         <span className={`border-b-2 transition-all duration-200 ${active === "spec" ? "border-blue-600" : "border-white hover:border-blue-600"}`}>Specs</span>     </button>
                            </div>

                            <div className='flex items-center gap-3'>
                                <div className='flex gap-3'>
                                    <h1 >On Sale From <span className='font-bold'>$3,299.00</span> </h1>
                                    <input type="number" placeholder='1' className='border rounded-2xl px-2 border-gray-700 w-17' />
                                </div>
                                <button className='hover:opacity-75 duration-200 transition-all px-5 py-[9px] bg-blue-600 rounded-4xl font-bold text-white'>Add To Cart</button>
                                <button className='hover:opacity-75 duration-200 transition-all px-5 py-3 bg-[#FFB800] flex items-center rounded-4xl'>
                                    <Image src={img} alt='' className='scale-[1.1] '></Image>
                                </button>
                            </div>
                        </div>

                    </section>
                    <section className="  flex  items-center">
                        <div className=" flex justify-between gap-5 w-full  max-w-7xl">
                            {
                                active == 'about' ? (
                                    <div className="flex  flex-col bg-[#f6f6ff] py-12 pl-25 min-h-[550px] h-full w-full   gap-4 max-w-[800px]">
                                        <div className='flex flex-col items-start justify-start gap-3'>
                                            <h1 className="text-4xl font-bold">MSI MPG Trident 3</h1>
                                            <p className="text-sm text-blue-600">Be the first to review this product</p>
                                            <p className="mt-3 text-gray-700">
                                                MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM,
                                                512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years
                                                Warranty Gaming Desktop
                                            </p>
                                        </div>

                                        <div className="flex gap-4 items-center mt-4">
                                            {colors.map((c, i) => (
                                                <div
                                                    key={i}
                                                    onClick={() => setSelected(i)}
                                                    className={`w-6 h-6 rounded-full cursor-pointer`}
                                                    style={{
                                                        background: c,
                                                        border: i === selected ? "3px solid #2563eb" : "3px solid transparent",
                                                    }}
                                                />
                                            ))}
                                        </div>

                                        <p className="text-sm">
                                            Have a Question?{" "}
                                            <span className="text-blue-600 border-b-2 border-blue-600 cursor-pointer">
                                                Contact Us
                                            </span>
                                        </p>
                                    </div>
                                ) : active == 'detail' ? (
                                    <div className="flex  flex-col bg-[#f6f6ff] py-12 pl-25 min-h-[550px] h-full w-full   gap-4 max-w-[800px]">
                                        <div className='flex flex-col items-start justify-start gap-3'>
                                            <h1 className="text-4xl font-bold">MSI MPG Trident 3</h1>
                                            <p className="text-sm text-blue-600">Be the first to review this product</p>

                                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                                <li>Intel Core i7-10700F</li>
                                                <li>Intel H410</li>
                                                <li>WHITE</li>
                                                <li>NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6</li>
                                                <li>SO-DIMM 16GB (16GB x 1) DDR4 2666MHz</li>
                                                <li>2 total slots (64GB Max)</li>
                                                <li>512GB (1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB (2.5) 5400RPM</li>
                                                <li>Gaming Keyboard GK30 + Gaming Mouse GM11</li>
                                                <li>3.5 HDD (0/0), 2.5 HDD/SSD(1/0), M.2 (1/0)</li>
                                                <li>Intel WGI219V Ethernet (10/100/1000M)</li>
                                                <li>AX200 (WIFI 6) + BT5.1</li>
                                                <li>PSU 330W</li>
                                                <li>Fan Cooler</li>
                                            </ul>


                                        </div>



                                        <p className="text-sm">
                                            Have a Question?{" "}
                                            <span className="text-blue-600 border-b-2 border-blue-600 cursor-pointer">
                                                Contact Us
                                            </span>
                                        </p>
                                    </div>
                                ) :
                                    (
                                        <div className="flex  flex-col bg-[#f6f6ff] py-12 pl-25 min-h-[550px] h-full w-full   gap-4 max-w-[800px]">
                                            <div className='flex flex-col items-start justify-start gap-3'>
                                                <h1 className="text-4xl font-bold">MSI MPG Trident 3</h1>
                                                <p className="text-sm text-blue-600">Be the first to review this product</p>
                                                <div className="w-full max-w-md bg-white border border-gray-200 rounded-md shadow-sm">
                                                    <table className="w-full text-sm text-left text-gray-700">
                                                        <tbody>
                                                            <tr className="border-b border-gray-200">
                                                                <th className="px-4 py-2 font-medium text-gray-500">CPU</th>
                                                                <td className="px-4 py-2 text-gray-600">N/A</td>
                                                            </tr>
                                                            <tr className="bg-gray-50 border-b border-gray-200">
                                                                <th className="px-4 py-2 font-medium text-gray-500">Featured</th>
                                                                <td className="px-4 py-2 text-gray-600">N/A</td>
                                                            </tr>
                                                            <tr>
                                                                <th className="px-4 py-2 font-medium text-gray-500">I/O Ports</th>
                                                                <td className="px-4 py-2 text-gray-600">N/A</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>



                                            <p className="text-sm">
                                                Have a Question?{" "}
                                                <span className="text-blue-600 border-b-2 border-blue-600 cursor-pointer">
                                                    Contact Us
                                                </span>
                                            </p>
                                        </div>
                                    )
                            }

                            <div className="flex flex-col justify-center items-center">
                                <Image src={img29} alt="MSI MPG Trident 3" className="w-72 h-auto" />
                                <div className='flex gap-2 items-center py-2'>
                                    <Image src={primary1} alt=''></Image>
                                    <Image src={vecto} alt=''></Image>
                                    <h1 className='font-bold text-[#272560]'>own it now, up to 6 months<br />interest free learn more</h1>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
                <section className='big-container p-5 justify-center flex  bg-[#000000]'>
                    <div className='flex  justify-between'>
                        <div className=' flex ml-40 mt-20 flex-col justify-start items-start gap-10  p-5'>
                            <h1 className='text-5xl  font-bold text-white'>Outplay the<br />Competittion</h1>
                            <p className='text-[20px] text-gray-400'>Experience a 40% boost in computing from last<br />generation. MSI Desktop equips the 10th Gen.<br />Intel® Core™ i7 processor with the upmost<br />computing power to bring you an unparalleled<br />gaming experience.<br /><br />

                                *Performance compared to i7-9700. Specs varies by model.</p>
                        </div>
                        <div>
                            <Image src={img11} alt=''></Image>
                        </div>
                    </div>

                </section>
                <section className="w-full flex flex-col bg-[#ffffff]  ">
                    <div className="bg-gray-50 flex items-center justify-center gap-5 px-8 ">
                        <div className="flex flex-col space-y-4 max-w-md">
                            {["Product Support", "FAQ", "Our Buyer Guide"].map((item, idx) => (
                                <button key={idx} className="flex items-center justify-between w-full px-5 py-3 rounded-md border border-gray-300 bg-white shadow-sm hover:shadow-md hover:bg-gray-100 transition-all" >
                                    <span className="text-gray-800 font-medium">{item}</span>
                                    <ChevronRight size={18} className="text-gray-500" />
                                </button>
                            ))}
                        </div>
                        <div className="">
                            <Image src={img5} alt="Support" className="" />
                        </div>
                    </div>

                    <div className="bg-gradient-to-bl from-gray-800 to-black text-white px-8 py-16 text-center">
                        <h2 className="text-2xl font-bold mb-4">Features</h2>
                        <p className="max-w-2xl mx-auto mb-10 text-gray-300">
                            The MPG series brings out the best in gamers by allowing full expression in
                            color with advanced RGB lighting control and synchronization.
                        </p>

                        <div className="grid grid-cols-1 items-center md:grid-cols-4 ">
                            <div className="text-center">
                                <Image src={img1} alt="intel" className="mx-auto mb-4 " />
                                <p className="text-sm text-gray-300">
                                    <span className="font-semibold">Intel® Core™ i7</span> processor with
                                    the utmost<br />computing power to bring you an<br />unparalleled gaming
                                    experience.
                                </p>
                            </div>

                            <div className="text-center">
                                <Image src={img2} alt="rtx" className="mx-auto mb-4 " />
                                <p className="text-sm text-gray-300">
                                    The new <span className="font-semibold">GeForce® RTX SUPER™</span><br />has
                                    more cores & higher clocks<br />for superfast performance.
                                </p>
                            </div>

                            <div className="text-center">
                                <Image src={img3} alt="ssd" className="mx-auto mb-4 " />
                                <p className="text-sm text-gray-300">
                                    Unlock the potential with<br />the latest{" "}
                                    <span className="font-semibold">SSD technology</span>,up to 6× faster<br />
                                    than SATA SSD.
                                </p>
                            </div>

                            <div className="text-center">
                                <Image src={img4} alt="ddr4" className="mx-auto mb-4 " />
                                <p className="text-sm text-gray-300">
                                    Featuring the latest{" "}
                                    <span className="font-semibold">DDR4 2933MHz</span> support for<br />
                                    exceptional performance.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default Page