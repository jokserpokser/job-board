import React, { useState } from "react";
import Login from "../components/authentication/Login";
import Register from "../components/authentication/Register";

export default function LoginSignup() {
   const [displayLogin, setDisplayLogin] = useState(true);

   const onSwitch = () => {
      setDisplayLogin((prev) => !prev);
   };

   return (
      <div>
         {displayLogin ? <Login onSwitch={onSwitch} /> : <Register onSwitch={onSwitch} />}
      </div>
   );
}
