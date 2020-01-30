const testVar = {}

function testFunc() {
  return "hi"
}


function superbowlWin(arr){
  let result = arr.find(function(e){return e['result']=='w'})
  if(result)return result.year
}