const fs = require('fs')
const path = require('path')


function logServer(json, filename = 'output.json'){
  const filePath = path.join(__dirname, filename)
  const jsonString = JSON.stringify(json, null, 2)

  fs.writeFile(filePath, jsonString, (err) => {
    if (err) {
      console.error('Error writing JSON to file:', err)
    } else {
      console.log('JSON written to file successfully.')
    }
  })
}

const url =
  'https://data.tainan.gov.tw/api/3/action/datastore_search?resource_id=2ac2f474-a367-4019-84af-c5e8f9475611&limit=153'

fetch(url)
  .then(function (response) {
    return response.json()
  })
  .then(function (myJson) {
    logServer(
      myJson.result.records.map((item) => {
        return {
          area: '南部',
          city: '台南市',
          name: item.機構名稱,
          phone: item.機構電話,
          address: item.機構地址,
        }
      }),
      'zzz.json',
    )
  })


