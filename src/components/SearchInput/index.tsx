import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDebouncedValue} from '../../hooks/useDebouncedValue';

interface Props {
  onDebounce: (value: string) => void;
}

export default function SearchInput({onDebounce}: Props) {
  const [textValue, setTextValue] = useState('');
  const {debouncedValue} = useDebouncedValue(textValue, 500);

  useEffect(() => {
    onDebounce(debouncedValue);
  }, [debouncedValue]);

  return (
    <KeyboardAvoidingView>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Buscar Pokémon"
            style={styles.textInput}
            autoCapitalize="none"
            autoCorrect={false}
            value={textValue}
            onChangeText={setTextValue}
          />

          <Icon name="search-outline" color="grey" size={30} />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {},

  inputContainer: {
    backgroundColor: '#F3F1F3',
    borderRadius: 50,
    paddingVertical: 2,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  textInput: {
    flex: 1,
    top: Platform.OS == 'ios' ? 0 : 1.5,
  },
});
