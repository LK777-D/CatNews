type SizeT = {
  size: string;
};
const Logo = ({ size }: SizeT) => {
  return (
    <span
      className={` bg-blue-800 p-4 ${size} border border-white text-white styledfont`}
    >
      CAT
    </span>
  );
};

export default Logo;
