import "./App.css";
import { ReactComponent as Message} from './assets/images/icon-messages.svg'
function App() {
  return (
    <>
      <body className="box-border p-0 m-0 bg-red-900 w-screen h-screen">
        <div className="container ">
          <div className="flex ">
            <div className="bg-red-500">
              <Message/>
              <h1 className="text-2xl font-Poppins text-blue-800">Huddle</h1>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}

export default App;
