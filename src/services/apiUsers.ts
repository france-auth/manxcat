import axios from "axios";

const BASE_URL = "https://b73f-18-130-247-246.ngrok-free.app/api/v1/users";

interface IUser {
  name: string;
  telegramId: number;
  coinsEarned: number;
  referrals: Array<string>;
  referralCode: string;
  referredBy: string;
}

function storage() {
  const token = localStorage.getItem("manxcattoken");

  return token;
}

async function getAllUsers() {
  try {
    const token = storage();
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
  const token = storage();
  const resp = await axios.get(`${BASE_URL}/${telegramId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(resp);
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
  const token = storage();
  const resp = await axios.post(
    `${BASE_URL}/farm/${telegramId}`,
    {},
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return resp.data;
}

async function startFarm(telegramId: number): Promise<FarmType> {
  const token = storage();
  const resp = await axios.post(
    `${BASE_URL}/farm/start/${telegramId}`,
    {},
    { headers: { Authorization: `Bearer ${token}` } }
  );

  return resp.data;
}

async function claimFarmRewards(telegramId: number): Promise<FarmType> {
  const token = storage();
  const resp = await axios.post(
    `${BASE_URL}/farm/claim/${telegramId}`,
    {},
    { headers: { Authorization: `Bearer ${token}` } }
  );

  return resp.data;
}

export { getAllUsers, createGetUser, farm, claimFarmRewards, startFarm };
