'use client'

import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { div } from 'framer-motion/client'
import React from 'react'

export default function MyDashboard() {
    return (
        <div>
           <Navbar/>
            <main className="flex items-start justify-center bg-gray-50 p-8">
                <section className="w-full max-w-6xl bg-white shadow-xl rounded-2xl border border-gray-200 grid grid-cols-1 md:grid-cols-4 overflow-hidden">
                    <aside className="col-span-1 bg-gray-50 border-r border-gray-200 p-6 flex flex-col gap-3">
                        <h2 className="text-lg font-bold text-gray-900 mb-4">Account Dashboard</h2>
                        <nav className="flex flex-col gap-2 text-sm">
                            <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-indigo-50 text-gray-700 font-medium transition">Account Information</button>
                            <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-indigo-50 text-gray-700 transition">Address Book</button>
                            <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-indigo-50 text-gray-700 transition">Payment Methods</button>
                            <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-indigo-50 text-gray-700 transition">My Reviews</button>
                            <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-indigo-50 text-gray-700 transition">My Wish List</button>
                            <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-indigo-50 text-gray-700 transition">Settings</button>
                        </nav>
                    </aside>

                    <div className="col-span-3 p-8">
                        <h1 className="text-2xl font-extrabold text-gray-900 mb-6">My Dashboard</h1>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-gray-50 border border-gray-200 p-5 rounded-xl shadow-sm">
                                <h3 className="font-semibold text-gray-800 mb-2">Contact Information</h3>
                                <p className="text-sm text-gray-600">Alex Driver<br />example@address.com</p>
                                <div className="mt-3 flex gap-4 text-xs text-indigo-600 font-medium">
                                    <button>Edit</button>
                                    <button>Change Password</button>
                                </div>
                            </div>

                            <div className="bg-gray-50 border border-gray-200 p-5 rounded-xl shadow-sm">
                                <h3 className="font-semibold text-gray-800 mb-2">Newsletters</h3>
                                <p className="text-sm text-gray-600">You are not subscribed to our newsletter.</p>
                                <div className="mt-3 text-xs text-indigo-600 font-medium">
                                    <button>Edit</button>
                                </div>
                            </div>

                            <div className="bg-gray-50 border border-gray-200 p-5 rounded-xl shadow-sm">
                                <h3 className="font-semibold text-gray-800 mb-2">Default Billing Address</h3>
                                <p className="text-sm text-gray-600">You have not set a default billing address.</p>
                                <div className="mt-3 text-xs text-indigo-600 font-medium">
                                    <button>Edit Address</button>
                                </div>
                            </div>

                            <div className="bg-gray-50 border border-gray-200 p-5 rounded-xl shadow-sm">
                                <h3 className="font-semibold text-gray-800 mb-2">Default Shipping Address</h3>
                                <p className="text-sm text-gray-600">You have not set a default shipping address.</p>
                                <div className="mt-3 text-xs text-indigo-600 font-medium">
                                    <button>Edit Address</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    )
}
