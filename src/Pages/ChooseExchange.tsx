import ButtoN from "../components/ui/Button";

interface Exchange {
  exchange: string;
}

const exchanges: Exchange[] = [
  {
    exchange: "BINANCE"
  },
  {
    exchange: "BITGET"
  },
  {
    exchange: "BYBIT"
  },
  {
    exchange: "TONKEEPER"
  },
  {
    exchange: "OKY"
  },
];

const ChooseExchange = () => {
  const invites: number = 2;
  return (
    <main className="mt-3">
      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-col items-center mb-4">
          <h1 className="text-3xl font-extrabold text-center">
            CHOOSE EXCHANGE
          </h1>
          <p className="text-sm font-medium text-center">
            Choose an exchange to automate your withdraw process
          </p>
        </div>
        <div className="cards flex flex-col px-7 py-3 items-center gap-4">
          <h1 className="text-[22px] font-extrabold">
            {invites} INVITED
          </h1>
          <ButtoN name="CLAIM REWARDS" />
        </div>
        <div className="flex flex-col items-center gap-4 mt-4">
          <h1 className="text-[22px] font-extrabold">
            AVAILABLE EXCHANGES
          </h1>
          <div className="flex flex-col items-center gap-2">
            {exchanges.map(({exchange}, id) => (
              <div key={id} className="cards flex justify-between px-3 py-5 gap-4">
                <div className="flex gap-2 items-center">
                  <div className="flex p-2 bg-[#EFD0CA] rounded-full justify-center">
                  <img 
                    src="/wallet.png" 
                    alt="wallet" 
                    className="xs:w-6 xs:h-6 xr:w-8 xr:h-7"
                  />
                  </div>
                  <p className="font-bold">
                    {exchange}
                  </p>
                </div>
                <ButtoN name="CONNECT" className="w-min" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

export default ChooseExchange