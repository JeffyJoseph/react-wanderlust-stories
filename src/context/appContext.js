import { createContext } from "react";

const appContext = createContext({
  images: {},
  setImages: () => {},
  cities: [],
  theme: "light",
  toggleTheme: () => {},
  selectCity: () => {},
});

export default appContext;
