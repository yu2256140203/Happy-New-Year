<template>



    <div
        style="background: url('https://cdn.jsdelivr.net/gh/yu2256140203/Photos@main/login.png'); background-size: cover;background-position:left; ">
        <el-row style="min-height: 100vh;" class="login-container ">
            <el-col :lg="4" :md="12" class="left1">
                <!-- <h2 class="title text-purple-800">
                    进入Yu的空间
                </h2> -->
                <el-row class="tac">
                    <el-col :span="30">
                        <h5 class="mb-4">Menu</h5>
                        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen"
                            @close="handleClose">
                            <el-sub-menu index="1">
                                <template #title>
                                    <el-icon>
                                        <location />
                                    </el-icon>
                                    <span>Navigator One</span>
                                </template>
                                <el-menu-item-group title="Group One">
                                    <el-menu-item index="1-1">item one</el-menu-item>
                                    <el-menu-item index="1-2">item two</el-menu-item>
                                </el-menu-item-group>
                                <el-menu-item-group title="Group Two">
                                    <el-menu-item index="1-3">item three</el-menu-item>
                                </el-menu-item-group>
                                <el-sub-menu index="1-4">
                                    <template #title>item four</template>
                                    <el-menu-item index="1-4-1">item one</el-menu-item>
                                </el-sub-menu>
                            </el-sub-menu>
                            <el-menu-item index="2">
                                <el-icon>
                                    <icon-menu />
                                </el-icon>
                                <span>Navigator Two</span>
                            </el-menu-item>
                            <el-menu-item index="3" disabled>
                                <el-icon>
                                    <document />
                                </el-icon>
                                <span>Navigator Three</span>
                            </el-menu-item>
                            <el-menu-item index="4">
                                <el-icon>
                                    <setting />
                                </el-icon>
                                <span>Navigator Four</span>
                            </el-menu-item>
                        </el-menu>
                    </el-col>
                    
                </el-row>



                <!-- <div>{{ obj.output }}</div> -->
            </el-col>
            <!-- 个人介绍卡片 -->
            <el-col :lg="20" md="12" class="right1">
                <!-- 添加GitHub Corners -->
                <a href="https://github.com/yu2256140203" class="github-corner" aria-label="View source on GitHub"><svg
                        width="80" height="80" viewBox="0 0 250 250"
                        style="fill:#fff; color:#151513; position: absolute; top: 0; border: 0; right: 0;"
                        aria-hidden="true">
                        <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
                        <path
                            d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
                            fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path>
                        <path
                            d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
                            fill="currentColor" class="octo-body"></path>
                    </svg></a>



                <div>
                    <div class="flex justify-center items-center flex-col">
                        <el-card shadow="hover" class="box-card bg-light-50 rounded">
                            <template #header>
                                <div class="card-header">

                                    <span>
                                        <el-avatar
                                            src="https://cdn.jsdelivr.net/gh/yu2256140203/Photos@main/65657584" />
                                        {{ obj.output }}
                                    </span>

                                    <el-button plain>
                                        Github<el-icon>
                                            <Link />
                                        </el-icon>
                                    </el-button>
                                </div>
                            </template>
                            <div class="text item">

                                <!-- <img class='glitch' src='../assets/shi.png' /> -->
                                <img class='glitch'
                                    src='https://cdn.jsdelivr.net/gh/yu2256140203/Photos@main/shi.png' />
                                <iframe frameborder="no" marginwidth="0" marginheight="0" width=330 height=86
                                    src="//music.163.com/outchain/player?type=2&id=1374056689&auto=1&height=66"></iframe>
                            </div>
                        </el-card>
                    </div>








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
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue'
// 引入
import EasyTyper from 'easy-typer-js'
import { PowerGlitch } from 'powerglitch'
import {
    Check,
    Delete,
    Edit,
    Message,
    Search,
    Star,
} from '@element-plus/icons-vue'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
// import {handleOpen ,handleClose} from '../composables/menu'
const Jump_Git = () => {


    router.push("https://github.com/yu2256140203")
    // this.$router.push('https://github.com/yu2256140203')

}



// Jump_Git(()=>{

//     this.$router.push('https://github.com/yu2256140203')
// })
PowerGlitch.glitch('.glitch')
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
    @apply flex items-center justify-center bg-light-50;
}

.login-container .right1 {
    @apply flex items-center justify-center;
}

.left .title {
    @apply font-bold text-3xl;
}

.left .login-ap {
    @apply  my-5 text-gray-500;
}

.login-ap .line {
    @apply h-[1px] w-16 bg-light-50 space-x-2;
}

.right .title4 {
    @apply text-light-50 font-bold text-5xl mb-4;

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
    margin-bottom: 18px;
}

.box-card {
    width: 380px;
}

.n-card {
    max-width: 300px;
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
</style>