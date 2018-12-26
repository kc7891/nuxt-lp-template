<template lang="pug">
    section.access
        h1.section-title Access
        .address
          span.address-text Kita-Aoyama Minato-ku, Tokyo, Japan
          a.gmap-link(href='https://goo.gl/maps/FtMSWVdoYHF2' target="_blank") Google map
        .gmap
          iframe(src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12965.939157434123!2d139.7118387!3d35.6650633!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4054b8b23563631c!2sOmote-Sando+Station!5e0!3m2!1sen!2sjp!4v1544779700130" width="600" height="450" frameborder="0" style="border:0" allowfullscreen)
</template>
<style lang="scss" scoped>
.access {
    padding: 100px 0;
    text-align: center;
    .address {
      margin-bottom: 30px;
    }
    .address {
      .address-text {
        margin-right: 10px;
        font-size: 18px;
      }
      .gmap-link {
        color: black;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
    .gmap {
      width: 75%;
      margin: 0 auto;
      &> iframe {
        width: 100%!important;
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
