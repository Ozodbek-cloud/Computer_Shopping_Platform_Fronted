import React from 'react'
import big_picture from "../images/image 26.png"
import Image, { StaticImageData } from 'next/image'
import computer2 from "../computer_images/image 29.png"
import stars from "../computer_images/Group 133.png"
import block from "../computer_images/image 29 (2).png"
import block2 from "../computer_images/image 29 (1).png"
import block3 from "../computer_images/image 29 (3).png"
import block4 from "../computer_images/image 29 (4).png"
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
              computer.map(el => (
                <div className='min-h-[400px]  hover:shadow-[0px_4px_6px_10px_rgba(0,_0,_0,_0.1)] duration-200 rounded-2xl'>
                  <div className='p-4 '>
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
      </main>
    </div>
  )
}

export default Main