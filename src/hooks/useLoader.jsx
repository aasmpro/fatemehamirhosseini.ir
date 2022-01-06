import { useState } from "react";

import { Loader } from "../components/Loader";

export const useLoader = (loaded_value) => {
  const [loader_value, set_loader_value] = useState(0);

  const set_value = (new_value, wait = null) => {
    if (wait) {
      setTimeout(() => {
        set_loader_value((value) => value + new_value);
      }, wait);
    } else {
      set_loader_value((value) => value + new_value);
    }
  };

  const is_loaded = loader_value >= loaded_value;

  return [Loader, is_loaded, set_value];
};
