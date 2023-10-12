import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(10);
  const [numAllowed, setNumAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const passwordGenerate = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) str += "0123456789";
    if (characterAllowed) str += "!@#$%^&*()_+";
    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numAllowed, characterAllowed]);

  useEffect(() => {
    passwordGenerate();
  }, [length, numAllowed, characterAllowed]);
  const copyPassword = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
  };
  return (
    <div className="text-white bg-slate-400 py-3 px-4 mx-auto max-w-md mt-3 rounded">
      <h1 className="text-center text-2xl text-slate-800">
        Password Generator
      </h1>
      <div>
        <div className="flex rounded-lg overflow-hidden mt-2">
          <input
            type="text"
            value={password}
            readOnly
            className="w-full text-black px-1 outline-none"
            ref={passwordRef}
          />
          <button className="bg-orange-700 py-2 px-3" onClick={copyPassword}>
            Copy
          </button>
        </div>
        <div className="flex px-2 mt-2 align-center">
          <div className="flex align-center px-2">
            <input
              type="range"
              name=""
              min={8}
              max={100}
              id=""
              onChange={(e) => setLength(e.target.value)}
            />
            <label htmlFor="length">Length</label>
          </div>
          <div className="flex align-center px-2">
            <input
              type="checkbox"
              name=""
              id=""
              defaultChecked={numAllowed}
              onChange={() => setNumAllowed((prev) => !prev)}
            />
            <label htmlFor="number">Number</label>
          </div>
          <div className="flex align-center px-2">
            <input
              type="checkbox"
              name=""
              id=""
              defaultChecked={characterAllowed}
              onChange={() => setCharacterAllowed((prev) => !prev)}
            />
            <label htmlFor="character">character</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
