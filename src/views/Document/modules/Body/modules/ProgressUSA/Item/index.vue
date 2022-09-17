<template>
  <div class="progress">
    <div class="progressInfo flexRowBetween">
        <p class="wrap-flex-icon priceValue">
          {{ name }} <client-only>
          <div class="popper-div">
            <Popper :hover="true" :placement="'top'" :click="true" arrow width="220" zIndex="999999999999">
              <img alt="!!!" :src="alertIcon" class="alert-icon" />
              <template #content>
                <div v-html="annotation"></div>
              </template>
            </Popper>
          </div>
        </client-only>
        </p>

      <span class="default-w-bold">{{ formattingToShort(Number(value), 2, typeIndicator) }} {{ symbol }}</span>
    </div>

    <div v-if="lineMax > 0" class="progress__line-container">
      <div v-if="lineMax" class="linear-progress">
        <div class="bar" :style="getLineStyles" />
      </div>
      <div class="progress__circle" :style="getCircleStyles" />
    </div>

  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, onMounted } from 'vue';
import { formattingNum, formattingToShort } from '@/services/formattingNum.service';
import Popper from 'vue3-popper';

import alertIcon from '@/assets/icons/alert-circle.svg';
import i18n from '@/plugins/i18n/vue-i18n';

export default defineComponent({
  name: 'DocumentProgressItem',
  props: {
    typeIndicator: {
      type: String,
      default: 'default'
    },
    name: {
      type: String,
      default: '',
    },
    value: {
      type: [String, Number],
      default: '',
    },
    symbol: {
      type: [String, Number],
      default: '',
    },
    lineMax: {
      type: Number,
      default: 0,
    },
    color: {
      type: String,
      default: 'blue',
    },
    annotation: {
      type: String,
      default: ''
    },
    alert: {
      type: Boolean,
      default: false
    }
  },
  components: { Popper },

  setup(props) {
    const color = ref<string>(props.color);
    const annotation = ref<string>(props.annotation);

    const typeIndicator = props.typeIndicator

    const getColor = computed((): string => {
      if (color.value === 'yellow') return 'progress__line--yellow';
      if (color.value === 'green') return 'progress__line--green';
      return '';
    });

    const getPercent = (from: number | string, to: number | string): number =>
      (Number(from) * 100) / Number(to);

    const getLineStyles = computed(
      (): string => `width: ${getPercent(props.value, props.lineMax)}%; background: ${color.value}`,
    );
    const getCircleStyles = computed((): string => {
      if (props.value < 0) {
        return `left: 0%; background: ${color.value}`;
      }
      return `left: ${getPercent(props.value, props.lineMax) - 1}%; background: ${color.value}`;
    });

    onMounted(() => {
      //console.log(i18n)
    })

    return {
      alertIcon,
      formattingNum,
      formattingToShort,
      getColor,
      getLineStyles,
      getCircleStyles,
      typeIndicator,
      annotation,

      i18n
    };
  },
});
</script>

<style scoped lang="scss">
.progress {
  $regular-height: 10px;
  $smaller-height: 2px;

  $angular-material-background: #aad1f9;
  $angular-material-bar: #106cc8;

  $linear-background: #bbdefb;
  $linear-bar: #1565c0;

  &__line-container {
    position: relative;
  }

  &__circle {
    position: absolute;
    top: -3px;
    width: 10px;
    height: 10px;
    border-radius: 100%;
  }

  .linear-progress {
    position: relative;
    width: 100%;
    height: 4px;
    overflow: hidden;
    background: #d9d9d9;

    .bar {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
    }
  }
}
.progressInfo img.alert-icon {
  width: 15px;
  max-width: 15px;
}
.popper-div div.inline-block {
  border: none !important;
  margin: 0 !important;
}
@media screen and (max-width: 786px) {
  .schedule .graphParameters .progress .progressInfo > span {
    margin-bottom: 0;
  }
  .schedule .graphParameters .progress .progressInfo > p {
    overflow: visible;
  }
  .progressInfo > span.default-w-bold{
    padding-left: 5px;
  }
  .progress__line-container {
    margin-top: 5px;
  }
}
</style>
