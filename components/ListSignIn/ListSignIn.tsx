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
  return (
    <>
      <div className="flex flex-row justify-between mb-3" id={users.id}>
        <div className="flex items-center">
          <p className="font-MonserratR text-xl">{users.name}</p>
        </div>
        <div className="flex items-center">
          <button
            className="mx-2 md:mx-4"
            onClick={() => {
              onEditDeleteClick(true, users.id, users.name, 'Edit');
            }}
          >
            <img src="/Images/Edit.webp" alt="Edit" className="" />
          </button>
          <button
            className="mx-2 md:mx-4"
            onClick={() => {
              onEditDeleteClick(true, users.id, users.name, 'Delete');
            }}
          >
            <img src="/Images/Delete.webp" alt="Delete" className="" />
          </button>
        </div>
      </div>
      <hr className="bg-Color-hr mb-3" />
    </>
  );
};

export default ListSignIn;
