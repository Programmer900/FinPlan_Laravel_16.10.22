<template>
  <div class="greyBg">
    <div class="flexWrapperRow">

      <ul
        class="flexRowCenter"
        id="pageSwitcherListID"
        @mousemove="onDragging($event)"
        @mousedown="startDragging($event)"
        @mouseup="stopDragging($event)"
        @mouseleave="stopDragging($event)"
      >
        <li class="default-w-500" v-for="page in pages" :key="page.link">
          <router-link active-class="underline" :to="{name: page.component}">{{ page.name }}</router-link>
        </li>
      </ul>

    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, onMounted, ref, watch,
} from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { routeDocumentTypes } from '@/helpers/route.helper';
import { DynamicObject } from '@/interfaces';

//import AboutCompany from '@/views/Document/modules/Views/modules/Pages/AboutCompany/index.vue'

export default defineComponent({
  name: 'DocumentPageSwitcher',
  setup() {
    const route = useRoute();
    const router = useRouter();

    const pages = ref<DynamicObject[] | null>(null);
    const fullPath = ref<string>('')

    const checkAboutTitle = (): string => {
      const type = String(route.params.type);
      if (type === routeDocumentTypes.stock) {
        return 'Об акции';
      }
      if (type === routeDocumentTypes.bond) {
        return 'Об облигации';
      }
      if (type === routeDocumentTypes.etf) {
        return 'Об ETF';
      }
      return 'Информация';
    };
    const $list = ref<any>('');
    const mouseDown = ref<boolean>(false);
    const startX = ref(0);
    const scrollLeft = ref(0);

    const startDragging = (e: any): void => {
      mouseDown.value = true;
      startX.value = e.pageX - $list.value.offsetLeft;
      scrollLeft.value = $list.value.scrollLeft;
    };
    const stopDragging = (e: any): void => {
      mouseDown.value = false;
    };
    const onDragging = (e: any): void => {
      e.preventDefault();
      if (mouseDown.value) {
        const x = e.pageX - $list.value.offsetLeft;
        const scroll = x - startX.value;
        $list.value.scrollLeft = scrollLeft.value - scroll;
      }
    };
    const onChangeTransitions = (link) => {
      router.push({ name: link})
    }

    const init = () => {
      pages.value = [
        { name: checkAboutTitle(), link: 'info', component: 'DocumentInfo' },
        { name: 'О компании', link: 'about-company', component: 'DocumentAboutCompany' },
        { name: 'Показатели компании', link: 'company-indicators', component: 'DocumentCompanyIndicators' },
        { name: 'Дивиденды', link: 'dividends', component: 'DocumentDividends' },
        { name: 'Отчётность', link: 'report', component: 'DocumentReport' },
        { name: 'Облигации', link: 'bonds', component: 'DocumentBonds' },
        { name: 'Обсуждение', link: 'discussion', component: 'DocumentDiscussion' },
      ];
    };

    onMounted(() => {
      fullPath.value = route.path
      init();
      $list.value = document.querySelector('#pageSwitcherListID');
    });

    watch(
      () => route.params.id,
      () => {
        init();
      },
    );

    return {
      pages,
      onDragging,
      startDragging,
      stopDragging,

      fullPath,
      onChangeTransitions,
    };
  },
});
</script>

<style scoped lang="scss">
.flexWrapperRow {
  margin: auto;
  padding: 20px 200px 12px 200px;
  //border-bottom: 2px solid #ededed;

  > ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    //height: 40px;
    margin: 0;
    list-style-type: none;

    > li {
      width: max-content;
      margin: 0;
      font-size: 15px;
      line-height: 150%;
      white-space: nowrap;
      text-transform: uppercase;
      cursor: pointer;
      content: none;

      &::before {
        content: none;
      }

      > a {
        padding: 0 0 20px 0;
        color: black;
        text-decoration: none;
        border-bottom: 3px solid transparent;
      }
    }

    .underline {
      border-bottom: 3px solid green;
    }

    :hover {
      color: #fec006;
    }
  }
}

@media (max-width: 1600px) {
  .flexWrapperRow {
    > ul {
      width: 100%;
      > li {
        font-size: 13px;
      }
    }
  }
}

@media (max-width: 1400px) {
  .flexWrapperRow {
    padding: 20px 100px 0 100px;
    > ul {
      margin-top: 20px;
      > li {
        margin-top: -20px;
        font-size: 13px;
      }
    }
  }
}

@media (max-width: 1100px) {
  .flexWrapperRow {
    > ul {
      > li {
        font-size: 12px;
      }
    }
  }
}

@media (max-width: 1000px) {
  .flexWrapperRow {
    width: 100%;
    > ul {
      overflow-x: scroll;
      > li {
        margin-top: -20px;
        padding: 25px 15px 20px 0;
        white-space: nowrap;
      }
    }
  }
}

@media (max-width: 600px) {
  .flexWrapperRow {
    padding: 0 20px;
  }
}
</style>
