'use client'

import { usePlayers } from "@/utils/queries"

const Page = () => {

  const players = usePlayers()

  return(
    <div>
      <ul>
        {players.data?.map(item => (
          <li>{item.first_name} {item.last_name}</li>
        ))}
      </ul>
      
    </div>
  )
}

export default Page