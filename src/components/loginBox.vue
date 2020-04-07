<template>
    <div class="base-container" :style="baseSize">
        <div class="nav-bar">
            <ul>
                <li class="red-btn"></li>
                <li class="yellow-btn"></li>
                <li class="green-btn"></li>
            </ul>
        </div>
        <div class="content">
            <form action="xxx" id="login-form">
                <label>
                    <input type="text" name="team-name"><br>
                    <input type="text" name="team-passwd">
                </label><br>
                <input type="submit" value="Submit">
            </form>
        </div>
        <div class="footer"></div>
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
        transition: all 0.5s linear;
    }
    .base-container:hover {
        transform: translate(0,-10px);
    }
    .nav-bar {
        width: 100%;
        height: 10%;
    }
    .nav-bar ul {
        height: 100%;
        list-style: none;
        margin-left: 10px;
    }
    .nav-bar ul li {
        float: left;
        width: 26px;
        height: 26px;
        border-radius: 13px;
        border: 1px solid rgb(152, 127, 255);
        margin-left: 10px;
        margin-top: 15px;
    }
    .red-btn {
        background-color: rgb(220,90,77);
        transition: all 0.2s linear;
    }
    .red-btn:hover {
        background-color: rgb(220, 41, 36);
    }
    .yellow-btn {
        background-color: rgb(249,200,72);
        transition: all 0.2s linear;
    }
    .yellow-btn:hover {
        background-color: rgb(249, 242, 68);
    }
    .green-btn {
        background-color: rgb(63,186,80);
        transition: all 0.2s linear;
    }
    .green-btn:hover {
        background-color: rgb(87, 224, 49);
    }
    .content {
        width: 100%;
        height: 70%;
    }
    label input {
        height: 40px;
    }
    .footer {
        width: 100%;
        height: 15%;
    }
</style>
