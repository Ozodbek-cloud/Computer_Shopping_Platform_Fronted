import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import React from 'react'
import img from "../../computer_blocks_imges/idk.png"
function page() {
  return (
    <div>
      <Navbar />
      <main className='container border ' >
        <div className="w-full h-full min-h-30 bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${img.src})` }}> </div>

      </main>
      <Footer />
    </div>
  )
}

export default page