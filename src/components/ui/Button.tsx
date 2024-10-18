interface ButtonProps {
  name: string
  className?: string
  link?: string
  onClick?: () => void
}
const Button: React.FC<ButtonProps> = ({name, onClick, className, link}) => {
  return (
    <div className={`flex items-center justify-center border-[3px] border-solid border-[#000807] cursor-pointer rounded-full ${className} bg-[#EFD0CA] w-60`}>
      <a href={link}>
        <button type="button" onClick={onClick} className="text-sm font-bold w-full px-10 py-2">
          {name} 
        </button>
      </a>
    </div>
  )
}

export default Button