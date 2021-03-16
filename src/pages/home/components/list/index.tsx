import React, { useContext } from 'react';
import { List, Avatar, Card, Button } from 'antd';
import filter from 'lodash/filter';

// provider
import { Context as HomePageProviderContext } from '@/providers/homePageProvider';

// type
import type { Data } from '@/providers/homePageProvider';

const ListComponent: React.FC<unknown> = () => {
  const context = useContext(HomePageProviderContext);
  const { selectedPeople, setSelectedPeople } = context;

  const removeItemFromList = (person: Data) =>
    setSelectedPeople(
      filter(
        selectedPeople,
        (selectedPerson) => selectedPerson.id !== person.id
      )
    );

  return (
    <Card>
      <List
        itemLayout="horizontal"
        dataSource={selectedPeople}
        renderItem={(person) => (
          <List.Item
            actions={[
              <Button onClick={() => removeItemFromList(person)}>
                Delete
              </Button>,
            ]}
          >
            <List.Item.Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title={<a href="https://ant.design">{person.name}</a>}
              description={person.email}
            />
          </List.Item>
        )}
      />
    </Card>
  );
};

export default ListComponent;
