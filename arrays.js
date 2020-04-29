var chocolateBars = ["Snickers", "Socks", "Kitkat"]
function addElementToBeginningOfArray(element, array) {
  var newarray = [element, ...array]
  return newarray
}
function destructivelyAddElementToBeginningOfArray(elemet, array) {
  array.unshift(element)
  return array
}
function addElementToEndOfArray(element, array) {
  var newarray = [...array, element]
  return newarray
}
function destructivelyAddElementToEndOfArray(element, array) {
  array.push(element)
  return array
}
