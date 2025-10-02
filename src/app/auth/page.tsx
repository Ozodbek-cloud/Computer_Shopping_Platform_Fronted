'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function AuthPage() {
  const [isRegister, setIsRegister] = useState(false)
  const toggle = (v?: boolean) => setIsRegister(prev => (typeof v === 'boolean' ? v : !prev))

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black flex items-center justify-center py-12 px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="w-full max-w-5xl bg-white/5 backdrop-blur-2xl rounded-2xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        <div className="hidden md:flex flex-col justify-center items-start p-12 bg-gradient-to-br from-blue-700 via-indigo-800 to-purple-900 relative">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl opacity-30"></div>
          <h2 className="text-4xl font-extrabold text-white z-10">E-Commerce</h2>
          <p className="mt-4 text-slate-200 z-10 max-w-sm">Onlayn do‘koningiz uchun qulay login va ro‘yxatdan o‘tish sahifasi.</p>
          <ul className="mt-8 space-y-4 z-10">
            <li className="flex items-center gap-3">
              <div className="p-3 bg-white/10 rounded-lg">💻</div>
              <span className="text-slate-200 text-sm">Kompyuter savdosi platformasi</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="p-3 bg-white/10 rounded-lg">⚡</div>
              <span className="text-slate-200 text-sm">Tez va qulay tizim</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="p-3 bg-white/10 rounded-lg">🔒</div>
              <span className="text-slate-200 text-sm">Xavfsiz kirish</span>
            </li>
          </ul>
        </div>

        <div className="p-8 md:p-12">
          <div className="flex justify-between items-center mb-6">
            <div className="text-2xl font-bold text-white">CompuShop</div>
            <div className="flex items-center gap-2">
              <button onClick={() => toggle(false)} className={`px-3 py-1 rounded-full text-sm ${!isRegister ? 'bg-white text-slate-900' : 'bg-white/10 text-slate-300'}`}>Login</button>
              <button onClick={() => toggle(true)} className={`px-3 py-1 rounded-full text-sm ${isRegister ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg' : 'bg-white/10 text-slate-300'}`}>Register</button>
            </div>
          </div>

          <form className="space-y-5">
            {isRegister && (
              <div>
                <label className="block text-sm text-slate-300 mb-2">Full Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl bg-white/10 border border-transparent focus:border-white/30 outline-none text-white placeholder-slate-400" placeholder="Ismingiz"/>
              </div>
            )}

            <div>
              <label className="block text-sm text-slate-300 mb-2">Email</label>
              <input type="email" className="w-full px-4 py-3 rounded-xl bg-white/10 border border-transparent focus:border-white/30 outline-none text-white placeholder-slate-400" placeholder="email@misol.com"/>
            </div>

            <div>
              <label className="block text-sm text-slate-300 mb-2">Password</label>
              <input type="password" className="w-full px-4 py-3 rounded-xl bg-white/10 border border-transparent focus:border-white/30 outline-none text-white placeholder-slate-400" placeholder="Kamida 6 belgidan"/>
            </div>

            {isRegister && (
              <div>
                <label className="block text-sm text-slate-300 mb-2">Confirm Password</label>
                <input type="password" className="w-full px-4 py-3 rounded-xl bg-white/10 border border-transparent focus:border-white/30 outline-none text-white placeholder-slate-400" placeholder="Parolni qayta kiriting"/>
              </div>
            )}

            <div>
              <button type="submit" className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-lg">{isRegister ? "Ro‘yxatdan o‘tish" : "Kirish"}</button>
            </div>

            <div className="flex items-center gap-3 justify-center">
              <span className="h-px bg-white/10 flex-1"></span>
              <span className="text-xs text-slate-400">yoki</span>
              <span className="h-px bg-white/10 flex-1"></span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button type="button" className="py-2 rounded-lg border border-white/10 bg-white/5 text-white">Google</button>
              <button type="button" className="py-2 rounded-lg border border-white/10 bg-white/5 text-white">GitHub</button>
            </div>
          </form>

          <div className="mt-6 text-center text-sm text-slate-400">
            {isRegister ? (
              <span>Allaqachon akkauntingiz bormi? <button onClick={() => toggle(false)} className="text-white font-semibold ml-2">Kirish</button></span>
            ) : (
              <span>Akkount yo‘qmi? <button onClick={() => toggle(true)} className="text-white font-semibold ml-2">Ro‘yxatdan o‘tish</button></span>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
