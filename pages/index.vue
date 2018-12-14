<template>
  <section class="page">
    <MainVisual/>
    <About/>
    <IconTable/>
    <Access/>
    <Contact/>
  </section>
</template>

<script>
import MainVisual from '~/components/MainVisual.vue'
import About from '~/components/About.vue'
import IconTable from '~/components/IconTable.vue'
import Access from '~/components/Access.vue'
import Contact from '~/components/Contact.vue'

export default {
  components: {
    MainVisual,
    About,
    IconTable,
    Access,
    Contact,
  }
}
</script>

<style>
</style>
