import React from "react"
//import { useState } from "react";
import SpinWheel from "../components/SpinWheel"
import NavigationBar from "../components/NavigationBar"

const Spin = () => {
  /*  const [spinState, setSpinState] = useState<boolean>(false);
  const spinWheel = () => setSpinState((prev) => !prev) */
  return (
    <main className="page-spin">
      <div className="flex flex-col items-center">
        <SpinWheel />
      </div>
      <NavigationBar />
    </main>
  )
}

export default Spin