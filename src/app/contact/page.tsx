import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

function Page() {
    return (
        <div>
            <Navbar />
            <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-gray-100">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">

                    <div className="bg-white p-10 rounded-3xl shadow-xl">
                        <h2 className="text-4xl font-extrabold mb-4 text-gray-900">Contact Us</h2>
                        <p className="text-gray-600 mb-10 text-lg">     We’d love to hear from you. Fill out the form below and we’ll respond quickly.</p>

                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Your Name *</label>
                                <input type="text" placeholder="John Doe" className="mt-2 w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" required />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Your Email *</label>
                                <input type="email" placeholder="you@example.com" className="mt-2 w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" required />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Your Phone</label>
                                <input type="tel" placeholder="+123 456 789" className="mt-2 w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Message *</label>
                                <textarea rows={5} placeholder="Write your message here..." className="mt-2 w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" required    ></textarea>
                            </div>

                            <button type="submit" className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-3 rounded-xl shadow-lg hover:opacity-90 transition transform hover:-translate-y-0.5"      >
                                Send Message
                            </button>
                        </form>
                    </div>

                    <div className="bg-white p-10 rounded-3xl shadow-xl space-y-8">
                        <div>
                            <p className="text-xl font-bold text-gray-800">📍 Address</p>
                            <p className="text-gray-600 mt-2">1234 Street Address, City, 1234</p>
                        </div>
                        <div>
                            <p className="text-xl font-bold text-gray-800">📞 Phone</p>
                            <p className="text-gray-600 mt-2">(00) 1234 5678</p>
                        </div>
                        <div>
                            <p className="text-xl font-bold text-gray-800">🕒 Hours</p>
                            <p className="text-gray-600 mt-2">Mon - Thu: 9:00 AM – 5:30 PM</p>
                            <p className="text-gray-600">Fri: 9:00 AM – 6:00 PM</p>
                            <p className="text-gray-600">Sat: 11:00 AM – 5:00 PM</p>
                        </div>
                        <div>
                            <p className="text-xl font-bold text-gray-800">📧 Email</p>
                            <a href="mailto:shop@email.com" className="text-indigo-600 hover:underline mt-2 block">
                                shop@email.com
                            </a>
                        </div>
                    </div>

                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Page