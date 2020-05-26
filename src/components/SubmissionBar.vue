<template>
    <div id="submission-bar" :style="$store.state.activeScheme.boxShadow">
        <div class="submit-no">Submit #xxx</div>
        <div class="submit-content">
            <div class="submit-category">Crypto</div>
            <div class="submit-chall">Challenge xxx</div>
            <div class="submit-flag">flag{xxxxx-xxxxxxxxxxx-xxxx-xxxxx}</div>
            <div class="submit-status">Correct</div>
        </div>
        <div class="submit-undo-btn">
            <div class="undo-btn">Undo</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SubmissionBar"
    }
</script>

<style scoped>
#submission-bar{
    width: 85%;
    margin: 20px auto;
    height: 60px;
    line-height: 60px;
    border-radius: 30px;
}
    .submit-no{
        float: left;
        width: 10%;
        height: 60px;
        text-align: center;
        font-weight: bold;
    }
    .submit-content{
        float: left;
        width: 80%;
        height: 60px;
    }
    .submit-undo-btn{
        float: left;
        width: 10%;
        height: 60px;
    }
.undo-btn:active{
    color: white;
    background: linear-gradient(to bottom right, rgb(174, 186, 248), rgb(202, 218, 248));
}
.undo-btn:hover {
    color: white;

}
.undo-btn{
    position: relative;
    width: 100%;
    height: 60px;
    font-size: 20px;
    line-height: 60px;
    border-radius: 50px;
    text-align: center;
    text-indent: 0;
    transition: all 0.2s linear;
    border: none;
    margin: 0 auto;
    background: linear-gradient(to bottom right, rgb(225, 0, 0), rgb(255, 30, 30));
}
    .submit-category{
        float: left;
        width: 10%;
        height: 60px;
        text-align: center;
    }
    .submit-chall{
        float: left;
        width: 20%;
        height: 60px;
        text-align: center;
    }
    .submit-flag{
        float: left;
        width: 55%;
        height: 60px;
        text-align: center;
    }
    .submit-status{
        float: left;
        width: 15%;
        height: 60px;
        text-align: center;
    }
</style>
