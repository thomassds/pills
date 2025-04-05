import { usePill } from "../../context";

import Already from "../../assets/already.png";

export const Home = () => {
  const { lastTaken, setLastTaken } = usePill();

  const handleTakePill = () => {
    const date = new Date();

    setLastTaken(date);
  };

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center p-4">
      {lastTaken?.getDate() !== new Date().getDate() && (
        <div className="flex flex-col items-center justify-center gap-12">
          <strong className="text-center text-2xl font-bold">
            Você ainda não tomou seu remedio
          </strong>

          <button className="bg-sky-700" onClick={handleTakePill}>
            Tomar o Remedio
          </button>
        </div>
      )}

      {lastTaken?.getDate() === new Date().getDate() && (
        <div className="flex flex-col items-center justify-center gap-12">
          <img src={Already} alt="Remedio" className="w-1/2 animate-bounce" />

          <strong className="text-center text-2xl font-bold">
            Você tomou seu remedio hoje as {lastTaken?.getHours()}:
            {lastTaken?.getMinutes()}
          </strong>
        </div>
      )}
    </div>
  );
};
