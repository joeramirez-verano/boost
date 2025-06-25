import {hookstate, useHookstate} from '@hookstate/core'

export const strainsFiltersState = hookstate({
  filters: [],
  sortOptions: []
})

const strainsFiltersControllerHandler = (state) => {
  return {
    setInitialFilters: (strains) => {
      const typesSet = new Set()
      const lineagesSet = new Set()
      const terpenesSet = new Set()
      const effectsSet = new Set()
      const flavorsSet = new Set()
      const medicalpotentialSet = new Set()
      strains.forEach(({strainFields: {type, lineage, terpenes, effects, flavor, medicalpotential}}) => {
        type?.forEach(typesSet.add, typesSet)
        lineage?.map((lineage) => lineage.title).forEach(lineagesSet.add, lineagesSet)
        terpenes?.forEach(terpenesSet.add, terpenesSet)
        effects?.forEach(effectsSet.add, effectsSet)
        flavor?.forEach(flavorsSet.add, flavorsSet)
        medicalpotential?.forEach(medicalpotentialSet.add, medicalpotentialSet)
      })

      const filters = []
      if (typesSet.size > 0)
        filters.push({
          id: 'types',
          name: 'Types',
          options: [...typesSet].sort()
        })

      if (lineagesSet.size > 0)
        filters.push({
          id: 'lineages',
          name: 'Lineages',
          options: [...lineagesSet].sort()
        })

      if (terpenesSet.size > 0)
        filters.push({
          id: 'terpenes',
          name: 'Terpenes',
          options: [...terpenesSet].sort()
        })

      if (effectsSet.size > 0)
        filters.push({
          id: 'effects',
          name: 'Effects',
          options: [...effectsSet].sort()
        })
      if (flavorsSet.size > 0)
        filters.push({
          id: 'flavors',
          name: 'Flavors',
          options: [...flavorsSet].sort()
        })
      if (medicalpotentialSet.size > 0)
        filters.push({
          id: 'medicalpotential',
          name: 'Medical Potential',
          options: [...medicalpotentialSet].sort()
        })

      state.filters.set(filters)
    }
  }
}

export const useStrainsFilters = () => useHookstate(strainsFiltersState)
export const strainsFilterController = strainsFiltersControllerHandler(strainsFiltersState)
export const useStrainsFilterController = () => strainsFiltersControllerHandler(useHookstate(strainsFiltersState))
