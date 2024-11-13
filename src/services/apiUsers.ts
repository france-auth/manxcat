import axios from "axios";
import { storage } from "../utils/helpers";

const BASE_URL = "http://localhost:3000/api/v1/users";

export type OwnedCatType = {
  catId: string;
  outputQuantityTime: number;
  numberOwned: number;
};

export type ReferralType = {
  name: string;
  earned: number;
  referralCode: string;
};

export interface IUser {
  name: string;
  telegramId: number;
  manxEarned: number;
  goldEarned: number;
  referrals: ReferralType[];
  referralCode: string;
  referredBy: string;
  ownedCats: OwnedCatType[];
}

const token = storage();

async function getAllUsers() {
  try {
    const resp = await axios.get(BASE_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(resp);
  } catch (error) {
    console.log(error);
  }
}

async function createGetUser({
  name,
  telegramId,
  referredBy,
}: {
  name: string;
  telegramId: number;
  referredBy: string;
}): Promise<IUser | undefined> {
  try {
    const resp = await axios.post(BASE_URL, {
      name,
      telegramId,
      referredBy,
    });
    console.log(resp);
    localStorage.setItem("manxcattoken", resp.data.token);
    if (resp.status == 202) {
      const data = await getUser(telegramId);
      console.log({ data });
      return data;
    }

    return resp.data.data;
  } catch (error) {
    console.log(error);
  }
}

async function getUser(telegramId: number): Promise<IUser> {
  const resp = await axios.get(`${BASE_URL}/${telegramId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  return resp.data.data;
}

type FarmType = {
  earned: number;
  ended: boolean;
  started: boolean;
  maxEarning: number;
  totalHrs: number;
};

async function farm(telegramId: number): Promise<FarmType> {
  const resp = await axios.post(
    `${BASE_URL}/farm/${telegramId}`,
    {},
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return resp.data;
}

async function startFarm(telegramId: number): Promise<FarmType> {
  const resp = await axios.post(
    `${BASE_URL}/farm/start/${telegramId}`,
    {},
    { headers: { Authorization: `Bearer ${token}` } }
  );

  return resp.data;
}

async function claimFarmRewards(telegramId: number): Promise<FarmType> {
  const resp = await axios.post(
    `${BASE_URL}/farm/claim/${telegramId}`,
    {},
    { headers: { Authorization: `Bearer ${token}` } }
  );

  return resp.data;
}

type DailyRewards = {
  currentDay: string;
  totalRewardsEarned: number;
};

async function updateDailyRewards(telegramId: number): Promise<DailyRewards> {
  const resp = await axios.post(
    `${BASE_URL}/daily/${telegramId}`,
    {},
    { headers: { Authorization: `Bearer ${token}` } }
  );

  return resp.data;
}

async function resetDailyRewards(telegramId: number): Promise<DailyRewards> {
  const resp = await axios.post(
    `${BASE_URL}/daily/reset/${telegramId}`,
    {},
    { headers: { Authorization: `Bearer ${token}` } }
  );

  return resp.data;
}

export {
  getAllUsers,
  createGetUser,
  farm,
  claimFarmRewards,
  startFarm,
  updateDailyRewards,
  resetDailyRewards,
};
