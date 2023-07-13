import Navbar from '../../components/Navbar/Navbar';
import SignInForm from '../../components/SignInForm/SignInForm';
import PrimeryLayout from '../../components/layouts/PrimaryLayout';
import { NextPageWithLayout } from '../../page';

const singInFormLayout: NextPageWithLayout = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-bgColor-SignInForm">
      <Navbar />
      <div className="flex flex-grow justify-center">
        <SignInForm />
      </div>
    </div>
  );
};

export default singInFormLayout;

singInFormLayout.getLayout = (page) => {
  return <PrimeryLayout>{page}</PrimeryLayout>;
};
