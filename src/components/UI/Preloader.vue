<template>
    <div class="anime" >
        <div class="circle"></div>
    </div>
</template>
<style lang="scss">
.anime {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #000;
    padding-top: 100px;
    transition: 0.2s linear;
    opacity: 1;
    z-index: 50;
}

.circle {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    position: relative;

    &::before {
        content: '';
        animation: circle 1.5s linear infinite;
        background: linear-gradient(133deg, yellow, violet, blue);
        width: 100%;
        height: 100%;
        position: absolute;
        border-radius: 50%;
    }

    &::after {
        content: '';
        z-index: 1;
        left: 5px;
        right: 5px;
        bottom: 5px;
        top: 5px;
        position: absolute;
        border-radius: 50%;
        background: #000;
    }
}

@keyframes circle {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>