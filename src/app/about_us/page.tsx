'use client'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import img from "../../img1/Mask Group (1).png"
import img1 from "../../img1/Mask Group.png"
import img2 from "../../img1/Rectangle 11.png"
import img3 from "../../img1/Rectangle 13.png"
import img4 from "../../img1/Rectangle 54.png"
import img_chotkiy from "../../just_images/Group 63.png"

function Page() {

    const reviews = [
        {
            id: 1,
            text: `My first order arrived today in perfect condition. From the time I sent a 
      question about the item to making the purchase, to the shipping and now the 
      delivery, your company, Tecs, has stayed in touch. Such great service. I look 
      forward to shopping on your site in the future and would highly recommend it.`,
            author: "Tama Brown",
            image: img_chotkiy,
        },
        {
            id: 2,
            text: `Amazing experience! Customer support replied super fast and solved my issue in no time. 
      The product quality is even better than expected. Highly recommend!`,
            author: "James Carter",
            image: img_chotkiy,
        },
        {
            id: 3,
            text: `Fast delivery and great service! The packaging was neat, and everything worked perfectly. 
      Definitely will order again.`,
            author: "Sophia Lee",
            image: img_chotkiy,
        },
    ];
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % reviews.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [reviews.length]);

    return (
        <div className=''>
            <Navbar />
            <section className='container py-5'>
                <h1 className='text-4xl font-bold'>About Us</h1>
            </section>
            <section className='big-container bg-[#000000] p-10 flex items-center justify-center border'>

                <div className='max-w-[1300px] gap-40 flex w-full   mx-auto'>
                    <div className='flex flex-col justify-start mt-15 items-start gap-5 '>
                        <h1 className='font-bold text-5xl text-white'>A Family That Keeps<br />On Growing</h1>
                        <ul className='flex flex-col justify-start items-start gap-1'>
                            <li className='font-extrabold text-white'>We always aim to please the home market, supplying great </li>
                            <li className='font-extrabold text-white'>computers and hardware at great prices to non-corporate </li>
                            <li className='font-extrabold text-white'>customers, through our large Melbourne CBD showroom and</li>
                            <li className='font-extrabold text-white'> our online store.</li>
                            <br />
                            <li className='font-extrabold text-white'>Shop management approach fosters a strong customer</li>
                            <li className='font-extrabold text-white'>service focus in our staff. We prefer to cultivate long-term</li>
                            <li className='font-extrabold text-white'>client relationships rather than achieve quick sales,</li>
                            <li className='font-extrabold text-white'> demonstrated in the measure of our long-term success.</li>
                        </ul>
                    </div>
                    <Image src={img4} alt=''></Image>
                </div>

            </section>
            <section>
                <div className='max-w-[1300px]   flex w-full   mx-auto'>
                    <Image src={img2} alt='' className='scale-[0.7]  ml-[-100px]  border-black'></Image>
                    <div className='flex flex-col justify-start mt-15 items-start gap-5 ml-[-50px] '>
                        <h1 className='font-bold text-5xl '>A Family That Keeps<br />On Growing</h1>
                        <ul className='flex flex-col justify-start items-start gap-1'>
                            <li className='font-extrabold '>We always aim to please the home market, supplying great </li>
                            <li className='font-extrabold '>computers and hardware at great prices to non-corporate </li>
                            <li className='font-extrabold '>customers, through our large Melbourne CBD showroom and</li>
                            <li className='font-extrabold '> our online store.</li>
                            <br />
                            <li className='font-extrabold '>Shop management approach fosters a strong customer</li>
                            <li className='font-extrabold '>service focus in our staff. We prefer to cultivate long-term</li>
                            <li className='font-extrabold '>client relationships rather than achieve quick sales,</li>
                            <li className='font-extrabold '> demonstrated in the measure of our long-term success.</li>
                        </ul>
                    </div>

                </div>
            </section>
            <section className='big-container bg-[#000000] p-10 flex items-center justify-center border'>

                <div className='max-w-[1300px] gap-40 flex w-full   mx-auto'>
                    <div className='flex flex-col justify-start mt-15 items-start gap-5 '>
                        <h1 className='font-bold text-5xl text-white'>A Family That Keeps<br />On Growing</h1>
                        <ul className='flex flex-col justify-start items-start gap-1'>
                            <li className='font-extrabold text-white'>We always aim to please the home market, supplying great </li>
                            <li className='font-extrabold text-white'>computers and hardware at great prices to non-corporate </li>
                            <li className='font-extrabold text-white'>customers, through our large Melbourne CBD showroom and</li>
                            <li className='font-extrabold text-white'> our online store.</li>
                            <br />
                            <li className='font-extrabold text-white'>Shop management approach fosters a strong customer</li>
                            <li className='font-extrabold text-white'>service focus in our staff. We prefer to cultivate long-term</li>
                            <li className='font-extrabold text-white'>client relationships rather than achieve quick sales,</li>
                            <li className='font-extrabold text-white'> demonstrated in the measure of our long-term success.</li>
                        </ul>
                    </div>
                    <Image src={img1} alt=''></Image>
                </div>

            </section>
            <section className='big-container  p-10 flex items-center justify-center border'>
                <Image src={img3} alt=''></Image>

                <div className='max-w-[1300px] gap-40 flex w-full   mx-auto'>
                    <div className='flex flex-col justify-start mt-15 items-start gap-5 '>
                        <h1 className='font-bold text-5xl '>A Family That Keeps<br />On Growing</h1>
                        <ul className='flex flex-col justify-start items-start gap-1'>
                            <li className='font-extrabold '>We always aim to please the home market, supplying great </li>
                            <li className='font-extrabold '>computers and hardware at great prices to non-corporate </li>
                            <li className='font-extrabold '>customers, through our large Melbourne CBD showroom and</li>
                            <li className='font-extrabold '> our online store.</li>
                            <br />
                            <li className='font-extrabold '>Shop management approach fosters a strong customer</li>
                            <li className='font-extrabold '>service focus in our staff. We prefer to cultivate long-term</li>
                            <li className='font-extrabold '>client relationships rather than achieve quick sales,</li>
                            <li className='font-extrabold '> demonstrated in the measure of our long-term success.</li>
                        </ul>
                    </div>
                </div>

            </section>
            <section className='big-container bg-[#000000] p-10 flex items-center justify-center border'>

                <div className='max-w-[1300px] gap-40 flex w-full   mx-auto'>
                    <div className='flex flex-col justify-start mt-15 items-start gap-5 '>
                        <h1 className='font-bold text-5xl text-white'>A Family That Keeps<br />On Growing</h1>
                        <ul className='flex flex-col justify-start items-start gap-1'>
                            <li className='font-extrabold text-white'>We always aim to please the home market, supplying great </li>
                            <li className='font-extrabold text-white'>computers and hardware at great prices to non-corporate </li>
                            <li className='font-extrabold text-white'>customers, through our large Melbourne CBD showroom and</li>
                            <li className='font-extrabold text-white'> our online store.</li>
                            <br />
                            <li className='font-extrabold text-white'>Shop management approach fosters a strong customer</li>
                            <li className='font-extrabold text-white'>service focus in our staff. We prefer to cultivate long-term</li>
                            <li className='font-extrabold text-white'>client relationships rather than achieve quick sales,</li>
                            <li className='font-extrabold text-white'> demonstrated in the measure of our long-term success.</li>
                        </ul>
                    </div>
                    <Image src={img} alt=''></Image>
                </div>

            </section>
            <section className="w-full flex items-center justify-center py-10">
                <div className="relative w-full max-w-4xl overflow-hidden">
                    <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${current * 100}%)` }} >
                        {reviews.map((review) => (
                            <div key={review.id} className="w-full flex-shrink-0 px-4">
                                <div className="bg-[#f6f6ff] p-10 rounded-2xl shadow-md">
                                    <div className="flex gap-3">
                                        <h1 className="text-8xl font-bold text-blue-600 leading-none">“</h1>
                                        <div>
                                            <p className="text-lg sm:text-xl leading-relaxed text-gray-700">
                                                {review.text}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="mt-5 flex justify-end">
                                        <h1 className="font-bold text-gray-900">- {review.author}</h1>
                                    </div>

                                    <div className="flex mt-5 justify-between items-center">
                                        <button className="text-blue-600 hover:bg-blue-600 hover:text-white hover:border-white transition-all duration-200 font-bold border-2 border-blue-600 rounded-full py-2 px-5">
                                            Leave Us A Review
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="absolute -bottom-8 left-0 right-0 flex justify-center gap-3">
                        {reviews.map((_, idx) => (
                            <button key={idx} onClick={() => setCurrent(idx)} className={`w-3 h-3 rounded-full transition ${current === idx ? "bg-blue-600" : "bg-gray-400/50 hover:bg-gray-500"}`} />
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default Page