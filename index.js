import { processArray } from "./js-for-react-native-11297426/arrayManipulation";
import { formatArrayStrings } from "./js-for-react-native-11297426/arrayManipulation";
import { createUserProfiles } from "./userInfo";


const numbers = [1, 2, 3, 4, 5];
const strings = ['james', 'paul', 'petter', 'patrick','phill'];
const processedNumbers = processArray(numbers);
const formattedStrings = formatArrayStrings(strings, processedNumbers);
const profiles = createUserProfiles(names, modifiedNames);
console.log(profiles);
