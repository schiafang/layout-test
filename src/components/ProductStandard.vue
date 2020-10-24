<template>
  <div class="standard">
    <div class="main-title">規格</div>
    <table>
      <tr class="product-name">
        <td class="table-title">產品規格</td>
        <td>ADAM-3600</td>
      </tr>

      <tr>
        <td colspan="2">相關訊息</td>
      </tr>
    </table>

    <div v-for="(specification, index) in specification" :key="index">
      <input
        type="checkbox"
        :id="'toggle-table-' + index"
        class="toggle-table"
        checked
      />
      <label class="toggle-table-label" :for="'toggle-table-' + index"
        >{{ specification.title }} <i class="fas fa-chevron-down"></i
      ></label>
      <div class="specification-table">
        <tr
          class="table-cell"
          v-for="(item, index) in specification.standard"
          :key="index"
        >
          <td class="table-title">{{ item[0] }}</td>
          <td>{{ item[1] }}</td>
        </tr>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductStandard',
  props: {
    specification: {
      type: Array
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/_base.scss';

li {
  list-style: none;
}

table {
  width: 100%;
}

td {
  padding: 10px;
}

.standard {
  width: 100%;

  .main-title {
    font-size: 1.2rem;
    margin: 15px 0;
  }

  .product-name {
    background-color: #aaa;
  }

  .table-title {
    width: 180px;
  }

  .toggle-table-label {
    display: block;
    font-weight: 500;
    width: 100%;
    padding: 10px;
    background-color: #efefef;
    position: relative;
    margin: 2px 0;
    cursor: pointer;

    i {
      position: absolute;
      top: calc(50% - 8px);
      right: 15px;
    }
  }

  .specification-table {
    font-size: 0.9rem;
  }

  .toggle-table {
    display: none;
    position: absolute;

    &:checked {
      + .toggle-table-label i {
        transform: rotate(180deg);
      }

      + .toggle-table-label + .specification-table {
        display: none;
      }
    }
  }
}
</style>