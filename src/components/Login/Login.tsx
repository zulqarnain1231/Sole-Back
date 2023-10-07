import React, { useState } from "react";
import LoginWithSocail from "./LoginWithSocail";
import LoginWithEmail from "./LoginWithEmail";

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  return (
    <section className="w-full min-h-screen grid lg:grid-cols-[1fr,2fr] gap-10 p-4 font-jakarta">
      {/* left section */}
      <div className="w-full h-full lg:inline-block hidden rounded-lg">
        <img
          className="w-full h-full object-cover pointer-events-none rounded-xl"
          src="/Assets/Login.jpg"
          alt=""
        />
      </div>
      {/* right section */}
      {isLogin ? (
        <LoginWithEmail />
      ) : (
        <LoginWithSocail setLogin={() => setIsLogin(true)} />
      )}
    </section>
  );
};

export default LoginPage;
