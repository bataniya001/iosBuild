import React, { useMemo } from 'react'; 
import { View, Text, StyleSheet} from 'react-native';
const App = () => {
// An expensive computation that we want to memoize 
const expensiveValue = useMemo(() => {
// Perform some time-consuming computation or operation here 
let result = 0;
for (let i = 0; i < 100000000; i++) {
result += i; }
return result; 
}, []);
return ( 
<View style={styles.sectionContainer}>
<Text>Expensive Value: {expensiveValue}</Text> 
</View>
); 
};


const styles = StyleSheet.create({
  sectionContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingHorizontal: 24,
  },
 
});

export default App;
