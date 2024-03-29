# Old vs new dt2js comparison

Input: `complex_cat.raml#Cat`

```diff
- old
+ new
```

## Structural differences

```diff
- draft-06 schema
+ draft-07 schema

- super-flat json, bubbling `anyOf` from unions to the very top of the schema
+ transforms unions using `anyOf` and keeps it at the original depth/place

- schema defined in the root of json document
+ defines schema in `definitions` and uses `$ref`
```

## Low-level differences

```diff
- all types of dates converted to string with long patterns
+ all types of dates converted to string with "format"

- number with "format: int32" not changed
+ number with "format: int32" converted to type: integer

- object property's "facets" converted
+ object property's "facets" not converted

- converted union of arrays incorrectly
+ converts union of arrays correctly
(see Cat.properties.proscons)

- converted example "displayName" to "title"
+ keeps the "displayName" property

- pattern regex kept as is
+ pattern regex wrapped in `^...$`
```
