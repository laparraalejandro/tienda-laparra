import React from "react";
import Loader from "./Loader";
import { useGeneralDataContext } from "../../context/GeneralContext";

const ApplyLoader = (Component) => {
  return function ComponentApplyLoader(props) {
    const { isLoading } = useGeneralDataContext();
    return (
      <>
        {isLoading && <Loader />}
        <Component
          {...props}
          visibility={isLoading ? "invisible" : "visible"}
        />
      </>
    );
  };
};

export default ApplyLoader;
