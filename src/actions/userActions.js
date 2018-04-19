export const fetchUser = () => dispatch => {
  console.log('calling');
  dispatch({
    type: "FETCH_USER_FULFILLED",
    payload: { name: "will", age: 35}
  })
}


export const setUserName = (name) => dispatch =>{

  dispatch({
    type: 'SET_USER_NAME',
    payload: name
  })

  dispatch({
    type: 'SET_USER_AGE',
    payload: 12
  })

}

export function setUserAge(age){

  return {
    type: 'SET_USER_AGE',
    payload: age
  }
}
