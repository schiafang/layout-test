<template>
  <div class="related">
    <div class="main-title">相關資源</div>

    <ul class="tabs" role="tablist">
      <li>
        <input
          type="radio"
          name="tabs"
          id="all-categories"
          class="tab-toggle"
          checked
        />
        <label
          for="all-categories"
          class="tab-toggle-label"
          role="tab"
          aria-controls="panel1"
          tabindex="0"
          >所有類別 ({{ sourceData.length }})</label
        >
        <div class="tab-content" role="tabpanel">
          <VueSlickCarousel v-bind="slickSettings" ref="carousel">
            <div class="card" v-for="item in sourceData" :key="item.id">
              <p>
                {{ item.sourceData.title }}
              </p>
              <div class="card-bottom">
                <span class="date">{{ item.sourceData.date }}</span> |
                <span class="tag">{{ item.tag }}</span>
              </div>
            </div>
          </VueSlickCarousel>
        </div>
      </li>

      <li>
        <input type="radio" name="tabs" id="case-study" class="tab-toggle" />
        <label
          for="case-study"
          role="tab"
          aria-controls="panel2"
          tabindex="0"
          class="tab-toggle-label"
          @click="test = !test"
          >應用案例 ({{ caseStudy.length }})</label
        >
        <div class="tab-content" role="tabpanel">
          <VueSlickCarousel v-bind="slickSettings" ref="carousel">
            <div class="card" v-for="item in caseStudy" :key="item.id">
              <p>
                {{ item.sourceData.title }}
              </p>
              <div class="card-bottom">
                <span class="date">{{ item.sourceData.date }}</span> |
                <span class="tag">{{ item.tag }}</span>
              </div>
            </div>
          </VueSlickCarousel>
        </div>
      </li>

      <li>
        <input
          type="radio"
          name="tabs"
          id="industry-focus"
          class="tab-toggle"
        />
        <label
          for="industry-focus"
          role="tab"
          aria-controls="panel3"
          tabindex="0"
          class="tab-toggle-label"
          >產業聚焦 ({{ industryFocus.length }})</label
        >
        <div class="tab-content" role="tabpanel">
          <VueSlickCarousel v-bind="slickSettings" ref="carousel">
            <div class="card" v-for="item in industryFocus" :key="item.id">
              <p>
                {{ item.sourceData.title }}
              </p>
              <div class="card-bottom">
                <span class="date">{{ item.sourceData.date }}</span> |
                <span class="tag">{{ item.tag }}</span>
              </div>
            </div>
          </VueSlickCarousel>
        </div>
      </li>

      <li>
        <input type="radio" name="tabs" id="catalogue" class="tab-toggle" />
        <label
          for="catalogue"
          role="tab"
          aria-controls="panel4"
          tabindex="0"
          class="tab-toggle-label"
          >電子型錄 ({{ catalogue.length }})</label
        >
        <div class="tab-content" role="tabpanel">
          <div class="card" v-for="item in catalogue" :key="item.id">
            <p>
              {{ item.sourceData.title }}
            </p>
            <div class="card-bottom">
              <span class="date">{{ item.sourceData.date }}</span> |
              <span class="tag">{{ item.tag }}</span>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'

const dummySource = [
  {
    id: 23840,
    categoryId: 1,
    tag: 'Case Study',
    sourceData: {
      title: 'mzxamt, conscidunt ut labore et dolore magnam? Quis autem vel eu',
      date: '7/29/2019',
    }

  },
  {
    id: 23841,
    categoryId: 1,
    tag: 'Case Study',
    sourceData: {
      title: 'wdtempora incidunt ut labore et dolore magnam? Quis autem',
      date: '7/31/2019',
    }
  },
  {
    id: 23842,
    categoryId: 1,
    tag: 'Case Study',
    sourceData: {
      title: 'ncidu, consectetur, adipisci velit, sed quia non',
      date: '7/31/2019',
    }

  },
  {
    id: 23843,
    categoryId: 1,
    tag: 'Case Study',
    sourceData: {
      title: 'nadipisci velit, sed quia nocidu, consectetur, adipisci velit, sed quia non',
      date: '7/31/2019',
    }

  },
  {
    id: 23844,
    categoryId: 2,
    tag: 'Industry Focus',
    sourceData: {
      title: 'labore et dolore magnam? Quis aute',
      date: '8/2/2019',
    }
  },
  {
    id: 23845,
    categoryId: 2,
    tag: 'Industry Focus',
    sourceData: {
      title: 'cidu, consectetur,abore et dolore magnam? Quis aute',
      date: '8/2/2019',
    }
  }
]

export default {
  name: 'RelatedSource',
  components: { VueSlickCarousel },
  data() {
    return {
      sourceData: [],
      caseStudy: [],
      industryFocus: [],
      catalogue: [],
      slickSettings: {
        infinite: false,
        arrows: true,
        focusOnSelect: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        speed: 700,
        initialSlide: 0,
      },
      test: false
    }
  },
  created() {
    this.sourceData = dummySource
    this.caseStudy = this.sourceData.filter(i => i.categoryId === 1)
    this.industryFocus = this.sourceData.filter(i => i.categoryId === 2)
    this.catalogue = this.sourceData.filter(i => i.categoryId === 3)
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/_base.scss';

.related {
  margin: 50px 0;
}

.main-title {
  font-size: 1.2rem;
  margin: 15px 0;
}

.tabs {
  border-bottom: 2px solid #eee;
  list-style: none;
  padding: 0;
  display: flex;
  position: relative;

  input[type='radio'] {
    position: absolute;
    top: 0;
    display: none;
  }

  li {
    display: block;
  }
}

.tab-toggle-label {
  cursor: pointer;
  display: inline-block;
  padding: 10px 3px;
  margin-right: 30px;
}

.tab-content {
  visibility: hidden;
  opacity: 0;
  width: 100%;
  position: absolute;
  left: 0;
}

.tab-toggle:checked {
  & + label {
    color: $main-color;
    border-bottom: 2px solid $main-color;
  }

  & ~ .tab-content {
    visibility: visible;
    opacity: 1;
    transition: opacity 0.2s ease-in;
  }
}

.card {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  border-radius: 8px;
  font-size: 0.8rem;
  padding: 5px 15px 15px 15px;
  margin: 30px 0;
  outline-style: none;

  p {
    font-size: 0.9rem;
    height: 100px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: wrap;
  }

  .date {
    color: #555;
    margin-right: 5px;
  }

  .tag {
    color: #fff;
    font-size: 0.7rem;
    background-color: #847fff;
    border-radius: 50px;
    padding: 2px 10px;
    margin-left: 5px;
  }
}

/deep/ .slick-slide {
  padding: 0 10px;
}

/deep/ .slick-arrow {
  background-color: transparent;
  opacity: 0.7;
  width: 15px;
  height: 15px;
  top: 150px;
  font-weight: 900;
  color: transparent;
  border: 2px solid $background-blue;
  border-left: none;
  border-bottom: none;
  position: absolute;
  top: calc(50% - 7.5px);
  cursor: pointer;

  &.slick-prev {
    transform: rotate(-135deg);
    left: -10px;
  }

  &.slick-next {
    right: -10px;
    transform: rotate(45deg);
  }

  &.slick-disabled {
    opacity: 0;
  }
}
</style>