import React from 'react'
import { data } from './Data'
import { useParams } from 'react-router-dom'

export default function AllData() {

  const { category } = useParams()

  const FilterData = data.filter(
    item => item.Category === category
  )

  return (
    <section className="bg-[#f9fafb] min-h-screen py-16">

      <div className="max-w-[1400px] mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-5xl font-bold tracking-tight text-gray-800">
            {category}
          </h1>
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">

          {FilterData.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >

              {/* Image Section */}
              <div className="relative overflow-hidden">
                <img
                  src={item.Image}
                  alt=""
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-500"></div>
              </div>

              {/* Content */}
              <div className="p-6 text-center">

                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  {item.Title}
                </h2>

                <p className="text-xl font-bold text-orange-500 mb-4">
                  ${item.Price}
                </p>

                <button className="w-full py-3 rounded-xl bg-orange-500 text-white font-medium tracking-wide hover:bg-orange-600 transition duration-300">
                  Add to Cart
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}