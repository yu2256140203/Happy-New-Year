<template>




    <!-- <el-col :lg="4" :md="12" class="left1">
              <div>{{ obj.output }}</div> -->

    <!-- 个人介绍卡片 -->

    <!-- 添加GitHub Corners -->






    <el-card shadow="hover" class="box-card  rounded  tebale_card "
        style=" border-radius: 10px;border:3px solid #fff; box-shadow: 0px 0px 20px red,0px 0px 20px red inset;">
        <template #header>
            <div class="card-header">

                <span>
                    <el-avatar :size="32" src="https://yu-space.oss-cn-beijing.aliyuncs.com/图片/65657584.jpg" />
                    {{ obj.output }}
                </span>

                    <el-button plain  onclick="location.href='https://github.com/yu2256140203' ">
                        Github
                        <el-icon>
                            <Link />
                        </el-icon>
                    </el-button>
            </div>
        </template>
        <div class="text item">

            <!-- <img class='glitch' src='../assets/shi.png' /> -->
            <img :size="25" width="400" style="clear: both;display: block;margin: auto;"
                src='https://yu-space.oss-cn-beijing.aliyuncs.com/图片/img1673602527442.png' />
            <!-- <iframe frameborder="no"  marginwidth="0" marginheight="0" width=430 height=100 src="//music.163.com/outchain/player?type=2&id=1439333714&auto=1&height=66"></iframe> -->
            <img width="400" style="clear: both;display: block;margin: auto;"
                src="https://yu-space.oss-cn-beijing.aliyuncs.com/图片/稿定素材-119784571-2048x1356.jpg" />
        </div>
    </el-card>


    <!-- <div class="title3">
                        Jerry Yu的空间
                    </div>
                    <div class="title4">
                        Welcome to my world!💌
                    </div>
                    <div class="text-1xl font-bold text-light-500">
                        <span>个人网页的初衷是便于生活，更是想要丰富自己的能力。🎈</span>
                        <span class="text-blue-800">
                            NEUQer
                        </span>

                    </div> -->



</template>

<script setup>
import { reactive, onMounted } from 'vue'
// 引入
import EasyTyper from 'easy-typer-js'


// import {handleOpen ,handleClose} from '../composables/menu'




// Jump_Git(()=>{

//     this.$router.push('https://github.com/yu2256140203')
// })

// 计算属性
const obj = reactive({
    output: '',
    isEnd: false,
    speed: 500,
    singleBack: true,
    sleep: 0,
    type: 'custom',
    backSpeed: 40,
    sentencePause: true
})

// 实例化
onMounted(() => {
    const typed = new EasyTyper(obj, `Jerry Yu`)
})

</script>

<style>
.login-container {
    @apply;
}

.login-container .left1 {
    @apply flex items-center justify-center;
}

.login-container .right1 {
    @apply flex items-center justify-center;
}

.left .title {
    @apply font-bold text-3xl;
}

.left .login-ap {
    @apply my-5 text-gray-500;
}

.login-ap .line {
    @apply h-[1px] w-16 space-x-2;
}

.right .title4 {
    @apply font-bold text-5xl mb-4;

}

.right .title3 {
    @apply text-light-50 font-bold text-8xl mb-16;

}

.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.text {
    font-size: 14px;
}

.item {
    margin-bottom: 38px;
}

.box-card {
    width: 550px;
}

.n-card {
    max-width: 400px;
}

.github-corner:hover .octo-arm {
    animation: octocat-wave 560ms ease-in-out
}

@keyframes octocat-wave {

    0%,
    100% {
        transform: rotate(0)
    }

    20%,
    60% {
        transform: rotate(-25deg)
    }

    40%,
    80% {
        transform: rotate(10deg)
    }
}

@media (max-width:500px) {
    .github-corner:hover .octo-arm {
        animation: none
    }

    .github-corner .octo-arm {
        animation: octocat-wave 560ms ease-in-out
    }
}

.tebale_card {
    background-color: #e792926c;
}

.el-table,
.el-table__expanded-cell {
    background-color: #3f5c6d5c;
}
</style>