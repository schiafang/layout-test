<template>
  <div class="product-content">
    <div class="breadcrumb">產品 / 工業自動化 / 自動化控制器</div>

    <div class="product-info">
      <div class="product-display">
        <div class="display-image-wrapper">
          <img :src="slideImage" />
          <div class="slide-page">
            <span
              v-for="index in product.displayImage.length"
              :key="index"
              @click="slideDisplay(index)"
              :class="[{ selected: slidePage === index }, 'pointer']"
            >
            </span>
          </div>
          <i class="fas fa-arrow-right next pointer" @click="nextDisplay"></i>
          <i class="fas fa-arrow-left prev pointer" @click="prevDisplay"></i>
        </div>
        <div class="display-info">
          <div class="item"><i class="fas fa-unlock"></i>3D 產品展示</div>
          <div class="item"><i class="fas fa-lock"></i>遠端多人協作</div>
          <div class="item"><i class="fas fa-unlock"></i>克服技術障礙</div>
          <div class="item"><i class="fas fa-lock"></i>企業教育訓練</div>
        </div>
      </div>
      <div class="product-cart">
        <div>
          <span class="name">{{ product.name }}</span>
          <p class="format">
            8x AI, 8x DI, 4x DO, 4槽擴充物聯網智慧型 RTU 8AI / 8DI / 4DO /
            4-Slot Expansion Wireless Intelligent RTU
          </p>
          <div class="price">
            <span>NT${{ product.price | formatNumber }}</span
            ><span class="excluding-tax">(未含稅)</span>
          </div>

          <div class="count-wrapper">
            數量
            <div class="count">
              <button class="decrease" @click="changeQuantity('decrease')">
                <i class="fas fa-minus"></i>
              </button>
              <span class="quantity">{{ quantity }}</span>
              <button class="increase" @click="changeQuantity('increase')">
                <i class="fas fa-plus"></i>
              </button>
            </div>
          </div>

          <div class="stock">
            (In Stock: {{ product.stock | formatNumber }})
          </div>
        </div>

        <div class="bottom">
          <button class="checkout" :disabled="quantity === 0">直接購買</button>
          <button class="add-quotation" @click="addQuotation">
            <i v-if="quotation" class="fas fa-bookmark"></i>
            <i v-else class="far fa-bookmark"></i>
            加入報價單
          </button>
        </div>
      </div>
    </div>

    <div class="product-detail">
      <ul>
        <li v-for="(list, index) in product.list" :key="index">{{ list }}</li>
      </ul>
      <div>
        {{ product.description }}
      </div>
    </div>

    <ProductStandard :specification="product.specification" />
    <RelatedSource />
  </div>
</template>

<script>
import ProductStandard from '@/components/ProductStandard.vue'
import RelatedSource from '@/components/RelatedSource.vue'

const dummyProduct = {
  name: 'ADAM-3600',
  price: 20190,
  stock: 3000,
  displayImage: ['https://advdownload.advantech.com/productfile/PIS/ADAM-3600/Product%20-%20Photo(B)/ADAM-3600_68_B20151015173935.png',
    'https://advdownload.advantech.com/productfile/PIS/ADAM-3600/Product%20-%20Photo(B)/ADAM-3600_6_B20151015173659.png',
    'https://advdownload.advantech.com/productfile/PIS/ADAM-3600/Product%20-%20Photo(B)/ADAM-3600_10_B20151015173836.png'],
  description: 'The ADAM-3600-C2G is an intelligent Remote Terminal Unit with multiple wireless function capability, multiple I/O selection, wide temperature range and support flexible communication protocol for oil, Gas and Water application. In the oil, gas and water application environments the ADAM-3600 is ideal for any other remote inhospitable regions with many devices to be managed remotely.',
  list: ['Domain Focused Onboard IO -8AI / 8DI / 4DO',
    'High I/O Flexibility with 4-slot I/O Expansion'],
  specification: [
    {
      title: 'General',
      standard: [
        ['Power Input', '10v - 30v'],
        ['Power Consumption', '5 W @ 24 V typical']
      ]
    },
    {
      title: 'System Hardware',
      standard: [
        ['CPU', 'Cortex-A8 AM3352'],
        ['Memory', '256MB, Battery Backup RAM 32K'],
        ['Storage', '1GB MicroSD card, SD card slot (optional)'],
        ['Real-time Clock', 'Yes'],
        ['Watchdog Timer', 'Yes']
      ]
    }
    ,
    {
      title: 'Software',
      standard: [
        ['OS Support', 'Linux Kernal 3.12 RT'],
        ['Programming', 'IEC 61131-3, Linux C']
      ]
    }
  ]
}

export default {
  name: 'Product',
  components: { ProductStandard, RelatedSource },
  data() {
    return {
      product: {},
      slideImage: '',
      slidePage: 1,
      quantity: 0,
      quotation: false
    }
  },
  created() {
    this.product = dummyProduct
    this.slideImage = this.product.displayImage[0]
  },
  methods: {
    slideDisplay(index) {
      this.slideImage = this.product.displayImage[index - 1]
      this.slidePage = index
    },
    nextDisplay() {
      if (this.slidePage >= this.product.displayImage.length) return
      this.slidePage += 1
      this.slideImage = this.product.displayImage[this.slidePage - 1]
    },
    prevDisplay() {
      if (this.slidePage === 1) return
      this.slidePage -= 1
      this.slideImage = this.product.displayImage[this.slidePage - 1]
    },
    changeQuantity(e) {
      if (e === 'decrease' && this.quantity !== 0) {
        this.product.stock += 1
        this.quantity -= 1
      } else if (e === 'increase' && this.product.stock !== 0) {
        this.product.stock -= 1
        this.quantity += 1
      } else {
        return
      }
    },
    addQuotation() {
      this.quotation = !this.quotation
    }
  },
  filters: {
    formatNumber(val) {
      return parseInt(val).toLocaleString()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/_base.scss';

.product-content {
  background-color: #fff;
  width: 100%;
  height: 100%;
  padding: 50px 50px 300px 50px;
}

.breadcrumb {
  color: $main-color;
  font-size: 0.7rem;
  margin-bottom: 30px;
}

.product-info {
  width: 100%;
  height: 303px;
  display: grid;
  grid-gap: 30px;
  grid-template-columns: 1fr minmax(250px, 0.5fr);

  .product-display {
    grid-column: 1/2;
    background-color: #eee;
    display: flex;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    border-radius: 8px;
    overflow: hidden;

    .display-image-wrapper {
      position: relative;
      width: 100%;
      transform: scale(0.7);

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    .prev,
    .next {
      display: inline-block;
      position: absolute;
      top: calc(50% - 30px);
      border: 1px solid $background-blue;
      background-color: #fff;
      padding: 15px;
      font-size: 1.8rem;
    }

    .prev {
      left: -50px;
    }

    .next {
      right: -50px;
    }

    .slide-page {
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;

      span {
        width: 40px;
        height: 2px;
        background-color: $background-blue;
        margin: 4px;

        &.selected {
          height: 3px;
        }
      }
    }

    .display-info {
      width: 200px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .item {
        // flex: 1 0 auto;
        min-width: 100px;
        height: 75px;
        background-color: $main-color;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      i {
        margin-right: 15px;
      }

      .fa-unlock {
        color: #eee;
      }

      .fa-lock {
        color: rgb(118, 187, 14);
      }
    }
  }

  .product-cart {
    grid-column: 2/3;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .name {
      font-size: 1.2rem;
      letter-spacing: 0.2rem;
      font-weight: 500;
    }

    .format {
      margin-top: 0;
      font-size: 0.8rem;
    }

    .price {
      color: $price;
      font-size: 1.2rem;
      letter-spacing: 0.1rem;
      margin-bottom: 15px;

      .excluding-tax {
        margin-left: 5px;
        color: $background-blue;
        font-size: 0.8rem;
        letter-spacing: 0rem;
      }
    }

    .count-wrapper {
      display: flex;
      align-items: center;
      font-size: 0.9rem;

      .count {
        margin-left: 15px;
        border-radius: 6px;
        border: 1px solid $background-blue;
        overflow: hidden;
        display: flex;
        align-items: center;
      }

      .decrease,
      .increase {
        width: 50px;
        height: 40px;
        padding: 5px;
        border: none;
        background-color: #fff;
        cursor: pointer;
      }

      .quantity {
        display: inline-block;
        text-align: center;
        width: 80px;
        font-size: 1.1rem;
      }

      .decrease {
        border-right: 1px solid $background-blue;
      }

      .increase {
        border-left: 1px solid $background-blue;
      }
    }

    .stock {
      margin: 5px 0 0 45px;
      font-size: 0.8rem;
    }

    .bottom {
      display: flex;
      flex-direction: column;

      .checkout {
        background-color: $main-color;
        border: none;
        border-radius: 4px;
        color: #fff;
        padding: 10px 0;
        cursor: pointer;

        &:disabled {
          cursor: auto;
          opacity: 0.6;
        }
      }

      .add-quotation {
        display: inline-block;
        color: $main-color;
        border: none;
        background-color: #fff;
        text-align: left;
        padding-top: 15px;
        font-size: 1rem;
        cursor: pointer;

        i {
          margin-right: 5px;
        }
      }
    }
  }
}

.product-detail {
  margin: 50px 0;
  font-size: 0.8rem;
  line-height: 1.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
}
</style>