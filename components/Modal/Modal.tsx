export interface IModal {
  currentId: string;
  modalType: string;
  onAllowClick: (allow: boolean) => void;
  onCloseClick: (close: boolean) => void;
}

const Modal: React.FC<IModal> = ({
  currentId,
  modalType,
  onAllowClick,
  onCloseClick,
}) => {
  const content = (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="w-96">
        <div className="h-28 bg-white p-2 rounded text-black">
          <label htmlFor="">
            Continue to {modalType} {currentId}
          </label>
          <div className="flex justify-end mx-3 mt-8">
            <button
              className="text-Color-Modal-Button mx-6"
              onClick={() => {
                onCloseClick(false);
              }}
            >
              DENY
            </button>
            <button
              className="text-Color-Modal-Button"
              onClick={() => {
                onAllowClick(true);
              }}
            >
              ALLOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
  return content;
};

export default Modal;
