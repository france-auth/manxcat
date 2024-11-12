import { useEffect, useState } from "react";
import { useUserContext } from "../context/UserContext";
import {
  claimFarmRewards,
  farm as farmApi,
  startFarm,
} from "../services/apiUsers";
import { useToast } from "@chakra-ui/react";
function useFarm() {
  const { id, setCoinsEarned, ownedCats } = useUserContext();
  const [farming, setFarming] = useState<boolean>(false);
  const [ended, setEnded] = useState<boolean>(false);
  const [earned, setEarned] = useState<number>();
  const [maxEarning, setMaxEarnings] = useState<number>();
  const [totalHrs, setTotalHrs] = useState<number>();
  const [isLoading, setIsLoading] = useState(true);

  const toast = useToast();

  const startFarming = async () => {
    if (ownedCats.length == 0)
      return toast({
        title: "Buy a cat to start farming for manx token",
        position: "top",
        colorScheme: "green",
      });
    try {
      const data = await startFarm(id);
      setFarming(data.started);
    } catch (error) {
      console.log(error);
    }
  };

  const farm = async () => {
    try {
      const farmData = await farmApi(id);
      console.log(farmData);
      setFarming(farmData.started);
      setEarned(farmData.earned);
      setEnded(farmData.ended);
      setMaxEarnings(farmData.maxEarning);
      setTotalHrs(farmData.totalHrs);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const claimRewards = async () => {
    try {
      const data = await claimFarmRewards(id);
      setFarming(data.started);
      setCoinsEarned((curr) => curr + Number(earned));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(async () => {
      await farm();
      if (!farming) {
        clearInterval(intervalId);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [id, farming]);

  return {
    isLoading,
    startFarming,
    claimRewards,
    farming,
    earned,
    maxEarning,
    totalHrs,
    ended,
  };
}

export { useFarm };
