import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Blog() {

  const location = useLocation()

  const ArrayData = ['Fruits','Vegetables','Meat','Butter']

  return (
    <section className="py-16 bg-[#f8fafc]">

      <div className="max-w-[900px] mx-auto text-center">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-800 mb-10">
          Shop by Category
        </h2>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-6">

          {ArrayData.map((item) => {

            const isActive = location.pathname === `/${item}`

            return (
              <Link key={item} to={`/${item}`}>
                <button
                  className={`px-8 py-3 rounded-full font-medium tracking-wide transition-all duration-300
                  ${
                    isActive
                      ? "bg-orange-500 text-white shadow-lg scale-105"
                      : "bg-white text-gray-700 shadow-md hover:bg-orange-500 hover:text-white hover:shadow-xl hover:scale-105"
                  }`}
                >
                  {item}
                </button>
              </Link>
            )
          })}

        </div>

      </div>

    </section>
  )
}