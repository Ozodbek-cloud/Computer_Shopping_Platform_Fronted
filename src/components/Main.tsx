import React from 'react'
import big_picture from "../images/image 26.png"
import Image, { StaticImageData } from 'next/image'
import computer2 from "../computer_images/image 29.png"
import stars from "../computer_images/Group 133.png"
import block from "../computer_images/image 29 (2).png"
import block2 from "../computer_images/image 29 (1).png"
import block3 from "../computer_images/image 29 (3).png"
import block4 from "../computer_images/image 29 (4).png"
import tick from "../computer_images/Group 132.png"
import primary1 from "../computer_images/primary 1.png"
import vecto from "../computer_images/Vector 10.png"
import culler from "../computer_brends_images/image 30.png"
import culler2 from "../computer_brends_images/image 30 (1).png"
import culler3 from "../computer_brends_images/image 30 (2).png"
import culler4 from "../computer_brends_images/image 30 (3).png"
import computer_block from "../computer_blocks_imges/image 29 (1).png"
import computer_block2 from "../computer_blocks_imges/image 29 (2).png"
import computer_block3 from "../computer_blocks_imges/image 29 (3).png"
import computer_block4 from "../computer_blocks_imges/image 29.png"
import computer_block5 from "../computer_blocks_imges/image 29 (4).png"
import msi from "../msi_computers/image 29 (6).png"
import msi1 from "../msi_computers/image 29 (7).png"
import msi2 from "../msi_computers/image 29 (8).png"
import msi3 from "../msi_computers/image 29 (9).png"
import msi4 from "../msi_computers/image 29 (5).png"
import desctops from "../desctops_img/image 29 (10).png"
import desctop1 from "../desctops_img/image 29 (11).png"
import desctop2 from "../desctops_img/image 29 (13).png"
import monitor from "../msi_monitors/image 29.png"
import monitor1 from "../msi_monitors/image 29 (1).png"
import monitor2 from "../msi_monitors/image 29 (2).png"
import monitor3 from "../msi_monitors/image 29 (3).png"
function Main() {
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
    }
  ]

  const msi_computers: ComputerType[] = [

    {
      img: msi1,
      reviews: 4,
      name: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldprice: "490.00",
      newprice: "490.00"
    },
    {
      img: msi2,
      reviews: 4,
      name: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldprice: "490.00",
      newprice: "490.00"
    },
    {
      img: msi3,
      reviews: 4,
      name: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldprice: "490.00",
      newprice: "490.00"
    },
    {
      img: msi4,
      reviews: 4,
      name: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldprice: "490.00",
      newprice: "490.00"
    },
    {
      img:msi,
      reviews: 4,
      name: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldprice: "490.00",
      newprice: "490.00"
    }
  ]

  const computers: ComputerType[] = [

    {
      img: computer_block,
      reviews: 4,
      name: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldprice: "490.00",
      newprice: "490.00"
    },
    {
      img: computer_block2,
      reviews: 4,
      name: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldprice: "490.00",
      newprice: "490.00"
    },
    {
      img: computer_block3,
      reviews: 4,
      name: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldprice: "490.00",
      newprice: "490.00"
    },
    {
      img: computer_block4,
      reviews: 4,
      name: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldprice: "490.00",
      newprice: "490.00"
    },
    {
      img: computer_block5,
      reviews: 4,
      name: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldprice: "490.00",
      newprice: "490.00"
    }
  ]

  const desctopss: ComputerType[] = [

    {
      img: desctops,
      reviews: 4,
      name: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldprice: "490.00",
      newprice: "490.00"
    },
    {
      img: desctop1,
      reviews: 4,
      name: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldprice: "490.00",
      newprice: "490.00"
    },
    {
      img: desctop2,
      reviews: 4,
      name: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldprice: "490.00",
      newprice: "490.00"
    },
    {
      img: desctop1,
      reviews: 4,
      name: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldprice: "490.00",
      newprice: "490.00"
    },
    {
      img: desctop1,
      reviews: 4,
      name: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldprice: "490.00",
      newprice: "490.00"
    }
  ]

  const msi_monitors: ComputerType[] = [

    {
      img: monitor,
      reviews: 4,
      name: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldprice: "490.00",
      newprice: "490.00"
    },
    {
      img: monitor2,
      reviews: 4,
      name: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldprice: "490.00",
      newprice: "490.00"
    },
    {
      img:  monitor3,
      reviews: 4,
      name: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldprice: "490.00",
      newprice: "490.00"
    },
    {
      img: monitor2,
      reviews: 4,
      name: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldprice: "490.00",
      newprice: "490.00"
    },
    {
      img: monitor2,
      reviews: 4,
      name: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldprice: "490.00",
      newprice: "490.00"
    }
  ]
  return (
    <div>
      <main className='container'>
        <section>
          <div className=" border">
            <Image src={big_picture} alt="picture" className="w-full h-full object-cover object-center" />
          </div>
        </section>
        <section>
          <h1 className='text-4xl mt-8 font-bold'>New Products</h1>
          <div className='grid grid-cols-1 gap-3 py-5 sm:grid-cols-3 md:grid-cols-6'>
            {
              computer.map((el, index) => (
                <div key={index} className='min-h-[400px] cursor-pointer  hover:shadow-[0px_4px_6px_10px_rgba(0,_0,_0,_0.1)] duration-200 rounded-2xl'>
                  <div key={index} className='p-4 '>
                    <div className='flex gap-2 items-center'>
                      <Image src={tick} alt=''></Image>
                      <h1 className='text-green-500'>In Stock</h1>
                    </div>
                    <div className='p-5'>
                      <Image src={el.img} alt='' className='w-[220px] hover:scale-[1.2] duration-300 h-[150px] object-cover object-center'></Image>
                    </div>
                    <div className='flex gap-2 mt-2 items-center justify-start'>
                      <Image src={stars} alt=''></Image>
                      <p className='font-bold text-gray-600'>Reviews ({el.reviews})</p>
                    </div>
                    <div className='mt-1  flex flex-col justify-start items-start gap-4'>
                      <h1 className=' text-gray-700 '>{el.name}</h1>
                      <div>
                        <p className='line-through font-bold text-gray-500'>$ {el.oldprice}</p>
                        <p className='font-bold text-2xl'>$ {el.newprice}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </section>
        <section>
          <div className='big-container flex py-5 mt-2 bg-[#f6f6ff] justify-center'>
            <div className='flex gap-2 items-center py-2'>
              <Image src={primary1} alt=''></Image>
              <Image src={vecto} alt=''></Image>
              <h1 className='font-bold text-[#272560]'>own it now, up to 6 months interest free learn more</h1>
            </div>
          </div>
        </section>
        <section>
          <div>
            <div className='grid grid-cols-1 gap-3 py-5 sm:grid-cols-3 md:grid-cols-6'>
              <div className="min-h-[400px] relative hover:shadow-[0px_4px_6px_10px_rgba(0,_0,_0,_0.1)] duration-200 rounded-2xl overflow-hidden">
                <Image src={culler} alt='' className="absolute w-full h-full object-cover object-center rounded-2xl" />
                <div className="absolute inset-0 flex flex-col gap-15 items-center text-center justify-center z-10">
                  <h1 className="text-white text-3xl cursor-pointer font-bold  p-2 rounded">
                    Custome<br />Builds
                  </h1>
                  <p className='text-gray-400 border-b-2 hover:text-blue-700 hover:border-blue-700 transition-all duration-200 cursor-pointer' >See All Products</p>
                </div>
              </div>

              {
                computers.map((el, index) => (
                  <div key={index} className='min-h-[400px] cursor-pointer hover:shadow-[0px_4px_6px_10px_rgba(0,_0,_0,_0.1)] duration-200 rounded-2xl'>
                    <div key={index} className='p-4 '>
                      <div className='flex gap-2 ml-4 items-center'>
                        <Image src={tick} alt=''></Image>
                        <h1 className='text-green-500'>In Stock</h1>
                      </div>
                      <div className='p-9'>
                        <Image src={el.img} alt='' className='w-[220px] scale-[1.3] hover:scale-[1.4] duration-300 h-[150px] object-cover object-center'></Image>
                      </div>
                      <div className='flex gap-2 mt-2 items-center justify-start'>
                        <Image src={stars} alt=''></Image>
                        <p className='font-bold text-gray-600'>Reviews ({el.reviews})</p>
                      </div>
                      <div className='mt-1  flex flex-col justify-start items-start gap-4'>
                        <h1 className=' text-gray-700 '>{el.name}</h1>
                        <div>
                          <p className='line-through font-bold text-gray-500'>$ {el.oldprice}</p>
                          <p className='font-bold text-2xl'>$ {el.newprice}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
          <div>
            <ul className='flex gap-5 py-2'>
              <li className='font-bold  text-[#838383] border-b-2 border-blue-600'>MSI GT Series</li>
              <li className='font-bold  text-[#838383]'>MSI GT Series</li>
              <li className='font-bold  text-[#838383]'>MSI GT Series</li>
              <li className='font-bold  text-[#838383]'>MSI GT Series</li>
            </ul>
            <div className='grid grid-cols-1 gap-3 py-5 sm:grid-cols-3 md:grid-cols-6'>
              <div className="min-h-[400px] relative hover:shadow-[0px_4px_6px_10px_rgba(0,_0,_0,_0.1)] duration-200 rounded-2xl overflow-hidden">
                <Image src={culler2} alt='' className="absolute w-full h-full object-cover object-center rounded-2xl" />
                <div className="absolute inset-0 flex flex-col gap-15 items-center text-center justify-center z-10">
                  <h1 className="text-white text-3xl cursor-pointer font-bold  p-2 rounded">
                    MSI<br />Laptops
                  </h1>
                  <p className='text-gray-400 border-b-2 hover:text-blue-700 hover:border-blue-700 transition-all duration-200 cursor-pointer' >See All Products</p>
                </div>
              </div>

              {
                msi_computers.map((el, index) => (
                  <div key={index} className='min-h-[400px] cursor-pointer  hover:shadow-[0px_4px_6px_10px_rgba(0,_0,_0,_0.1)] duration-200 rounded-2xl'>
                    <div key={index} className='p-4 '>
                      <div className='flex gap-2 ml-4 items-center'>
                        <Image src={tick} alt=''></Image>
                        <h1 className='text-green-500'>In Stock</h1>
                      </div>
                      <div className='p-9'>
                        <Image src={el.img} alt='' className='w-[220px] scale-[1.3] hover:scale-[1.4] duration-300 h-[150px] object-cover object-center'></Image>
                      </div>
                      <div className='flex gap-2 mt-2 items-center justify-start'>
                        <Image src={stars} alt=''></Image>
                        <p className='font-bold text-gray-600'>Reviews ({el.reviews})</p>
                      </div>
                      <div className='mt-1  flex flex-col justify-start items-start gap-4'>
                        <h1 className=' text-gray-700 '>{el.name}</h1>
                        <div>
                          <p className='line-through font-bold text-gray-500'>$ {el.oldprice}</p>
                          <p className='font-bold text-2xl'>$ {el.newprice}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
          <div>
            <ul className='flex gap-5 py-2'>
              <li className='font-bold  text-[#838383] border-b-2 border-blue-600'>MSI Infinute Series</li>
              <li className='font-bold  text-[#838383]'>MSI Triden</li>
              <li className='font-bold  text-[#838383]'>MSI Triden</li>
              <li className='font-bold  text-[#838383]'>MSI Triden</li>
            </ul>
            <div className='grid grid-cols-1 gap-3 py-5 sm:grid-cols-3 md:grid-cols-6'>
              <div className="min-h-[400px] relative hover:shadow-[0px_4px_6px_10px_rgba(0,_0,_0,_0.1)] duration-200 rounded-2xl overflow-hidden">
                <Image src={culler3} alt='' className="absolute w-full h-full object-cover object-center rounded-2xl" />
                <div className="absolute inset-0 flex flex-col gap-15 items-center text-center justify-center z-10">
                  <h1 className="text-white text-3xl cursor-pointer font-bold  p-2 rounded">
                    Desctops
                  </h1>
                  <p className='text-gray-400 border-b-2 hover:text-blue-700 hover:border-blue-700 transition-all duration-200 cursor-pointer' >See All Products</p>
                </div>
              </div>

              {
                desctopss.map((el, index) => (
                  <div key={index} className='min-h-[400px] cursor-pointer  hover:shadow-[0px_4px_6px_10px_rgba(0,_0,_0,_0.1)] duration-200 rounded-2xl'>
                    <div key={index} className='p-4 '>
                      <div className='flex gap-2 ml-4 items-center'>
                        <Image src={tick} alt=''></Image>
                        <h1 className='text-green-500'>In Stock</h1>
                      </div>
                      <div className='p-9'>
                        <Image src={el.img} alt='' className='w-[220px] scale-[1.3] hover:scale-[1.4] duration-300 h-[150px] object-cover object-center'></Image>
                      </div>
                      <div className='flex gap-2 mt-2 items-center justify-start'>
                        <Image src={stars} alt=''></Image>
                        <p className='font-bold text-gray-600'>Reviews ({el.reviews})</p>
                      </div>
                      <div className='mt-1  flex flex-col justify-start items-start gap-4'>
                        <h1 className=' text-gray-700 '>{el.name}</h1>
                        <div>
                          <p className='line-through font-bold text-gray-500'>$ {el.oldprice}</p>
                          <p className='font-bold text-2xl'>$ {el.newprice}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
          <div>
           
            <div className='grid grid-cols-1 gap-3 py-5 sm:grid-cols-3 md:grid-cols-6'>
              <div className="min-h-[400px] relative hover:shadow-[0px_4px_6px_10px_rgba(0,_0,_0,_0.1)] duration-200 rounded-2xl overflow-hidden">
                <Image src={culler4} alt='' className="absolute w-full h-full object-cover object-center rounded-2xl" />
                <div className="absolute inset-0 flex flex-col gap-15 items-center text-center justify-center z-10">
                  <h1 className="text-white text-3xl cursor-pointer font-bold  p-2 rounded">
                    Gaming<br/>Monitors
                  </h1>
                  <p className='text-gray-400 border-b-2 hover:text-blue-700 hover:border-blue-700 transition-all duration-200 cursor-pointer' >See All Products</p>
                </div>
              </div>

              {
                msi_monitors.map((el, index) => (
                  <div key={index} className='min-h-[400px] cursor-pointer  hover:shadow-[0px_4px_6px_10px_rgba(0,_0,_0,_0.1)] duration-200 rounded-2xl'>
                    <div key={index} className='p-4 '>
                      <div className='flex gap-2 ml-4 items-center'>
                        <Image src={tick} alt=''></Image>
                        <h1 className='text-green-500'>In Stock</h1>
                      </div>
                      <div className='p-9'>
                        <Image src={el.img} alt='' className='w-[220px] scale-[1.3] hover:scale-[1.4] duration-300 h-[150px] object-cover object-center'></Image>
                      </div>
                      <div className='flex gap-2 mt-2 items-center justify-start'>
                        <Image src={stars} alt=''></Image>
                        <p className='font-bold text-gray-600'>Reviews ({el.reviews})</p>
                      </div>
                      <div className='mt-1  flex flex-col justify-start items-start gap-4'>
                        <h1 className=' text-gray-700 '>{el.name}</h1>
                        <div>
                          <p className='line-through font-bold text-gray-500'>$ {el.oldprice}</p>
                          <p className='font-bold text-2xl'>$ {el.newprice}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Main