const raml2json = require('ramldt2jsonschema')
const wap = require('webapi-parser').WebApiParser
const path = require('path')
const fs = require('fs')
const yaml = require('js-yaml')

const fpath = path.resolve(path.join(__dirname, '../spec/complex_cat.json'))

function convertWithRamldt2jsonschema () {
  const jsonData = fs.readFileSync(fpath).toString()

  const raml = raml2json.js2dt(jsonData, 'Cat')
  console.log(`#%RAML 1.0 Library\n${yaml.safeDump({ types: raml }, {'noRefs': true})}`)
}

async function convertWithWebapiParser () {
  const jsonData = fs.readFileSync(fpath).toString()
  const parsedSchema = {
    openapi: '2.0',
    definitions: {
      Cat: JSON.parse(jsonData)
    }
  }
  const model = await wap.oas20.parse(JSON.stringify(parsedSchema))
  console.log(model.getDeclarationByName('Cat').toRamlDatatype)
}


// convertWithRamldt2jsonschema()
convertWithWebapiParser()
