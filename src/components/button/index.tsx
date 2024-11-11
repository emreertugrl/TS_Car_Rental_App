interface IProps {
  title: string;
}

const Button = ({ title }: IProps) => {
  return <div>{title}</div>;
};

export default Button;
