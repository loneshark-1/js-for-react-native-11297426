# Array Manipulation and User Profiles
Student ID: 11297426

This project contains functions to manipulate arrays and create user profiles from the processed data.

## Task 1 - Process Numbers Array
The processArray function in arrayManipulation.js takes an array of numbers and returns a new array with evens squared and odds tripled. 

## Task 2 - Format Strings
The formatArrayStrings function also in arrayManipulation.js formats strings based on the processed numbers array from Task 1. It capitalizes strings for even numbers and lowercases for odds.

## Task 3 - Create User Profiles  
The createUserProfiles function in userInfo.js takes the original and formatted name arrays to create objects with user profile data like id, original name, and modified name.

## How to Use
1. Import the functions from the files
2. Pass sample data arrays to the functions 
3. View output

For example:
import { processArray } from "./js-for-react-native-11297426/arrayManipulation";
import { formatArrayStrings } from "./js-for-react-native-11297426/arrayManipulation";
import { createUserProfiles } from "./userInfo";

// sample data 
const numbers = [1, 2, 3, 4, 5];
const strings = ['james', 'paul', 'petter', 'patrick','phill'];
// process data
const processedNumbers = processArray(numbers);
const formattedStrings = formatArrayStrings(strings, processedNumbers);
// create profiles  
const profiles = createUserProfiles(names, modifiedNames);

console.log(profiles)
