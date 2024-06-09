"use client";

import React, { useContext, useEffect, useState } from "react";
import LoginForm from "./LoginForm";
import Signup from "./signup-form";
import Div from "@/lib/Div";
import MyContext from "../../context/MyContext";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import GotoMailBox from "./goto-mailbox";

const SignUpForm = () => {
  const contextData = useContext(MyContext);
  const [chooseLogin, setChooseLogin] = useState(false);
  const [checkEmail, setCheckEmail] = useState('');
  const router = useRouter();
  const path = usePathname();
  const param = useSearchParams();
  const type = param.get('type');
  useEffect(() => {
    if (contextData?.isSignUp && contextData?.isSignUp) {
      setChooseLogin(true);
    }
  }, [contextData?.isSignUp]);

  useEffect(() => {
    if (path.includes('/account') && !type?.includes('mailbox') || !type?.includes('login') || !type?.includes('signup')) router.replace('/account?type=login')
  }, [])

  useEffect(() => {
    if (contextData?.userData && contextData?.userData?.data) {
      router.push("/")
    }
  }, [contextData?.userData, router]);

  return (
    <Div className="flex flex-col  justify-center items-center bg-gray-100 w-full h-screen">
      <Div className="  ">
        {/* <Div className="w-full h-[90%] "> */}
        <Div className="w-full h-full relative flex items-center justify-center">
          <Div
            className={`w-[420px] bg-white rounded-xl  ${type === 'login' ? "" : "hidden"
              }  h-full  transition duration-300`}
          >
            <LoginForm />
          </Div>
          <Div
            className={`w-[420px] bg-white rounded-xl  ${type === 'signup' ? "" : "hidden"
              }   h-full transition duration-300`}
          >
            <Signup  setCheckEmail={setCheckEmail}/>
          </Div>

          <Div
            className={` p-4 bg-white rounded-xl ${type === 'mailbox' ? "" : "hidden"
              }  transition duration-300`}
          >
            <GotoMailBox checkEmail={checkEmail} />
          </Div>
        </Div>
        {/* </Div> */}
      </Div>
    </Div>
  );
};

export default SignUpForm;