function changeName(name) {
  return {
    type: 'CHANGE_NAME',
    name: name
  }
}

function changeSize(size) {
  return {
    type: 'CHANGE_SIZE',
    name: size
  }
}

export default {changeName, changeSize}