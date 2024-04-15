import "./App.css";
import { ReactSVG } from 'react-svg';
import message from "./assets/images/icon-messages.svg";

function App() {
  return (
    <>
      <body className="box-border p-0 m-0 bg-white w-screen h-screen">
        <div className="container ">
          <div className="flex ">
            <div className="bg-red-500">
              <ReactSVG src={message} />
              <h1 className="text-2xl font-Poppins text-blue-800">Huddle</h1>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}

export default App;
