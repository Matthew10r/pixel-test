import React, { useContext, useState, useEffect } from 'react';
import { Select } from 'antd';
import find from 'lodash/find';

// provider
import { Context as HomePageProviderContext } from '@/providers/homePageProvider';

// type
import type { Data } from '@/providers/homePageProvider';

// style
import style from './style.module.less';

const SelectPeopleComponent: React.FC<unknown> = () => {
  const context = useContext(HomePageProviderContext);
  const [selected, setSelected] = useState<string[]>([]);
  const { peopleData, isLoading, setSelectedPeople, selectedPeople } = context;

  useEffect(() => {
    if (peopleData.length) {
      const result: Data[] = [];
      selected.forEach((item) => {
        const _result = find(peopleData, { id: item });

        if (_result) {
          result.push(_result);
        }
      }, []);
      setSelectedPeople(result);
    }
  }, [selected, peopleData]);

  return (
    <Select
      value={selectedPeople.map((selectedPerson) => selectedPerson.id)}
      allowClear
      disabled={isLoading}
      className={style.select}
      mode="multiple"
      loading={isLoading}
      onChange={(e: string[]) => setSelected(e)}
    >
      {peopleData.map((option) => (
        <Select.Option key={option.id} value={option.id}>
          {option.name}
        </Select.Option>
      ))}
    </Select>
  );
};

export default SelectPeopleComponent;
