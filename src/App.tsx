import React from "react";
import "./App.css";
import Parent from "./components/Parent";
import AnimeProvider from "./context/AnimeProvider";


function App() {
	return (
		<div className="App">
      <AnimeProvider>
			  <Parent />
      </AnimeProvider>
		</div>
	);
}

export default App;
