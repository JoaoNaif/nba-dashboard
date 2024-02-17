import { usePlayers } from "@/utils/queries";
import { useState } from "react";
import { FaUser } from "react-icons/fa6";
import { MdFavorite } from "react-icons/md";

export const PlayerLayout = () => {
    
  const [search, setSearch] = useState("");
  const [playerId, setPlayerId] = useState(132);
  const listPlayer = usePlayers(search);
  const filter = listPlayer.data?.filter((i) => i.id === playerId);
  const [listFavorite, setListFavorite] = useState(false);
  const [favorite, setFavorite] = useState<number[]>([]);
  const fill = listPlayer.data?.filter((player) =>
    favorite.includes(player.id)
  );

  const handleButtonID = (id: number) => {
    setPlayerId(id);
  };

  function handleFavorite(id: number) {
    if (favorite.length <= 10) {
      if (favorite.indexOf(id) === -1) {
        setFavorite([...favorite, id]);
      }
    } else {
      alert("Você atingiu o limite máximo de favoritos (10)");
    }
  }

  const handleListFavorite = () => {
    setListFavorite(!listFavorite);
  };

  return (
    <div className="mt-3 container mx-auto grid grid-cols-4">
      <div className="col-span-3">
        {filter && (
          <div className=" h-full">
            {filter.map((item) => (
              <div className="grid grid-cols-2 gap-3 grid-rows-2 h-full">
                <div className=" flex">
                  <div className="flex-1 bg-gradient-to-t to-yellow-500 from-yellow-600 rounded-t-md overflow-hidden ">
                    <aside className="flex justify-between p-2 text-black font-bold  bg-sky-500 ">
                      <p>Informações Pessoais</p>
                      <span>ID: {item.id}</span>
                    </aside>
                    <div className="flex flex-col items-center justify-evenly h-full ">
                      <FaUser className="text-9xl text-black bg-sky-500 p-2 rounded-full" />
                      <p className="text-3xl text-black">
                        {item.first_name} {item.last_name}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row-span-2 flex flex-col ">
                  <div className="flex justify-between p-2 bg-sky-500 rounded-md">
                    <p>Dados Pessoais:</p>
                    <span>
                      Posição:{" "}
                      {item.position !== "" ? item.position : "Aposentado"}
                    </span>
                  </div>
                  <div className="bg-gradient-to-t to-yellow-500 from-yellow-600 min-h-72 p-2 my-5 rounded-md">
                    <h1 className="text-2xl font-bold mb-3">
                      <div>
                        <p className="text-3xl">Estatura:</p>
                        <div className="h-1 w-16 rounded-full bg-sky-500" />
                      </div>
                    </h1>
                    {item.position !== "" ? (
                      <ul className="text-black text-xl">
                        <li>
                          Altura:{" "}
                          {(
                            item.height_feet * 0.3048 +
                            item.height_inches * 0.0254
                          ).toFixed(2)}
                          (m)
                        </li>
                        <li className="my-5">
                          Média de Altura(nba):{" "}
                          {item.height_feet * 0.3048 +
                            item.height_inches * 0.0254 >=
                          2.0
                            ? "Acima da Média"
                            : "Abaixo da Média"}
                        </li>
                        <li className="flex">
                          Média de {item.position === "G" && "Armador"}{" "}
                          {item.position === "F" && "Ala"}{" "}
                          {item.position === "C" && "Pivo"}
                          (nba):{" "}
                          {item.position === "G" && (
                            <p>
                              {item.height_feet * 0.3048 +
                                item.height_inches * 0.0254 >=
                              1.93
                                ? "Acima da Média"
                                : "Abaixo da Média"}
                            </p>
                          )}{" "}
                          {item.position === "F" && (
                            <p>
                              {item.height_feet * 0.3048 +
                                item.height_inches * 0.0254 >=
                              2.06
                                ? "Acima da Média"
                                : "Abaixo da Média"}
                            </p>
                          )}{" "}
                          {item.position === "C" && (
                            <p>
                              {item.height_feet * 0.3048 +
                                item.height_inches * 0.0254 >=
                              2.13
                                ? "Acima da Média"
                                : "Abaixo da Média"}
                            </p>
                          )}
                        </li>
                      </ul>
                    ) : (
                      <ul className="text-black text-xl">
                        <li>Altura: Sem informação(jogador inativo)</li>
                        <li className="my-5">
                          Média de Altura(nba): Altura: Sem informação(jogador
                          inativo)
                        </li>
                        <li>
                          Média da posição(nba): Altura: Sem informação(jogador
                          inativo)
                        </li>
                      </ul>
                    )}
                  </div>
                  <div className="bg-gradient-to-t to-yellow-500 from-yellow-600 min-h-72 p-2 my-2 rounded-md">
                    <h1 className="text-2xl mb-3">
                      <p className="text-3xl">Pesagem:</p>
                      <div className="h-1 w-16 rounded-full bg-sky-500" />
                    </h1>
                    {item.position !== "" ? (
                      <ul className="text-black text-xl">
                        <li>
                          Peso(nba):{" "}
                          {(item.weight_pounds * 0.453592).toFixed(2)}
                          (kg)
                        </li>
                        <li className="my-5">
                          IMC(nba):{" "}
                          {(
                            (item.weight_pounds * 0.453592) /
                            (item.height_feet * 0.3048 +
                              item.height_inches * 0.0254) **
                              2
                          ).toFixed(2)}
                        </li>
                        <li className="flex">
                          Média de {item.position === "G" && "armador"}
                          {item.position === "F" && "ala"}{" "}
                          {item.position === "C" && "Pivo"} (nba):{" "}
                          {item.position === "C" && (
                            <p>
                              {item.weight_pounds * 0.453592 >= 117.9
                                ? "Acima da Média"
                                : "Abaixo da Média"}
                            </p>
                          )}{" "}
                          {item.position === "F" && (
                            <p>
                              {item.weight_pounds * 0.453592 >= 104.3
                                ? "Acima da Média"
                                : "Abaixo da Média"}
                            </p>
                          )}{" "}
                          {item.position === "G" && (
                            <p>
                              {item.weight_pounds * 0.453592 >= 89.2
                                ? "Acima da Média"
                                : "Abaixo da Média"}
                            </p>
                          )}
                        </li>
                      </ul>
                    ) : (
                      <ul className="text-black text-xl">
                        <li>Peso: Sem informação(jogador inativo)</li>
                        <li className="my-5">
                          IMC(nba): Peso: Sem informação(jogador inativo)
                        </li>
                        <li>
                          Média da Posição(nba): Peso: Sem informação(jogador
                          inativo)
                        </li>
                      </ul>
                    )}
                  </div>
                </div>
                <div className="bg-blue-400 overflow-hidden rounded-t-md">
                  <div className="flex justify-between p-2 font-bold bg-yellow-500">
                    <p>Informações do Time</p>
                    <span>ID:{item.team.id}</span>
                  </div>
                  <div className="flex flex-col my-4 items-center">
                    <h1 className="text-center font-bold text-2xl text-black">
                      {item.team.full_name}
                    </h1>
                    <div className="h-1 w-16 bg-white rounded-full" />
                  </div>
                  <ul className="flex flex-col items-center">
                    <li className="flex my-2">
                      <p className="text-xl">Popular:</p>
                      <p className="text-xl">{item.team.name}</p>
                      <p>({item.team.abbreviation})</p>
                    </li>
                    <li className="text-xl my-2">Cidade: {item.team.city}</li>
                    <li className="text-xl my-2">
                      Conferência: {item.team.conference}
                    </li>
                    <li className="text-xl my-2">
                      Divisão: {item.team.division}
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className=" flex flex-col items-center p-2 rounded-md ">
        <div className="flex items-center w-full bg-yellow-500 text-xl px-2 border-b-4 border-sky-500  ">
          <input
            type="text"
            className="text-white py-2 text-xl bg-transparent w-full outline-none"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <MdFavorite
            onClick={handleListFavorite}
            className="text-3xl text-sky-500 h-full "
          />
        </div>

        {listFavorite === false ? (
          <ul className="flex flex-col items-center h-[600px] mt-5 overflow-y-auto w-full p-2">
            {listPlayer.data?.map((item) => (
              <li
                className="bg-sky-500 mb-4 w-full border-t-4 border-yellow-500 font-bold "
                key={item.id}
              >
                <div className="flex justify-between p-2">
                  <div className="flex">
                    <p className=" text-black">
                      {item.first_name} {item.last_name}
                    </p>
                    <p className="text-sm ">({item.team.abbreviation})</p>
                  </div>
                  <button
                    onClick={() => handleFavorite(item.id)}
                    className="bg-white p-1 rounded-full"
                  >
                    <MdFavorite
                      className={`text-xl ${
                        favorite.includes(item.id) === true
                          ? "text-red-500"
                          : "text-gray-300"
                      }`}
                    />
                  </button>
                </div>
                <p className="pl-2">
                  ID:<span className="text-gray-600">{item.id}</span>
                </p>
                <button
                  type="button"
                  onClick={() => handleButtonID(item.id)}
                  className="bg-yellow-500 w-full mt-3"
                >
                  Check
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <ul>
            {fill?.map((item) => (
              <li
                key={item.id}
                className="flex bg-yellow-500 my-3 p-2 rounded-md font-bold w-full"
              >
                <p>
                  {item.first_name} {item.last_name}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
