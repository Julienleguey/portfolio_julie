import React, { useState } from "react";
const UserContext = React.createContext();

export const Provider = ({ children }) => {
  const [language, setLanguage] = useState("fr");

  return (
    <UserContext.Provider
      value={{
        language: language,
        actions: {
          setLanguage: setLanguage
        }
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const Consumer = UserContext.Consumer;

export default function withContext(Component) {
  return function ContextComponent(props) {
    return (
      <UserContext.Consumer>
        {context => <Component {...props} context={context} />}
      </UserContext.Consumer>
    );
  };
}
