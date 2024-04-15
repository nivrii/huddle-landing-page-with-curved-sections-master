import "./App.css";
import message from "./assets/images/icon-messages.svg";
import communities from "./assets/images/icon-communities.svg";
import phone from "./assets/images/icon-phone.svg";
import gmail from "./assets/images/icon-email.svg";

import screenMockup from "./assets/images/screen-mockups.svg";
import grow from "./assets/images/illustration-grow-together.svg";
import users from "./assets/images/illustration-your-users.svg";
import conversation from "./assets/images/illustration-flowing-conversation.svg";

import sectionTop1M from "./assets/images/bg-section-top-mobile-1.svg";
import sectionTop2M from "./assets/images/bg-section-top-mobile-2.svg";
import sectionBottom1M from "./assets/images/bg-section-bottom-mobile-1.svg";
import sectionBottom2M from "./assets/images/bg-section-bottom-mobile-2.svg";
import footerTopM from "./assets/images/bg-footer-top-mobile.svg";

function App() {
  return (
    <div className=" box-border m-0 bg-white w-screen min-h-screen">
      <section className="p-2h">
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
        <div className="w-full ">
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
        <div className="mx-auto w-1/2 ">
          <img src={communities} alt="communities" />
          <h1 className="w-full font-bold text-6xl">1.4k+</h1>
          <p>Communities Formed</p>
        </div>
        <div className="mx-auto w-1/2">
          <img src={message} alt="message" />
          <h1 className="w-full font-bold text-6xl">2.7m+</h1>
          <p>Messages Sent</p>
        </div>
      </section>

      <img src={sectionTop1M} alt="top-top" className="w-full" />

      <section className="flex flex-col space-y-8 bg-sectionBG px-8 py-12">
        <img src={grow} alt="" className="mb-12" />
        <div className="flex flex-col space-y-4 text-center">
          <h1>Grow Together</h1>
          <p>
            Generate meaningful discussions with your audience and build a
            strong, loyal community. Think of the insightful conversations you
            miss out on with a feedback form.
          </p>
        </div>
      </section>

      <img src={sectionBottom1M} alt="top-bottom" className="w-full" />

      <section className="flex flex-col space-y-8 my-20 px-8">
        <img src={conversation} alt="conversations" className="px-4" />
        <div className="flex flex-col space-y-4 text-center">
          <h1>Flowing Conversations</h1>
          <p>
            You wouldn&apos;t paginate a conversation in real life, so why do it
            online? Our threads have just-in-time loading for a more natural
            flow.
          </p>
        </div>
      </section>

      <img src={sectionTop2M} alt="bottom-top" className="w-full" />

      <section className="bg-sectionBG">
        <div className="flex flex-col space-y-8  px-8">
          <img src={users} alt="conversations" className="px-4" />
          <div className="flex flex-col space-y-4 text-center">
            <h1>Your Users</h1>
            <p>
              Its takes no time at all to integrate Huddle with your app&apos;s
              authentication solution. This means, once signed in to your app,
              your users can start chatting immediately.
            </p>
          </div>
        </div>
      </section>

      <img src={sectionBottom2M} alt="bottom-bottom" className="w-full" />

      <section className="flex flex-col space-y-8 mt-12 px-8 mb-28">
        <h1 className="text-center">Ready To Build Your Community?</h1>
        <input
          type="button"
          value="Get Started For Free"
          className="outline-none bg-Pink text-white w-fit py-2 px-8"
        />
      </section>

      <img src={footerTopM} alt="" className="w-full" />

      <footer className="bg-bgFooter -mt-1 pb-4">
        <div className="p-8 text-white">
          <h1>NEWSLETTER</h1>
          <p>
            To receive tips on how to grow your community, sign up to our weekly
            newsletter. We&apos;ll never send you spam or pass on your email
            address.
          </p>
          <input type="text" className="w-full rounded-lg h-12" />
          <input
            type="button"
            value="Subscribe"
            className="outline-none text-white bg-Pink"
          />
        </div>
        <div className="px-4">
          <div className="flex text-white">
            <img
              src={message}
              alt="message"
              className="fill-white stroke-white"
            />
            <h1>Huddle</h1>
          </div>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
            deserunt beatae. Voluptates voluptate totam consequuntur excepturi
            numquam pariatur molestias veritatis saepe, dolor, culpa asperiores
            quas odio maxime aperiam nulla vitae.
          </p>
        </div>
        <div className="flex flex-col">
          <div className="flex border border-white">
            <img src={phone} alt="Phone" className="m-4 h-6 w-6" />
            <p className="my-auto text-white ">Phone: +1-455-535-7654</p>
          </div>
          <div className="flex border border-white">
            <img src={gmail} alt="Gmail" className="m-4 h-6 w-6" />
            <p className="my-auto text-white ">flimzniv9@gmail.com</p>
          </div>
        </div>
        <p className="text-xs text-center text-attribution">
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            className="text-Light-pink underline decoration-solid decoration-4"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a
            href="https://github.com/nivrii/huddle-landing-page-with-curved-sections-master"
            className="underline decoration-solid decoration-4 text-Light-red"
          >
            NiVrIi
          </a>
          .
        </p>
      </footer>
    </div>
  );
}

export default App;
