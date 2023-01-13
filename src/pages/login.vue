<template>
    <!-- <div style="background: url('src/assets/login.png'); background-size: cover;background-position:right; "> -->
        <div style="background: url('https://cdn.jsdelivr.net/gh/yu2256140203/Photos@main/login.png'); background-size: cover;background-position:right; ">
    <el-row style="min-height: 100vh;" class="login-container " >
        <el-col :lg="7" :md="12" class="left">
            <h2 class="title text-purple-800">
                进入Yu的空间
            </h2>
            <div class="login-ap">
                <span class="line"></span>
                <span>账号密码登录</span>
                <span class="line"></span>
            </div>

            <el-form :ref="formRef" :rules="rules" :model="form">
                <el-form-item prop="username">
                    <el-input v-model="form.username" placeholder="请输入用户名">
                        <template #prefix>
                            <el-icon class="el-input__icon">
                                <User />
                            </el-icon>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input v-model="form.password" type="password" show-password placeholder="请输入密码">
                        <template #prefix>
                            <el-icon class="el-input__icon">
                                <Lock />
                            </el-icon>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <el-button round class="w-[250px] bg-purple-800" type="primary" @click="onSubmit"
                        :loading="loading">登 录</el-button>
                </el-form-item>
            </el-form>
        </el-col>

        <el-col :lg="17" md="12" class="right"  >
            <div>
                <div class="title2">
                    Serendipity
                </div>
                <div class="title1">
                    Welcome to my world!💌
                </div>
                <div class="text-1xl font-bold text-light-500">
                    <span>个人网页的初衷是便于生活，更是想要丰富自己的能力。🎈</span>
                    <span class="text-blue-800">
                        NEUQer
                    </span>

                </div>
            </div>
        </el-col>
    </el-row>
</div>
</template>

<script setup>
import { ref,reactive,onMounted,onBeforeUnmount } from 'vue'
import { toast } from '~/composables/util'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

const store = useStore()
const router = useRouter()

// do not use same name with ref
const form = reactive({
  username:"",
  password:""
})

const rules = {
    username:[
        { 
            required: true, 
            message: '用户名不能为空', 
            trigger: 'blur' 
        },
    ],
    password:[
        { 
            required: true, 
            message: '密码不能为空', 
            trigger: 'blur' 
        },
    ]
}

const formRef = ref(null)
const loading = ref(false)
const onSubmit = () => {

        loading.value = true
        
        store.dispatch("login",form).then(res=>{
            toast("登录成功")
            router.push("/")
        }).finally(()=>{
            loading.value = false
        })

}

// 监听回车事件
function onKeyUp(e){
    if(e.key == "Enter") onSubmit()
}

// 添加键盘监听
onMounted(()=>{
    document.addEventListener("keyup",onKeyUp)
})
// 移除键盘监听
onBeforeUnmount(()=>{
    document.removeEventListener("keyup",onKeyUp)
})

</script>

<style>
 .login-container {
    @apply;
}

.login-container .left {
    @apply bg-light-50 flex items-center justify-center flex-col;
}

.login-container .right {
    @apply flex items-center justify-center;
}

.left .title {
    @apply  font-bold text-3xl;
}

.left .login-ap {
    @apply flex items-center justify-center my-5 text-gray-500;
}

.login-ap .line {
    @apply h-[1px] w-16 bg-light-50 space-x-2;
}

.right .title1 {
    @apply  text-light-50 font-bold text-5xl mb-4;

}
.right .title2 {
    @apply text-light-50 font-bold text-8xl mb-16;

}
</style>