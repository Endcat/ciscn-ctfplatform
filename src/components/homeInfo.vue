<template>
    <div id="home-info">
        <div class="info-title">
            Schedule
        </div>
        <div class="set-size charts-container">
            <div class="pie-wrapper progress-day">
                <span class="label">30<span class="smaller">Day</span></span>
                <div class="pie">
                    <div class="left-side half-circle"></div>
                    <div class="right-side half-circle"></div>
                </div>
            </div>

            <div class="pie-wrapper progress-hour">
                <span class="label">23<span class="smaller">Hour</span></span>
                <div class="pie">
                    <div class="left-side half-circle"></div>
                    <div class="right-side half-circle"></div>
                </div>
            </div>

            <div class="pie-wrapper progress-min">
                <span class="label">57<span class="smaller">Min</span></span>
                <div class="pie">
                    <div class="left-side half-circle"></div>
                    <div class="right-side half-circle"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "homeInfo",
        mounted() {
            displayTime()
        }
    }

    function displayTime() {
        // get element
        let chartDiv = document.getElementsByClassName("label");
        let day = chartDiv[0].childNodes[0].data;

        console.log(chartDiv);
        console.log(day);
    }
</script>

<style scoped>
    *,
    *:before,
    *:after {
        box-sizing: border-box;
    }

    span{
        font-family: "Microsoft YaHei", sans-serif;
    }
    html,
    body {
        background: #ecf0f1;
        color: #444;
        font-family: 'Lato', Tahoma, Geneva, sans-serif;
        font-size: 16px;
        padding: 10px;
    }

    .set-size {
        font-size: 10em;
    }

    .charts-container:after {
        clear: both;
        content: '';
        display: table;
    }

    .pie-wrapper {
        height: 1em;
        width: 1em;
        float: left;
        margin: 15px;
        position: relative;
        transition: all 0.2s ease-in-out;
    }
    .pie-wrapper:nth-child(3n + 1) {
        clear: both;
    }
    .pie-wrapper .pie {
        height: 100%;
        width: 100%;
        clip: rect(0, 1em, 1em, 0.5em);
        left: 0;
        position: absolute;
        top: 0;
    }
    .pie-wrapper .pie .half-circle {
        height: 100%;
        width: 100%;
        border: 0.1em solid #3498db;
        border-radius: 50%;
        clip: rect(0, 0.5em, 1em, 0);
        left: 0;
        position: absolute;
        top: 0;
    }
    .pie-wrapper .label {
        background: #34495e;
        border-radius: 50%;
        bottom: 0.4em;
        color: #ecf0f1;
        cursor: default;
        display: block;
        font-size: 0.25em;
        left: 0.4em;
        line-height: 2.8em;
        position: absolute;
        right: 0.4em;
        text-align: center;
        top: 0.4em;
    }
    .pie-wrapper .label .smaller {
        color: #bdc3c7;
        font-size: .45em;
        padding-bottom: 20px;
        vertical-align: super;
    }
    .pie-wrapper .shadow {
        height: 100%;
        width: 100%;
        border: 0.1em solid #bdc3c7;
        border-radius: 50%;
    }
    .pie-wrapper.style-2 .label {
        background: none;
        color: #7f8c8d;
    }
    .pie-wrapper.style-2 .label .smaller {
        color: #bdc3c7;
    }
    .pie-wrapper.progress-day .pie .half-circle {
        border-color: #3498db;
    }
    .pie-wrapper.progress-day .pie .left-side {
        transform: rotate(153deg);
    }
    .pie-wrapper.progress-day .pie .right-side {
        display: none;
    }
    .pie-wrapper.progress-hour .pie {
        clip: rect(auto, auto, auto, auto);
    }
    .pie-wrapper.progress-hour .pie .half-circle {
        border-color: #9b59b6;
    }
    .pie-wrapper.progress-hour .pie .left-side {
        transform: rotate(216deg);
    }
    .pie-wrapper.progress-hour .pie .right-side {
        transform: rotate(180deg);
    }
    .pie-wrapper.progress-min .pie {
        clip: rect(auto, auto, auto, auto);
    }
    .pie-wrapper.progress-min .pie .half-circle {
        border-color: #e67e22;
    }
    .pie-wrapper.progress-min .pie .left-side {
        transform: rotate(300deg);
    }
    .pie-wrapper.progress-min .pie .right-side {
        transform: rotate(180deg);
    }
    #home-info {
    position: relative;
    padding-top: 20px;
    padding-left: 40px;
}
.info-title
{
    font-size: 30px;
    font-family: "Microsoft YaHei", sans-serif;
    font-weight: normal;
    letter-spacing: -2px;
}
</style>
