"use client";

import { Home } from "@/components/Home";
import { HeaderMain } from "@/components/headerMain";
import { useState } from "react";

const Page = () => {
  const [home, setHome] = useState(true);
  const [player, setPlayer] = useState(false);
  const [comparison, setComparison] = useState(false);
  const [postSeason, setPostSeason] = useState(false);

  const activeList = {
    home,
    player,
    comparison,
    postSeason,
    set: {
      setHome,
      setPlayer,
      setComparison,
      setPostSeason
    },
  };

  return (
    <div>
      <HeaderMain activeList={activeList} />

      {home && <Home />}

      {player && <div>Aqui está o player</div>}
    </div>
  );
};

export default Page;
