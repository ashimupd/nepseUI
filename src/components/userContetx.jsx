import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export const UserContextProvider = ({ children }) => {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    //make api call to get userData
    const user = {
      firstName: "Ashim",
      lastName: "Gautam",
      id: 0,
      photo: null,
    };
    setUserData(user);
  }, [userData]);
  return (
    <UserContext.Provider value={{ userData }}>{children}</UserContext.Provider>
  );
};

UserContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

Unit : $2.59
Unit : $2


