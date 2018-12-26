<template>
  <section class="page">
    <MainVisual/>
    <About/>
    <IconTable/>
    <Gallery/>
    <Access/>
    <Contact/>
  </section>
</template>

<script>
import MainVisual from '~/components/MainVisual.vue'
import About from '~/components/About.vue'
import IconTable from '~/components/IconTable.vue'
import Gallery from '~/components/Gallery.vue'
import Access from '~/components/Access.vue'
import Contact from '~/components/Contact.vue'

export default {
  components: {
    MainVisual,
    About,
    IconTable,
    Gallery,
    Access,
    Contact,
  }
}
</script>

<style>
</style>
