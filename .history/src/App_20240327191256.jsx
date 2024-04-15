import "./App.css";
import { ReactSVG } from "react-svg";
import message from "./assets/images/icon-messages.svg";

function App() {
  return (
    <div className="container box-border p-0 m-0 bg-white w-screen h-screen">
      <div className="flex flex-row w-full">
        <div className="flex flex-row w-1/2">
          <ReactSVG src={message} />
          <h1 className="text-2xl font-Poppins text-blue-800">Huddle</h1>
        </div>
        <div className="flex align-middle justify-center w-1/2">
          <input
            className="border-2 border-Light-pink text-Light-pink text-Poppins rounded-3xl px-8 py-2"
            type="button"
            value="Try It Free"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
