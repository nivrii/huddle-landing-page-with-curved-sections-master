import "./App.css";
import { ReactSVG } from "react-svg";
import message from "./assets/images/icon-messages.svg";
import screenMockup from './assets/images/screen-mockups.svg'

function App() {
  return (
    <div className="container box-border  m-0 bg-white w-screen min-h-screen border border-red-600">
      <div className="flex flex-row w-full">
        <div className="flex flex-row align-middle justify-start w-2/3">
          <img src={message} className="my-auto w-8 h-8" />
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

      <div className="w-full overflow-hidden border border-red-600">
        <h1>Build The Community Your Fans Will Love</h1>
        <p className="text-wrap">
          Huddle re-imagines the way we build communities. You have a voice, so
          does your audience. Create connections with your users as you engage
          in genuine discussion
        </p>
        <input type="submit" name="start" className="outline-none text-white bg-Pink" />
      </div>

      <div className="mx-auto">
        <img src={screenMockup} className="object-contain"/>
      </div>
    </div>
  );
}

export default App;
