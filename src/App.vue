<script setup>
import { ChatDotRound, Share } from "@element-plus/icons-vue";
import { onMounted, onUnmounted } from "vue";

onMounted(() => {
  const header = document.querySelector(".el-header");
  const onScroll = () => {
    if (window.scrollY > 20) {
      header && header.classList.add("scrolled");
    } else {
      header && header.classList.remove("scrolled");
    }
  };
  window.addEventListener("scroll", onScroll);
  onScroll();
  // 卸载时移除监听
  onUnmounted(() => {
    window.removeEventListener("scroll", onScroll);
  });
});
</script>

<template>
  <div class="app-container">
    <el-container>
      <!-- 头部导航 -->
      <el-header>
        <div class="header-content">
          <div class="logo">
            <img src="./assets/logo.png" alt="聚恒集团" />
          </div>
          <el-menu mode="horizontal" :router="true" class="main-menu">
            <el-menu-item index="/">首页</el-menu-item>
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
      <el-footer height="200px">
        <div class="footer-content">
          <div class="footer-section">
            <h3>联系我们</h3>
            <p>地址：湖南省长沙市</p>
            <p>电话：0731-XXXXXXXX</p>
            <p>邮箱：contact@ijheng.com</p>
          </div>
          <div class="footer-section">
            <h3>关注我们</h3>
            <div class="social-links">
              <el-icon><ChatDotRound /></el-icon>
              <el-icon><Share /></el-icon>
            </div>
          </div>
          <div class="footer-section">
            <h3>快速链接</h3>
            <ul>
              <li><router-link to="/about">关于我们</router-link></li>
              <li><router-link to="/news">新闻中心</router-link></li>
              <li><router-link to="/business">业务体系</router-link></li>
            </ul>
          </div>
        </div>
        <div class="copyright">© 2024 聚恒集团 版权所有 | 湘ICP备XXXXXXXX号</div>
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
  background: rgba(20, 30, 60, 0.95);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  transition: height 0.3s, background 0.3s;
  height: 80px;
  display: flex;
  align-items: center;
}

.el-header.scrolled {
  height: 56px;
  background: rgba(20, 30, 60, 0.98);
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 0 20px;
}

.logo img {
  height: 50px;
  transition: height 0.3s;
}

.el-header.scrolled .logo img {
  height: 32px;
}

.main-menu {
  border-bottom: none;
}

.el-main {
  padding: 0;
  width: 100%;
  margin-top: 80px;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  padding: 40px 20px;
}

.footer-section h3 {
  color: #333;
  margin-bottom: 20px;
}

.social-links {
  display: flex;
  gap: 20px;
}

.social-links .el-icon {
  font-size: 24px;
  cursor: pointer;
}

.copyright {
  text-align: center;
  padding: 20px 0;
  border-top: 1px solid #eee;
  color: #666;
}

ul {
  list-style: none;
  padding: 0;
}

ul li {
  margin-bottom: 10px;
}

ul li a {
  color: #666;
  text-decoration: none;
}

ul li a:hover {
  color: #409eff;
}

@media screen and (max-width: 768px) {
  .el-header {
    height: 56px;
  }
  .el-header.scrolled {
    height: 48px;
  }
  .el-main {
    margin-top: 56px;
  }
  .header-content {
    padding: 0 10px;
  }
  .logo img {
    height: 32px;
  }
  .el-header.scrolled .logo img {
    height: 24px;
  }
  .footer-content {
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 20px;
  }
}
</style>
