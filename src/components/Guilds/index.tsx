import React from 'react';
import { View, FlatList } from 'react-native';

import { Guild } from '../Guild';
import { ListDivider } from '../ListDivider';

import { styles } from './styles';

type Guild = {
  id: string;
  name: string;
  icon: string | null;
  owner: boolean;
}

type GuildsProps = {
  handleGuildSelect: (guild: Guild) => void
}

export function Guilds({ handleGuildSelect }: GuildsProps) {
  const guilds = [
    { id: '1', name: 'Lendários', icon: 'image.png', owner: true },
    { id: '2', name: 'Galera do Game', icon: 'image.png', owner: true },
    { id: '3', name: 'Outro servidor', icon: 'image.png', owner: true },
    { id: '4', name: 'Lendários', icon: 'image.png', owner: true },
    { id: '5', name: 'Lendários', icon: 'image.png', owner: true },
    { id: '6', name: 'Lendários', icon: 'image.png', owner: true },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={guilds}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Guild
            data={item}
            onPress={() => handleGuildSelect(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <ListDivider />}
        style={styles.guilds}
      />
    </View>
  );
}
