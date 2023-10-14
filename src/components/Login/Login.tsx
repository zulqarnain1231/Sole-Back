import React, { useState } from "react";
import LoginWithSocail from "./LoginWithSocail";
import LoginWithEmail from "./LoginWithEmail";

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  return (
    <section className="w-full min-h-screen grid lg:grid-cols-[1fr,2fr] gap-10 p-4 font-jakarta">
      {/* left section */}
      <div className="w-full h-full lg:flex lg:flex-col items-center justify-center hidden rounded-lg bg-[url('/Assets/Login.png')] bg-cover bg-center bg-no-repeat">
        <img
          className="w-[220px] h-[220px] object-contain pointer-events-none rounded-xl"
          src="/Assets/Logo.png"
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
