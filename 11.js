 
var body = $response.body
var url = $request.url

if (body) {
  var obj = JSON.parse($response.body)
  console.log(obj)
  $done({ body: JSON.stringify(obj) })
} else {
  $done({})
}
