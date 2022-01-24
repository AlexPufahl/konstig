function deleteProperty(object, property){
  let clonedObject = JSON.parse(JSON.stringify(object));
  delete clonedObject[property];
  return clonedObject;
}

export default deleteProperty;