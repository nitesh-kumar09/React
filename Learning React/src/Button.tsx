type functionType = {
  label: string;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
const Button = ({ label, handleClick }: functionType) => {
  return (
    <>
      <button onClick={handleClick}>{label}</button>
    </>
  );
};

export default Button;
