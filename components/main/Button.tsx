interface ButtonProps {
  text: string;
  OnClick?: () => void;
}

const Button = ({ text, OnClick }: ButtonProps) => {
  return (
    <button
      className='bg-gradient-to-r from-cyan-700  to-teal-500 px-4 py-2 rounded-full hover:scale-110'
      onClick={OnClick}>
      <span className='text-white text-sm font-semibold'>{text}</span>
    </button>
  );
};

export { Button };
