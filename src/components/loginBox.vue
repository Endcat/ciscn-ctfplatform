<template>
    <div class="base-container" :style="baseSize">
    </div>
</template>

<script>
    export default {
        name: "baseObject",
        props: {
            baseWidth: String,
            baseHeight: String,
        },
        data: function () {
            return {
                baseSize: {
                    width: this.baseWidth + 'px',
                    height: this.baseHeight + 'px',
                }
            }
        }
    }
</script>

<style scoped>
    .base-container {
        border-radius: 15px;
        box-shadow: 0 10px 50px 0 rgb(107, 66, 217);
    }
</style>
