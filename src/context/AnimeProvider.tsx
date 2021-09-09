import React, { ReactNode } from "react";
interface Props {
	recommendedAnime: string;
    saySomething: () => void
}

const defaultValue = {
	recommendedAnime: "",
	saySomething: () => {},
};

export const Anime = React.createContext<Props>(defaultValue);

export default function AnimeProvider ({children}:{children: ReactNode}) {
    const recommendedAnime = "Naruto";
    function saySomething() {
        alert("I like anime!!");
    }
    return (
    <Anime.Provider value={{recommendedAnime, saySomething}}>
        {children}
    </Anime.Provider>
    )
}
