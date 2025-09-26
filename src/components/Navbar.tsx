import Image from 'next/image'
import React from 'react'
import facebook from "../images/ant-design_facebook-filled.png"
import insta from "../images/ant-design_instagram-filled.png"
import logo from "../images/1.png"
import cart from "../images/jam_shopping-cart.png"
import search from "../images/gg_search.png"
import person from "../images/Ellipse 8.png"

function Navbar() {
    return (
        <div>
            <header>
                <section className='bg-container  py-3 bg-[#020202]'>
                    <div className='container  py-3'>
                        <nav className='flex justify-between'>
                            <h1><span className='font-bold text-gray-600'>Mon-Thu:</span> <span className='font-bold text-white'>9:00 AM - 5:30 PM</span></h1>
                            <h1 className='font-bold text-gray-600'>Visit our showroom in 1234 Street Adress City Address, 1234  <span className='font-bold ml-2 text-white border-b-2 hover:text-blue-700 hover:border-blue-700 transition-all duration-200 cursor-pointer'>Contact Us</span></h1>
                            <div className='flex justify-center items-center gap-2'>
                                <h1 className='font-bold text-white'>Call Us: (00) 1234 5678</h1>
                                <div className='flex gap-1'>
                                    <Image src={facebook} alt='' className='hover:scale-[1.2] duration-200'></Image>
                                       <Image src={insta} alt='' className='hover:scale-[1.2] duration-200'></Image>
                                </div>
                            </div>
                        </nav>
                    </div>
                </section>
                <section className='shadow-[0px_4px_6px_10px_rgba(0,_0,_0,_0.1)] bg-container'>
                    <div className='container '>
                        <nav className='py-5 flex justify-between'>
                            <div className='flex items-center gap-10'>
                                <Image src={logo} alt=''></Image>
                                <div className='flex gap-3'>
                                    <button className='py-3 cursor-pointer px-6 border-2 border-white rounded-4xl font-bold hover:text-blue-700 hover:border-blue-700 transition-all duration-200'>Laptops</button>
                                    <button className='py-3 cursor-pointer px-6 border-2 border-white rounded-4xl font-bold hover:text-blue-700 hover:border-blue-700 transition-all duration-200'>Desktop PCs</button>
                                    <button className='py-3 cursor-pointer px-6 border-2 border-white rounded-4xl font-bold hover:text-blue-700 hover:border-blue-700 transition-all duration-200'>Networking Devices</button>
                                    <button className='py-3 cursor-pointer px-6 border-2 border-white rounded-4xl font-bold hover:text-blue-700 hover:border-blue-700 transition-all duration-200'>Printers & Scanners</button>
                                    <button className='py-3 cursor-pointer px-6 border-2 border-white rounded-4xl font-bold hover:text-blue-700 hover:border-blue-700 transition-all duration-200'>PC Parts</button>
                                    <button className='py-3 cursor-pointer px-6 border-2 border-white rounded-4xl font-bold hover:text-blue-700 hover:border-blue-700 transition-all duration-200'>All Other Products</button>
                                    <button className='py-3 cursor-pointer px-6 border-2 border-white rounded-4xl font-bold hover:text-blue-700 hover:border-blue-700 transition-all duration-200'>Repairs</button>
                                    <button className='py-3 cursor-pointer px-6 border-2 rounded-4xl font-bold text-blue-700 border-blue-700  hover:bg-blue-700 duration-200 hover:text-white'>Our Deals</button>
                                </div>
                            </div>
                            <div className='flex gap-3 items-center'>
                                <Image src={search} alt='' className='hover:scale-[1.2] duration-200'></Image>
                                  <Image src={cart} alt='' className='hover:scale-[1.2] duration-200'></Image>
                                <Image src={person} alt='' className='hover:scale-[1.2] duration-200'></Image>
                            </div>
                        </nav>
                    </div>
                </section>
            </header>
        </div>
    )
}

export default Navbar