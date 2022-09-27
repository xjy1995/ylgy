var body = $response.body
var url = $request.url

if (body) {
  var obj = JSON.parse($response.body)
  obj.map_seed = [0, 0, 0, 0]
  $done({ body: JSON.stringify(obj) })
} else {
  $done({})
}
