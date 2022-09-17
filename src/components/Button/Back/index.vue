<template>
  <button class="button-back" @click="goTo()" :class='getClassMods()'>
    <IconArrow class="button-back__icon">
      <div class="button-back__text" v-if='text'>
        {{ text }}
      </div>
    </IconArrow>
  </button>
</template>


<script lang="ts">
  import { TRouterLink } from "@/types";

  export default {
    name: 'ButtonBack',
    props: {
      to: {
        type: [Object as () => TRouterLink, Number],
        default: -1,
      },
      text: {
        type: String,
        default: 'Назад',
      },
      confirm: {
        type: Boolean,
        default: false,
      },
      /**
       * Авто-выход если после подтверждения выхода, значение confirm поменялось на false
       */
      autoExit: {
        type: Boolean,
        default: false,
      },
      classMods: {
        type: [Array, String],
        default: '',
      },
    },

    setup(props, {emit}) {
      //emit = ['leave', 'confirm']
      const router = useRouter();

      const leave = () => {
        /*if (typeof props.to === 'number') {
          if (window.history.length === 1 || window.history.length === 0) {
            router.push({ name: 'home' });
          } else {
            router.go(props.to);
          }
        } else if (typeof props.to === 'object') {
          router.push(props.to);
        }*/
      };

      const goTo = () => {
        /*if (props.confirm) {
          emit('confirm');
        } else {
          emit('leave');
          leave();
        }*/
      };

      const getClassMods = (): string => {
        /*const c = 'button-back--';

        if (props.classMods === '') return '';

        if (typeof props.classMods === 'string') return `${c}${props.classMods}`;

        if (Array.isArray(props.classMods)) {
          let result = '';
          props.classMods.forEach((mod) => {
            result += `${c}${mod} `;
          });
          return result;
        }*/

        return '';
      };

      /*watch(
        () => props.confirm,
        () => {
          if (!props.autoExit) return;
          goTo();
        },
      );*/

      return {
        goTo,
        getClassMods
      }
    }
  };

</script>


<style scoped lang="scss">
</style>
