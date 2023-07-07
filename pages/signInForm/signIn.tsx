import Navbar from "../../components/Navbar/Navbar";
import SignInForm from "../../components/SignInForm/SignInForm";
import PrimeryLayout from "../../components/layouts/PrimaryLayout";
import { NextPageWithLayout } from "../../page";

const singInFormLayout: NextPageWithLayout = () => {
  return (
    <div className="bg-bgColor-SignInForm flex">
      <SignInForm />
    </div>
  );
};

export default singInFormLayout;

singInFormLayout.getLayout = (page) => {
  return (
    <PrimeryLayout>
      <Navbar />
      {page}
    </PrimeryLayout>
  );
};
