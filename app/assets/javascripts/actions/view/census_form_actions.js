export function setCensusFormValues(values = {}) {
  const keys = Object.keys(values);
  const updates = {};
  let i;
  for (i = 0; i < keys.length; i++) {
    updates[keys[i]] = values[keys[i]];
  }
  return {
    type: 'SET_CENSUS_FORM_VALUES',
    ...updates,
  };
}


export function setCensusFormValuesToDefault() {
  return {
    type: 'SET_CENSUS_FORM_VALUES_TO_DEFAULT',
  };
}
