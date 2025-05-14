<template>
  <div class="home">
    <!-- Section 1: 开屏视频 -->
    <section class="hero-section">
      <video class="hero-video" autoplay loop muted playsinline>
        <source src="/assets/intro.mp4" type="video/mp4" />
      </video>
      <div class="hero-content"></div>
    </section>

    <!-- Section 2: 新闻中心 -->
    <section class="news-section">
      <div class="jf-title">
        <el-link href="https://www.ijheng.com/news.html" target="_blank" class="jf-title-link">
          新闻中心
        </el-link>
      </div>
      <div class="news-en-bar">news center</div>
      <div class="jf-wrap">
        <div class="jf-inews-l">
          <el-link
            href="https://www.ijheng.com/news/108.html"
            target="_blank"
            class="jf-inews-l-pic"
          >
            <el-image
              src="//pic.ijheng.com/img/public/article/2024-08/YGCv7hLyQNt25bKJPySLWyNy16CtfElgAKFWA5I0.jpeg"
              fit="cover"
              class="jf-hvScaleImg"
            />
          </el-link>
          <div class="jf-inews-l-text">
            <span>2024-08-19</span>
            <h4>
              捐资助学润桑梓 情系故乡暖人心
              ——聚恒数科董事长陈遂仲再获涟源市关心下一代"捐资助学功臣"称号
            </h4>
            <div class="desc">
              8月16日上午，湖南省涟源市关工委召开了关心下一代基金奖学助学金发放会议，聚恒数科董事长陈遂仲被授予关心下一代"捐资助学功臣...
            </div>
            <el-link href="https://www.ijheng.com/news/108.html" target="_blank"
              ><em>详情</em></el-link
            >
          </div>
        </div>
        <div class="jf-inews-r">
          <ul>
            <li>
              <el-link href="https://www.ijheng.com/news/107.html" target="_blank"
                >沈晓明调研文化和科技融合发展工作并主持召开座谈会</el-link
              >
            </li>
            <li>
              <el-link href="https://www.ijheng.com/news/106.html" target="_blank"
                >聚恒数科董事长陈遂仲荣获涟源市关心下一代"捐资助学之星"</el-link
              >
            </li>
            <li>
              <el-link href="https://www.ijheng.com/news/105.html" target="_blank"
                >跨周期 共成长 向未来——聚恒数科入驻总部乔迁仪式圆满举行</el-link
              >
            </li>
            <li>
              <el-link href="https://www.ijheng.com/news/102.html" target="_blank"
                >凝心强省会 聚力开新篇——长沙市人大农业与农村委员会主任委员浣...</el-link
              >
            </li>
            <li>
              <el-link href="https://www.ijheng.com/news/101.html" target="_blank"
                >长沙市委常委、组织部长罗缵吉一行莅临聚恒数科指导党建工作</el-link
              >
            </li>
            <li>
              <el-link href="https://www.ijheng.com/news/100.html" target="_blank"
                >长沙市委常委、市政府常务副市长彭华松一行调研聚恒科技园项目建...</el-link
              >
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Section 3: 产业领域 -->
    <section class="industry-section">
      <div class="section-header">
        <h2>产业领域</h2>
      </div>
      <div class="industry-en-bar">Industrial Layout</div>
      <div class="industry-cards">
        <div class="industry-card" v-for="item in businessItems" :key="item.id">
          <img :src="item.image" class="industry-image" />
          <div class="industry-info">
            <h3>{{ item.title }}</h3>
            <router-link to="/business" class="industry-more">了解更多 &gt;</router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 4: 企业文化 -->
    <section class="culture-section">
      <div class="section-header">
        <h2>企业文化</h2>
      </div>
      <div class="culture-en-bar">Corporate Culture</div>
      <div class="culture-puzzle">
        <div class="puzzle-item" v-for="culture in cultureItems" :key="culture.id">
          <img :src="culture.image" class="puzzle-image" />
          <div class="puzzle-info">
            <h3>{{ culture.title }}</h3>
          </div>
        </div>
      </div>
    </section>
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
    image: "/assets/news.jpeg",
  },
  {
    id: 2,
    title: "聚恒数科入驻总部乔迁仪式圆满举行",
    summary: "跨周期 共成长 向未来——聚恒数科入驻总部乔迁仪式圆满举行...",
    date: "2024-08-15",
    image: "/assets/news.jpeg",
  },
  {
    id: 3,
    title: "长沙市委常委、组织部长罗缵吉一行莅临指导",
    summary: "长沙市委常委、组织部长罗缵吉一行莅临聚恒数科指导党建工作...",
    date: "2024-08-10",
    image: "/assets/news.jpeg",
  },
]);

const businessItems = ref([
  {
    id: 1,
    title: "消费互联网集群",
    description: "打造数字化生活服务平台",
    image: "/assets/ifiled1.png",
  },
  {
    id: 2,
    title: "产业互联网集群",
    description: "推动产业数字化转型",
    image: "/assets/ifiled2.png",
  },
  {
    id: 3,
    title: "产业投资",
    description: "助力创新企业发展",
    image: "/assets/ifiled3.png",
  },
]);

const cultureItems = ref([
  {
    id: 1,
    title: "文化理念",
    image: "/assets/iculture1.png",
  },
  {
    id: 2,
    title: "员工风采",
    image: "/assets/iculture2.png",
  },
  {
    id: 3,
    title: "社会责任",
    image: "/assets/iculture3.png",
  },
  {
    id: 4,
    title: "发展历程",
    image: "/assets/iculture4.png",
  },
]);
</script>

<style scoped>
.home {
  width: 100%;
  margin: 0;
  padding: 0;
  background: #fff;
}

section {
  width: 100%;
  box-sizing: border-box;
  padding: 60px 0 0 0;
}

.hero-section {
  position: relative;
  width: 100vw;
  height: 100vh;
  margin: 0;
  border-radius: 0;
  overflow: hidden;
  padding: 0;
}

.hero-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: 0;
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
  width: 100vw;
  padding: 0 20px;
  box-sizing: border-box;
}

.section-header {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 16px;
  margin-bottom: 30px;
}

.section-header h2 {
  font-size: 32px;
  color: #222;
  margin: 0;
}

.section-header .en-title {
  font-size: 20px;
  color: #1565c0;
  margin-bottom: 2px;
}

.news-section {
  background: #fff;
  padding: 80px 0 0 0;
  padding-top: 136px;
  padding-left: 40px;
  padding-right: 40px;
}

.news-card {
  height: 100%;
  transition: transform 0.3s;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.news-card:hover {
  transform: translateY(-5px);
}

.news-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
}

.news-date {
  color: #999;
  font-size: 14px;
  margin-top: 10px;
}

.industry-cards {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 30px;
}

.industry-card {
  background: #111a3a;
  border-radius: 12px;
  overflow: hidden;
  width: 340px;
  height: 260px;
  position: relative;
  box-shadow: 0 4px 24px 0 rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.industry-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
  opacity: 0.7;
}

.industry-info {
  position: relative;
  z-index: 1;
  color: #fff;
  padding: 30px 24px 24px 24px;
}

.industry-info h3 {
  font-size: 22px;
  margin-bottom: 16px;
}

.industry-more {
  color: #fff;
  font-size: 16px;
  text-decoration: underline;
}

.culture-section {
  background: #fff;
  padding: 80px 0 0 0;
  padding-left: 40px;
  padding-right: 40px;
}

.culture-puzzle {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-top: 30px;
}

.puzzle-item {
  position: relative;
  background: #f5f7fa;
  border-radius: 8px;
  overflow: hidden;
  height: 220px;
  display: flex;
  align-items: flex-end;
}

.puzzle-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
  opacity: 0.7;
}

.puzzle-info {
  position: relative;
  z-index: 1;
  color: #fff;
  padding: 20px;
  width: 100%;
  text-align: left;
}

.puzzle-info h3 {
  font-size: 20px;
  margin: 0;
}

.news-en-bar {
  display: block;
  background: rgb(20, 68, 196);
  color: #fff;
  font-size: 22px;
  font-weight: 500;
  padding: 6px 32px;
  border-radius: 2px;
  width: fit-content;
  margin: 0 auto 32px auto;
  text-align: center;
  letter-spacing: 1px;
}

.industry-en-bar,
.culture-en-bar {
  display: block;
  background: rgb(20, 68, 196);
  color: #fff;
  font-size: 22px;
  font-weight: 500;
  padding: 6px 32px;
  border-radius: 2px;
  width: fit-content;
  margin: 0 auto 32px auto;
  text-align: center;
  letter-spacing: 1px;
}

@media screen and (max-width: 1200px) {
  .industry-cards {
    flex-direction: column;
    align-items: center;
  }
  .culture-puzzle {
    grid-template-columns: 1fr 1fr;
  }
}

@media screen and (max-width: 768px) {
  .hero-section {
    height: 100vh;
  }
  .industry-cards {
    flex-direction: column;
    gap: 20px;
  }
  .culture-puzzle {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  .section-header h2 {
    font-size: 24px;
  }
  .section-header .en-title {
    font-size: 14px;
  }
  .news-section,
  .industry-section,
  .culture-section {
    padding-top: 104px; /* 48px header + 56px间距 */
  }
  .news-en-bar {
    font-size: 16px;
    padding: 4px 16px;
    margin-bottom: 20px;
  }
  .industry-en-bar,
  .culture-en-bar {
    font-size: 16px;
    padding: 4px 16px;
    margin-bottom: 20px;
  }
}

@media screen and (max-width: 900px) {
  .news-section {
    padding-left: 16px;
    padding-right: 16px;
  }
  .jf-inews-l {
    flex-direction: column;
  }
  .jf-inews-l-pic,
  .jf-inews-l-text {
    width: 100%;
  }
  .culture-section {
    padding-left: 16px;
    padding-right: 16px;
  }
}

.jf-title {
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 24px;
}
.jf-title-link {
  color: #222;
  font-size: 32px;
  font-weight: bold;
}
.jf-title-link span {
  color: #1565c0;
  font-size: 18px;
  margin-left: 16px;
  font-weight: normal;
}
.jf-wrap {
  display: flex;
  gap: 40px;
  align-items: stretch;
}
.jf-inews-l {
  flex: 1.2;
  display: flex;
  flex-direction: row;
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.06);
}
.jf-inews-l-pic {
  display: block;
  width: 50%;
  aspect-ratio: 16/9;
  overflow: hidden;
  background: #f5f5f5;
  position: relative;
  flex-shrink: 0;
}
.jf-hvScaleImg {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
  background: #f5f5f5;
  position: absolute;
  top: 0;
  left: 0;
}
.jf-hvScaleImg:hover {
  transform: scale(1.05);
}
.jf-inews-l-text {
  width: 50%;
  flex: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px 18px 18px 18px;
  background: #fff;
  box-sizing: border-box;
}
.jf-inews-l-text span {
  color: #1565c0;
  font-size: 14px;
  margin-bottom: 8px;
}
.jf-inews-l-text h4 {
  font-size: 20px;
  color: #222;
  margin: 0 0 12px 0;
  font-weight: bold;
}
.jf-inews-l-text .desc {
  color: #666;
  font-size: 15px;
  margin-bottom: 10px;
}
.jf-inews-l-text em {
  color: #1565c0;
  font-style: normal;
  font-size: 15px;
  margin-left: 8px;
}
.jf-inews-r {
  flex: 1;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.06);
  padding: 18px 18px 18px 18px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.jf-inews-r ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.jf-inews-r li {
  margin-bottom: 16px;
  font-size: 15px;
}
.jf-inews-r li:last-child {
  margin-bottom: 0;
}
.jf-inews-more {
  display: block;
  margin: 24px 0 0 auto;
  color: #1565c0;
  font-size: 16px;
  text-align: right;
}
::selection {
  background: transparent;
}
</style>
