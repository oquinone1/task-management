import { useState } from "react";

export const useOperationsHook = () => {
  const [modal, setModal] = useState(false);

  return { modal, setModal };
};
