import React from 'react'

function AboutCard(props) {
  return (
    <div>
    <div className="flex justify-center">
      <div className="flex flex-col  items-center mt-4 w-[85%] h-72 bg-gradient-to-b from-blue-500 to-purple-700 rounded-lg">
        <div className="h-[33%] text-white text-justify ml-2 mr-2 mb-2">
          {/* description of the project*/}
          {props.description}
        </div>
      </div>
    </div>
  </div>
  )
}

export default AboutCard