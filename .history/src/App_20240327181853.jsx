import "./App.css";
import {message} from './assets/images/icon-messages.svg'
function App() {
  return <>
  <body className="box-border p-0 m-0 bg-white w-screen h-screen">
    <div className="container ">

      <div className="flex ">
        <div>
          <i src={message}></i>
          <h1 className="text-2xl font-Poppins">Huddle</h1>
        </div>
      </div>
    </div>
  </body>
  </>;
}

export default App;
