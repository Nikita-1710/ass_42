import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <h1 className="text-blue-500 text-4xl py-5 text-center font-bold">
        Welcome to Ahilyanagar
      </h1>
      <div className="flex flex-row w-[1300px] mx-auto my-6">
        <div className="min-h-auto w-1/2">
          <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_fgo69F-ro4gW6HO1cB5dR69GDD7vTS_7XQ&s" 
          className="w-auto object-cover my-2 mx-auto min-h-96 rounded-xl" />
        </div>

        <div className="min-h-auto w-1/2 flex flex-col my-18">
          <h1 className='text-2xl font-bold text-fuchsia-700 text-center'> Ahilyanagar (Ahmednagar)</h1>
          <p className='my-6 text-[18px] text-center justify-center'>
            <span className='text-violet-500'>Ahilyanagar</span> is a district in Maharashtra, India, known as the "Place of Saints". It's located between Pune and Aurangabad and is the largest district in Maharashtra by area. The district is known for its strong co-operative sector, including sugar factories and industrial estates. Ahmednagar is also historically significant, serving as the seat of the Ahmednagar Sultanate
          </p>
        </div>
      </div>
    </div>
    
  )
}
export default App