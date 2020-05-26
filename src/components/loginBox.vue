<template>
    <div  class="base-container" :style="$store.state.activeScheme.boxShadow">
        <div class="nav-bar">
            <ul>
                <li @click="goHomepage" class="red-btn"></li>
                <li @click="goHomepage" class="yellow-btn"></li>
                <li @click="goHomepage" class="green-btn"></li>
            </ul>
        </div>
        <div class="info-block">
            <div class="info-title">
                Login
            </div>
        </div>
        <div class="content">
            <form action="xxx" id="login-form">
                <label>
                    <input type="text" v-model="teamName" name="team-name" placeholder="Team Name"><br>
                    <input type="text" v-model="teamPasswd" name="team-passwd" @keyup="starredPasswd" placeholder="Password">
                </label><br>
                <input :style="$store.state.activeScheme.boxShadow" @click="goHomepage" class="submit-btn" value="Submit">
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "baseObject",
        props: {
            baseWidth: String,
            baseHeight: String,
            teamName: String,
            teamPasswd: String,
        },
        data: function () {
            return {
                baseSize: {
                    width: this.baseWidth + 'px',
                    height: this.baseHeight + 'px',
                }
            }
        },
        methods: {
            starredPasswd() {
                this.teamPasswd = '*'.repeat(this.teamPasswd.length)
            },
            goHomepage() {
                this.$router.push("/homepage");
            }
        }
    }

</script>

<style scoped>
    .base-container {
        width: 500px;
        height: 600px;

        position: relative;
        border-radius: 15px;
        top:50%;
        left: 50%;
        transform: translate(-50%, -50%);
        transition: all 0.2s linear;
    }
    .base-container:hover {
        transform: translate(-50%, -51%);
    }
    .nav-bar {
        width: 100%;
        height: 10%;
    }
    .info-block {
        height: 20%;
        width: 100%;
        text-align: center;
        font-size: 40px;
        font-family: "Microsoft JhengHei",sans-serif;
    }
    .info-title {
        position: relative;
        padding-top: 40px;
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
    form {
        position: relative;
        margin: 0 15% 0 15%;
    }
    input {
        position: relative;
        margin-top: 10%;
        height: 70px;
        border-radius: 35px;
        width: 100%;
        outline-style: none;
        border: 1px solid #ccc;
        font-size: 24px;
        font-family: "Microsoft JhengHei",sans-serif;
        text-indent: 20px;
    }
    .submit-btn{
        text-indent: 0;
        text-align: center;
        transition: all 0.2s linear;
        border: none;
        background: linear-gradient(to bottom right, rgb(63, 186, 80), rgb(119, 180, 124));
    }
    .submit-btn:active{
        color: white;
        background: linear-gradient(to bottom right, rgb(174, 186, 248), rgb(202, 218, 248));
    }
    .submit-btn:hover {
        color: white;

    }
</style>
