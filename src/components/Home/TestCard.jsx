import React from 'react'

const TestCard = ({data}) => {
  return (
    <div className="w-full mx-auto md:mx-5  md:h-[300px] h-[250px] max-w-xs md:max-w-sm lg:max-w-md md:p-6 p-3 flex flex-col items-center rounded-md  ">
    <img
      src={data.image}
      alt="user_image"
      className="rounded-full w-16 h-16 object-cover mb-4"
    />
    <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-800 mb-2 text-center">
      {data.userName}
    </h2>
    <p className="italic text-blue-600 text-sm md:text-base lg:text-lg text-center">
      "{data.review}"
    </p>
  </div>
  )
}

export default TestCard