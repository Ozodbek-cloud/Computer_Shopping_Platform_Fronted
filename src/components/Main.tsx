import React from 'react'
import big_picture from "../images/DIK.png"
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
import brend from "../brends_images/image 33.png"
import brend1 from "../brends_images/image 33 (2).png"
import brend2 from "../brends_images/image 33 (3).png"
import brend3 from "../brends_images/image 33 (4).png"
import brend4 from "../brends_images/image 33 (5).png"
import brend5 from "../brends_images/image 33 (6).png"
import brend6 from "../brends_images/image 33 (1).png"
import img from "../just_images/image 29 (12).png"
import img1 from "../just_images/image 29 (14).png"
import img2 from "../just_images/image 29 (15).png"
import img3 from "../just_images/image 29 (4).png"
import img4 from "../just_images/image 29 (5).png"
import img5 from "../just_images/image 29 (6).png"
import img6 from "../just_images/image 29 (7).png"
import img7 from "../just_images/image 29 (8).png"
import img8 from "../just_images/image 29 (9).png"
import img_chotkiy from "../just_images/Group 63.png"
import Footer from './Footer'
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
      img: msi,
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
      img: monitor3,
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
          <div className="w-full h-full min-h-88 bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${big_picture.src})` }}> </div>

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
                    Gaming<br />Monitors
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
        <section>
          <div className='flex  gap-20 justify-center'>
            <Image src={brend} alt='' className=' hover:scale-[1.2] transition-all duration-200 cursor-pointer'></Image>
            <Image src={brend1} alt='' className=' hover:scale-[1.2] transition-all duration-200 cursor-pointer'></Image>
            <Image src={brend2} alt='' className=' hover:scale-[1.2] transition-all duration-200 cursor-pointer'></Image>
            <Image src={brend3} alt='' className=' hover:scale-[1.2] transition-all duration-200 cursor-pointer'></Image>
            <Image src={brend4} alt='' className=' hover:scale-[1.2] transition-all duration-200 cursor-pointer'></Image>
            <Image src={brend5} alt='' className=' hover:scale-[1.2] transition-all duration-200 cursor-pointer'></Image>
            <Image src={brend6} alt='' className=' hover:scale-[1.2] transition-all duration-200 cursor-pointer'></Image>
          </div>
        </section>
        <section>
          <div className='grid py-8 grid-cols-6 gap-3 '>
            <div className=' min-h-[300px]'>
              <div>
                <Image src={img} alt='' className='w-full h-full object-cover object-center' ></Image>
              </div>
              <div className='text-center '>
                <h1>If you’ve recently made a<br />desktop PC or laptop<br />purchase, you might want to<br />consider adding peripherals to<br />enhance your home office<br />setup, your<br />gaming rig, or your business workspace...</h1>
              </div>
            </div>

            <div className=' min-h-[300px]'>
              <div>
                <Image src={img1} alt='' className='w-full h-full object-cover object-center' ></Image>
              </div>
              <div className='text-center '>
                <h1>If you’ve recently made a<br />desktop PC or laptop<br />purchase, you might want to<br />consider adding peripherals to<br />enhance your home office<br />setup, your<br />gaming rig, or your business workspace...</h1>
              </div>
            </div>
            <div className=' min-h-[300px]'>
              <div>
                <Image src={img2} alt='' className='w-full h-full object-cover object-center' ></Image>
              </div>
              <div className='text-center '>
                <h1>If you’ve recently made a<br />desktop PC or laptop<br />purchase, you might want to<br />consider adding peripherals to<br />enhance your home office<br />setup, your<br />gaming rig, or your business workspace...</h1>
              </div>
            </div>
            <div className=' min-h-[300px]'>
              <div>
                <Image src={img3} alt='' className='w-full h-full object-cover object-center' ></Image>
              </div>
              <div className='text-center '>
                <h1>If you’ve recently made a<br />desktop PC or laptop<br />purchase, you might want to<br />consider adding peripherals to<br />enhance your home office<br />setup, your<br />gaming rig, or your business workspace...</h1>
              </div>
            </div>
            <div className=' min-h-[300px]'>
              <div>
                <Image src={img4} alt='' className='w-full h-full object-cover object-center' ></Image>
              </div>
              <div className='text-center '>
                <h1>If you’ve recently made a<br />desktop PC or laptop<br />purchase, you might want to<br />consider adding peripherals to<br />enhance your home office<br />setup, your<br />gaming rig, or your business workspace...</h1>
              </div>
            </div>
            <div className=' min-h-[300px]'>
              <div>
                <Image src={img5} alt='' className='w-full h-full object-cover object-center' ></Image>
              </div>
              <div className='text-center '>
                <h1>If you’ve recently made a<br />desktop PC or laptop<br />purchase, you might want to<br />consider adding peripherals to<br />enhance your home office<br />setup, your<br />gaming rig, or your business workspace...</h1>
              </div>
            </div>

            <div className=' min-h-[300px]'>
              <div>
                <Image src={img6} alt='' className='w-full h-full object-cover object-center' ></Image>
              </div>
              <div className='text-center '>
                <h1>If you’ve recently made a<br />desktop PC or laptop<br />purchase, you might want to<br />consider adding peripherals to<br />enhance your home office<br />setup, your<br />gaming rig, or your business workspace...</h1>
              </div>
            </div>
            <div className=' min-h-[300px]'>
              <div>
                <Image src={img7} alt='' className='w-full h-full object-cover object-center' ></Image>
              </div>
              <div className='text-center '>
                <h1>If you’ve recently made a<br />desktop PC or laptop<br />purchase, you might want to<br />consider adding peripherals to<br />enhance your home office<br />setup, your<br />gaming rig, or your business workspace...</h1>
              </div>
            </div>
            <div className=' min-h-[300px]'>
              <div>
                <Image src={img8} alt='' className='w-full h-full object-cover object-center' ></Image>
              </div>
              <div className='text-center '>
                <h1>If you’ve recently made a<br />desktop PC or laptop<br />purchase, you might want to<br />consider adding peripherals to<br />enhance your home office<br />setup, your<br />gaming rig, or your business workspace...</h1>
              </div>
            </div>
          </div>
        </section>
        <section className=''>
          <div className='  flex items-center justify-center py-5'>
            <div className=' bg-[#f6f6ff]  p-10  '>
              <div className='flex gap-3'>
                <h1 className='text-8xl font-bold'>‘’</h1>
                <div>
                  <h1 className='text-2xl'>My first order arrived today in perfect condition.  From the time I sent a question about the item to making the<br />purchase, to the shipping and now the delivery, your company, Tecs, has<br />stayed in touch.  Such great service.  I look forward to shopping on your site in the future and<br />would highly recommend it.</h1>
                </div>
              </div>
              <div className='mt-5 flex justify-end'>
                <h1 className='font-bold'>- Tama Brown</h1>
              </div>
              <div className='flex mt-5 justify-between items-center'>
                <button className='text-blue-600 hover:bg-blue-600 hover:text-white hover:border-white transition-all duration-200 font-bold border-2 border-blue-600 rounded-4xl py-2 px-5'>Leave Us A Review</button>
                <Image src={img_chotkiy} alt=''></Image>
              </div>
            </div>

          </div>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Main