<template>
  <div class="about-page">
    <div class="page-header">
      <h1>关于我们</h1>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>关于我们</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="about-container">
      <!-- 公司简介 -->
      <div class="section company-intro">
        <h2>公司简介</h2>
        <div class="intro-content">
          <div class="intro-text">
            <p>
              聚恒集团是一家以科技创新为驱动力的综合性企业集团，致力于推动产业数字化转型，打造数字化生活服务平台。
            </p>
            <p>集团业务涵盖消费互联网、产业互联网、产业投资等多个领域，形成了完整的产业生态链。</p>
            <p>
              我们始终坚持"创新、协作、共赢"的企业理念，为客户创造价值，为员工提供发展平台，为社会贡献力量。
            </p>
          </div>
          <div class="intro-image">
            <img src="/src/assets/company.jpeg" alt="公司简介" />
          </div>
        </div>
      </div>

      <!-- 发展历程 -->
      <div class="section history">
        <h2>发展历程</h2>
        <el-timeline>
          <el-timeline-item
            v-for="item in historyItems"
            :key="item.year"
            :timestamp="item.year"
            placement="top"
          >
            <el-card class="history-card">
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </div>

      <!-- 企业荣誉 -->
      <div class="section honors">
        <h2>企业荣誉</h2>
        <el-row :gutter="20" class="honor-cards">
          <el-col :span="8" v-for="item in honorItems" :key="item.id">
            <el-card class="honor-card">
              <el-icon class="honor-icon" :size="40">
                <Trophy />
              </el-icon>
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
              <div class="honor-date">{{ item.date }}</div>
            </el-card>
          </el-col>
        </el-row>
      </div>

      <!-- 联系我们 -->
      <div class="section contact">
        <h2>联系我们</h2>
        <el-row :gutter="40">
          <el-col :span="12">
            <div class="contact-info">
              <h3>联系方式</h3>
              <p>
                <el-icon><Location /></el-icon> 地址：湖南省长沙市
              </p>
              <p>
                <el-icon><Phone /></el-icon> 电话：0731-XXXXXXXX
              </p>
              <p>
                <el-icon><Message /></el-icon> 邮箱：contact@ijheng.com
              </p>
              <div class="qrcode">
                <img src="/src/assets/qrcode.png" alt="微信二维码" />
                <p>扫码关注我们</p>
              </div>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="contact-form">
              <h3>在线留言</h3>
              <el-form :model="form" label-width="80px">
                <el-form-item label="姓名">
                  <el-input v-model="form.name" placeholder="请输入您的姓名"></el-input>
                </el-form-item>
                <el-form-item label="电话">
                  <el-input v-model="form.phone" placeholder="请输入您的联系电话"></el-input>
                </el-form-item>
                <el-form-item label="邮箱">
                  <el-input v-model="form.email" placeholder="请输入您的邮箱"></el-input>
                </el-form-item>
                <el-form-item label="留言">
                  <el-input
                    v-model="form.message"
                    type="textarea"
                    rows="4"
                    placeholder="请输入您的留言内容"
                  ></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="submitForm">提交留言</el-button>
                </el-form-item>
              </el-form>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Trophy, Location, Phone, Message } from "@element-plus/icons-vue";

// 发展历程数据
const historyItems = ref([
  {
    year: "2024",
    title: "集团总部乔迁",
    description: "聚恒数科入驻总部，开启新的发展篇章",
  },
  {
    year: "2023",
    title: "产业布局扩展",
    description: "成功布局产业互联网领域，推动产业数字化转型",
  },
  {
    year: "2022",
    title: "业务快速发展",
    description: "消费互联网业务取得突破性进展",
  },
  {
    year: "2021",
    title: "公司成立",
    description: "聚恒集团正式成立，开启创业征程",
  },
]);

// 企业荣誉数据
const honorItems = ref([
  {
    id: 1,
    title: "湖南省优秀企业",
    description: "荣获湖南省优秀企业称号",
    date: "2024年",
  },
  {
    id: 2,
    title: "科技创新奖",
    description: "获得科技创新领域重要奖项",
    date: "2023年",
  },
  {
    id: 3,
    title: "社会责任奖",
    description: "因在公益事业方面的突出贡献获得表彰",
    date: "2023年",
  },
]);

// 表单数据
const form = ref({
  name: "",
  phone: "",
  email: "",
  message: "",
});

// 提交表单
const submitForm = () => {
  // 这里添加表单提交逻辑
  console.log("提交表单", form.value);
};
</script>

<style scoped>
.about-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.page-header {
  margin-bottom: 30px;
}

.page-header h1 {
  font-size: 32px;
  color: #333;
  margin-bottom: 10px;
}

.about-container {
  background: #fff;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.section {
  margin-bottom: 60px;
}

.section h2 {
  font-size: 24px;
  color: #333;
  margin-bottom: 30px;
  text-align: center;
}

.intro-content {
  display: flex;
  gap: 40px;
  align-items: center;
}

.intro-text {
  flex: 1;
}

.intro-text p {
  color: #666;
  line-height: 1.8;
  margin-bottom: 20px;
}

.intro-image {
  flex: 1;
}

.intro-image img {
  width: 100%;
  border-radius: 4px;
}

.history-card {
  margin-bottom: 20px;
}

.history-card h3 {
  font-size: 18px;
  color: #333;
  margin: 0 0 10px 0;
}

.history-card p {
  color: #666;
  line-height: 1.6;
}

.honor-cards {
  margin-top: 30px;
}

.honor-card {
  text-align: center;
  padding: 30px 20px;
  transition: transform 0.3s;
}

.honor-card:hover {
  transform: translateY(-5px);
}

.honor-icon {
  color: #409eff;
  margin-bottom: 20px;
}

.honor-card h3 {
  font-size: 20px;
  color: #333;
  margin: 0 0 15px 0;
}

.honor-card p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 10px;
}

.honor-date {
  color: #999;
  font-size: 14px;
}

.contact-info {
  padding: 20px;
}

.contact-info h3 {
  font-size: 20px;
  color: #333;
  margin-bottom: 20px;
}

.contact-info p {
  color: #666;
  line-height: 2;
  display: flex;
  align-items: center;
  gap: 10px;
}

.contact-info .el-icon {
  color: #409eff;
}

.qrcode {
  margin-top: 30px;
  text-align: center;
}

.qrcode img {
  width: 150px;
  height: 150px;
  margin-bottom: 10px;
}

.contact-form {
  padding: 20px;
}

.contact-form h3 {
  font-size: 20px;
  color: #333;
  margin-bottom: 20px;
}
</style>
