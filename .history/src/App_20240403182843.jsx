import "./App.css";
import message from "./assets/images/icon-messages.svg";
import screenMockup from "./assets/images/screen-mockups.svg";
import communities from "./assets/images/icon-communities.svg";
import sectionTop1M from "./assets/images/bg-section-top-mobile-1.svg";
import sectionBottom1M from "./assets/images/bg-section-bottom-mobile-1.svg";
import grow from "./assets/images/illustration-grow-together.svg";

function App() {
  return (
    <div className="container box-border m-0 bg-white w-screen min-h-screen border border-red-600">
      <section>
        <div className="flex flex-row w-full">
          <div className="flex flex-row align-middle  w-3/5">
            <img src={message} className="my-auto w-8 h-8" />
            <h1 className="text-3xl font-Poppins text-Very-dark-cyan font-bold my-auto">
              Huddle
            </h1>
          </div>
          <div className="flex align-middle justify-end w-2/5">
            <input
              className="border-2 border-Light-pink text-Light-pink font-Poppins rounded-3xl px-6 py-2"
              type="button"
              value="Try It Free"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="w-full overflow-hidden border border-red-600">
          <h1>Build The Community Your Fans Will Love</h1>
          <p className="text-wrap">
            Huddle re-imagines the way we build communities. You have a voice,
            so does your audience. Create connections with your users as you
            engage in genuine discussion
          </p>
          <input
            type="submit"
            name="start"
            className="outline-none text-white bg-Pink"
          />
        </div>
      </section>

      <section className="mt-4 m">
        <div className="mx-auto">
          <img src={screenMockup} className="object-contain" />
        </div>
      </section>

      <section className="flex flex-col justify-center">
        <div className="mx-auto w-1/2 border border-green-500 ">
          <img src={communities} alt="communities" />
          <h1 className="w-full font-bold text-6xl">1.4k+</h1>
          <p>Communities Formed</p>
        </div>
        <div className="mx-auto w-1/2 border border-green-500">
          <img src={message} alt="message" />
          <h1 className="w-full font-bold text-6xl">2.7m+</h1>
          <p>Messages Sent</p>
        </div>
        <img src={sectionTop1M} alt="divider" />
      </section>

      <section className="bg-sectionBG">
        <img src={grow} alt="" className="" />
        <h1>Grow Together</h1>
        <p>
          Generate meaningful discussions with your audience and build a strong,
          loyal community. Think of the insightful conversations you miss out on
          with a feedback form.
        </p>
      </section>

      <section>
        <img src={sectionBottom1M} alt="" />
      </section>
    </div>
  );
}

export default App;
