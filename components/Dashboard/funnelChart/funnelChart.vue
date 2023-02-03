<template>
    <div class="funnel_outer">
        <ul>
            <li class="funnel_step_1"><span>
                    <p>480</p>
                </span></li>
            <li class="funnel_step_2"><span>
                    <p>267</p>
                </span> </li>
            <li class="funnel_step_3"><span>
                    <p>220</p>
                </span></li>
            <li class="funnel_step_4"><span>
                    <p>170</p>
                </span></li>
            <li class="funnel_step_5"><span>
                    <p>7</p>
                </span></li>
            <li class="funnel_step_6"><span>
                    <p>13</p>
                </span></li>

        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
}
</script>

<style>
.funnel_outer {
    width: 90%;
    float: left;
    position: relative;
}

.funnel_outer * {
    box-sizing: border-box
}

.funnel_outer ul {
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.funnel_outer ul li {
    position: relative;
    margin: 2px 0;
    text-align: center;
    width: 100%;
    list-style: none;
}
.funnel_outer ul li:hover{
    opacity: 0.8;
    transform: scale(0.99);
    transition: all 0.3s;
}

.funnel_outer li span {
    border-top-width: 50px;
    border-top-style: solid;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    height: 0;
    display: inline-block;
    vertical-align: middle;
}

.funnel_step_1 span {
    width: 100%;
    border-top-color: #895bf1;
}

.funnel_step_2 span {
    width: calc(100% - 30px);
    border-top-color: #ffb536
}

.funnel_step_3 span {
    width: calc(100% - 60px);
    border-top-color: #e25668
}

.funnel_step_4 span {
    width: calc(100% - 90px);
    border-top-color: #005da5
}

.funnel_step_5 span {
    width: calc(100% - 120px);
    border-top-color: #49db70
}

.funnel_step_6 span {
    width: calc(100% - 150px);
    border-top-color: #027002
}

.funnel_step_7 span {
    width: calc(100% - 200px);
    border-top-color: #209840;
}

.funnel_outer ul li:last-child span {
    border-top-width: 40px;
}

.funnel_outer ul li.not_last span {
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top-width: 50px;
}

.funnel_outer ul li span p {
    margin-top: -30px;
    color: #fff;
    font-weight: bold;
    text-align: center;
}
</style>