<template>
    <div id="homepage">
        <div class="home-title">Welcome to miniLCTF 2020 !</div>
        <div class="home-subtitle">
            miniLCTF (also written as miniLCTF, miniLCTF or miniLCTF) is one of the world's largest and most notable hacker conventions,
            held annually in Las Vegas, Nevada. The first miniLCTF took place in June 1993 and today many attendees at miniLCTF
            include computer security professionals, journalists, lawyers, federal government employees, security researchers, students,
            and hackers with a general interest in software, computer architecture, hardware modification, conference badges, and anything else that can be "hacked".
            The event consists of several tracks of speakers about computer- and hacking-related subjects, as well as cyber-security challenges and competitions (known as hacking wargames).
            Contests held during the event are extremely varied, and can range from creating the longest Wi-Fi connection (aircrack-ng) to finding the most effective way to cool a beer in the Nevada heat.
        </div>
        <div class="home-bar"></div>
        <div class="home-bar"></div>
    </div>
</template>

<script>
    export default {
        name: "Homepage"
    }
</script>

<style scoped>
    .home-bar{
        position: relative;
        display: inline-block;
        border-radius: 15px;
        box-shadow: 0 10px 50px 0 rgb(107, 66, 217);
        width: 40%;
        height: 500px;
        margin-right: 60px;
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
