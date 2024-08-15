/**
 * @schema StoreRegion
 * type: object
 * description: The region's details.
 * x-schemaName: StoreRegion
 * required:
 *   - id
 *   - name
 *   - currency_code
 * properties:
 *   id:
 *     type: string
 *     title: id
 *     description: The region's ID.
 *   name:
 *     type: string
 *     title: name
 *     description: The region's name.
 *   currency_code:
 *     type: string
 *     title: currency_code
 *     description: The region's currency code.
 *   automatic_taxes:
 *     type: boolean
 *     title: automatic_taxes
 *     description: The region's automatic taxes.
 *   countries:
 *     type: array
 *     description: The region's countries.
 *     items:
 *       $ref: "#/components/schemas/BaseRegionCountry"
 *   payment_providers:
 *     type: array
 *     description: The region's payment providers.
 *     items:
 *       $ref: "#/components/schemas/AdminPaymentProvider"
 *   metadata:
 *     type: object
 *     description: The region's metadata.
 *   created_at:
 *     type: string
 *     format: date-time
 *     title: created_at
 *     description: The region's created at.
 *   updated_at:
 *     type: string
 *     format: date-time
 *     title: updated_at
 *     description: The region's updated at.
 * 
*/
