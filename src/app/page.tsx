"use client";

import { Home } from "@/components/Home";
import { HeaderMain } from "@/components/headerMain";
import { useState } from "react";
import { PlayerLayout } from "@/components/playerLayout"
import { ComparisonMain } from "@/components/comparisonMain";

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
      setPostSeason,
    },
  };

  return (
    <div className="bg-black min-h-lvh">
      <HeaderMain activeList={activeList} />

      {home && <Home />}

      {player && <PlayerLayout/> }

      {comparison && <ComparisonMain/> }
    </div>
  );
};

export default Page;
