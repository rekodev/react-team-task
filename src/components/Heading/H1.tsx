interface IHeadingProps {
  text: string;
}

const H1 = ({ text }: IHeadingProps) => {
  return <h1>{text}</h1>;
};

export default H1;
