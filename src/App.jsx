import React from 'react'
import Timer from './components/Timer'
import Questions from './components/Questions'

const App = () => {
  return (
  <div className=' h-screen w-screen bg-gradient-to-br from-green-900 via-emerald-800 to-green-700 flex'>
  
  <div className="h-screen flex ">
       
      <Timer/>
      
    </div>
<div className="text-center space-y-3 ml-4">
  <h1 className="text-5xl md:text-6xl font-extrabold 
                 bg-gradient-to-r from-green-600 via-emerald-500 to-teal-400 
                 bg-clip-text text-transparent tracking-wide drop-shadow-sm">
    ISLAMIC QUIZ
  </h1>

  <h4 className="text-lg md:text-xl font-medium text-yellow-300 italic ">
    Upgrade Your Deen Knowledge.
  </h4>

  <div className="mt-4 w-24 h-1 mx-auto rounded-full 
                  bg-gradient-to-r from-green-500 to-emerald-400"></div>
</div>


     <div className="min-h-screen flex items-center justify-center px-4">
       
      <Questions/>
    </div>
    </div>
  )
}

export default App