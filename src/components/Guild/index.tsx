import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityProps
} from 'react-native';
import { Feather } from '@expo/vector-icons';

import { styles } from './styles';

import { GuildIcon } from '../GuildIcon';
import { theme } from '../../global/styles/theme';

type Guild = {
  id: string;
  name: string;
  icon: string | null;
  owner: boolean;
}

type GuildProps = TouchableOpacityProps & {
  data: Guild
}

export function Guild({ data, ...rest }: GuildProps) {

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      {...rest}
    >
      <GuildIcon />

      <View style={styles.content}>
        <View>
          <Text style={styles.title}>
            {data.name}
          </Text>

          <Text style={styles.type}>
            {data.owner ? 'Administrador' : 'Convidado'}
          </Text>
        </View>
      </View>

      <Feather
        name="chevron-right"
        color={theme.colors.heading}
        size={24}
      />
    </TouchableOpacity>
  );
}
