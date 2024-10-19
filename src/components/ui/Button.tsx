import { Link, To } from "react-router-dom";

interface ButtonProps {
  name: string;
  className?: string;
  link?: string | To;
  onClick?: () => void;
}

const ButtoN: React.FC<ButtonProps> = ({ name, onClick, className, link }) => {
  return (
    <div
      className={`flex items-center justify-center border-[3px] border-solid border-[#000807] cursor-pointer rounded-full ${className} bg-[#EFD0CA] w-60`}
    >
      {link ? (
        <Link to={link}>
          <button
            type="button"
            onClick={onClick}
            className="text-sm font-bold w-full px-10 py-2"
          >
            {name}
          </button>
        </Link>
      ) : (
        <button
          type="button"
          onClick={onClick}
          className="text-sm font-bold w-full px-10 py-2"
        >
          {name}
        </button>
      )}
    </div>
  );
};

export default ButtoN;
