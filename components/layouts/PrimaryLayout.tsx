import Navbar from "../Navbar/Navbar";

export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
}

const PrimeryLayout: React.FC<IPrimaryLayout> = ({ children, ...divProps }) => {
  return (
    <>
      <Navbar />
      <div {...divProps} className={`min-h-screen flex flex-col`}>
        <main>{children}</main>
      </div>
    </>
  );
};

export default PrimeryLayout;
