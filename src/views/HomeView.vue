<template>
  <div class="home">
    <!-- 开屏视频 -->
    <div class="hero-section">
      <video class="hero-video" autoplay loop muted playsinline>
        <source src="/src/assets/intro.mp4" type="video/mp4" />
      </video>
      <div class="hero-content">
      </div>
    </div>

    <!-- 新闻中心 -->
    <div class="section news-section">
      <div class="section-header">
        <h2>新闻中心</h2>
        <router-link to="/news" class="more-link">更多 ></router-link>
      </div>
      <el-row :gutter="20">
        <el-col :span="8" v-for="news in newsItems" :key="news.id">
          <el-card class="news-card" shadow="hover">
            <img :src="news.image" class="news-image" />
            <h3>{{ news.title }}</h3>
            <p>{{ news.summary }}</p>
            <div class="news-date">{{ news.date }}</div>
          </el-card>
        </el-col>
      </el-row>
    </div>

    <!-- 业务体系 -->
    <div class="section business-section">
      <div class="section-header">
        <h2>业务体系</h2>
        <router-link to="/business" class="more-link">更多 ></router-link>
      </div>
      <el-row :gutter="20">
        <el-col :span="8" v-for="business in businessItems" :key="business.id">
          <el-card class="business-card" shadow="hover">
            <img :src="business.image" class="business-image" />
            <div class="business-content">
              <h3>{{ business.title }}</h3>
              <p>{{ business.description }}</p>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>

    <!-- 企业文化 -->
    <div class="section culture-section">
      <div class="section-header">
        <h2>企业文化</h2>
        <router-link to="/culture" class="more-link">更多 ></router-link>
      </div>
      <el-row :gutter="20">
        <el-col :span="6" v-for="culture in cultureItems" :key="culture.id">
          <el-card class="culture-card" shadow="hover">
            <img :src="culture.image" class="culture-image" />
            <div class="culture-content">
              <h3>{{ culture.title }}</h3>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const newsItems = ref([
  {
    id: 1,
    title: '聚恒数科董事长陈遂仲荣获"捐资助学功臣"称号',
    summary: "8月16日上午，湖南省涟源市关工委召开了关心下一代基金奖学助学金发放会议...",
    date: "2024-08-19",
    image: "/src/assets/news.jpeg",
  },
  {
    id: 2,
    title: "聚恒数科入驻总部乔迁仪式圆满举行",
    summary: "跨周期 共成长 向未来——聚恒数科入驻总部乔迁仪式圆满举行...",
    date: "2024-08-15",
    image: "/src/assets/news.jpeg",
  },
  {
    id: 3,
    title: "长沙市委常委、组织部长罗缵吉一行莅临指导",
    summary: "长沙市委常委、组织部长罗缵吉一行莅临聚恒数科指导党建工作...",
    date: "2024-08-10",
    image: "/src/assets/news.jpeg",
  },
]);

const businessItems = ref([
  {
    id: 1,
    title: "消费互联网集群",
    description: "打造数字化生活服务平台",
    image: "/src/assets/ifiled1.png",
  },
  {
    id: 2,
    title: "产业互联网集群",
    description: "推动产业数字化转型",
    image: "/src/assets/ifiled2.png",
  },
  {
    id: 3,
    title: "产业投资",
    description: "助力创新企业发展",
    image: "/src/assets/ifiled3.png",
  },
]);

const cultureItems = ref([
  {
    id: 1,
    title: "文化理念",
    image: "/src/assets/iculture1.png",
  },
  {
    id: 2,
    title: "员工风采",
    image: "/src/assets/iculture2.png",
  },
  {
    id: 3,
    title: "社会责任",
    image: "/src/assets/iculture3.png",
  },
  {
    id: 4,
    title: "发展历程",
    image: "/src/assets/iculture4.png",
  },
]);
</script>

<style scoped>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.hero-section {
  position: relative;
  height: 500px;
  margin-bottom: 60px;
  border-radius: 8px;
  overflow: hidden;
}

.hero-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.hero-content h1 {
  font-size: 48px;
  margin-bottom: 20px;
}

.hero-content p {
  font-size: 24px;
}

.section {
  margin: 60px 0;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

.section-header h2 {
  font-size: 32px;
  color: #333;
  margin: 0;
}

.more-link {
  color: #409eff;
  text-decoration: none;
  font-size: 16px;
}

.news-card,
.business-card,
.culture-card {
  height: 100%;
  transition: transform 0.3s;
}

.news-card:hover,
.business-card:hover,
.culture-card:hover {
  transform: translateY(-5px);
}

.news-image,
.business-image,
.culture-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.news-date {
  color: #999;
  font-size: 14px;
  margin-top: 10px;
}

.business-content,
.culture-content {
  padding: 20px;
}

h3 {
  font-size: 18px;
  color: #333;
  margin: 10px 0;
}

p {
  color: #666;
  line-height: 1.6;
}

@media screen and (max-width: 768px) {
  .hero-section {
    height: 300px;
  }

  .hero-content h1 {
    font-size: 32px;
  }

  .hero-content p {
    font-size: 18px;
  }

  .section-header h2 {
    font-size: 24px;
  }
}
</style>
