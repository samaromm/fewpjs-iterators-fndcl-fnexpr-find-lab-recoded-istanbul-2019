const testVar = {}

function testFunc() {
  return "hi"
}

const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
  //...
]
superbowlWin(record)

function superbowlWin(arr){
  if(arr.result=='w')return arr.year
  return 'undefined'
}