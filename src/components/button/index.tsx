interface IProps {
  title: string;
  type?: "submit" | "button"; // string literal ve union type
  designs?: string;
  disabled?: boolean;
}

const Button = ({ title, type, designs, disabled }: IProps) => {
  return (
    <button
      disabled={disabled}
      className={`custom-btn bg-primary-blue rounded-full hover:bg-blue-800 transition ${designs}`}
      type={type}
    >
      {title}
    </button>
  );
};

export default Button;
