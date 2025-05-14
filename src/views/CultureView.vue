<template>
  <div class="culture-page">
    <div class="page-header">
      <h1>企业文化</h1>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>企业文化</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="culture-container">
      <!-- 企业文化分类 -->
      <el-tabs v-model="activeTab" class="culture-tabs">
        <el-tab-pane label="文化理念" name="concept">
          <div class="culture-content">
            <div class="culture-intro">
              <h2>核心理念</h2>
              <p>
                聚恒集团秉承"创新、协作、共赢"的企业理念，致力于打造开放、包容、创新的企业文化。
              </p>
            </div>
            <el-row :gutter="20" class="concept-cards">
              <el-col :span="8" v-for="item in conceptItems" :key="item.id">
                <el-card class="concept-card">
                  <el-icon class="concept-icon" :size="40">
                    <component :is="item.icon"></component>
                  </el-icon>
                  <h3>{{ item.title }}</h3>
                  <p>{{ item.description }}</p>
                </el-card>
              </el-col>
            </el-row>
          </div>
        </el-tab-pane>

        <el-tab-pane label="员工风采" name="staff">
          <div class="culture-content">
            <div class="culture-intro">
              <h2>员工风采</h2>
              <p>聚恒集团重视人才培养，为员工提供广阔的发展空间和良好的工作环境。</p>
            </div>
            <el-row :gutter="20" class="staff-cards">
              <el-col :span="8" v-for="item in staffItems" :key="item.id">
                <el-card class="staff-card" :body-style="{ padding: '0px' }">
                  <img :src="item.image" class="staff-image" />
                  <div class="staff-content">
                    <h3>{{ item.name }}</h3>
                    <p class="staff-position">{{ item.position }}</p>
                    <p class="staff-description">{{ item.description }}</p>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </div>
        </el-tab-pane>

        <el-tab-pane label="社会责任" name="responsibility">
          <div class="culture-content">
            <div class="culture-intro">
              <h2>社会责任</h2>
              <p>聚恒集团积极履行社会责任，致力于推动社会可持续发展。</p>
            </div>
            <el-timeline>
              <el-timeline-item
                v-for="item in responsibilityItems"
                :key="item.id"
                :timestamp="item.date"
                placement="top"
              >
                <el-card class="responsibility-card">
                  <h3>{{ item.title }}</h3>
                  <p>{{ item.description }}</p>
                  <img :src="item.image" class="responsibility-image" v-if="item.image" />
                </el-card>
              </el-timeline-item>
            </el-timeline>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Light, Connection, Trophy, User, OfficeBuilding, School } from "@element-plus/icons-vue";

const activeTab = ref("concept");

// 文化理念数据
const conceptItems = ref([
  {
    id: 1,
    title: "创新驱动",
    description: "持续创新，引领行业发展",
    icon: "Light",
  },
  {
    id: 2,
    title: "协作共赢",
    description: "开放合作，共创价值",
    icon: "Connection",
  },
  {
    id: 3,
    title: "追求卓越",
    description: "精益求精，追求完美",
    icon: "Trophy",
  },
]);

// 员工风采数据
const staffItems = ref([
  {
    id: 1,
    name: "张明",
    position: "技术总监",
    description: "拥有10年互联网行业经验，带领团队完成多个重要项目",
    image: "/src/assets/staff1.jpg",
  },
  {
    id: 2,
    name: "李华",
    position: "产品经理",
    description: "专注于用户体验设计，推动产品创新",
    image: "/src/assets/staff2.jpg",
  },
  {
    id: 3,
    name: "王芳",
    position: "人力资源总监",
    description: "致力于打造优秀的企业文化，培养人才",
    image: "/src/assets/staff3.jpg",
  },
]);

// 社会责任数据
const responsibilityItems = ref([
  {
    id: 1,
    title: "捐资助学",
    description: "设立教育基金，支持贫困地区教育发展",
    date: "2024-08-19",
    image: "/src/assets/responsibility1.jpg",
  },
  {
    id: 2,
    title: "环保行动",
    description: "开展环保公益活动，推动绿色可持续发展",
    date: "2024-07-15",
    image: "/src/assets/responsibility2.jpg",
  },
  {
    id: 3,
    title: "社区服务",
    description: "组织员工参与社区志愿服务，回馈社会",
    date: "2024-06-20",
    image: "/src/assets/responsibility3.jpg",
  },
]);
</script>

<style scoped>
.culture-page {
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

.culture-container {
  background: #fff;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.culture-tabs {
  margin-bottom: 30px;
}

.culture-content {
  padding: 20px 0;
}

.culture-intro {
  text-align: center;
  margin-bottom: 40px;
}

.culture-intro h2 {
  font-size: 24px;
  color: #333;
  margin-bottom: 15px;
}

.culture-intro p {
  color: #666;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
}

.concept-cards {
  margin-top: 30px;
}

.concept-card {
  text-align: center;
  padding: 30px 20px;
  transition: transform 0.3s;
}

.concept-card:hover {
  transform: translateY(-5px);
}

.concept-icon {
  color: #409eff;
  margin-bottom: 20px;
}

.concept-card h3 {
  font-size: 20px;
  color: #333;
  margin: 0 0 15px 0;
}

.concept-card p {
  color: #666;
  line-height: 1.6;
}

.staff-cards {
  margin-top: 30px;
}

.staff-card {
  margin-bottom: 20px;
  transition: transform 0.3s;
}

.staff-card:hover {
  transform: translateY(-5px);
}

.staff-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
}

.staff-content {
  padding: 20px;
  text-align: center;
}

.staff-content h3 {
  font-size: 18px;
  color: #333;
  margin: 0 0 5px 0;
}

.staff-position {
  color: #409eff;
  margin: 0 0 10px 0;
}

.staff-description {
  color: #666;
  line-height: 1.6;
}

.responsibility-card {
  margin-bottom: 20px;
}

.responsibility-card h3 {
  font-size: 18px;
  color: #333;
  margin: 0 0 10px 0;
}

.responsibility-card p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 15px;
}

.responsibility-image {
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  border-radius: 4px;
}
</style>
