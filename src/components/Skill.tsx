import React from 'react'
import './style.css';
import { motion } from "framer-motion"

const Skill = () => {
  const skillSet = [
    {
      id: 1,
      title: 'Mobile App Design',
      excerpt: "Mobile application Developer",
      logo: 'fi-rs-mobile'
    },
    {
      id: 2,
      title: 'Web Design',
      excerpt: "Web application Developer",
      logo: 'fi-rs-computer'
    },
    {
      id: 3,
      title: 'Product Design',
      excerpt: "Web application Developer",
      logo: 'fi-rs-apps'
    }
  ]

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-lg sm:py-16 lg:px-6">
        <div className="flex flex-col items-center max-w-screen-lg mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Skill Set</h2>
          <p className="text-gray-500 sm:text-xl dark:text-gray-400">Here are some of my skill sets.</p>
        </div>
        <div className="space-y-8 grid gap-12 lg:grid-cols-3 max-w-screen-lg md:space-y-0">
          {skillSet.map(res => {
            return (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ ease: "easeIn", duration: .5, delay: res.id / skillSet.length }}
              >
                <div className='flex flex-col items-center gap-2'>
                  <i className={res.logo + ' text-4xl dark:text-white'}></i>
                  <h3 className="text-xl font-bold dark:text-white">{res.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400">{res.excerpt}</p>
                  <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                    <span className="relative px-5 py-1.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      View Works </span>
                  </button>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skill;