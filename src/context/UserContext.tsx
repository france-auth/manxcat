import WebApp from "@twa-dev/sdk";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { useSearchParams } from "react-router-dom";
import { createGetUser } from "../services/apiUsers";

type UserType = {
  name: string;
  id: number;
  coinsEarned: number;
  setCoinsEarned: Dispatch<SetStateAction<number>>;
  setName: Dispatch<SetStateAction<string>>;
  setId: Dispatch<SetStateAction<number>>;
};

const userContext = createContext<UserType>({
  name: "",
  id: 0,
  coinsEarned: 0,
  setName() {},
  setId() {},
  setCoinsEarned() {},
});

function UserContext({ children }: { children: ReactNode }) {
  const [name, setName] = useState("");
  const [id, setId] = useState(0);
  const [coinsEarned, setCoinsEarned] = useState(0);
  const [params] = useSearchParams();
  const referralId = params.get("referralId");

  useEffect(() => {
    const name = WebApp.initDataUnsafe.user?.first_name;
    const telegramId = WebApp.initDataUnsafe.user?.id;
    if (!name || !telegramId) {
      return console.log("Open mini app in telegram");
    }
    setName(name);
    setId(telegramId);
    const createGet = async () => {
      const data = await createGetUser({
        name,
        telegramId,
        referredBy: referralId || "",
      });

      if (data) {
        setCoinsEarned(data.coinsEarned);
      }
    };
    createGet();
  }, [referralId]);

  return (
    <userContext.Provider
      value={{ name, id, coinsEarned, setName, setId, setCoinsEarned }}
    >
      {children}
    </userContext.Provider>
  );
}

export function useUserContext() {
  const context = useContext(userContext);
  if (context === undefined) {
    throw new Error("");
  }
  return context;
}

export default UserContext;
