import React, { createContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

// hooks
import { useLoading } from '@/utils/hooks';

// services
import getPeopleData from '@/services/people';

// types
import type { People } from '@/services/people';

export interface Data extends People {
  id: string;
}

interface ContextType {
  peopleData: Data[];
  selectedPeople: Data[];
  setSelectedPeople: React.Dispatch<React.SetStateAction<Data[]>>;
  isLoading: boolean;
}

export const Context = createContext<ContextType>({
  peopleData: [],
  selectedPeople: [],
  setSelectedPeople: () => {},
  isLoading: false,
});

const ContextProvider: React.FC<unknown> = ({ children }) => {
  const [peopleData, setPeopleData] = useState<Data[]>([]);
  const [selectedPeople, setSelectedPeople] = useState<Data[]>([]);

  const [isLoading, setIsLoading] = useLoading();

  // Fetch Data on Mount
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const {
        data: { data },
      } = await getPeopleData();
      setPeopleData(data.map((person) => ({ ...person, id: uuidv4() })));
      setIsLoading(false);
    })();
  }, []);

  return (
    <Context.Provider
      value={{
        peopleData,
        selectedPeople,
        setSelectedPeople,
        isLoading,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
