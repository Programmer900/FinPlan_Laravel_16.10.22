<template>

  <div
    v-if="item.data.length !== 0 && id !== 'quotes'"
    class="checkbox flexRowCenter"
    :class="{ displayNone: isVisible }"
    @click="onClick"
  >
    <div class="checkboxRound flexRowCenter" :style="[{ background: item.color }]">
      <div class="clicked" v-if="item.visible" />
    </div>
    <p class="default-w-bold">{{ item.name }}</p>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

export default defineComponent({
  name: 'DocumentIndicatorsChartCheckboxes',
  emits: ['onClick'],
  props: {
    id: {
      type: String,
      required: true,
    },
    item: {
      type: Object,
      required: true,
    },
  },
  setup(props, { emit }) {
    const onClick = (): void => {
      emit('onClick', props.id);
    };

    const isVisible = computed(() => !props.item.visible && !props.item.permanent);

    return {
      isVisible,
      onClick,
    };
  },
});
</script>

<style scoped lang="scss">
.displayNone {
  display: none !important;
}
.checkboxes {
  display: flex;
  flex-wrap: wrap;
  width: 70%;
  margin-bottom: 20px;

  .checkbox {
    width: max-content;
    cursor: pointer;
    > p {
      margin-left: 5px;
      font-size: 18px;
      line-height: 150%;
    }

    &:not(:last-child) {
      margin-right: 15px;
    }

    .checkboxRound {
      justify-content: center;
      width: 25px;
      min-width: 25px;
      height: 25px;
      border-radius: 50%;
      cursor: pointer;

      .clicked {
        width: 10px;
        height: 10px;
        background-color: white;
        border-radius: 50%;
      }
    }
  }
}

@media (max-width: 1600px) {
  .checkboxes {
    width: 80%;
  }
}

@media (max-width: 1400px) {
  .checkboxes {
    .checkbox {
      > p {
        font-size: 16px;
      }
      .checkboxRound {
        width: 17px;
        min-width: 17px;
        height: 17px;

        .clicked {
          width: 7px;
          height: 7px;
        }
      }
    }
  }
}

@media (max-width: 1200px) {
  .checkboxes {
    width: 90%;
  }
}

@media (max-width: 1100px) {
  .checkboxes {
    width: 100%;
  }
}
</style>
