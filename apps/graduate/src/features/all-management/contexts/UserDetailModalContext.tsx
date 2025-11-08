import { createContext, useContext, useState, ReactNode } from 'react';

import { Mode } from '../types/allManagement';

interface UserDetailModalContextType {
  mode: Mode;
  setMode: (mode: Mode) => void;
}

const UserDetailModalContext = createContext<UserDetailModalContextType | null>(
  null,
);

interface UserDetailModalProviderProps {
  children: ReactNode;
}

export const UserDetailModalProvider = ({
  children,
}: UserDetailModalProviderProps) => {
  const [mode, setMode] = useState<Mode>('detail');

  return (
    <UserDetailModalContext.Provider value={{ mode, setMode }}>
      {children}
    </UserDetailModalContext.Provider>
  );
};

export const useUserDetailModalContext = () => {
  const context = useContext(UserDetailModalContext);
  return {
    mode: context?.mode ?? 'detail',
    setMode: context?.setMode ?? (() => {}),
  };
};
