
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
        <ButtoN name={isActive === "withdraw" 
            ? "WITHDRAW" 
            : "PURCHASE"} 
            className="xs:mt-12 xr:mt-20" 
          />
      </div>
    </main>
  )
}

export default BuyCoin