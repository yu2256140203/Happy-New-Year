<template>

    <div style=" height: 600px;width: 950px;  background-color: #90ade22c;
            display:table-cell;text-align:center;vertical-align:middle;
            border:3px solid #fff;box-shadow: 0px 0px 20px skyblue,0px 0px 20px skyblue inset;">

    <p style="display:inline-block;">
      <a href="https://count.getloli.com/"><img src="https://count.getloli.com/get/@:yu2256140203"></a>
    </p>
        <md-editor v-model="text" preview-only previewTheme='vuepress' theme=""
            style=" height: 500px;width: 850px;  background-color: #00000000;
            display:inline-block;text-align: left;" />
    </div>

</template>
  
<script setup>
import { ref } from 'vue';
import MdEditor from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';

const text = ref('# 你好，陌生人💌 \n **身为一个计算机系的学生，也许默默的尝试计算机世界的各种有趣的事物，** \n \n **将会成为我们最大，最向往计算机这一专业的原因之一**。😜 \n \n **在东秦的每一天，充实且美好。** \n \n **希望未来不负自己的初心❤** \n \n **继续加油下去吧，自己💕NEUQer** \n  \n **继续加油下去吧，陌生人🤞** \n \n **(For me,For u)**');
</script>
<style>
.log {

    background-color: #90ade22c;
}
</style>