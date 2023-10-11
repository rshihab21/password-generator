function App() {
  return (
    <div className="text-white bg-slate-400 py-3 px-4 mx-auto max-w-md mt-3 rounded">
      <h1 className="text-center text-2xl text-slate-800">
        Password Generator
      </h1>
      <div>
        <div className="flex rounded-lg overflow-hidden mt-2">
          <input
            type="text"
            readOnly
            className="w-full text-black px-1 outline-none"
          />
          <button className="bg-orange-700 py-2 px-3">Copy</button>
        </div>
        <div className="flex px-2 mt-2 align-center">
          <div className="flex align-center px-2">
            <input type="range" name="" id="" />
            <label htmlFor="length">Length</label>
          </div>
          <div className="flex align-center px-2">
            <input type="checkbox" name="" id="" />
            <label htmlFor="number">Number</label>
          </div>
          <div className="flex align-center px-2">
            <input type="checkbox" name="" id="" />
            <label htmlFor="character">character</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
