<template>
<div class="homepage">
  <div class="banner">
    <a-carousel autoplay>
      <div class="banner-item">
        <div class="title">
          <h3>介绍1</h3>
          <div class="desc">介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字</div>
        </div>
      </div>
      <div class="banner-item">
        <div class="title">
          <h3>介绍2</h3>
          <div class="desc">介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字</div>
        </div>
      </div>
      <div class="banner-item">
        <div class="title">
          <h3>介绍3</h3>
          <div class="desc">介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字</div>
        </div>
      </div>
    </a-carousel>
  </div>
  <div class="content">
    <div class="introduction">
      <div class="title">隐私计算项目组</div>
      <div class="desc">
        <p>介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字</p>
        <p>介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字</p>
      </div>
    </div>
    <div class="news">
      <div class="title">
        <span>最近动态</span>
      </div>
      <div class="card-container">
        <a-row :gutter="16">
          <a-col :span="8">
            <a-card hoverable class="news-card">
              <template #cover>
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              </template>
              <template #actions>
                <span>查看</span>
              </template>
              <a-card-meta title="Card title" description="This is the description">
              </a-card-meta>
            </a-card>
          </a-col>
          <a-col :span="8">
            <a-card hoverable class="news-card">
              <template #cover>
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              </template>
              <template #actions>
                <span>查看</span>
              </template>
              <a-card-meta title="Card title" description="This is the description">
              </a-card-meta>
            </a-card>
          </a-col>
          <a-col :span="8">
            <a-card hoverable class="news-card">
              <template #cover>
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              </template>
              <template #actions>
                <span>查看</span>
              </template>
              <a-card-meta title="Card title" description="This is the description">
              </a-card-meta>
            </a-card>
          </a-col>
        </a-row>
      </div>
      <div class="btn-row">
        <a-button type="primary" ghost="">了解更多</a-button>
      </div>
    </div>
    <div class="spotlight">
      <div class="title">
        <span>研究焦点</span>
      </div>
      <div class="card-container">
        <a-row :gutter="16">
          <a-col :span="6">
            <div class="spotlight-card">
              <div class="card-title">
                <DeploymentUnitOutlined />
                <span>Spotlight 1</span>
              </div>
              <ul>
                <li>desc 1 desc 1 desc 1 desc 1</li>
                <li>desc 2 desc 2 desc 2 desc 2</li>
                <li>desc 3 desc 3 desc 3 desc 3</li>
              </ul>
            </div>
          </a-col>
          <a-col :span="6">
            <div class="spotlight-card">
              <div class="card-title">
                <DeploymentUnitOutlined />
                <span>Spotlight 2</span>
              </div>
              <ul>
                <li>desc 1 desc 1 desc 1 desc 1</li>
                <li>desc 2 desc 2 desc 2 desc 2</li>
                <li>desc 3 desc 3 desc 3 desc 3</li>
              </ul>
            </div>
          </a-col>
          <a-col :span="6">
            <div class="spotlight-card">
              <div class="card-title">
                <DeploymentUnitOutlined />
                <span>Spotlight 3</span>
              </div>
              <ul>
                <li>desc 1 desc 1 desc 1 desc 1</li>
                <li>desc 2 desc 2 desc 2 desc 2</li>
                <li>desc 3 desc 3 desc 3 desc 3</li>
              </ul>
            </div>
          </a-col>
          <a-col :span="6">
            <div class="spotlight-card">
              <div class="card-title">
                <DeploymentUnitOutlined />
                <span>Spotlight 4</span>
              </div>
              <ul>
                <li>desc 1 desc 1 desc 1 desc 1</li>
                <li>desc 2 desc 2 desc 2 desc 2</li>
                <li>desc 3 desc 3 desc 3 desc 3</li>
              </ul>
            </div>
          </a-col>
        </a-row>
      </div>
      <div class="btn-row">
        <a-button type="primary" ghost="">了解更多</a-button>
      </div>

    </div>
  </div>
</div>

</template>

<script setup>
import { CloudOutlined, DeploymentUnitOutlined } from '@ant-design/icons-vue'
</script>
<script>
export default {

}
</script>

<style lang="less" scoped>
.homepage {
  .banner {
    width: 100%;
    :deep(.banner-item) {
      text-align: left;
      display: flex !important;
      align-items: center;
      justify-content: center;
      height: 500px;
      .title {
        max-width: 1200px;
        width: 100%;
        .desc {
          max-width: 280px;
          color: rgba(255,255,255, 0.5);
        }
        h3 {
        font-size: 28px;
        }
      }
    }
    :deep(.slick-slide) {
      text-align: center;
      height: 500px;
      // line-height: 160px;
      background: #001529;
      overflow: hidden;
    }
    :deep(.slick-slide h3) {
      color: #fff;
    }
  }
  .content {
    width: 100%;
    .title {
      font-size: 28px;
      font-weight: bold;
      text-align: center;
      margin-bottom: 40px;
    }
    .introduction {
      width: 100%;
      background: #f5f5f5;
      // height: 300px;
      padding: 50px 0;
      .title, .desc {
        max-width: 1200px;
        margin: 0 auto;
      }
      .title {
        margin-bottom: 40px;
      }
    }
    .news{
      padding-top: 50px;
      .title, .card-container {
        max-width: 1200px;
        margin: 0 auto;
      }
      .title {
        margin-bottom: 40px;
        // display: flex;
        // justify-content: space-between;
      }
      .card-container {
        .news-card {
          background: #f4f4f4;
        }
      }
      .btn-row {
        text-align: center;
        margin-top: 40px;
        .ant-btn-primary {
          // background: #73eedc;
          width: 120px;
        }
      }
    }
    .spotlight {
      padding-top: 50px;
      .title, .card-container {
        max-width: 1200px;
        margin: 0 auto;
      }
      .title {
        margin-bottom: 40px;
      }
      .spotlight-card {
        height: 220px;
        background: #f4f4f4;
        border-radius: 8px;
        .card-title {
          display: flex;
          flex-flow: column;
          align-items: center;
          font-size: 24px;
          padding: 20px;
          font-weight: bold;
          .anticon {
            font-size: 40px;
            margin-bottom: 8px;
          }
        }
        ul {
          line-height: 22px;
        }
      }
      .btn-row {
        text-align: center;
        margin-top: 40px;
        .ant-btn-primary {
          // background: #73eedc;
          width: 120px;
        }
      }
    }
  }
}

</style>

