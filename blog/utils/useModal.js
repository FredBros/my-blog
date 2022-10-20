// https://www.kaherecode.com/tutorial/creer-votre-propre-composant-modal-avec-react-hooks

import { useState } from "react";

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);

  function toggle() {
    setIsShowing(!isShowing);
  }

  return {
    isShowing,
    toggle,
  };
};

export default useModal;
