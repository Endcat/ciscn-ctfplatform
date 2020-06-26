<template>
    <div class="base-container" :style="$store.state.activeScheme.boxShadow">
        <div class="nav-bar">
            <ul>
                <li class="red-btn"></li>
                <li class="yellow-btn"></li>
                <li class="green-btn"></li>
            </ul>
        </div>
        <div class="info-block">
            <div class="info-title">
                Login
            </div>
        </div>
        <div class="content">
            <form action="xxx" id="login-form">
                    <input
                        type="text"
                        v-model="teamEmail"
                        name="team-name"
                        placeholder="Email"
                    /><br />
                    <input
                        type="text"
                        v-model="teamPasswd"
                        name="team-passwd"
                        @keyup="starredPasswd"
                        placeholder="Password"
                    /><br />
                <input
                    :style="$store.state.activeScheme.boxShadow"
                    @click="loginFunc"
                    class="submit-btn"
                    value="Submit"
                />
                <input
                        :style="$store.state.activeScheme.boxShadow"
                        @click="goRegister"
                        class="register-btn"
                        value="Register"
                />
            </form>
        </div>
    </div>
</template>

<script>
    import qs from 'qs';
export default {
    name: "baseObject",
    props: {
        baseWidth: String,
        baseHeight: String,
        teamEmail: String,
        teamPasswd: String,
        teamShowPasswd: String,
        currentPasswdLength: Number,
    },
    data: function() {
        return {
            baseSize: {
                width: this.baseWidth + "px",
                height: this.baseHeight + "px",
            },
        };
    },
    computed: {},
    methods: {
        starredPasswd() {},
        loginFunc() {
            console.log("Team Email: " + this.teamEmail);
            console.log("Team Passwd: " + this.teamPasswd);
            this.$http({
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                method: 'POST',
                url: '/sessions',
                data: qs.stringify({
                    "username": this.teamEmail,
                    "password": this.teamPasswd,
                })
            }).then((res) => {
                console.log(res);
            }).catch((res) => {
                console.log(res);
            })
        },
        goRegister() {
            this.$router.push({ path: "/register" })
        }
    },
};
</script>

<style scoped>
.base-container {
    width: 500px;
    height: 700px;

    position: relative;
    border-radius: 15px;
    top: 50%;
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
    font-family: "Microsoft JhengHei", sans-serif;
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
    background-color: rgb(220, 90, 77);
    transition: all 0.2s linear;
}
.red-btn:hover {
    background-color: rgb(220, 41, 36);
}
.yellow-btn {
    background-color: rgb(249, 200, 72);
    transition: all 0.2s linear;
}
.yellow-btn:hover {
    background-color: rgb(249, 242, 68);
}
.green-btn {
    background-color: rgb(63, 186, 80);
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
    font-family: "Microsoft JhengHei", sans-serif;
    text-indent: 20px;
}
.submit-btn {
    text-indent: 0;
    text-align: center;
    transition: all 0.2s linear;
    border: none;
    background: linear-gradient(
        to bottom right,
        rgb(63, 186, 80),
        rgb(119, 180, 124)
    );
}
.submit-btn:active {
    color: white;
    background: linear-gradient(
        to bottom right,
        rgb(174, 186, 248),
        rgb(202, 218, 248)
    );
}
.submit-btn:hover {
    color: white;
}
.register-btn {
    text-indent: 0;
    text-align: center;
    transition: all 0.2s linear;
    border: none;
    background: linear-gradient(
            to bottom right,
            rgb(186, 170, 63),
            rgb(180, 167, 119)
    );
}
.register-btn:active {
    color: white;
    background: linear-gradient(
            to bottom right,
            rgb(174, 186, 248),
            rgb(202, 218, 248)
    );
}
.register-btn:hover {
    color: white;
}

</style>
