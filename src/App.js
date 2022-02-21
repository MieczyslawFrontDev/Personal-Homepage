import React from "react";
import { Person } from "./App/features/Homepage/Person"
import { Skillset } from "./App/features/Homepage/Skillset&Future/Skillset";
import { Future } from "./App/features/Homepage/Skillset&Future/Future";
import { Portfolio } from "./App/features/Homepage/Portfolio";
import { Contact } from "./App/features/Homepage/Contact";

function App() {
  return (
    <>
      <Person />
      <Skillset />
      <Future />
      <Portfolio />
      <Contact />
    </>
  );
}

export default App;
