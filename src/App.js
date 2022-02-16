import React from "react";
import { Person } from "./App/features/Person"
import { Skillset } from "./App/features/Skillset&Future/Skillset";
import { Future } from "./App/features/Skillset&Future/Future";
import { Portfolio } from "./App/features/Portfolio";
import { Contact } from "./App/features/Contact";

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
