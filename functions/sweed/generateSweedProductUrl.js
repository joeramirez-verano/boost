/**
 *
 * @param storeSlug
 * @param product
 */
export default function generateSweedProductUrl(storeSlug, product) {
  const baseUrl = `/locations/${storeSlug}/menu/menu/`

  const categoryName = product.category.name.toLowerCase().replace(/ /g, '-')
  const categoryId = product.category.id

  const subcategoryName = product.subcategory.name.toLowerCase().replace(/ /g, '-')

  const strainPrevalence = product.strain && product.strain.prevalence ? product.strain.prevalence.name.toLowerCase() : null
  const strainName = product.strain ? product.strain.name.toLowerCase().replace(/ /g, '-') : null

  let productTypeName =
    product.productType && product.productType.name
      ? product.productType.name.toLowerCase().replace(/ /g, '-')
      : product.name.toLowerCase().replace(/ /g, '-').replace(/:/g, '').replace(/,/g, '').replace(/--/g, '-')

  const variant = product.variants[0]
  const variantName = variant.name
    .toLowerCase()
    // eslint-disable-next-line no-useless-escape
    .replace(/[\[\]]/g, '') // Remove square brackets
    .replace(/ /g, '-') // Replace spaces with hyphens
    .replace(/,/g, '-') // Replace commas with hyphens
    .replace(/--/g, '-') // Replace double hyphens with single hyphen

  const variantId = variant.id

  let url = `${baseUrl}${categoryName}-${categoryId}/${subcategoryName}`
  if (strainPrevalence && strainName) {
    url += `-${strainPrevalence}-${strainName}`
  }

  url += `-${productTypeName}-${variantName}-${variantId}`
  return url
}
