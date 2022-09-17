<template>
  <div :class="['inputDropdown', { 'inputDropdown--column': isColumn }]">
    <div v-if="title" class="inputDropdown__title">{{ title }}</div>
    <div class="inputDropdown__field">
      <div class="inputDropdown__selector" @click="onToggle($event)" :style="{ minWidth: minWidth + 'px' }">
        <div class="inputDropdown__label">
          <span v-if="icon" class="inputDropdown__icon">
            <img alt="icon" :src="icon" />
          </span>

          <span v-if="selected" :style="{ fontSize: fontSize + 'px' }">{{ getSelectedLabel }}</span>
          <span v-else :style="{ fontSize: fontSize + 'px' }">{{ placeholder }}</span>
        </div>
        <img
          alt="icon"
          class="inputDropdown__arrow"
          :class="{ 'inputDropdown__arrow--expanded': isVisible }"
          :src="iconDropdown"
        />
        <LoaderSmall v-if="loading"></LoaderSmall>

        <div
          :class="[
            { 'inputDropdown__wrapList--hidden': !isVisible },
            'inputDropdown__wrapList--visible',
          ]"
        >
          <ul v-if="items.length" class="no-scrolling">
            <li :style="{ fontSize: fontSize + 'px' }" class="inputDropdown__item--search">
              <div class="search">
                <div class="search__field">
                  <input
                    v-model="searchValue"
                    ref="searchField"
                    type="text"
                    class="search__input"
                    :placeholder="placeholderSearch"
                    autocomplete="off"
                    @input="onSearch"
                    @keyup.down="onSearchForList"
                    @keyup.up="onSearchForList"
                    @compositionupdate="compositionUpdate($event)"
                  >
                </div>
              </div>
            </li>
            <li :style="{ fontSize: fontSize + 'px' }" @click="reset" class="inputDropdown__item--reset">Сбросить</li>
            <ul>
              <li
                v-for="(item, index) in searchingStock"
                :key="item.code"
                :class="{ 'inputDropdown__item--current': isCurrentItem(item) }"
                :style="{ fontSize: fontSize + 'px' }"
                @click="onSelect(item)"
              >
                {{ item.label }}
              </li>

            </ul>
          </ul>
          <ul v-else>
            <li>
              <Loader />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import iconDropdown from './icons/dropdown.svg';
import { useVModel } from '@/use/useVModel';
import Loader from '@/components/Loader/index.vue';
import LoaderSmall from '@/components/LoaderSmall/index.vue';
import placeholder from "lodash/fp/placeholder";
import { ref } from "vue";
import i18n from '@/plugins/i18n/vue-i18n';

interface IItem {
  id: string | number;
  label: string;

  [key: string]: any;
}

export default defineComponent({
  name: 'InputDropdown',
  emits: ['update:selected', 'downloadList', 'changeElement', 'reset'],
  props: {
    title: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: 'Выбрать',
    },
    placeholderSearch: {
      type: String,
      default: '',
      required: false
    },
    items: {
      type: Object,
      required: true,
      default: () => {},
    },
    isColumn: {
      type: Boolean,
      default: false,
    },
    selected: {
      type: [Number, String],
      required: true,
      default: '',
    },
    fontSize: {
      type: String,
      required: false,
      default: '20'
    },
    minWidth: {
      type: String,
      required: false,
      default: '250'
    },

    resetS: {
      type: Boolean,
      required: false,
      default: false
    },
    loading: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  components: {
    Loader, LoaderSmall
  },

  setup(props, { emit }) {
    const valueModel = useVModel(props, 'selected');
    const isVisible = ref<boolean>(false);
    const resetS = ref(false);
    const searchValue = ref<string>('');

    const iter = ref<number>(0);

    const compositionUpdate = (e) => {
      searchValue.value = e.data;
    }

    const onSelect = (selected) => {
      emit('update:selected', selected);
      //@ts-ignore
      valueModel.value = selected.label;
      searchValue.value = ''
      emit('changeElement', selected);
    };
    const onToggle = (e) => {
      if(e.target.classList[0] !== 'search__input') {
        emit('downloadList');
        isVisible.value = !isVisible.value;
      }

    };
    const isCurrentItem = (item: IItem): boolean => {
      if (props.selected) {
        return item.label === valueModel.value;
      }
      return false;
    };
    const reset = () => {
      valueModel.value = ''
      searchValue.value = ''
      emit('reset');
    }
    const onSearch = () => {
      if (searchValue.value.length > 0) {
        iter.value = 0
      }
    };

    const onSearchForList = (direction) => {
      //console.log('direction', direction)
      //console.log('type', direction.type)

      switch (direction.code) {
        case 'ArrowUp':
          if(searchingStock.value.length !== iter.value) {
            iter.value--
            /*console.log('Down', iter.value)
            console.log(searchingStock.value[iter.value].label)*/
            //searchValue.value = searchingStock.value[iter.value].label
          }
          break
        case 'ArrowDown':
          if(searchingStock.value.length !== iter.value) {
            iter.value++
            //console.log('Down', iter.value)
            //console.log(searchingStock.value[iter.value].label)
            //searchValue.value = searchingStock.value[iter.value].label
          }
          break
      }
    }

    const searchingStock = computed(() => props.items.filter(stock => stock.label.toLowerCase().includes(searchValue.value.toLowerCase()) || stock.code.toLowerCase().includes(searchValue.value.toLowerCase())))
    //const searchingStockList = computed(() => props.items.filter(stock => stock.label.toLowerCase().includes(searchValue.value.toLowerCase()) || stock.code.toLowerCase().includes(searchValue.value.toLowerCase())))

    watch(
      () => searchValue.value,
      () => {
        if(searchValue.value.length) {

        }
      },
    );

    return {
      onSelect,
      onToggle,
      isCurrentItem,
      iconDropdown,
      isVisible,
      valueModel,
      reset,
      resetS,

      searchValue,
      onSearch,
      onSearchForList,

      i18n,

      searchingStock,
      compositionUpdate,

      getSelectedLabel: computed(() => props.items.find(item => item.label === valueModel.value).label),
      getS: computed(() => props.items)
    };
  },
});
</script>

<style scoped lang="scss">
.inputDropdown {
  $blockname: &;

  display: flex;
  align-items: center;

  &__field {
    cursor: pointer;
  }

  &__title {
    font-weight: 600;
    font-size: 12px;
  }

  &__selector {
    position: relative;
    min-width: 200px;
  }

  &__arrow {
    position: absolute;
    top: 40%;
    right: 10px;
    transform: rotateZ(0deg) translateY(0);
    transition-timing-function: cubic-bezier(0.59, 1.39, 0.37, 1.01);
    transition-duration: 0.3s;

    &--expanded {
      transform: rotateZ(180deg) translateY(2px);
    }
  }

  &__label {
    display: flex;
    align-items: center;
    padding: 12px 15px;
    color: #2a8634;
    font-weight: 500;
    font-size: 12px;

    span {
      display: inline-block;
      margin-right: 20px;
    }
  }

  &__item {
    &--current {
      background: #eaeaea;
    }
    /*&--search {
      background: #fec006 !important;
    }*/
    &--reset:hover {
      background: #d95050 !important;
    }
  }

  &__wrapList {
    &--visible {
      visibility: visible;
    }

    &--hidden {
      visibility: hidden;
    }
  }

  ul {
    z-index: 99999999;
    position: absolute;
    //z-index: 1;
    width: 100%;
    margin: 0;
    padding: 0;
    font-size: 12px;
    list-style-type: none;
    background: #fff;
    border: 1px solid gainsboro;
    max-height: 220px;
    overflow-y: auto;
  }

  li {
    padding: 12px;
    color: #666;

    &:hover {
      color: white;
      background: #2a8634;
    }
  }

  &__icon {
    margin-right: 5px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &:hover {
    #{$blockname} {
      &__label {
        color: #fec006;
        span {
          color: #fec006;
        }
      }
    }
  }

  &--column {
    flex-direction: column;
    align-items: flex-start;

    #{$blockname} {
      &__title {
        margin-bottom: 18px;
      }
    }
  }

  @include respond-to($container-media--tablet) {
    &__title {
      font-size: 15px;
    }

    &__label {
      font-size: 15px;
    }

    ul {
      font-size: 15px;
    }
  }

  @include respond-to(1200) {
    &__title {
      font-size: 20px;
    }

    &__label {
      font-size: 20px;
    }

    ul {
      font-size: 20px;

      li {
        padding: 14px;
      }
    }

    &__selector {
      min-width: 250px;
    }
  }
}

.search {
  &__form {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__input {
    width: 100%;
    height: auto;
    padding: 10px 16px;
    color: #656464;
    font-weight: 400;
    font-size: 16px;
    font-family: $ff-montserrat;
    background: #F1F1F1;
    border: none;
    border-radius: 10px;
  }

  &__btn {
    margin-left: 8px;
    padding: 0;
    background: none;
    border: none;
    cursor: pointer;
  }
}
</style>
