import { useState } from "react"



const ContentBarca = () => {

  const barcaTexts = [
    { id: 0, content: 'El Fútbol Club Barcelona' },
    { id: 1, content: 'El club es uno de los más laureados' },
    { id: 2, content: 'El estadio del FC Barcelona'}
  ]

  const [activeTextIndex, setActiveTextIndex] = useState(0)

  return (
    <div className= " p-4">
      <div className= " flex m-auto rounded-xl   h-full max-w-5xl bg-white shadow-lg">
        <div className="w-1/2 ">
         <h2>dskfsdjkl</h2>
        </div>
        <div className="  w-1/2 ">
       <h2 className="select-none mt-1 text-3xl font-extrabold text-center text-black">Barça History</h2>

       <div className=" flex flex-col  max-w-96 p-8 h-72 mb-14 mr-2 mt-4 overflow-auto  rounded-xl  bg-gray-200 md:m-auto md:mb-6 md:mt-4"> 

        <p>{barcaTexts[activeTextIndex].content}</p>

        <div className=" flex mt-auto justify-center gap-2">
          {barcaTexts.map((text, index) => (
          <span
          key={text.id} 
          onClick={() => setActiveTextIndex(index)}
          className={`h-2 w-2 rounded-full cursor-pointer transition-colors duration-300
          ${index === activeTextIndex ? 'bg-black' : 'bg-gray-400 hover:bg-gray-600'}
          `}
></span>
))}
</div>
        
       </div>

      
       </div>
           
      </div>
       
    </div>
  )
}

export default ContentBarca