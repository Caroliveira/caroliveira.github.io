import { useEffect } from "react";

const useHandleOutsideClick = (ref, condition, action) => {
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (ref.current && !ref.current.contains(event.target) && condition) {
        action(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [ref, condition, action]);
};

export default useHandleOutsideClick;
