import { useEffect, useState } from "react";
import characters from "../../mocks/characters";
import { NavLink } from "react-router";

const SelectCharacterPage = () => {
  const [preSelect, setPreSelect] = useState<{ name: string; image: string; color: string; }>(characters[0]);
  const [bot, setBot] = useState<{ name: string; image: string; color: string; }>(characters[0]);
  const [selected, setSelected] = useState<boolean>(false);

  const randomIntFromInterval = (min: number, max: number) => { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  useEffect(() => {
    setBot(characters[randomIntFromInterval(0, characters.length)]);
  }, []);

  return (
    <>
      {selected && <div className="absolute z-40 bg-black/50 w-full h-screen flex items-center justify-center">
        <div className="flex items-end justify-center w-full gap-96">
          <button className="z-50" onClick={() => setSelected(false)}>
            changer
          </button>
          <NavLink
            to="/battlefield"
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
        {/* Player One */}
        <div className="relative flex w-full items-center justify-center flex-col">
          <div>{preSelect.name}</div>
          <div className={"w-10 h-96 " + preSelect.color} />
          {/* <img alt="character image" src={Knuclke} className="h-[75%]" /> */}
        </div>
        {/* Player two */}
        <div className="flex w-full items-center justify-center">
          {/* <img alt="character image" src={Knuclke} className="h-[75%]" /> */}
          <div className={"w-10 h-96 " + bot.color} />
        </div>
        {/*  */}
        <div className="fixed right-auto bottom-20 flex w-[40%] flex-wrap gap-2">
          {characters.slice(1).map((item, index) => (
            <button
              //FIXME: create this components button for select champs
              //@ts-ignore  
              before="Player One"
              key={index}
              className={"relative h-36 w-24 cursor-pointer border border-black " + (item.color === preSelect.color ? ` ring-red-500 border-0 ring-4 before:absolute before:-top-7 before:-right-1 before:bg-red-500 before:px-2 before:rounded-tl-2xl before:content-[attr(before)]` : '')}
              onClick={() => setSelected(true)}
              onMouseEnter={() => setPreSelect(item)}
            >
              <div className={"h-full " + item.color}></div>
            </button>
          ))}
        </div>
      </section>
    </>
  );
};

export default SelectCharacterPage;
