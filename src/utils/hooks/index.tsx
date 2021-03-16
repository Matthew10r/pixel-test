import React, { useState } from 'react';

export const testing = (): void => console.log('testing');

export const useLoading = (): [
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>
] => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  return [isLoading, setIsLoading];
};
