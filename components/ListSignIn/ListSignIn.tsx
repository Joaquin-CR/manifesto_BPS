import { User } from '../../types';

export interface IListSinIn {
  users: User;
  onEditDeleteClick: (
    open: boolean,
    id: number,
    name: string,
    type: string
  ) => void;
}
const ListSignIn: React.FC<IListSinIn> = ({ onEditDeleteClick, users }) => {
  // console.log('Datos', users);
  // const data: User = users.users;

  return (
    <>
      <div className="flex justify-between mb-3" id={users.id}>
        <div className="flex items-center">
          <p className="font-MonserratR text-xl">{users.name}</p>
        </div>
        <div className="flex items-center">
          <button
            className="mx-4"
            onClick={() => {
              onEditDeleteClick(true, users.id, users.name, 'Edit');
            }}
            // {editBTN(user.id, user.name)}
          >
            <picture>
              <source
                media="(min-width:1008px)"
                srcSet="/Images/Edit@3x.webp"
              />
              <source media="(min-width:640px)" srcSet="/Images/Edit@2x.webp" />
              <img src="/Images/Edit.webp" alt="Manifesto" className="" />
            </picture>
          </button>
          <button
            className=""
            onClick={() => {
              onEditDeleteClick(true, users.id, users.name, 'Delete');
            }}
          >
            <picture>
              <source
                media="(min-width:1008px)"
                srcSet="/Images/Delete@3x.webp"
              />
              <source
                media="(min-width:640px)"
                srcSet="/Images/Delete@2x.webp"
              />
              <img src="/Images/Delete.webp" alt="Manifesto" className="" />
            </picture>
          </button>
        </div>
      </div>
      <hr className="bg-Color-hr mb-3" />
    </>
  );
};

export default ListSignIn;
