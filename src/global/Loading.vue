<template>
    <div id="global-loading">
        <img src="../assets/loader.gif">
        <h1>Carregando...</h1>
    </div>
</template>

<style lang="scss">
    @import '../assets/style.scss';

    html, body {
        background: none;
    }

    #global-loading {
        align-content: center;
        align-items: center;
        background: #1a1438;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: center;
        position: fixed;
        text-align: center;
        width: 100%;
        h1 {
            color: $white;
            display: block;
            font-size: 16px;
            margin: 15px 0 0 0;
        }
    }
</style>
