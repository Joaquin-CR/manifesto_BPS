export interface IBaseTemplate {
  sampleTextProp: string;
}

const BaseTample: React.FC<IBaseTemplate> = ({ sampleTextProp }) => {
  return <div>{sampleTextProp}</div>;
};

export default BaseTample;
