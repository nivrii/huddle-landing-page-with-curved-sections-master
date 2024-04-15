import "./App.css";
import { ReactSVG } from "react-svg";
import message from "./assets/images/icon-messages.svg";

function App() {
  return (
    <div className="container box-border p-4 m-0 bg-white w-screen min-h-screen">
      <div className="flex flex-row w-full border-2 border-blue-100">
        <div className="flex flex-row align-middle justify-start w-2/3 border-2 border-red-400">
          <ReactSVG src={message} style={{ fontSize: "10px" }}/>
          <h1 className="text-4xl font-Poppins text-blue-800 font-bold">Huddle</h1>
        </div>
        <div className="flex align-middle justify-end w-1/3">
          <input
            className="border-2 border-Light-pink text-Light-pink font-Poppins rounded-3xl px-8 py-2"
            type="button"
            value="Try It Free"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
