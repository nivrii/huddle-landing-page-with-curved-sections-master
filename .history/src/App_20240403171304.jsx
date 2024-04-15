import "./App.css";
import { ReactSVG } from "react-svg";
import message from "./assets/images/icon-messages.svg";

function App() {
  return (
    <div className="container box-border p-4 m-0 bg-white w-screen min-h-screen">
      <div className="flex flex-row w-full">
        <div className="flex flex-row align-middle justify-start w-2/3">
          <ReactSVG src={message} className="my-auto" />
          <h1 className="text-3xl font-Poppins text-Very-dark-cyan font-bold my-auto">
            Huddle
          </h1>
        </div>
        <div className="flex align-middle justify-end w-1/3">
          <input
            className="border-2 border-Light-pink text-Light-pink font-Poppins rounded-3xl px-6 py-2"
            type="button"
            value="Try It Free"
          />
        </div>
      </div>

      <div>
        <h1>Build The Community Your Fans Will Love</h1>
        <p>
          Huddle re-imagines the way we build communities. You have a voice, so
          does your audience. Create connections with your users as you engage
          in genuine discussion
        </p>
        <input type="submit" name="start" className="outline-none text-white bg-Pink" />
      </div>
    </div>
  );
}

export default App;
