import {brandsInState} from '@/components/organisms/BrandGallery/brandInStateConfig'

/**
 *
 * @param slug
 */
export default function findBrandStateBySlug(slug) {
  for (const [state, brands] of Object.entries(brandsInState)) {
    const matchingBrand = brands.find((brand) => brand.slug === slug)
    if (matchingBrand) {
      return {state, brand: matchingBrand}
    }
  }
  return {state: null, brand: null}
}
