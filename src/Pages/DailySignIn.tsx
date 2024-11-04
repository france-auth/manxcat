import ButtoN from "../components/ui/Button";
import { useDailyRewards } from "../hooks/useDailyRewards";

interface Daily {
  day: string;
  tag: string;
  amount: number;
}

const daily: Daily[] = [
  {
    day: "DAY 01",
    tag: "day1",
    amount: 100,
  },
  {
    day: "DAY 02",
    tag: "day2",
    amount: 120,
  },
  {
    day: "DAY 03",
    tag: "day3",
    amount: 140,
  },
  {
    day: "DAY 04",
    tag: "day4",
    amount: 160,
  },
  {
    day: "DAY 05",
    tag: "day5",
    amount: 180,
  },
  {
    day: "DAY 06",
    tag: "day6",
    amount: 200,
  },
  {
    day: "DAY 07",
    tag: "day7",
    amount: 220,
  },
];

const DailySignIn = () => {
  const { claimDailyReward, totalEarned, currentDay } = useDailyRewards();
  // Handle claiming a new day
  const handleClaimed = async () => {
    await claimDailyReward();
  };
  return (
    <main className="apply_page-style">
      <div className="flex flex-col items-center mt-8 gap-8">
        <div className="text-center space-y-2 px-5">
          <h1 className="text-[33px] leading-8 font-extrabold">
            VISITED US TODAY AGAIN
          </h1>
          <p className="font-semibold">Here's your Reward</p>
        </div>
        <div className=" flex justify-between w-full">
          <div className="flex flex-col items-center px-5">
            <img src="daily-signin/reward-ticket.png" alt="" className="ml-4" />
            <p className="font-extrabold text-2xl">01</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="daily-signin/reward-coins.png"
              alt="reward coins"
              className="w-[120px]"
            />
            <p className="font-extrabold text-2xl">{totalEarned}</p>
          </div>
        </div>
        <div className="flex flex-col items-center w-full">
          <div className="flex flex-col w-full gap-6">
            <div className="w-full bg-[#EFD0CA80] p-3">
              <h1 className="uppercase text-[13px] font-bold text-center">
                check in daily to get more rewards
              </h1>
            </div>
            <div className="w-full px-5 grid grid-cols-2 gap-5">
              {daily.map(({ day, amount, tag }, id) => (
                <div
                  key={id}
                  className={`daily-cards_container p-2 ${
                    id === 6 ? "col-span-2" : ""
                  } ${
                    // claimedDays.includes(id) ? "bg-[#EB8A90]" : "bg-[#EFD0CA80]"
                    tag < currentDay ? "bg-[#EB8A90]" : "bg-[#EFD0CA80]"
                  }`}
                  onClick={() => handleClaimed()}
                >
                  <div className="daily-cards flex flex-col items-center py-[2px] px-1">
                    <p className="text-xs font-bold">{day}</p>
                    {tag < currentDay ? (
                      <>
                        <img
                          src="/daily-signin/claimed.png"
                          alt="reward coins"
                          className="w-16 h-auto"
                        />
                      </>
                    ) : (
                      <>
                        <img
                          src="/daily-signin/reward-coins.png"
                          alt="reward coins"
                          className="w-16 h-auto"
                        />
                        <p className="text-xl font-extrabold">{amount}</p>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <ButtoN name="CONTINUE" className="xs:mt-12 xx:mt-20" link={"/"} />
        </div>
      </div>
    </main>
  );
};

export default DailySignIn;
