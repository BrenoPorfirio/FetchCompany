import React, { useState } from "react";
import HomeImage from "../../assets/homeImage.png";

import { Register } from "../../components/Register/Register";
import { AuthPageContainer } from "./styles/authPage";
import { Login } from "../../components/Login/Login";

export const AuthPage = () => {
  const [loginMode, setLoginMode] = useState<Boolean>(true);

  return (
    <AuthPageContainer>
      <aside>
        <div className="homeImageContainer">
          <img src={HomeImage} alt="Imagem como fim de promo" />
        </div>
        <div className="hubDescription">
          <strong>Junte-se a vários clientes satisfeitos.</strong>
          <p>
            Cliente HubLocal ganha mais relevância, autoridade e visibilidade.
            Mais de 7.000 marcas confiam na nossa plataforma. Seja uma delas!
          </p>
        </div>
      </aside>

      <main>
        <div className="mainContent">
          {loginMode ? (
            <Login handleToggleMode={() => setLoginMode(!loginMode)} />
          ) : (
            <Register handleToggleMode={() => setLoginMode(!loginMode)} />
          )}
        </div>
      </main>
    </AuthPageContainer>
  );
};
