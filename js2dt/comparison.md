# Old vs new dt2js comparison

Input: `complex_cat.json#Cat`

```diff
- old
+ new
```

## Structural differences

None.

## Low-level differences

```diff
- did not convert properties: minProperties, maxProperties, discriminator, items, uniqueItems, maxItems, minItems, enum, format (in numbers), xml, default, example, multipleOf
+ does convert mentioned properties

- optional properties were marked with a trailing "?"
+ optional properties are marked with "required: false"

- used types' names to specify property type
+ always uses "type:" keyword and inline type declaration

- converted dates with a "pattern" property to specific RAML dates types (e.g. datetime-only)
+ converts dates to strings with "pattern" property

- converted string with "media" to "type: file"
+ converts it incorrectly (stays a string)
```
