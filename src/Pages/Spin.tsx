import React from "react"
//import { useState } from "react";
import SpinWheel from "../components/SpinWheel"

const Spin = () => {
  /*  const [spinState, setSpinState] = useState<boolean>(false);
  const spinWheel = () => setSpinState((prev) => !prev) */
  return (
    <main className="page-style">
      <div className="flex flex-col items-center">
        <SpinWheel />
      </div>
    </main>
  )
}

export default Spin