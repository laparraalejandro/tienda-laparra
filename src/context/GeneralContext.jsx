import React, { createContext, useCallback, useContext, useState } from "react";

const GeneralDataContext = createContext();
const useGeneralDataContext = () => useContext(GeneralDataContext);

const GeneralContext = ({ children }) => {
  const [isLoading, setLoading] = useState(true);

  const showLoader = useCallback(() => setLoading(true), []);

  const hideLoader = useCallback(() => setLoading(false), []);

  return (
    <GeneralDataContext.Provider
      value={{
        isLoading,
        showLoader,
        hideLoader,
      }}
    >
      {children}
    </GeneralDataContext.Provider>
  );
};

export default GeneralContext;
export { useGeneralDataContext };
