<template lang="pug">
    section.contact
        h1.section-title Contact
        .main-description Please feel free to contact us.
        .e-mail
            a(href="mailto:info@sample-com?Subject=Hello") info@sample-com
</template>
<style lang="scss" scoped>
.contact {
    padding: 100px 0;
    text-align: center;
    background-color: $primary-variant;
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
