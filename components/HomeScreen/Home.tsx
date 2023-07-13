import Link from 'next/link';
import { useEffect, useState } from 'react';
import dataList from '../../public/dataDB.json';
import { User } from '../../types';
import ListSignIn from '../ListSignIn/ListSignIn';
import Modal from '../Modal/Modal';

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [typeModal, setTypeModal] = useState('');
  const [idSelect, setIdSelect] = useState(-1);
  const [nameSelected, setNameSelected] = useState('');
  const [usersList, setUsersList] = useState<User[]>([]);

  // CONECTION DATABASE
  // THIS PART CAUSE THE ERROR
  // const dbPath = '../database.sqlite';
  // const db = new SQLiteDatabase(dbPath);
  // db.createTable();
  // const user = getAllUsers(dbPath);
  // console.log(user);

  useEffect(() => {
    setUsersList(dataList);
    const storeData = localStorage.getItem('JSONList');
    if (storeData) {
      setUsersList(JSON.parse(storeData));
    } else {
      localStorage.setItem('JSONList', JSON.stringify(dataList));
    }
  }, []);

  const updateList = (updateItem: any) => {
    setUsersList(updateItem);
    localStorage.setItem('JSONList', JSON.stringify(updateItem));
  };

  const content = usersList.length == 0;

  const remove = (id: number) => {
    let dataList = usersList;
    for (let i = 0; i < dataList.length; i++) {
      if (dataList[i].id === id) {
        dataList.splice(i, 1);
        i--;
      }
    }
    setUsersList(usersList);
  };

  const edit = (id: number) => {
    localStorage.setItem('Edit Id', id.toString());
    window.location.href = 'signInForm/signIn/';
  };

  return (
    <>
      <div className="w-full mx-auto">
        <picture>
          <source
            media="(min-width: 640px)"
            srcSet="/Images/BgImgHome@2x.webp"
          />
          <source
            media="(min-width: 1008px)"
            srcSet="/Images/BgImgHome@3x.webp"
          />
          <img
            src="/Images/BgImgHome.webp"
            alt="Manifesto"
            className="w-full"
          />
        </picture>
      </div>
      {showModal && (
        <Modal
          modalType={typeModal}
          onAllowClick={() => {
            if (typeModal == 'Edit') {
              // REDIRECT TO SIGINfORM  TO EDIT THE REGISTER
              edit(idSelect);
            } else if (typeModal == 'Delete') {
              // CALLING DELETE SERVICES
              remove(idSelect);
              updateList(usersList);
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
        <div className="my-8 md:my-24 text-center text-xl font-medium">
          <div>No one is currently signed in. Be the fist to sign in.</div>
        </div>
      ) : (
        <div className="mb-8 w-full max-w-screen-lg mx-auto md:mb-12 text-center text-xl font-medium">
          {/* <div className="mb-7"> */}
          <p className="font-MonserraM font-medium text-xl mb-7">
            Sign in at the registry.
          </p>
          {/* </div> */}
          {usersList.map((user: any) => (
            <>
              <div className="flex justify-center">
                <div className="w-full md:w-500px">
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
                </div>
              </div>
            </>
          ))}
        </div>
      )}
      <div className={usersList && 'mb-20'}>
        <Link href={'signInForm/signIn/'}>
          <button className="w-full md:w-44 h-14 py-3 px-8 bg-Color-M&BTN text-black font-Inter">
            Sign In
          </button>
        </Link>
      </div>
    </>
  );
}
