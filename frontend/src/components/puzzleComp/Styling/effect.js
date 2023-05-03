import { useEffect } from "react";

export function useBeforeUnload(callback) {
  useEffect(() => {
    const unloadCallback = (event) => {
      event.preventDefault();
      event.returnValue = "";
      return "";
    };

    window.addEventListener("beforeunload", unloadCallback);

    return () => window.removeEventListener("beforeunload", unloadCallback);
  }, [callback]);
}
