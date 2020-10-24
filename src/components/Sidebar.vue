<template>
  <div class="sidebar">
    <div class="sidebar-item">
      <div
        class="sidebar-title pointer"
        @click="productExpand = !productExpand"
      >
        <i class="fas fa-archive"></i>產品<span
          :class="['sidebar-arrow', { expand: productExpand }]"
        ></span>
      </div>
      <template v-if="productExpand">
        <div
          class="sidebar-category"
          v-for="(product, index) in products"
          :key="index"
        >
          <input
            type="checkbox"
            :id="index + 'category-toggle'"
            class="category-toggle"
            :checked="false"
          />
          <label :for="index + 'category-toggle'" class="category-toggle-label">
            <div class="category-title pointer">
              {{ product.categories }}
              <span class="sidebar-arrow"></span>
            </div>
          </label>
          <div class="product-item-wrapper">
            <router-link
              v-for="item in product.productItems"
              :key="item.id"
              :to="{ name: 'Product', params: { id: item.id } }"
            >
              <div class="product-item">
                {{ item.product }}
              </div>
            </router-link>
          </div>
        </div>
      </template>
    </div>

    <div class="sidebar-item">
      <div class="sidebar-title pointer">
        <i class="fas fa-user"></i>個人中心
        <span :class="['sidebar-arrow', { expand: false }]"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data() {
    return {
      productExpand: true,
      productId: null,
      products: [
        {
          categories: '工業自動化',
          productItems: [
            {
              id: 1342,
              product: '自動化控制器'
            },
            {
              id: 1343,
              product: '工業自動化'
            },
            {
              id: 1344,
              product: '電力與能源'
            }
          ]
        },
        {
          categories: '嵌入式電腦'
        },
        {
          categories: '網路通訊'
        },
        {
          categories: '智能系統'
        },
        {
          categories: '智慧零售'
        }
      ]
    }
  },
  mounted() {
    this.productId = Number(this.$route.params.id)
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/_base.scss';

.sidebar {
  min-width: 250px;
  height: calc(100vh - 60px);
  position: -webkit-sticky;
  position: sticky;
  top: 60px;
  background-color: $background-blue;
  color: #fff;
  padding: 30px 0;
}

.sidebar-title,
.category-title {
  padding: 20px 30px;
  position: relative;

  i {
    margin-right: 15px;
  }

  .sidebar-arrow {
    &::after {
      content: '';
      transform: rotate(45deg);
      position: absolute;
      right: 30px;
      top: calc(50% - 4px);
      height: 8px;
      width: 8px;
      border-top: 2px solid #fff;
      border-right: 2px solid #fff;
    }

    &.expand::after {
      transform: rotate(135deg);
    }
  }
}

.category-title {
  padding: 10px 30px;
  font-weight: 350;
}

.category-toggle {
  display: none;
  position: absolute;

  &:checked {
    ~ .product-item-wrapper {
      display: block;
    }

    ~ .category-toggle-label .category-title .sidebar-arrow::after {
      transform: rotate(135deg);
    }
  }
}

.product-item-wrapper {
  display: none;
  margin: 15px 0;
  line-height: 2rem;
}

.product-item {
  margin: 0 30px;
  padding: 0 20px;
  font-size: 0.9rem;
  font-weight: 300;
  border-left: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
}

.router-link-exact-active .product-item {
  color: $light-blue;
  font-weight: 400;
}
</style>