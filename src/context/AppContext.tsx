import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

type AppContextProps = {
  children: ReactNode;
};

type ContextProps = {
  isDrawerOpen: boolean;
  setIsDrawerOpen: Dispatch<SetStateAction<boolean>>;
};

const AppContext = createContext<ContextProps>({
  isDrawerOpen: false,
  setIsDrawerOpen: () => {},
});

export function AppContextWrapper({ children }: AppContextProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <AppContext.Provider value={{ isDrawerOpen, setIsDrawerOpen }}>
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext);
