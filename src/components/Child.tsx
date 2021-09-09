import { useContext } from "react";
import { Anime } from "../context/AnimeProvider";
export default function Child(){
    const { recommendedAnime , saySomething} = useContext(Anime);
    return (
        <div>
            <h1>{recommendedAnime}</h1>
            <button onClick={() => {saySomething()}}>Shout</button>
        </div>
    )
}