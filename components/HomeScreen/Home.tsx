import Link from "next/link";
import { Fragment } from "react";
import ListSignIn from "../ListSignIn/ListSignIn";

export default function Home() {
  return (
    <>
      <div className="w-screen">
        <picture>
          <source
            media="(min-width:1008px)"
            srcSet="/Images/BgImgHome@3x.webp"
          />
          <source
            media="(min-width:640px)"
            srcSet="/Images/BgImgHome@2x.webp"
          />
          <img
            src="/Images/BgImgHome.webp"
            alt="Manifesto"
            className="w-screen"
          />
        </picture>
      </div>
      <Fragment>{/* <Modal></Modal> */}</Fragment>
      <ListSignIn></ListSignIn>
      <div className="mb-20">
        <Link href={"signInForm/signIn/"}>
          <button
            className="w-44 h-14 flex-grow-0 py-3 px-8
         bg-Color-M&BTN text-black Inter"
          >
            Sign In
          </button>
        </Link>
      </div>
    </>
  );
}
