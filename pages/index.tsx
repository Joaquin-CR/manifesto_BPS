import { useRouter } from "next/router";
import HomeScreen from "../components/HomeScreen/Home";
import PrimeryLayout from "../components/layouts/PrimaryLayout";
import { NextPageWithLayout } from "../page";

const Home: NextPageWithLayout = () => {
  const { locale } = useRouter();

  return (
    <>
      <main className="flex flex-col items-center justify-between p-9 text-white bg-bgColor-Home h-screen">
        <HomeScreen />
      </main>
      {/* <div className="bg-bgColor-SignInForm">
        <SignInForm />
      </div> */}
    </>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimeryLayout>{page}</PrimeryLayout>;
};

// Home.getInitialProps = async (ctx: NextPageContext) => {
//   const res = await fetch("https://api.github.com/repos/vercel/next.js");
//   const json = await res.json();
//   return { stars: json.stargazers_count };
// };
