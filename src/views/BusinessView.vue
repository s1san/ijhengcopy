<template>
  <div class="business-page">
    <div class="page-header">
      <h1>业务体系</h1>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>业务体系</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="business-container">
      <!-- 业务分类 -->
      <el-tabs v-model="activeTab" class="business-tabs">
        <el-tab-pane label="消费互联网集群" name="consumer">
          <div class="business-content">
            <div class="business-intro">
              <h2>消费互联网集群</h2>
              <p>
                聚恒集团消费互联网集群致力于打造数字化生活服务平台，为用户提供便捷、高效的生活服务解决方案。
              </p>
            </div>
            <el-row :gutter="20" class="business-cards">
              <el-col :span="8" v-for="item in consumerBusiness" :key="item.id">
                <el-card class="business-card" :body-style="{ padding: '0px' }">
                  <img :src="item.image" class="business-image" />
                  <div class="card-content">
                    <h3>{{ item.title }}</h3>
                    <p>{{ item.description }}</p>
                    <el-button type="primary" link @click="showBusinessDetail(item)">
                      了解更多
                    </el-button>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </div>
        </el-tab-pane>

        <el-tab-pane label="产业互联网集群" name="industry">
          <div class="business-content">
            <div class="business-intro">
              <h2>产业互联网集群</h2>
              <p>
                聚恒集团产业互联网集群专注于推动产业数字化转型，为企业提供全方位的数字化解决方案。
              </p>
            </div>
            <el-row :gutter="20" class="business-cards">
              <el-col :span="8" v-for="item in industryBusiness" :key="item.id">
                <el-card class="business-card" :body-style="{ padding: '0px' }">
                  <img :src="item.image" class="business-image" />
                  <div class="card-content">
                    <h3>{{ item.title }}</h3>
                    <p>{{ item.description }}</p>
                    <el-button type="primary" link @click="showBusinessDetail(item)">
                      了解更多
                    </el-button>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </div>
        </el-tab-pane>

        <el-tab-pane label="产业投资" name="investment">
          <div class="business-content">
            <div class="business-intro">
              <h2>产业投资</h2>
              <p>聚恒集团产业投资致力于发现和培育具有创新潜力的企业，推动产业升级和创新发展。</p>
            </div>
            <el-row :gutter="20" class="business-cards">
              <el-col :span="8" v-for="item in investmentBusiness" :key="item.id">
                <el-card class="business-card" :body-style="{ padding: '0px' }">
                  <img :src="item.image" class="business-image" />
                  <div class="card-content">
                    <h3>{{ item.title }}</h3>
                    <p>{{ item.description }}</p>
                    <el-button type="primary" link @click="showBusinessDetail(item)">
                      了解更多
                    </el-button>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>

    <!-- 业务详情对话框 -->
    <el-dialog v-model="dialogVisible" :title="selectedBusiness?.title" width="70%">
      <div class="business-detail">
        <img :src="selectedBusiness?.image" class="detail-image" v-if="selectedBusiness?.image" />
        <div class="detail-content">
          <div class="detail-text" v-html="selectedBusiness?.content"></div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref } from "vue";

const activeTab = ref("consumer");
const dialogVisible = ref(false);
const selectedBusiness = ref(null);

// 消费互联网业务数据
const consumerBusiness = ref([
  {
    id: 1,
    title: "数字生活服务",
    description: "提供便捷的本地生活服务解决方案",
    image: "/assets/consumer1.jpg",
    content: "详细内容...",
  },
  {
    id: 2,
    title: "电子商务平台",
    description: "打造全方位的电商生态系统",
    image: "/assets/consumer2.jpg",
    content: "详细内容...",
  },
  {
    id: 3,
    title: "数字营销服务",
    description: "提供精准的数字营销解决方案",
    image: "/assets/consumer3.jpg",
    content: "详细内容...",
  },
]);

// 产业互联网业务数据
const industryBusiness = ref([
  {
    id: 1,
    title: "产业数字化",
    description: "推动传统产业数字化转型",
    image: "/assets/industry1.jpg",
    content: "详细内容...",
  },
  {
    id: 2,
    title: "智能制造",
    description: "提供智能制造整体解决方案",
    image: "/assets/industry2.jpg",
    content: "详细内容...",
  },
  {
    id: 3,
    title: "供应链管理",
    description: "优化供应链管理效率",
    image: "/assets/industry3.jpg",
    content: "详细内容...",
  },
]);

// 产业投资业务数据
const investmentBusiness = ref([
  {
    id: 1,
    title: "创业投资",
    description: "投资具有创新潜力的创业企业",
    image: "/assets/investment1.jpg",
    content: "详细内容...",
  },
  {
    id: 2,
    title: "产业并购",
    description: "推动产业整合与升级",
    image: "/assets/investment2.jpg",
    content: "详细内容...",
  },
  {
    id: 3,
    title: "战略投资",
    description: "布局战略性新兴产业",
    image: "/assets/investment3.jpg",
    content: "详细内容...",
  },
]);

const showBusinessDetail = (business) => {
  selectedBusiness.value = business;
  dialogVisible.value = true;
};
</script>

<style scoped>
.business-page {
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

.business-container {
  background: #fff;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.business-tabs {
  margin-bottom: 30px;
}

.business-content {
  padding: 20px 0;
}

.business-intro {
  text-align: center;
  margin-bottom: 40px;
}

.business-intro h2 {
  font-size: 24px;
  color: #333;
  margin-bottom: 15px;
}

.business-intro p {
  color: #666;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
}

.business-cards {
  margin-top: 30px;
}

.business-card {
  margin-bottom: 20px;
  transition: transform 0.3s;
}

.business-card:hover {
  transform: translateY(-5px);
}

.business-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-content {
  padding: 20px;
}

.card-content h3 {
  font-size: 18px;
  color: #333;
  margin: 0 0 10px 0;
}

.card-content p {
  color: #666;
  margin: 0 0 15px 0;
  line-height: 1.6;
}

.business-detail {
  padding: 20px;
}

.detail-image {
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 20px;
}

.detail-text {
  line-height: 1.8;
  color: #333;
}
</style>
