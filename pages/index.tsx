import HomeScreen from '../components/HomeScreen/Home';
import Navbar from '../components/Navbar/Navbar';
import PrimeryLayout from '../components/layouts/PrimaryLayout';
import { NextPageWithLayout } from '../page';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <div className="flex flex-col items-center w-full h-full min-h-screen bg-bgColor-Home sm:scroll-smooth">
        <main className="flex flex-col items-center justify-between p-9 text-white flex-grow">
          <HomeScreen />
        </main>
      </div>
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
