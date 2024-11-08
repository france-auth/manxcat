import React from "react"
import ButtoN from "../components/ui/Button";

interface Swapping {
  method: string;
  coin: string;
  balance: string;
  coinAmount: number;
  worth: string;
}
const swapping: Swapping[] = [
  {
    method: "Pay",
    coin: "MANX",
    balance: "Balance: 12.120 MANX",
    coinAmount: 1250.00,
    worth: "$20.100"
  },
  {
    method: "Receive",
    coin: "USDT",
    balance: "Balance: 12.120 TON",
    coinAmount: 1250.00,
    worth: "$20.100"
  },
]

const WithdrawCoin = () => {
  return (
    <main className="apply_page-style">
      <div className="flex flex-col items-center mt-5">
        <div className="px-5">
          <h1 className="text-[27px] font-extrabold text-center">
            SWAP COIN
          </h1>
          <p className="text-sm text-center">
            Swap your MANX with TON and USDT
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
        <div className=" w-full px-5 py-4 mt-12 swap-bg">
          {swapping.map(({ method, coin, balance, coinAmount, worth }, id) => (
            <div className="px-4 py-3 my-3 bg-[#EFD0CA] rounded-lg" key={id}>
              <div className="w-full space-y-2">
                <div className="flex justify-between font-semibold">
                  <div className="flex gap-2 items-center">
                    <img src="/wallets/payIcon.png" alt="" className="xs:w-5 xs:h-4 z-[999px] bg-opacity-100" />
                    <p>{method}</p>
                  </div>
                  <p className="text-sm  font-semibold">{id === 1 ? "" : "Max"}</p>
                </div>
                <div className="flex justify-between">
                  <div className="flex gap-2 items-center text-sm">
                    <img src="/wallets/payIcon.png" alt="" className="xs:w-5 xs:h-4 z-[999px] bg-opacity-100" />
                    <p className="text-sm  font-semibold">{coin}</p>
                  </div>
                  <p className="text-[22px] font-extrabold">{coinAmount}</p>
                </div>
                <div className="flex justify-between">
                  <div className="flex gap-2 items-center font-medium text-sm">
                    <img src="/wallets/payIcon.png" alt="" className="xs:w-5 xs:h-4 z-[999px] bg-opacity-100" />
                    <p className="text-sm font-semibold">{balance}</p>
                  </div>
                  <p className="text-sm">{worth}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <ButtoN 
          name="SWAP" 
          className="xs:mt-12 xr:mt-20" 
        />
      </div>
    </main>
  )
}

export default WithdrawCoin