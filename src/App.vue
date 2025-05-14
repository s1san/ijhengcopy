<script setup>
import { ChatDotRound, Share } from "@element-plus/icons-vue";
</script>

<template>
  <div class="app-container">
    <el-container>
      <!-- 头部导航 -->
      <el-header>
        <div class="header-content">
          <div class="logo" @click="$router.push('/')" style="cursor: pointer">
            <img src="/assets/logo.png" alt="聚恒集团" />
          </div>
          <el-menu mode="horizontal" :router="true" class="main-menu">
            <!-- <el-menu-item index="/">首页</el-menu-item> -->
            <el-menu-item index="/about">关于我们</el-menu-item>
            <el-menu-item index="/news">新闻中心</el-menu-item>
            <el-menu-item index="/business">业务体系</el-menu-item>
            <el-menu-item index="/culture">企业文化</el-menu-item>
          </el-menu>
        </div>
      </el-header>

      <!-- 主要内容区 -->
      <el-main>
        <router-view />
      </el-main>

      <!-- 页脚 -->
      <el-footer height="auto" class="jf-footer">
        <div class="jf-wrap">
          <el-row :gutter="40" class="footer-nav">
            <el-col :span="4">
              <dl>
                <dt>关注我们</dt>
                <dd class="jf-footer-wecode">
                  <el-icon><ChatDotRound /></el-icon> 微信
                </dd>
              </dl>
            </el-col>
            <el-col :span="4">
              <dl>
                <dt><a href="javascript:void(0);">加入我们</a></dt>
                <dd><a href="https://www.ijheng.com/campus.html" target="_blank">校园招聘</a></dd>
              </dl>
            </el-col>
            <el-col :span="4">
              <dl>
                <dt><a href="javascript:void(0);">联系我们</a></dt>
                <dd><a href="https://www.ijheng.com/address.html" target="_blank">公司地址</a></dd>
                <dd>
                  <a href="https://www.ijheng.com/cooperate.html" target="_blank">合作洽谈</a>
                </dd>
              </dl>
            </el-col>
            <el-col :span="4">
              <dl>
                <dt><a href="javascript:void(0);">法律信息</a></dt>
                <dd><a href="https://www.ijheng.com/privacy.html" target="_blank">法律声明</a></dd>
              </dl>
            </el-col>
            <el-col :span="8" class="jf-footer-r">
              <div class="code">
                <img src="/assets/code.png" alt="二维码" />
              </div>
              <div class="text">
                <img src="/assets/flogo.png" alt="logo" class="footer-logo" />
                <div class="footer-beian">
                  <span>网站备案/许可证号：</span>
                  <a target="_blank" href="https://beian.miit.gov.cn/" style="color: #989898"
                    >湘ICP备19009912号-1</a
                  >
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<style scoped>
.app-container {
  min-height: 100vh;
  width: 100%;
}

.el-container {
  min-height: 100vh;
  width: 100%;
}

.el-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background: rgba(19, 29, 87, 0.7);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  transition: none;
  height: 56px;
  display: flex;
  align-items: center;
}

.header-content {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 0 40px;
  box-sizing: border-box;
}

.logo img {
  height: 32px;
  transition: none;
}

.main-menu {
  background: transparent !important;
  color: #fff !important;
  border-bottom: none;
}

.main-menu .el-menu-item {
  color: #fff !important;
}

.main-menu .el-menu-item.is-active,
.main-menu .el-menu-item:hover {
  color: #ffd700 !important;
  background: transparent !important;
}

.el-main {
  padding: 0;
  width: 100%;
}

.jf-footer {
  background: #181c2a;
  color: #fff;
  padding: 48px 0 24px 0;
  font-size: 15px;
}
.jf-wrap {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}
.footer-nav {
  align-items: flex-start;
}
.jf-footer dl {
  margin: 0 0 16px 0;
}
.jf-footer dt {
  font-weight: bold;
  margin-bottom: 10px;
  color: #fff;
}
.jf-footer dd {
  margin: 0 0 8px 0;
  color: #bbb;
}
.jf-footer a {
  color: #bbb;
  text-decoration: none;
}
.jf-footer a:hover {
  color: #409eff;
}
.jf-footer-wecode {
  display: flex;
  align-items: center;
  gap: 6px;
}
.jf-footer-r {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 12px;
}
.jf-footer-r .code img {
  width: 80px;
  height: 80px;
  border-radius: 8px;
  background: #fff;
}
.jf-footer-r .text {
  color: #989898;
  font-size: 13px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.footer-logo {
  height: 28px;
  margin-right: 12px;
  border-radius: 4px;
  background: #fff;
  padding: 2px 6px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
}
.footer-beian {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.footer-beian span {
  color: #989898;
}
.footer-beian a {
  color: #989898;
  font-size: 13px;
}
@media screen and (max-width: 900px) {
  .footer-nav {
    flex-direction: column;
  }
  .jf-footer-r {
    align-items: flex-start;
    margin-top: 24px;
  }
}
</style>
