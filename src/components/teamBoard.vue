<template>
    <div id="team-board">
<!--        team-board wrapper-->
        <div class="team-board-block" id="team-board-left">
<!--这里放队伍的强势方向/离前一名的分数差值-->

        </div>
        <div class="team-board-block" id="team-board-middle">
            <ul class="team-info-wrapper">
                <li >
                    <img id="team-avatar" src="@/assets/mashirosmall.jpg" alt="team-avatar">
                </li>
                <li id="team-id">
                    EndCat
                </li>
                <li id="team-rank">
                    1st
                </li>
            </ul>
        </div>
        <div class="team-board-block" id="team-board-right">
<!--TODO-->
        </div>
    </div>
</template>

<script>
    export default {
        name: "teamBoard"
    }
</script>

<style scoped>
    #team-id{
        font-size: 25px;
    }
    #team-rank{
        margin-top: 10px;
        font-size: 20px;
    }
    .team-info-wrapper{
        text-align: center;
        list-style: none;
        margin-top: 60px;

    }
    .team-info-wrapper li{
        margin-top: 20px;
    }
    #team-avatar{
        position: relative;
        width: 100px;
        border-radius: 50px;
        margin: 0 auto;
        transition: all 1s ease-in-out;

    }
    #team-avatar:hover{
        transform: rotate(360deg);
    }

    .team-board-block{
        position: relative;
        float: left;
        margin-left: 15px;
        width: 30%;
        height: 100%;
        background: #cdacde;
    }

    #team-board{
        position: relative;
        width: 90%;
        height: 300px;
        margin: 10px auto;
        background: #383838;
    }
</style>
