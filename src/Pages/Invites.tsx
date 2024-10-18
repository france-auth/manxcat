import Button from "../components/ui/Button";

const Invites = () => {
  const invites: number = 1;
  return (
    <main className="apply_page-style">
      <div  className="flex flex-col items-center px-5">
        <img 
          src="/invite-cats.png" 
          alt="invite cats" 
          className="ralative"
        />
        <div className="absolute xs:top-[230px] xx:top-[280px] xr:top-[310px]">
          <h1 className="text-center font-extrabold text-[32px] mb-1">
            INVITE TO EARN
          </h1>
          <p className="text-center text-sm">
            $MANX & Tickets with Mystery Boxes
          </p>
        </div>
        <div className="cards py-3 px-6 flex flex-col items-center mt-4">
          <h1 className="font-extrabold text-2xl mb-5">{invites} INVITED</h1>
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
          alt="" 
        />
        <div>
          
        </div>
      </div>
    </main>
  )
}

export default Invites