import instance from '@/services';

// types
import type { AxiosResponse } from 'axios';

export interface People {
  name: string;
  email: string;
}

interface GetPeopleResponse {
  data: People[];
}

const getPeople = async (): Promise<AxiosResponse<GetPeopleResponse>> => {
  const data = await instance.get('/users');
  return data;
};

export default getPeople;
