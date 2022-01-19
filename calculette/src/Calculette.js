function Calculette() {
    return (
        <div>
            <h1 className="text-blue-700 font-bold text-3xl">Une calco amusez vous bien</h1>
            <input type="text" className="my-4 border-2 rounded-md border-gray-400"></input>

            <div className="grid grid-cols-3 w-1/3 mx-auto gap-y-3 gap-x-6">
                <button className="bg-blue-600 rounded-md">1</button>    
                <button className="bg-blue-600 rounded-md">2</button>    
                <button className="bg-blue-600 rounded-md">3</button>    
                <button className="bg-blue-600 rounded-md">4</button>    
                <button className="bg-blue-600 rounded-md">5</button>    
                <button className="bg-blue-600 rounded-md">6</button>    
                <button className="bg-blue-600 rounded-md">7</button>    
                <button className="bg-blue-600 rounded-md">8</button>    
                <button className="bg-blue-600 rounded-md">9</button>    
            </div>
            <div className="grid grid-cols-3 w-1/3 mx-auto gap-y-3 gap-x-6 mt-4">
                <button className="bg-blue-500 rounded-md">+</button>
                <button className="bg-blue-500 rounded-md">-</button>
                <button className="bg-blue-500 rounded-md">=</button>
            </div> 
        </div>
    );
}

export default Calculette;