
function createUserProfiles(names, modifiedNames){
  return names.map((name, i) => ({
    id: i + 1,
    originalName: name,
    modifiedName: modifiedNames[i]
  }));
}
export {createUserProfiles};
