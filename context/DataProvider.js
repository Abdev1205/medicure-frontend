import { useRouter } from "next/router";
import React, { createContext, useState } from "react";
export const DataLayer = createContext(null)

const DataProvider = ({ children }) => {
  const [report, setReport] = useState(null);
  const [param, setParam] = useState(null);
  const [image, setImage] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [loginInit, setLoginInit] = useState(false)
  const [roleInit, setRoleInit] = useState(false)
  const [role, setRole] = useState("");
  const [city, setCity] = useState("");
  const [model, setModel] = useState("model link");
  const router = useRouter()
  return (
    <DataLayer.Provider value={{model, setModel,city, setCity, role, setRole, roleInit, setRoleInit, loginInit, setLoginInit, refresh, setRefresh, user, setUser, param, setParam, report, setReport, image, setImage, isAuthenticated, setIsAuthenticated, loading, setLoading }}>
      {children}
    </DataLayer.Provider>
  );
};

export default DataProvider;
