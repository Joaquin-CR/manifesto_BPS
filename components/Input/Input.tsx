export interface IInput {
  name: string;
  placeholder: string;
  value: string;
  errors: any;
  type: string;
  onValueChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<IInput> = ({
  name,
  placeholder,
  value,
  errors,
  type,
  onValueChange,
}) => {
  return (
    // mt-8 sm:mx-8 sm:mt-8 lg:mx-14 lg:mt-24 xl:mt-24 xl:mx-14 sm:h-11 lg:h-14 xl:h-14
    <>
      <input
        className={`w-4/5 mt-6 pl-2 py-2 text-black rounded-md border-solid border-2 ${
          errors
            ? 'border-Color-ErrorValidation mb-0'
            : 'mb-7 border-ColorBorder-Inputs'
        }`}
        placeholder={placeholder}
        type={type}
        id={name}
        name={name}
        value={value}
        required
        onChange={onValueChange}
      />
      {errors && (
        <span className="text-Color-ErrorValidation mx-8 text-center mb-2">
          {errors}
        </span>
      )}
    </>
  );
};

export default Input;
