'use client'
import Image from 'next/image'
import React from 'react'
import img from "../desctops_img/Account.png"
import img1 from "../desctops_img/Support.png"
import img2 from "../desctops_img/Saving.png"
import face from "../brends_images/ant-design_facebook-filled.png"
import insta from "../brends_images/ant-design_instagram-filled.png"
import main from "../brends_images/Group 103.png"
function Footer() {
  return (
    <div>
      <div>
        <section className='big-container'>
          <div className='container  mb-8 p-5 mt-10 grid grid-cols-3'>
            <div className='flex flex-col justify-center text-center items-center gap-3'>
              <Image src={img1} alt=''></Image>
              <div className='flex flex-col gap-1'>
                <h1 className='text-2xl font-bold'>Product Support</h1>
                <p>Up to 3 years on-site warranty<br />available for your peace of mind.</p>
              </div>
            </div>
            <div className='flex flex-col justify-center text-center items-center gap-3'>
              <Image src={img} alt=''></Image>
              <div className='flex flex-col gap-1'>
                <h1 className='text-2xl font-bold'>Product Support</h1>
                <p>Up to 3 years on-site warranty<br />available for your peace of mind.</p>
              </div>
            </div>
            <div className='flex flex-col justify-center text-center items-center gap-3'>
              <Image src={img2} alt=''></Image>
              <div className='flex flex-col gap-1'>
                <h1 className='text-2xl font-bold'>Product Support</h1>
                <p>Up to 3 years on-site warranty<br />available for your peace of mind.</p>
              </div>
            </div>
          </div>
        </section>
        <section className='big-container bg-[#020203] '>
          <div className='container py-10'>
            <div className='flex  items-center justify-between'>
              <div className='flex flex-col gap-2 justify-start items-start'>
                <h1 className='text-5xl text-bold text-white'>Sign Up To Our Newsletter.</h1>
                <p className='text-[18px] font-bold text-gray-400'>Be the first to hear about the latest offers.</p>
              </div>
              <div className='flex items-center gap-2'>
                <input type="text" className=' px-8  rounded-[2px] border border-white w-full max-w-[300px] min-h-[50px] text-bold text-white' placeholder='Your Email' />
                <button className='bg-blue-600 p-3 rounded-2xl text-white font-bold'>Subscribe</button>
              </div>
            </div>
            <section className="flex mt-10 gap-25 justify-center text-gray-400 text-xs font-sans">
              <div>
                <h5 className="text-gray-400 font-bold text-[18px] mb-2">Information</h5>
                <ul className="list-none p-0 leading-6">
                  <li className='font-bold text-[18px]'>About Us</li>
                  <li className='font-bold text-[18px]'>About Zip</li>
                  <li className='font-bold text-[18px]'>Privacy Policy</li>
                  <li className='font-bold text-[18px]'>Search</li>
                  <li className='font-bold text-[18px]'>Terms</li>
                  <li className='font-bold text-[18px]'>Orders and Returns</li>
                  <li className='font-bold text-[18px]'>Contact Us</li>
                  <li className='font-bold text-[18px]'>Advanced Search</li>
                  <li className='font-bold text-[18px]'>Newsletter Subscription</li>
                </ul>
              </div>

              <div className=" p-2 w-44">
                <h5 className=" mb-2">PC Parts</h5>
                <ul className="list-none p-0 leading-6">
                  <li className='font-bold text-[18px]'>CPUs</li>
                  <li className='font-bold text-[18px]'>Add On Cards</li>
                  <li className='font-bold text-[18px]'>Hard Drives (Internal)</li>
                  <li className='font-bold text-[18px]'>Graphic Cards</li>
                  <li className='font-bold text-[18px]'>Keyboards / Mice</li>
                  <li className='font-bold text-[18px]'>Cases / Power Supplies / Cooling</li>
                  <li className='font-bold text-[18px]'>RAM (Memory)</li>
                  <li className='font-bold text-[18px]'>Software</li>
                  <li className='font-bold text-[18px]'>Speakers / Headsets</li>
                  <li className='font-bold text-[18px]'>Motherboards</li>
                </ul>
              </div>

              <div>
                <h5 className="text-gray-400 font-bold text-[18px] mb-2">Desktop PCs</h5>
                <ul className="list-none p-0 leading-6">
                  <li className='font-bold text-[18px]'>Custom PCs</li>
                  <li className='font-bold text-[18px]'>Servers</li>
                  <li className='font-bold text-[18px]'>MSI All-in-One PCs</li>
                  <li className='font-bold text-[18px]'>HP/Compaq PCs</li>
                  <li className='font-bold text-[18px]'>ASUS PCs</li>
                  <li className='font-bold text-[18px]'>Tecs PCs</li>
                </ul>
              </div>

              <div>
                <h5 className="text-gray-400 font-bold text-[18px] mb-2 ">Laptops</h5>
                <ul className="list-none p-0 leading-6">
                  <li className='font-bold text-[18px]'>Everyday Use Notebooks</li>
                  <li className='font-bold text-[18px]'>MSI Workstation Series</li>
                  <li className='font-bold text-[18px]'>MSI Prestige Series</li>
                  <li className='font-bold text-[18px]'>Tablets and Pods</li>
                  <li className='font-bold text-[18px]'>Netbooks</li>
                  <li className='font-bold text-[18px]'>Infinity Gaming Notebooks</li>
                </ul>
              </div>

              <div>
                <h5 className="text-gray-400 font-bold text-[18px] mb-2">Address</h5>
                <p className="text-xs leading-5 font-bold text-[18px]">
                  Address: 1234 Street Address City Address, 1234<br />
                  Phones: <a href="tel:+12345678" className="text-blue-500 underline">(00) 1234 5678</a><br />
                  We are open: Monday–Thursday: 9:00 AM – 5:30 PM<br />
                  Friday: 9:00 AM – 6:00 PM<br />
                  Saturday: 11:00 AM – 5:00 PM<br />
                  E-mail: <a href="mailto:shop@email.com" className="text-blue-500 underline">shop@email.com</a>
                </p>
              </div>
            </section>
            <div className='p-3 mt-2 flex justify-between items-center border-t-2 border-gray-700'>
              <div className='flex'>
                <Image src={face} alt=''></Image>
                <Image src={insta} alt=''></Image>
              </div>
              <Image src={main} alt=''></Image>
              <p className='text-bold text-gray-800'>Copyright © 2020 Shop Pty. Ltd.</p>
            </div>
          </div>



        </section>
      </div>
    </div>
  )
}

export default Footer