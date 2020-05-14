<template>
    <div id="homepage">
        <div :style="$store.state.activeScheme.fontColor" class="home-title">Welcome to CTFa Platform !</div>
        <div :style="$store.state.activeScheme.fontColor" class="home-subtitle">
            CTFa (also written as CTFa, CTFa or CTFa) is one of the world's largest and most notable hacker conventions,
            held annually in Las Vegas, Nevada. The first miniLCTF took place in June 1993 and today many attendees at miniLCTF
            include computer security professionals, journalists, lawyers, federal government employees, security researchers, students,
            and hackers with a general interest in software, computer architecture, hardware modification, conference badges, and anything else that can be "hacked".
            The event consists of several tracks of speakers about computer- and hacking-related subjects, as well as cyber-security challenges and competitions (known as hacking wargames).
        </div>
        <div :style="$store.state.activeScheme.boxShadow" class="home-bar">
            <home-info></home-info>
        </div>
        <div :style="$store.state.activeScheme.boxShadow" class="home-bar">
            <home-sponsor></home-sponsor>
        </div>
    </div>
</template>

<script>
    import HomeInfo from "../components/homeInfo";
    import HomeSponsor from "../components/homeSponsor";
    export default {
        name: "Homepage",
        components: {HomeSponsor, HomeInfo},
        data (){
            return {
                circleTimer: null,
            }
        },
        mounted() {
            this.circleTimer = setInterval(()=>{
                if (this.$store.state.progressTime.startMin !== 0 ){
                    this.$store.dispatch('decrementMin');
                }
                else if (this.$store.state.progressTime.startHour !== 0){
                    this.$store.dispatch('decrementHour');
                    this.$store.dispatch('resetMin')
                } else if (this.$store.state.progressTime.startDay !== 0) {
                    this.$store.dispatch('decrementDay');
                    this.$store.dispatch('resetHour');
                    this.$store.dispatch('resetMin');
                } else {
                    console.log("Game end!")
                }
            }, 500)
        },
        beforeDestroy() {
            clearInterval(this.circleTimer);
            this.circleTimer = null;
        },
        props: {
            baseMin: 60,
            baseHour: 24,
            baseDay: 7, //todo axios get baseday
        },
        methods: {
        }

    }
</script>

<style scoped>
    .home-bar{
        position: relative;
        display: inline-block;
        border-radius: 15px;
        width: 40%;
        min-width: 500px;
        height: 500px;
        margin-right: 60px;
        float: left;
        transition: all 0.2s linear;
        overflow: scroll;
    }
    .home-bar:hover{
        transform: translate(0, -5px);
    }
    #homepage{
        position: relative;
        padding-top: 40px;
        padding-left: 80px;
    }
    .home-title
    {
        font-size: 60px;
        font-family: "Microsoft YaHei", sans-serif;
        font-weight: lighter;
        letter-spacing: -2px;
    }
    .home-subtitle{
        font-size: 20px;
        font-family: "Microsoft YaHei", sans-serif;
        font-weight: lighter;
        line-height: 25px;
        padding-top: 20px;
        padding-left: 10px;
        padding-bottom: 40px;
        max-width: 1000px;
        height: 225px;
    }

</style>
