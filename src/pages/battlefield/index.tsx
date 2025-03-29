import { useEffect, useState } from "react";
import characters from "../../mocks/characters";
import { NavLink } from "react-router";


const BattlefieldPage = () => {
  const [battlefield, setBattlefields] = useState<{ name: string; image: string; color: string; }>(characters[0]);
  const [selected, setSelected] = useState<boolean>(false);

  const randomIntFromInterval = (min: number, max: number) => { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  useEffect(() => {
    setBattlefields(characters[randomIntFromInterval(0, characters.length)]);
  }, []);

  return (
    <>
      {selected && <div className="absolute z-40 bg-black/50 w-full h-screen flex items-center justify-center">
        <div className="flex items-end justify-center w-full gap-96">
          <button className="z-50" onClick={() => setSelected(false)}>
            changer
          </button>
          <NavLink
            to="/arena"
            end
            className="flex h-26 w-96 items-center justify-center overflow-hidden"
          >
            <div
              // alt="eaj"
              // src="path240.svg"
              className="absolute h-26 w-96 bg-[url(path240.svg)] text-orange-500"
            />
            <span className="z-50 font-[rainly] text-6xl text-black">Continuer</span>
          </NavLink>
        </div>
      </div>}
      <section className="relative flex justify-center">
        {/* Selected battlefields */}
        <div className="relative flex w-full items-center justify-center flex-col">
          <div>{battlefield.name}</div>
          <div className={"w-10 h-96 " + battlefield.color} />
          {/* <img alt="character image" src={Knuclke} className="h-[75%]" /> */}
        </div>

        {/* Battlefields */}
        <div className="fixed right-auto bottom-20 flex w-[40%] flex-wrap gap-2">
          {characters.slice(1).map((item, index) => (
            <button
              key={index}
              className={"relative h-36 w-24 cursor-pointer border border-black " + (item.color === battlefield.color ? ` ring-red-500 border-0 ring-4 before:absolute 
                 before:bg-red-500 ` : '')}
              onClick={() => setSelected(true)}
              onMouseEnter={() => setBattlefields(item)}
            >
              <div className={"h-full " + item.color}></div>
            </button>
          ))}
        </div>
      </section>
    </>
  );
};




export default BattlefieldPage;