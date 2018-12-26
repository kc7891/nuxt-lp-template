<template lang="pug">
    section.gallery
        h1.section-title Gallery
        ul.gallery
            li.picture
                a
                    img(src="/img/gallery/img01.jpg")
            li.picture
                a
                    img(src="/img/gallery/img02.jpg")
            li.picture
                a
                    img(src="/img/gallery/img03.jpg")
</template>
<style lang="scss" scoped>
.gallery {
    padding: 100px 0;
    text-align: center;
    background-color: $secondary-variant;
    color: white;
    .main-description {
        margin-bottom: 20px;
    }
    .e-mail {
        font-size: 20px;
        a {
            color: white;
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
