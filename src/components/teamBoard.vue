<template>
    <div id="team-board">
        <!--team-board wrapper-->
        <div class="team-board-block" id="team-board-left">
            <!--这里放队伍的强势方向-->
            <div class="team-advantage-icon">
                <img src="@/assets/icons/smile.png" alt="team-advantage-icon">
            </div>
            <div class="team-advantage">
                Advantage
            </div>
            <div class="team-advantage-type">
                Reverse
            </div>
        </div>
        <div class="team-board-block" id="team-board-middle">
            <ul class="team-info-wrapper">
                <li>
                    <img id="team-avatar" src="@/assets/mashirosmall.jpg" alt="team-avatar">
                </li>
                <li id="team-id">
                    FooBar1
                </li>
                <li id="team-score">
                    114514Pt
                </li>
                <li id="team-rank">
                    1st
                </li>
            </ul>
        </div>
        <div class="team-board-block" id="team-board-right">
            <div class="team-solve-icon">
                <img src="@/assets/icons/task.png" alt="team-advantage-icon">
            </div>
            <div class="team-solve">
                Solved
            </div>
            <div class="team-solve-type">
                91
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "teamBoard"
    }
</script>

<style scoped>
    #team-id {
        font-size: 25px;
    }

    #team-score {
        font-size: 22px;
    }
    #team-rank {
        margin-top: 10px;
        font-size: 20px;
    }

    .team-info-wrapper {
        text-align: center;
        list-style: none;
        margin-top: 60px;

    }

    .team-info-wrapper li {
        margin-top: 10px;
    }

    #team-avatar {
        position: relative;
        width: 100px;
        border-radius: 50px;
        margin: 0 auto;
        transition: all 1s ease-in-out;

    }

    #team-avatar:hover {
        transform: rotate(360deg);
    }

    .team-board-block {
        position: relative;
        float: left;
        margin-left: 15px;
        width: 30%;
        height: 100%;
        transition: all 0.5s ease-in-out;
    }

    .team-board-block:hover {
        transform: translate(0, -10px);
    }

    #team-board {
        position: relative;
        width: 90%;
        height: 300px;
        margin: 10px auto;
    }
    .team-advantage {
        font-size: 25px;
        text-align: center;
        margin-top: 10px;
    }
    .team-advantage-icon {
        text-align: center;
        margin-top: 40px;
    }
    .team-advantage-icon img {
        width: 100px;
        transition: all 1s ease-in-out;
    }
    .team-advantage-icon img:hover {
        transform: rotate(360deg);
    }
    .team-advantage-type {
        font-size: 25px;
        text-align: center;
        margin-top: 10px;
    }
    .team-solve {
        font-size: 25px;
        text-align: center;
        margin-top: 10px;
    }
    .team-solve-icon {
        text-align: center;
        margin-top: 40px;
    }
    .team-solve-icon img {
        width: 100px;
        transition: all 1s ease-in-out;
    }
    .team-solve-icon img:hover {
        transform: rotate(360deg);
    }
    .team-solve-type {
        font-size: 25px;
        text-align: center;
        margin-top: 10px;
    }
</style>
