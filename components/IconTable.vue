<template lang="pug">
    section.iconTable
        h1.section-title Icon Table
        ul.icons
          li.icon
            .icon-image
              span.icon-award-solid
            .icon-title
          li.icon
            .icon-image
              span.icon-beer-solid
            .icon-title
          li.icon
            .icon-image
              span.icon-bell-reqular
            .icon-title
          li.icon
            .icon-image
              span.icon-cloud-download
            .icon-title
          li.icon
            .icon-image
              span.icon-cog-solid
            .icon-title
          li.icon
            .icon-image
              span.icon-edit-reqular
            .icon-title

</template>
<style lang="scss" scoped>
.iconTable {
  padding: 100px 0;
  text-align: center;
  background-color: $secondary;
  .icons {
    display: flex;
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
