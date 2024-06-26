import Div from "@/lib/Div";
import React, { useRef, useState } from "react";
import { FaEdit } from "react-icons/fa";
import MoreBox from "./MoreBox";
import { password } from "@/Data/Types";

type passwordBox = {
  setShowPinCodeBox:React.Dispatch<React.SetStateAction<boolean>>
  item: password;
  passwordIndex: number;
  boxIndex: number;
};

const PasswordBox = ({ item, passwordIndex, boxIndex, setShowPinCodeBox }: passwordBox) => {
  const [OpenMoreBox, setOpenMoreBox] = useState<boolean>(false);
  const [MoreBoxData, setMoreBoxData] = useState<password | null>(null);

  const openModel = (data: password | null, bool: boolean) => {
    setMoreBoxData(data);
    setOpenMoreBox(bool);
  };

  const closeModel = () => {
    setOpenMoreBox(false);
  };



  return (
    <Div className="w-full  passwordBg flex items-center justify-between my-1 py-3 px-4 rounded-md">
      <Div className="w-[90%] overflowstyle overflow-x-scroll ">
        <h5 className="text-gray-200">{item?.passwordName}</h5>
        <p className="text-gray-300 text-[16px] w-1/2 font-light italic">
          *************
        </p>
      </Div>
      <Div className="flex items-center  relative space-x-1">
        <button id="setpasswordBtn">
          <FaEdit
            onClick={() => {
              openModel(OpenMoreBox ? null : item, !OpenMoreBox);
            }}
            className="text-gray-100 text-[29px] p-2 transition-all duration-300 hover:bg-gray-600 rounded-full"
          />
        </button>
        {OpenMoreBox && (
          <MoreBox
          setShowPinCodeBox={setShowPinCodeBox}
            boxIndex={boxIndex}
            passwordIndex={passwordIndex}
            closeModel={closeModel}
            MoreBoxData={MoreBoxData}
          />
        )}
      </Div>
    </Div>
  );
};

export default PasswordBox;
