import { useEffect, useState } from "react";
import { resetDailyRewards, updateDailyRewards } from "../services/apiUsers";
import { useUserContext } from "../context/UserContext";

function useDailyRewards() {
  const [currentDay, setCurrentDay] = useState("");
  const [totalEarned, setTotalEarned] = useState(0);
  const { id } = useUserContext();

  useEffect(() => {
    const getCurrentDay = async () => {
      const currDay = await resetDailyRewards(id);

      setCurrentDay(currDay.currentDay);
      setTotalEarned(currDay.totalRewardsEarned);
    };
    getCurrentDay();
  }, [id]);

  async function claimDailyReward() {
    if (!id) return;
    const currDay = await updateDailyRewards(id);

    if (currDay.currentDay == currentDay) return;

    setCurrentDay(currDay.currentDay);
    setTotalEarned(currDay.totalRewardsEarned);
  }

  return { currentDay, totalEarned, claimDailyReward };
}

export { useDailyRewards };
