var body = $response.body
var url = $request.url

if (body) {
  var obj = JSON.parse($response.body)
  obj.blockTypeData = {
    "1": 100,
    "2": 0,
    "3": 0,
    "4": 0,
    "5": 0,
    "6": 0,
    "7": 0,
    "8": 0,
    "9": 0,
    "10": 0,
    "11": 0,
    "12": 0,
    "13": 0,
    "14": 0,
    "15": 0,
    "16": 0
  }
  $done({ body: JSON.stringify(obj) })
} else {
  $done({})
}
