<template>
  <div class="news-page">
    <div class="page-header">
      <h1>新闻中心</h1>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>新闻中心</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="news-container">
      <!-- 新闻分类标签 -->
      <el-tabs v-model="activeTab" class="news-tabs">
        <el-tab-pane label="集团新闻" name="group">
          <el-timeline>
            <el-timeline-item
              v-for="news in filteredNews"
              :key="news.id"
              :timestamp="news.date"
              placement="top"
            >
              <el-card class="news-item">
                <div class="news-content">
                  <img :src="news.image" class="news-image" v-if="news.image" />
                  <div class="news-info">
                    <h3>{{ news.title }}</h3>
                    <p>{{ news.summary }}</p>
                    <el-button type="primary" link @click="showNewsDetail(news)">
                      查看详情
                    </el-button>
                  </div>
                </div>
              </el-card>
            </el-timeline-item>
          </el-timeline>
        </el-tab-pane>
        <el-tab-pane label="聚恒科技园动态" name="tech">
          <!-- 科技园动态内容 -->
        </el-tab-pane>
        <el-tab-pane label="社会公益" name="welfare">
          <!-- 社会公益内容 -->
        </el-tab-pane>
      </el-tabs>

      <!-- 分页 -->
      <div class="pagination">
        <el-pagination
          :current-page="currentPage"
          :page-size="pageSize"
          :page-sizes="[10, 20, 30, 50]"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </div>

    <!-- 新闻详情对话框 -->
    <el-dialog v-model="dialogVisible" :title="selectedNews?.title" width="70%">
      <div class="news-detail">
        <img :src="selectedNews?.image" class="detail-image" v-if="selectedNews?.image" />
        <div class="detail-content">
          <div class="detail-meta">
            <span>发布时间：{{ selectedNews?.date }}</span>
            <span>来源：聚恒集团</span>
          </div>
          <div class="detail-text" v-html="selectedNews?.content"></div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const activeTab = ref("group");
const currentPage = ref(1);
const pageSize = ref(10);
const total = ref(100);
const dialogVisible = ref(false);
const selectedNews = ref(null);

// 模拟新闻数据
const newsList = ref([
  {
    id: 1,
    title: '聚恒数科董事长陈遂仲荣获"捐资助学功臣"称号',
    summary:
      '8月16日上午，湖南省涟源市关工委召开了关心下一代基金奖学助学金发放会议，聚恒数科董事长陈遂仲被授予关心下一代"捐资助学功臣"称号...',
    date: "2024-08-19",
    image: "/src/assets/news1.jpg",
    content: "详细内容...",
    category: "group",
  },
  {
    id: 2,
    title: "聚恒数科入驻总部乔迁仪式圆满举行",
    summary: "跨周期 共成长 向未来——聚恒数科入驻总部乔迁仪式圆满举行...",
    date: "2024-08-15",
    image: "/src/assets/news2.jpg",
    content: "详细内容...",
    category: "group",
  },
  // 更多新闻数据...
]);

const filteredNews = computed(() => {
  return newsList.value.filter((news) => news.category === activeTab.value);
});

const handleSizeChange = (val) => {
  pageSize.value = val;
  // 重新加载数据
};

const handleCurrentChange = (val) => {
  currentPage.value = val;
  // 重新加载数据
};

const showNewsDetail = (news) => {
  selectedNews.value = news;
  dialogVisible.value = true;
};
</script>

<style scoped>
.news-page {
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

.news-container {
  background: #fff;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.news-tabs {
  margin-bottom: 30px;
}

.news-item {
  margin-bottom: 20px;
}

.news-content {
  display: flex;
  gap: 20px;
}

.news-image {
  width: 200px;
  height: 150px;
  object-fit: cover;
  border-radius: 4px;
}

.news-info {
  flex: 1;
}

.news-info h3 {
  margin: 0 0 10px 0;
  font-size: 18px;
  color: #333;
}

.news-info p {
  color: #666;
  margin: 0 0 10px 0;
  line-height: 1.6;
}

.pagination {
  margin-top: 30px;
  text-align: center;
}

.news-detail {
  padding: 20px;
}

.detail-image {
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 20px;
}

.detail-meta {
  color: #999;
  margin-bottom: 20px;
}

.detail-meta span {
  margin-right: 20px;
}

.detail-text {
  line-height: 1.8;
  color: #333;
}
</style>
