<template lang="pug">
    section.about
        h1 About
        p.description This is nuxt lp sample page.
          br
          | You can create landing page quickly using this template.
</template>
<style lang="scss" scoped>
.about {
  padding: 100px 0;
  text-align: center;
  h1 {
    font-size: 50px;
    padding-bottom: 30px;
  }
  .description {
    font-size: 30px;
  }
}
</style>
<script>
export default {
    data: () => {
        return {
        }
    },
}
</script>
