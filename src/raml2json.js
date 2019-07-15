const raml2json = require('ramldt2jsonschema')
const wap = require('webapi-parser').WebApiParser
const path = require('path')
const fs = require('fs')

const fpath = path.resolve(path.join(__dirname, '../spec/complex_cat.raml'))

function convertWithRamldt2jsonschema () {
  const ramlData = fs.readFileSync(fpath).toString()

  const schema = raml2json.dt2js(ramlData, 'Cat')
  console.log(JSON.stringify(schema, null, 2))
}

async function convertWithWebapiParser () {
  const model = await wap.raml10.parse(`file://${fpath}`)
  const resolved = await wap.raml10.resolve(model)
  console.log(resolved.getDeclarationByName('Cat').toJsonSchema)
}


// convertWithRamldt2jsonschema()
convertWithWebapiParser()
