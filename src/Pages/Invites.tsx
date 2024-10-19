import { useState } from "react";
import Button from "../components/ui/Button";
import { friends } from "../data";

const Invites = () => {
  const invites: number = 1;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleList = () => setIsOpen((isOpen) => !isOpen)
  return (
    <main className="apply_page-style">
      <div  className="flex flex-col items-center px-5">
        <img 
          src="/invite-cats.png" 
          alt="invite cats" 
          className="relative"
        />
        <div className="absolute xs:top-[240px] xx:top-[285px] xr:top-[310px]">
          <h1 className="text-center font-extrabold text-[32px] mb-1">
            INVITE TO EARN
          </h1>
          <p className="text-center text-sm">
            $MANX & Tickets with Mystery Boxes
          </p>
        </div>
        <div className="cards py-3 px-6 flex flex-col items-center mt-4">
          <h1 className="font-bold text-2xl mb-5">{invites} INVITED</h1>
          <Button name="CLAIM REWARDS" />
        </div>
        <div className="flex justify-center items-center mt-4 p-4 bg-[#EFD0CA80] w-screen mb-3">
          <h1 className="font-extrabold text-xl text-center">
            YOUR CLIQUES
          </h1>
        </div>
        <img 
          src={invites <= 0 
            ? "/sad-cat.png" 
            : "/happy-cat.png"} 
          alt={invites <= 0 
            ? "sad cat" 
            : "happy cat"} 
            className="relative"
        />
        <div className={`items-center p-2 w-full 
          ${invites <= 0 
            ? "hidden" 
            : "flex flex-col"}`
          }>
          <div className="flex justify-between items-center w-screen px-4 mb-2">
            <p className="text-xs font-bold">{invites} CLIQUES</p>
            <img 
              src="/clique-arrow.png" 
              alt="arrow"
              onClick={toggleList}
              className={`${isOpen ? "-rotate-90" : "rotate-0"}`}
            />
          </div>
          <div className={`w-screen px-2 ${isOpen ? "flex flex-col transition" : "hidden"}`}>
            {friends.map(({pfp, name, balance}, id) => (
              <div key={id} className="flex justify-between items-center bg-[#EFD0CA80] py-1 px-3 my-1 transition duration-1000">
                <div className="flex items-center gap-2">
                  <img 
                    src={pfp} 
                    alt={name} 
                    className="w-8 h-auto rounded-full"
                  />
                  <p className="text-sm font-extrabold">
                    {name}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <img 
                    src="coin.png" 
                    alt="coin" 
                    className="w-5 h-auto"
                  />
                  <p className="text-sm font-extrabold">
                    {balance}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

export default Invites