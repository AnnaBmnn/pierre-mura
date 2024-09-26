<script setup lang="ts">
import { components } from '~/slices'

const prismic = usePrismic()
const { data: serie } = useAsyncData('$serie', () =>
  prismic.client.getAllByType("serie", {
    orderings: [
      { field: "my.serie.publishDate", direction: "desc" },
    ],
  })
)
const { data: page } = useAsyncData('index', () =>
  prismic.client.getByUID('page', 'home')
)

useHead({
  title: prismic.asText(page.value?.data.title)
})
</script>


<template>
  <SliceZone
    wrapper="main"
    :slices="page?.data.slices ?? []"
    :components="components"
  />
  <div 
    :key="serieSingle.uid" 
    v-for="serieSingle in serie" 
    :slice="serieSingle.data.slices[0]"
  >
    <SliceZone
      wrapper="main"
      :slices="serieSingle?.data.slices.slice(0) ?? []"
      :components="components"
    />
  </div>
</template>
