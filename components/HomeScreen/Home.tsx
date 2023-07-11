import Link from 'next/link';
import { useState } from 'react';
import SQLiteDatabase from '../../lib/database';
import { getAllUsers } from '../../services/getAllUsers';
import { User } from '../../types';
import ListSignIn from '../ListSignIn/ListSignIn';
import Modal from '../Modal/Modal';

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [typeModal, setTypeModal] = useState('');
  const [idSelect, setIdSelect] = useState(-1);
  const [nameSelected, setNameSelected] = useState('');

  // CONECTION DATABASE
  const dbPath = '../database.sqlite';
  const db = new SQLiteDatabase(dbPath);
  db.createTable();
  const user = getAllUsers(dbPath);
  console.log(user);

  const users: User[] = [
    {
      id: 0,
      name: 'Joaquin',
      phoneNumber: '1234567890',
      mail: 'joaquin@gmail.com',
      emergencyName: 'Pablo',
      emergencyPhone: '0987654321',
    },
    {
      id: 1,
      name: 'Alvaro',
      phoneNumber: '1234567890',
      mail: 'Alvaro@gmail.com',
      emergencyName: 'Devora',
      emergencyPhone: '0987654321',
    },
    {
      id: 2,
      name: 'Karime',
      phoneNumber: '1234567890',
      mail: 'karime@gmail.com',
      emergencyName: 'Joaquin',
      emergencyPhone: '0987654321',
    },
  ];

  const content = users.length == 0;

  return (
    <>
      <div className="w-max">
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
          modalType={typeModal}
          onAllowClick={() => {
            if (typeModal == 'Edit') {
              console.log('Se manda a editar el regrstro', idSelect);
              // REDIRECT TO SIGINfORM  TO EDIT THE REGISTER
            } else if (typeModal == 'Delete') {
              console.log('Se manda a eliminar el regrstro', idSelect);
              // CALLING DELETE SERVICES
              setShowModal(false);
            }
          }}
          onCloseClick={(close: boolean) => {
            setShowModal(close);
          }}
          name={nameSelected}
        />
      )}
      {content ? (
        <div className="my-44 pb-3 pt-4 w-80 text-center text-xl font-medium">
          <div>No one is currently signed in. Be the fist to sign in.</div>
        </div>
      ) : (
        <div className="my-24 w-80 text-center text-xl font-medium">
          <div className="mb-7">
            <p className="font-MonserraM font-medium text-xl">
              Sign in at the registry.
            </p>
          </div>
          {users.map((user: any) => (
            <>
              <ListSignIn
                users={user}
                onEditDeleteClick={(
                  open: boolean,
                  id: number,
                  name: string,
                  type: string
                ) => {
                  setShowModal(open);
                  setIdSelect(id);
                  setTypeModal(type);
                  setNameSelected(name);
                }}
              ></ListSignIn>
            </>
          ))}
        </div>
      )}
      <div className={users && 'mb-20'}>
        <Link href={'signInForm/signIn/'}>
          <button
            className="w-44 h-14 flex-grow-0 py-3 px-8
         bg-Color-M&BTN text-black font-Inter"
          >
            Sign In
          </button>
        </Link>
      </div>
    </>
  );
}
