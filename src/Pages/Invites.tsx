import React from "react"
import { friends } from "../data";
import InviteButton from "../components/ui/InviteButton";

interface InviteFriendsProps {
  bigcoin: string
  smallcoin: string
  heading: string
  desc: string
}
const invitefriends: InviteFriendsProps[] = [
  {
    bigcoin: "/friends/bigcoin-friends.svg",
    heading: "invite friends",
    smallcoin: "/friends/smallcoin-friends.svg",
    desc: "2,500 for you and your friend"
  },
  {
    bigcoin: "/friends/bigcoin-friends.svg",
    heading: "invite friends with telegram premium",
    smallcoin: "/friends/smallcoin-friends.svg",
    desc: "50,000 for you and your friend"
  },
]

const Invites = () => {
  const invites: number = 10;
  return (
    <main className="apply_page-style">
      <div  className="flex flex-col items-center px-5 space-y-3">
        <div className="mt-5">
          <h1 className="text-center font-extrabold text-4xl mb-3 text-[#fefeff]">
            10 FRIENDS
          </h1>
          <p className="text-center text-sm font-bold">
            Invite a friend and get bonuses
          </p>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-3">
          {invitefriends.map(({bigcoin, smallcoin, heading, desc}, id) => (
            <div key={id} className=" w-full flex px-2 xx:px-4 py-2 xx:py-3 bg-[#DAAEAB] gap-2 rounded-md">
              <img src={bigcoin} alt="big coin" />
              <div className="flex flex-col gap-1">
                <h1 className="font-bold text-[10px] uppercase">{heading}</h1>
                <div className="flex gap-1 w-full">
                  <img src={smallcoin} alt="small coin" />
                  <p className="font-bold text-[10px]">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={`items-center p-2 w-full 
          ${invites <= 0 
            ? "hidden" 
            : "flex flex-col"}`
          }>
          <div className={`mt-4 w-screen px-2 flex flex-col`}>
            {friends.map(({pfp, name, balance}, id) => (
              <div key={id} className="flex justify-between items-center bg-[#EFD0CA50] py-1 px-3 my-1 transition duration-1000">
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
                    src="/friends/coin-friends.svg" 
                    alt="coin" 
                    className="w-6 h-auto"
                  />
                  <p className="text-sm font-extrabold">
                    {balance}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full flex justify-between items-center gap-4">
          <InviteButton name="INVITE FRIENDS" className="" />
          <div className="bg-[#F15B061A] py-4 px-5 rounded-full border border-[#EB8A90]">
            <img src="/friends/invite-icon.svg" alt="" />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Invites