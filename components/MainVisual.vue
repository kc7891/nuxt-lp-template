<template lang="pug">
    section.main-visual
        .image
        .logo(v-if="showLogo")
</template>
<style lang="scss" scoped>
.main-visual {
    height: 100vh;
    width: 100vw;
    position: relative;
    background-color: #30363a;
    .image {
        position: absolute;
        width: 100%;
        height: 100%;
        background: url('/img/main/main-visual1.jpg') no-repeat center top;
        background-size: cover;
    }
    .logo {
        background: url('/img/main/logo.png') no-repeat center center;
        background-size: 100% auto;
        width: 500px;
        height: 100px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
    }
}
</style>
<script>
export default {
    data: () => {
        return {
            showLogo: true,
            slideshow: false,
            delighter: false,
        }
    },
    created() {
    }
}
</script>
