'use client'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Image, { StaticImageData } from 'next/image'
import React, { useState } from 'react'
import img from "../../computer_blocks_imges/idk.png"
import computer2 from "../../computer_images/image 29.png"
import stars from "../../computer_images/Group 133.png"
import block from "../../computer_images/image 29 (2).png"
import block2 from "../../computer_images/image 29 (3).png"
import block3 from "../../computer_images/image 29 (4).png"
import block4 from "../../computer_images/image 29.png"
import tick from "../../computer_images/Group 132.png"
import brend from "../../brends_images/image 33.png"
import brend1 from "../../brends_images/image 33 (2).png"
import brend2 from "../../brends_images/image 33 (3).png"
import brend3 from "../../brends_images/image 33 (4).png"
import brend4 from "../../brends_images/image 33 (5).png"
import brend5 from "../../brends_images/image 33 (6).png"
import stol from "../../brends_images/image 49.png"
import { useRouter } from 'next/navigation'
import square from "../../img/Group 201.png"
import row from "../../img/Group 202.png"
import square_active from "../../img/Group 201 (1).png"
import row_active from "../../img/Group 202 (1).png"
function page() {
  const colors = ["#000000", "#DB0000",];
  const [selected, setSelected] = useState(0);

  const navigate = useRouter()
  const [active, setActive] = useState("square")
  type ComputerType = {
    img: StaticImageData,
    reviews: number,
    name: string,
    oldprice: string,
    newprice: string
  }

  const computer: ComputerType[] = [
    {
      img: computer2,
      reviews: 4,
      name: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldprice: "490.00",
      newprice: "490.00"
    },
    {
      img: block,
      reviews: 4,
      name: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldprice: "490.00",
      newprice: "490.00"
    },
    {
      img: block2,
      reviews: 4,
      name: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldprice: "490.00",
      newprice: "490.00"
    },
    {
      img: block3,
      reviews: 4,
      name: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldprice: "490.00",
      newprice: "490.00"
    },
    {
      img: block4,
      reviews: 4,
      name: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldprice: "490.00",
      newprice: "490.00"
    },
    {
      img: block4,
      reviews: 4,
      name: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldprice: "490.00",
      newprice: "490.00"
    },
    {
      img: block3,
      reviews: 4,
      name: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldprice: "490.00",
      newprice: "490.00"
    },
    {
      img: block,
      reviews: 4,
      name: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldprice: "490.00",
      newprice: "490.00"
    },
    {
      img: block2,
      reviews: 4,
      name: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldprice: "490.00",
      newprice: "490.00"
    },
    {
      img: block2,
      reviews: 4,
      name: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldprice: "490.00",
      newprice: "490.00"
    },
    {
      img: block2,
      reviews: 4,
      name: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldprice: "490.00",
      newprice: "490.00"
    },
    {
      img: block2,
      reviews: 4,
      name: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldprice: "490.00",
      newprice: "490.00"
    },
    {
      img: block3,
      reviews: 4,
      name: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldprice: "490.00",
      newprice: "490.00"
    },
    {
      img: block4,
      reviews: 4,
      name: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldprice: "490.00",
      newprice: "490.00"
    },
    {
      img: block4,
      reviews: 4,
      name: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldprice: "490.00",
      newprice: "490.00"
    },
    {
      img: block3,
      reviews: 4,
      name: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldprice: "490.00",
      newprice: "490.00"
    },
    {
      img: block,
      reviews: 4,
      name: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldprice: "490.00",
      newprice: "490.00"
    },
    {
      img: block2,
      reviews: 4,
      name: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldprice: "490.00",
      newprice: "490.00"
    }

  ]

  return (
    <div>
      <Navbar />
      <main className='container  ' >
        <div className="w-full h-full min-h-30 bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${img.src})` }}> </div>
        <section className='mt-5'>
          <div className=''>
            <h1 className='text-3xl  font-bold'>MSI PS Series (20)</h1>
            <div className="flex items-center justify-between gap-4  rounded-2xl p-3 shadow-sm bg-white">
              <button onClick={() => navigate.push('/')} className="px-6 py-2 rounded-xl border border-gray-300 text-gray-600 hover:bg-gray-100 transition">
                Back
              </button>

              <input
                type="text"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Type something..."
              />

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 border rounded-xl px-3 py-2">
                  <label htmlFor="sort" className="text-sm text-gray-500">
                    Sort By:
                  </label>
                  <select
                    id="sort"
                    name="sort"
                    className="border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="position">Position</option>
                    <option value="name">Name</option>
                    <option value="date">Date</option>
                  </select>
                </div>

                <div className="flex items-center gap-2 border rounded-xl px-3 py-2">
                  <label htmlFor="perPage" className="text-sm text-gray-500">
                    Show:
                  </label>
                  <select
                    id="perPage"
                    name="perPage"
                    defaultValue="35"
                    className="border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="10">10 per page</option>
                    <option value="20">20 per page</option>
                    <option value="35">35 per page</option>
                    <option value="50">50 per page</option>
                    <option value="100">100 per page</option>
                  </select>
                </div>

                <div className='flex gap-3'>
                  <Image onClick={() => setActive("square")} src={active == 'square' ? square : square_active} alt='' className='hover:scale-[1.2] transition-all duration-200'></Image>
                  <Image onClick={() => setActive("row")} src={active == 'row' ? row_active : row} alt='' className='hover:scale-[1.2] transition-all duration-200'></Image>
                </div>
              </div>

              <button className="px-6 py-2 rounded-xl border border-indigo-500 text-indigo-600 hover:bg-indigo-50 transition">
                Next
              </button>
            </div>
          </div>
        </section>
        <section className="flex mt-5 gap-6 p-6 bg-gray-50">
          <aside className="lg:w-80 bg-white rounded-2xl p-6 shadow-sm h-fit">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-900">Filters</h2>
              <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                Clear All
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Category</h3>
                <div className="space-y-2">
                  {['CUSTOM PCS', 'MSI ALL-IN-ONE PCS', 'HP/COMPAQ PCS'].map((category) => (
                    <label key={category} className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                      <span className="text-gray-700">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Price</h3>
                <div className="space-y-2">
                  {[
                    '$0.00 - $1,000.00',
                    '$1,000.00 - $2,000.00',
                    '$2,000.00 - $3,000.00',
                    '$3,000.00 - $4,000.00',
                    '$4,000.00 - $5,000.00',
                    '$5,000.00 - $6,000.00',
                    '$7,000.00 And Above'
                  ].map((price) => (
                    <div key={price} className="text-gray-600 hover:text-gray-900 cursor-pointer py-1">
                      {price}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Color</h3>
                <div style={{ display: "flex", gap: 12, alignItems: "center", padding: 12 }}>
                  {colors.map((c, i) => (
                    <div
                      key={i}
                      onClick={() => setSelected(i)}
                      style={{
                        width: 24,
                        height: 24,
                        borderRadius: "50%",
                        background: c,
                        border: i === selected ? "3px solid #2563eb" : "3px solid transparent",
                        boxSizing: "border-box",
                        cursor: "pointer",
                      }}
                    />
                  ))}
                </div>
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-medium transition-colors">
                Apply Filters
              </button>
            </div>

            <div className="mt-8 bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 text-center mb-4">Brands</h3>
              <button className="w-full border border-gray-600 text-gray-600 hover:bg-gray-100 rounded-2xl py-2 font-medium mb-6 transition-colors">
                View All Brands
              </button>
              <div className="grid grid-cols-2 gap-4">
                {[brend, brend1, brend2, brend3, brend4, brend5].map((brand, index) => (
                  <div key={index} className="bg-white rounded-lg p-3 hover:shadow-md transition-shadow">
                    <Image
                      src={brand}
                      alt={`Brand ${index + 1}`}
                      className="w-full h-auto object-contain hover:scale-105 transition-transform"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className='text-center p-3 flex flex-col gap-3 justify-center items-center bg-gray-50 mt-8'>
              <h1 className='text-2xl'>My Watch List</h1>
              <p className='font-bold'>You have no items in your wish list.</p>
              <div>
                <Image src={stol} alt=''></Image>
              </div>
            </div>
          </aside>

          <div className="flex-1">
            {
              active == 'square' ?
                (<div className='grid grid-cols-1 gap-6 py-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
                  {computer.map((el, index) => (
                    <div key={index} className='min-h-[400px] cursor-pointer hover:shadow-[0px_4px_6px_10px_rgba(0,_0,_0,_0.1)] duration-200 rounded-2xl'>
                      <div className='p-4'>
                        <div className='flex gap-2 items-center'>
                          <Image src={tick} alt='' />
                          <h1 className='text-green-500'>In Stock</h1>
                        </div>
                        <div className='p-5 flex justify-center'>
                          <Image src={el.img} alt='' className='w-[220px] h-[150px] object-contain hover:scale-[1.2] duration-300' />
                        </div>
                        <div className='flex gap-2 mt-2 items-center justify-start'>
                          <Image src={stars} alt='' />
                          <p className='font-bold text-gray-600'>Reviews ({el.reviews})</p>
                        </div>
                        <div className='mt-1 flex flex-col justify-start items-start gap-4'>
                          <h1 className='text-gray-700'>{el.name}</h1>
                          <div>
                            <p className='line-through font-bold text-gray-500'>$ {el.oldprice}</p>
                            <p className='font-bold text-2xl'>$ {el.newprice}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>)
                :
                (
                  <div className='grid grid-cols-1 py-5 gap-6  sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1'>
                    {computer.map((el, index) => (
                      <div key={index} className='min-h-[300px]  cursor-pointer hover:shadow-[0px_4px_6px_10px_rgba(0,_0,_0,_0.1)] duration-200 rounded-2xl'>
                        <div className='p-4 flex  '>
                          <div>
                            <div className='flex gap-2  items-center'>
                              <Image src={tick} alt='' />
                              <h1 className='text-green-500'>In Stock</h1>
                            </div>
                            <div className='p-5 flex justify-center items-center'>
                              <Image src={el.img} alt='' className='w-[220px] mt-5 h-[150px] object-contain scale-[1.5] hover:scale-[1.2] duration-300' />
                            </div>
                          </div>
                          <div className='flex justify-center mt-5 flex-col'>
                            <div className='flex gap-2 mt-2 items-center justify-start'>
                              <Image src={stars} alt='' />
                              <p className='font-bold text-gray-600'>Reviews ({el.reviews})</p>
                            </div>
                            <div className='mt-1 flex flex-col justify-start items-start gap-4'>
                              <h1 className='text-gray-700'>{el.name}</h1>
                              <div>
                                <p className='line-through font-bold text-gray-500'>$ {el.oldprice}</p>
                                <p className='font-bold text-2xl'>$ {el.newprice}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )
            }


            <div className="flex justify-center items-center gap-2 mt-6">
              <button className="px-3 py-1 border rounded">1</button>
              <button className="px-3 py-1 border rounded bg-indigo-600 text-white">2</button>
              <button className="px-3 py-1 border rounded">3</button>
              <button className="px-3 py-1 border rounded">...</button>
              <button className="px-3 py-1 border rounded">15</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default page