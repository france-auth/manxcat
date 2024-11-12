import React from "react"
import { Link, To } from "react-router-dom";

interface InviteButtonProps {
  name: string;
  className?: string;
  link?: string | To;
  onClick?: () => void;
}

const InviteButton: React.FC<InviteButtonProps> = ({ name, onClick, className, link }) => {
  return (
    <div
      className={`flex items-center justify-center border-solid border-[#000807] cursor-pointer rounded-full ${className} w-full py-1 border-[#fefeff] border text-white bg-[#EB8A90]`}
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

export default InviteButton;
