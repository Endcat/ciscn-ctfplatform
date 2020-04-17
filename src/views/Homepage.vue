<template>
    <div id="homepage">
        <div class="home-title">Welcome to miniLCTF 2020 !</div>
        <div class="home-subtitle">
            miniLCTF (also written as miniLCTF, miniLCTF or miniLCTF) is one of the world's largest and most notable hacker conventions,
            held annually in Las Vegas, Nevada. The first miniLCTF took place in June 1993 and today many attendees at miniLCTF
            include computer security professionals, journalists, lawyers, federal government employees, security researchers, students,
            and hackers with a general interest in software, computer architecture, hardware modification, conference badges, and anything else that can be "hacked".
            The event consists of several tracks of speakers about computer- and hacking-related subjects, as well as cyber-security challenges and competitions (known as hacking wargames).
        </div>
        <div class="home-bar">
            <home-info></home-info>
        </div>
        <div class="home-bar">
            <home-sponsor></home-sponsor>
        </div>
    </div>
</template>

<script>
    import HomeInfo from "../components/homeInfo";
    import HomeSponsor from "../components/homeSponsor";
    export default {
        name: "Homepage",
        components: {HomeSponsor, HomeInfo}
    }
</script>

<style scoped>
    .home-bar{
        position: relative;
        display: inline-block;
        border-radius: 15px;
        box-shadow: 0 10px 30px 0 rgb(107, 66, 217);
        width: 40%;
        height: 500px;
        margin-right: 60px;
        float: left;
        transition: all 0.2s linear;
    }
    .home-bar:hover{
        box-shadow: 0 10px 50px 0 rgb(107, 66, 217);
    }
    #homepage{
        position: relative;
        padding-top: 40px;
        padding-left: 80px;
    }
    .home-title
    {
        color: #383838;
        font-size: 60px;
        font-family: "Microsoft YaHei", sans-serif;
        font-weight: lighter;
        letter-spacing: -2px;
    }
    .home-subtitle{
        color: #383838;
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
