import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import React from 'react'
import img from "../../img1/Mask Group (1).png"
import img1 from "../../img1/Mask Group.png"
import img2 from "../../img1/Rectangle 11.png"
import img3 from "../../img1/Rectangle 13.png"
import img4 from "../../img1/Rectangle 54.png"

function Page() {
    return (
        <div className=''>
            <Navbar />
            <section className='container py-5'>
                <h1 className='text-4xl font-bold'>About Us</h1>
            </section>
            <section className='big-container bg-[#000000] p-10 flex items-center justify-center border'>

                <div className='max-w-[1400px] flex w-full border border-white  mx-auto'>
                       <div>
                        <h1 className='font-bold text-5xl text-white'>A Family That Keeps<br/>On Growing</h1>
                        </div>
                        <Image src={img4} alt=''></Image>                                                         
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Page