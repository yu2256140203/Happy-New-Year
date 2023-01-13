<template>




  <div style=" background-color:#90ade27C;width: 850px; height:550px; border:3px solid #fff;
    border-radius: 10px;box-shadow: 0px 0px 20px skyblue,0px 0px 20px skyblue inset;
    display:table-cell;text-align:center;vertical-align:middle;">
    <!-- 选择页面打开视频 -->
    <div style="display:inline-block;">
      <el-tabs v-model="activeName" class="demo-tabs " @tab-click="handleClick" style=" width:800px;height: 500px;">



        <el-tab-pane label="JsDelivr" name="first">
          <!-- 国外视频测试-JsDliver作为CDN -->
          <div>
            <vue3VideoPlay v-bind="options" style="position: absolute; width: 100%; height: 100%; left: 0; top: 0;" />
            <!-- poster=""//图片链接 -->
          </div>
        </el-tab-pane>




        <el-tab-pane label="BiliBili" name="second">
          <!-- 国内视频测试-BiliBili作为视频源 -->
          <div style="position: relative; padding: 30% 45%;">
            <!--适应移动端-->
            <iframe style="position: absolute; width: 100%; height: 100%; left: 0; top: 0;"
              src="https://player.bilibili.com/player.html?aid=56460274&bvid=BV124411u7vx&cid=98649073&page=1&high_quality=1"
              scrolling="no" frameborder="no" framespacing="0" allowfullscreen="true">
            </iframe>
          </div>
        </el-tab-pane>



        <el-tab-pane label="Youtube" name="third" class="el-tab">
          <div class="felx flex-col justify-center items-center">
          <iframe   width="750" height="475" src="https://www.youtube-nocookie.com/embed/2brDsA1AVOY"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen ></iframe>
          </div>



        </el-tab-pane>
        <!-- <el-tab-pane label="Task" name="fourth">Task</el-tab-pane> -->
      </el-tabs>





    </div>
  </div>
</template>
  
<script setup lang="ts">
import { reactive } from "vue";
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'

const activeName = ref('first')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}


const options = reactive({
  width: "800px", //播放器高度
  height: "450px", //播放器高度
  color: "#409eff", //主题色
  title: "", //视频名称
  src: "https://cdn.jsdelivr.net/gh/yu2256140203/Photos@main/【单曲纯享】单依纯《像风一样》 18岁女孩超高唱功【2020中国好声音】EP3 第三集 Sing!China2020 9月4日_2.mp4", //视频源
  muted: false, //静音
  webFullScreen: false,
  speedRate: ["0.75", "1.0", "1.25", "1.5", "2.0"], //播放倍速
  autoPlay: false, //自动播放
  loop: false, //循环播放
  mirror: false, //镜像画面
  ligthOff: false, //关灯模式
  volume: 0.3, //默认音量大小
  control: true, //是否显示控制
  controlBtns: [
    "audioTrack",
    "quality",
    "speedRate",
    "volume",
    "setting",
    "pip",
    "pageFullScreen",
    "fullScreen",
  ], //显示所有按钮,
});
</script>
  
<style scoped>
.infinite-list {
  height: 800px;
  padding: 0;
  margin: 0;
  list-style: none;
}

.infinite-list .infinite-list-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 500px;
  background: var(--el-color-primary-light-9);
  margin: 10px;
  color: var(--el-color-primary);
}

.infinite-list .infinite-list-item+.list-item {
  margin-top: 10px;
}

.demo-tabs>.el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}


</style>