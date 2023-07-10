import Link from "next/link";
import { useState } from "react";
import ListSignIn from "../ListSignIn/ListSignIn";
import Modal from "../Modal/Modal";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [allowActionModal, setallowActionModal] = useState(false);

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
      {showModal && (
        <Modal
          modalType="Edit or Delete"
          onAllowClick={(validate: boolean) => {
            setallowActionModal(validate);
            console.log(validate);
            // EJECUTAR SI ES EDITAR O ELIMINAR
          }}
          onCloseClick={(close: boolean) => {
            setShowModal(close);
          }}
          currentId={"Prueba"}
        />
      )}
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
      <button className="bg-red-600" onClick={() => setShowModal(true)}>
        Ver modal
      </button>
    </>
  );
}
