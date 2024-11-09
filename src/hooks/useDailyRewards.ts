import { useEffect, useState } from "react";
import { resetDailyRewards, updateDailyRewards } from "../services/apiUsers";
import { useUserContext } from "../context/UserContext";

function useDailyRewards() {
  const [currentDay, setCurrentDay] = useState("");
  const [totalEarned, setTotalEarned] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const { id, setCoinsEarned } = useUserContext();

  useEffect(() => {
    const getCurrentDay = async () => {
      try {
        const currDay = await resetDailyRewards(id);

        setCurrentDay(currDay.currentDay);
        setTotalEarned(currDay.totalRewardsEarned);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getCurrentDay();
  }, [id]);

  async function claimDailyReward() {
    if (!id) return;
    const currDay = await updateDailyRewards(id);

    if (currDay.currentDay == currentDay) return;

    setCurrentDay(currDay.currentDay);
    setTotalEarned(currDay.totalRewardsEarned);
    setCoinsEarned((prev)=> prev + currDay.totalRewardsEarned)
  }

  return { isLoading, currentDay, totalEarned, claimDailyReward };
}

export { useDailyRewards };
