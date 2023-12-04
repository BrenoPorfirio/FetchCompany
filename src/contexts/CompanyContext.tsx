import { createContext, ReactNode, useState } from "react";
import { CompanyData } from "../pages/Companies/Companies";

interface CompanyContextData {
  currentCompanyName: string;
  currentCompanyData: CompanyData;
  saveCurrentCompanyName: (name: string) => void;
  saveCurrentCompanyData: (data: CompanyData) => void;
}

type CompanyProviderProps = {
  children: ReactNode;
};

export const CompanyContext = createContext({} as CompanyContextData);

export function CompanyProvider({ children }: CompanyProviderProps) {
  const [currentCompanyName, setCurrentCompanyName] = useState<string>("");
  const [currentCompanyData, setCurrentCompanyData] = useState(
    {} as CompanyData
  );

  const saveCurrentCompanyName = (name: string) => setCurrentCompanyName(name);

  const saveCurrentCompanyData = (data: CompanyData) =>
    setCurrentCompanyData(data);
  return (
    <CompanyContext.Provider
      value={{
        currentCompanyName,
        currentCompanyData,
        saveCurrentCompanyName,
        saveCurrentCompanyData,
      }}
    >
      {children}
    </CompanyContext.Provider>
  );
}
