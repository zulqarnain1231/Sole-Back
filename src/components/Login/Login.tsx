import React, { useState } from "react";
import LoginWithSocail from "./LoginWithSocail";

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);

  return (
    <section className="w-full min-h-screen grid lg:grid-cols-[1fr,2fr] gap-10 p-4 font-jakarta">
      {/* left section */}
      <div className="w-full h-full lg:inline-block hidden rounded-lg">
        <img
          className="w-full h-full object-cover pointer-events-none rounded-lg"
          src="/Assets/Login.jpg"
          alt=""
        />
      </div>
      {/* right section */}
      {isLogin ? (
        <div className="w-full flex flex-col items-center justify-center gap-8"></div>
      ) : (
        <LoginWithSocail />
      )}
    </section>
  );
};

export default LoginPage;
