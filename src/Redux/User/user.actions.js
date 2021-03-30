export function setCurrentUser(user) {
  ({
    type: "SET_CURRENT_USER",
    payload: user
  })
}