export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<'div'> {
  children: React.ReactNode;
}

const PrimeryLayout: React.FC<IPrimaryLayout> = ({ children, ...divProps }) => {
  return (
    <>
      <div {...divProps} className={`flex flex-col`}>
        <main>{children}</main>
      </div>
    </>
  );
};

export default PrimeryLayout;
