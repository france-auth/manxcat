import React from "react"
import { Button, Image } from "@chakra-ui/react"
//import { useState } from "react";
//import SpinWheel from "../components/SpinWheel"

const Spin = () => {
  /*  const [spinState, setSpinState] = useState<boolean>(false);
  const spinWheel = () => setSpinState((prev) => !prev) */
  return (
    <main className="page-style">
      <div className="flex flex-col items-center">
        {/* <SpinWheel /> */}
        <img 
          src="/wallets/spin.png" 
          alt="spin wheel" 
          className="mb-10"
        />
        <div className="flex flex-col items-center bg-[#EFD0CA80] w-screen py-4 gap-3">
          <p className="text-xs font-medium">
            AVAILABLE SPIN
          </p>
          <p className="text-xl font-extrabold">01</p>
          <p className="text-xs font-medium">
            WATCH ADS TO GET MORE SPINS
          </p>
          <Button mb={3} bgColor={'#EFD0CA'} border={'4px solid #000807'} borderRadius={'500px'} w={'60%'} h={'36px'} p={'15px 10px'} gap={4} fontSize={'12px'} fontWeight={'800'}>
                PLAY NOW 
                <Image src="/play.png"/>
            </Button>
            <p className="text-xs font-medium">4 of 5 videos watched</p>
        </div>
      </div>
    </main>
  )
}

export default Spin