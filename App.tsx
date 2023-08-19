import DropDownPicker from 'react-native-dropdown-picker';
import React, {useState, useEffect} from 'react';
import {StatusBar, Text, View} from 'react-native';

type FeelingType = null | 'friendly' | 'inpeace' | 'confident' | 'exited';

export default function App() {
  // Dropdown
  const [open, setOpen] = useState(false);
  const [feeling, setFeeling] = useState<FeelingType | null>(null);
  const [items, setItems] = useState([
    {label: 'Friendly', value: 'friendly'},
    {label: 'In Peace', value: 'inpeace'},
    {label: 'Confident', value: 'confident'},
    {label: 'Exited', value: 'exited'},
  ]);

  // Color end Phrase
  const [backgroundColor, setBackgroundColor] = useState<string>('gray');
  const [message, setMessage] = useState<string>('How are you feeling today?');

  useEffect(() => {
    switch (feeling) {
      case 'friendly':
        setBackgroundColor('lightgreen');
        setMessage("I'm delighted that you're feeling friendly!");
        break;
      case 'inpeace':
        setBackgroundColor('lightblue');
        setMessage("I'm glad to hear you're at peace.");
        break;
      case 'confident':
        setBackgroundColor('deepskyblue');
        setMessage("It's great to hear you're feeling confident!");
        break;
      case 'exited':
        setBackgroundColor('gold');
        setMessage("I'm excited that you're excited!");
        break;

      default:
        setBackgroundColor('gray');
        setMessage("'How are you feeling today?'");
        break;
    }
  }, [feeling]);

  const dynamicStyle = {
    backgroundColor: backgroundColor,
    flex: 1,
    padding: 10,
  };

  return (
    <>
      <StatusBar />
      <View style={dynamicStyle}>
        <Text>{message}</Text>

        <DropDownPicker
          open={open}
          value={feeling}
          items={items}
          setOpen={setOpen}
          setValue={setFeeling}
          setItems={setItems}
        />
      </View>
    </>
  );
}
