/* import React from "react";

const IdModal = () => {
    return (
        <main className="fixed w-full p-5 bg-[#EFD0CA]">
            <div></div>
        </main>
    )
};

export default IdModal; */

type IdModalProps = {
    isOpen: () => boolean | void;
    isClosed: () => boolean | void;
};

import React from 'react'
import { CloseIcon, Icon } from '@chakra-ui/icons';

const IdModal: React.FC<IdModalProps> = ({isOpen, isClosed}) => {
    return !isOpen() ? null : (
      <div className="fixed inset-0 bg-[#EFD0CA] bg-opacity-40 backdrop-brightness-50 flex justify-center items-center z-[999] p-5">
        <div className="flex flex-col bg-[#EFD0CA] rounded-3xl p-4 w-full">
          <div
            className="flex justify-end mt-3 mb-1 items-center "
            onClick={isClosed}
          >
            <Icon as={CloseIcon} boxSize={4} />
          </div>
          <div className="mx-3 text-[14.5px]">
            <p className="my-3 flex justify-center">
              Grow your bond with your Soul by petting and chatting, and gifting
              items.
            </p>
            <p className="mb-2">
              As you build affection, you'll earn more points. Who knows? Higher
              affection might bring some nice surprises your way!
            </p>
          </div>
        </div>
      </div>
    );
}
export default IdModal