<template lang="pug">
    section.iconTable
        h1.section-title.with-object Icon Table
        ul.icons
          li.icon
            .icon-image
              span.icon-award-solid
            .icon-title Award
            .icon-description This is award icon.
          li.icon
            .icon-image
              span.icon-beer-solid
            .icon-title Beer
            .icon-description This is beer icon. If you rotate -90deg, you can use this as briefcase.
          li.icon
            .icon-image
              span.icon-bell-reqular
            .icon-title Bell
            .icon-description This is bell icon.
          li.icon
            .icon-image
              span.icon-cloud-download
            .icon-title Download
            .icon-description This is download from cloud icon.
          li.icon
            .icon-image
              span.icon-cog-solid
            .icon-title Gear
            .icon-description This is gear icon which looks like a chikuwa.
          li.icon
            .icon-image
              span.icon-edit-reqular
            .icon-title Edit
            .icon-description This is edit icon.

</template>
<style lang="scss" scoped>
.iconTable {
  padding: 100px 0;
  text-align: center;
  background-color: $secondary;
    .icons {
        display: flex;
        flex-wrap: wrap;
        width: 60%;
        margin: 0 auto;
        li.icon {
          width: 33%;
          margin-bottom: 50px;
            .icon-image {
              span {
                width: 80px;
                height: 80px;
              }
              margin-bottom: 10px;
            }
            .icon-title {
              font-size: 18px;
              font-weight: bold;
              margin-bottom: 10px;
            }
            .icon-description {
              padding: 0 10px;
            }
        }
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
