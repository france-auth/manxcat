import React from "react"
import { useState } from "react"
import ButtoN from "../components/ui/Button"

interface Prices {
  gold: string
  amount: string
}
const prices: Prices[] = [
  {
    gold: "1000 GOLD",
    amount: "= 10USDT"
  },
  {
    gold: "1000 GOLD",
    amount: "= 10USDT"
  },
  {
    gold: "1000 GOLD",
    amount: "= 10USDT"
  },
  {
    gold: "1000 GOLD",
    amount: "= 10USDT"
  },
  {
    gold: "1000 GOLD",
    amount: "= 10USDT"
  },
  {
    gold: "1000 GOLD",
    amount: "= 10USDT"
  },
  {
    gold: "1000 GOLD",
    amount: "= 10USDT"
  },
  {
    gold: "1000 GOLD",
    amount: "= 10USDT"
  },
  {
    gold: "1000 GOLD",
    amount: "= 10USDT"
  },
]

const BuyCoin = () => {
  const [isActive, setIsActive] = useState<string>("buy");
  const [isClicked, setIsClicked] = useState<number | null>(null);
  const handleClick = (id: number) => setIsClicked(id);
  const toggle = () => {
    if (isActive === "buy") {
      setIsActive(() => "withdraw")
    } else {
      setIsActive(() => "buy")
    }
  }

  return (
    <main className="apply_page-style">
      <div className="flex flex-col items-center mt-5">
        <div className="px-5">
          <h1 className="text-[27px] font-extrabold text-center">
            {isActive === "withdraw" ? "WITHDRAW COIN" : "BUY GOLD COIN"}
          </h1>
          <p className="text-sm text-center">
            {isActive === "withdraw" 
              ? "Exchange your MANX token for Gold Coins" 
              : "Purchase Gold Coins with USDT"}
          </p>
        </div>
        <div className="flex flex-col px-5 mt-10 w-full">
          <div className="flex justify-between wallet-cards w-full p-4">
            <img src="/wallets/wallet-cat.png" alt="" />
            <div className="flex flex-col items-center justify-center">
              <p className="font-extrabold text-2xl">590 MANX</p>
              <p className="">0.59 USDT</p>
              <p className="text-[13px] font-medium">1 MANX = 0.001 USDT</p>
            </div>
          </div>
        </div>
        <div className="w-full px-2 py-3 bg-[#EFD0CA] mt-8 flex justify-center gap-2 mb-4">
          <p className={`px-7 py-1 font-extrabold rounded-lg
            ${isActive === "buy" ? "bg-[#EB8A90] px-9" : ""} `}
            onClick={toggle}>
              BUY COIN
            </p>
          <p className={`px-6 py-1 font-extrabold rounded-lg 
            ${isActive === "withdraw" ? "bg-[#EB8A90]" : ""}`}
            onClick={toggle}>
              WITHDRAW
            </p>
        </div>
        {isActive === "withdraw" ? (<>
          <div className="flex px-5 py-3 w-full bg-[#EB8A9054]">
            <div className="flex flex-col w-full gap-5">
              <p className="font-medium text-xs">
                Please enter the withdrawal amount
              </p>
              <div className="flex flex-col gap-2 w-full cards py-5 px-4">
                <div className="flex justify-between">
                  <p className="font-bold text-sm">
                    Withdrawal Amount (20 - 500,000)
                  </p>
                  <p className="font-bold text-sm">MAX</p>
                </div>
                {/* <label htmlFor="task-title" className="text-xs xr:text-sm font-bold">
                  
                </label> */}
                <input
                  type="text"
                  placeholder="20"
                  id="withdraw-amount"
                  name="withdraw-amount"
                  required
                  className="w-full px-3 py-2 rounded-md border outline-none focus:outline-none focus:ring-1 focus:ring-[#000807] focus:ring-opacity-100 text-xs xr:text-sm bg-[#FFFFFF4D] placeholder:text-[#000807] placeholder:xr:text-[15px] placeholder:font-extrabold"
                />
              </div>
              <div className="withdraw-bg p-5">
                <div className="flex justify-between text-sm mb-3">
                  <p className="font-semibold">Fee</p>
                  <div className="flex">
                    <img 
                      src="/coin.png" 
                      alt="" 
                      className="w-5 h-auto" 
                    />
                    <p>13023</p>
                  </div>
                </div>
                <div className="flex justify-between text-sm">
                  <p className="font-semibold">Amount Recieved</p>
                  <p>100 MANX</p>
                </div>
              </div>
            </div>
          </div>
          <ButtoN name={isActive === "withdraw" 
            ? "WITHDRAW" 
            : "PURCHASE"} 
            className="xs:mt-12 xr:mt-20" 
          />
          </>) : (<>
            <div className="grid grid-cols-3 gap-2 px-5 w-full">
              {prices.map(({gold, amount}, id) => (
                <div className={`flex flex-col buy-cards py-3 px-[7px] text-center my-1 gap-2 
                  ${isClicked === id 
                    ? "bg-[#EB8A90]" 
                    : "bg-[#EFD0CA]"}`} key={id}
                  onClick={() => handleClick(id)}>
                  <p className="font-bold ">{gold}</p>
                  <p className="text-xs font-medium">{amount}</p>
                </div>
              ))}
            </div>
          <ButtoN name={isActive === "withdraw" ? "WITHDRAW" : "PURCHASE"} 
            className="xs:mt-12 xr:mt-20" 
          />
        </>)}
      </div>
    </main>
  )
}

export default BuyCoin