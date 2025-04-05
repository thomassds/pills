import { createContext, useContext, useEffect, useMemo, useState } from "react";

type PillContextType = {
  lastTaken: Date | undefined;
  setLastTaken: (date: Date | undefined) => void;
};

const PillContext = createContext<PillContextType | undefined>(undefined);

export const PillProvider = ({ children }: { children: React.ReactNode }) => {
  const [lastTaken, setLastTaken] = useState<Date | undefined>();

  useEffect(() => {
    const storedLastTaken = localStorage.getItem("lastTaken");

    if (!storedLastTaken) return;

    const parsedLastTaken = JSON.parse(storedLastTaken) as Date;

    const lastTakenDate = new Date(parsedLastTaken);

    if (lastTakenDate.getDate() !== new Date().getDate()) {
      return setLastTaken(undefined);
    }

    setLastTaken(lastTakenDate);
  }, []);

  useEffect(() => {
    if (lastTaken) {
      return localStorage.setItem("lastTaken", JSON.stringify(lastTaken));
    }

    localStorage.removeItem("lastTaken");
  }, [lastTaken]);

  const contextValue = useMemo(
    () => ({ lastTaken, setLastTaken }),

    [lastTaken, setLastTaken],
  );

  return (
    <PillContext.Provider value={contextValue}>{children}</PillContext.Provider>
  );
};

export const usePill = () => {
  const context = useContext(PillContext);

  if (!context)
    throw new Error("useUser precisa estar dentro de <UserProvider>");

  return context;
};
