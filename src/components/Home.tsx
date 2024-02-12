import { AiOutlineAim } from "react-icons/ai";
import { FaCrown, FaStar } from "react-icons/fa6";
import { GiGoat, GiUnicorn, GiWeight } from "react-icons/gi";
import { LiaDumbbellSolid } from "react-icons/lia";
import { LuChefHat } from "react-icons/lu";
import { RxMagicWand } from "react-icons/rx";

export const Home = () => {
  return (
    <div className="container mx-auto  grid grid-cols-3 gap-3 mt-3">
      <div
        className="
        bg-green-500 row-span-2 bg-lebron h-[800px] bg-cover bg-no-repeat bg-top 
        "
      >
        <div className=" w-full">
          <div className="m-8 flex items-center text-yellow-400">
            <h3 className="m-2 font-bold">KING JAMES</h3>
            <FaCrown className="text-xl" />
          </div>

          <h1 className=" w-1/3 mt-48 ml-3 font-bold">
            LeBron James crava nome na história e se torna o maior pontuador da
            NBA em todos os tempos
          </h1>
        </div>
      </div>
      <div
        className="
         bg-jordan col-span-2 bg-cover bg-no-repeat flex p-7 min-h-[400px]"
      >
        <p className="flex-1 h-full flex items-end font-bold">
          G.O.A.T. (Greatest of All Time)" de LL Cool J, em 2000. Com o tempo,
          os pontos entre as letras e os parêntesis ficaram pelo caminho, nos
          deixando com as quatro letras que significam a grandeza - e, de forma
          conveniente, com a imagem (e os emojis) de uma cabra, chamada, em
          inglês, de "goat"
        </p>
        <div className="flex-1 flex justify-end text-red-600 pt-4  font-bold">
          <p className="mr-2  ">MICHAEL JORDAN</p>
          <GiGoat className="text-2xl" />
        </div>
      </div>
      <div className="flex bg-red-500 bg-curry bg-cover bg-no-repeat p-2 ">
        <div className="flex-1 text-sky-800 flex font-bold">
          <p className="mr-2">CHEF CURRY</p>
          <LuChefHat className="text-xl" />
        </div>
        <p className="flex-1 text-black font-bold text-right flex mt-3 ">
          Stephen Curry é o recordista de arremessos de três pontos na história
          da NBA e, recentemente, se tornou o único a ter 3.500 arremessos
          convertidos na carreira.
        </p>
      </div>
      <div className="flex bg-blue-500 bg-larry-magic p-2">
        <div className="flex-1">
          <div className="flex font-bold text-green-400">
            <p className="mr-2">LARRY BIRD</p>
            <AiOutlineAim className="text-xl" />
          </div>
          <p className="w-1/2 text-sm font-bold">
            Considerado um dos maiores jogadores e um dos maiores arremessadores
            da história,Bird ganhou três vezes o título da NBA
          </p>
        </div>

        <div className="flex-1 flex flex-col items-end ">
          <div className="flex font-bold text-purple-500">
            <p className="mr-2">MAGIC JOHNSON</p>
            <RxMagicWand className="text-xl" />
          </div>
          <p className="text-sm text-right w-1/2 font-bold">
            É considerado por muitos como um dos melhores armadores da história
            da NBA. Reconhecido pela sua extraordinária técnica com a bola, foi
            o ponto central do estilo de jogo "Showtime
          </p>
        </div>
      </div>
      <div className="bg-giannis bg-cover bg-no-repeat p-2 flex  justify-between">
        <p className="w-1/3 font-bold text-black">
          Grego, Antetokounmpo marcou 50 pontos, ele faturou o prêmio de MVP das
          finais <br /> O Bucks chega a seu segundo título na história da liga.
          O primeiro foi em 1971
        </p>
        <div className="font-bold text-lime-100">
          <div className="flex">
            <p>GIANNIS</p>
            <LiaDumbbellSolid className="text-xl" />
          </div>
          <p>ANTETOKOUNMPO</p>
        </div>
      </div>
      <div className="bg-kobe row-span-2 min-h-[800px] bg-cover bg-no-repeat bg-bottom p-2">
        <ul className="flex justify-between mt-5 font-bold">
          <li className="mt-11 text-yellow-500">KOBE BRYANT</li>
          <li>ETERNAL</li>
          <li className="mt-11 text-purple-500">BLACK MAMBA</li>
        </ul>
      </div>
      <div className="bg-luka bg-cover bg-no-repeat text-black flex justify-between p-2 font-bold">
        <p className="w-1/4">
          Luka Doncic marcou incríveis 73 pontos na noite desta sexta-feira, em
          vitória por 148 a 143 contra o Atlanta Hawks, em Atlanta
        </p>
        <div className="flex text-indigo-800">
          <p>LUKA DONCIC</p>
          <FaStar />
        </div>
      </div>
      <div className="bg-shaq bg-cover bg-no-repeat p-2 flex justify-between min-h-[300px] font-bold">
        <p className="w-1/3 mt-52">
          Shaquille O'Neal voltou a quebrar uma tabela na sua segunda e última
          apresentação no Brasil
        </p>
        <div className="flex">
          <p className="mr-2">SHAQUILLE O'NEAL</p>
          <GiWeight className="text-xl" />
        </div>
      </div>
      <div className="bg-durant bg-cover bg-no-repeat p-2 flex flex-col items-end text-right font-bold">
        <div className="flex text-zinc-900">
          <p className="mr-2">KEVIN DURANT</p>
          <GiUnicorn className="text-xl" />
        </div>
        <p className="w-1/3 mt-3">
          Unicórnio, designa um jogador com uma altura fora do normal, mas móvel
          e suficientemente hábil para alargar as funções habitualmente
          atribuídas aos postes
        </p>
      </div>
    </div>
  );
};
