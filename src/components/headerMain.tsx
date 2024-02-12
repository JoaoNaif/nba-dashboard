import { FaMagnifyingGlass } from "react-icons/fa6"
import { HeaderNavList } from "./headerNavList"
import logoNba from '../assets/logoNba.png'
import { Dispatch, SetStateAction } from "react"

interface activeProps {
    activeList: {
        home: boolean
        player: boolean
        comparison: boolean
        postSeason: boolean
        set: {
            setHome: Dispatch<SetStateAction<boolean>>,
            setPlayer: Dispatch<SetStateAction<boolean>>,
            setComparison: Dispatch<SetStateAction<boolean>>,
            setPostSeason: Dispatch<SetStateAction<boolean>>
        }
    }
}

export const HeaderMain = ({activeList}: activeProps) => {

    const src = logoNba.src

    return(
        <header className="bg-gradient-to-t to-yellow-500 from-yellow-600 container mx-auto ">
            
            <div className="flex justify-between items-center p-2">
                <img src={src} alt="Logo Nba" className="h-12" />
                <div className="flex">
                    <p className="font-bold text-sky-600 text-xl">StatS</p>
                    <FaMagnifyingGlass className="text-xl text-white"/>
                </div>
            </div>

            <nav className="">
                <ul className="flex font-bold text-center ">
                    
                    <HeaderNavList 
                        navbarName='HOME' 
                        navbarStatus={activeList.home} 
                        set={activeList.set.setHome}
                        f1={activeList.set.setComparison}
                        f2={activeList.set.setPlayer}
                        f3={activeList.set.setPostSeason}
                        key={1}
                    />
        
                    <HeaderNavList 
                        navbarName="PLAYER" 
                        navbarStatus={activeList.player}
                        set={activeList.set.setPlayer}
                        f1={activeList.set.setComparison}
                        f2={activeList.set.setHome}
                        f3={activeList.set.setPostSeason}
                        key={2}
                    />

                    <HeaderNavList 
                        navbarName="COMPARISON" 
                        navbarStatus={activeList.comparison}
                        set={activeList.set.setComparison}
                        f1={activeList.set.setHome}
                        f2={activeList.set.setPlayer}
                        f3={activeList.set.setPostSeason}
                        key={3}
                    />

                    <HeaderNavList 
                        navbarName="POST-SEASON" 
                        navbarStatus={activeList.postSeason}
                        set={activeList.set.setPostSeason}
                        f1={activeList.set.setComparison}
                        f2={activeList.set.setPlayer}
                        f3={activeList.set.setHome}
                        key={4}
                    />
                </ul>
            </nav>
            
        </header >
    )
}