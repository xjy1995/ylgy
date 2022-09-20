var body = $response.body
var url = $request.url

if (body) {
  var obj = JSON.parse($response.body)
  // obj.data ={
  //   "map_md5" : [
  //     "046ef1bab26e5b9bfe2473ded237b572",
  //     "046ef1bab26e5b9bfe2473ded237b572"
  //   ],
  //   "map_seed" : [
  //     1695523272,
  //     455944082,
  //     3477455185,
  //     895092858
  //   ]
  // }
  obj.data.map_md5 = ['046ef1bab26e5b9bfe2473ded237b572', '046ef1bab26e5b9bfe2473ded237b572']
  $done({ body: JSON.stringify(obj) })
} else {
  $done({})
}
