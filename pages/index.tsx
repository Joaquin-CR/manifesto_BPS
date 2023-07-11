import HomeScreen from '../components/HomeScreen/Home';
import Navbar from '../components/Navbar/Navbar';
import PrimeryLayout from '../components/layouts/PrimaryLayout';
import { NextPageWithLayout } from '../page';

const Home: NextPageWithLayout = () => {
  // const { locale } = useRouter();

  return (
    <>
      <main className="flex flex-col items-center justify-between p-9 text-white bg-bgColor-Home">
        <HomeScreen />
      </main>
    </>
  );
};

export default Home;

Home.getLayout = (page) => {
  return (
    <PrimeryLayout>
      <Navbar />
      {page}
    </PrimeryLayout>
  );
};
