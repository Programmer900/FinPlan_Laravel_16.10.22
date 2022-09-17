<template>
  <div class="searchPanel"
       :class="[show ? 'opened' : '']"
       :style="activeSearchPanel"
  >
    <div class="before"></div>
    <div class="searchPanel__top">
      <div class="container">
        <button class="searchPanel__close icon icon-close modal__close icon icon-close" @click="closeSearch"></button>
        <form class="searchPanel__form">
          <div class="form-element">
            <input
              name="search_field"
              id="search_field"
              type="text"
              :placeholder="categorySearch[active_el].placeholder || 'Введите, что вы хотите найти'"
              v-model="search"
              @input="debounceGetSearching"
            >
          </div>
          <button class="button" type="submit"><span class="icon icon-search"></span>Искать</button>
        </form>
      </div>
    </div>
    <div class="searchPanel__bottom">
      <div class="searchPanel__nav">
        <div class="container">
          <div class="searchPanel__navInner">
            <p class="searchPanel__navTitle">Результаты поиска</p>
            <ul class="smartNav">

              <li
                ref="searchCategory"
                :class="{ active: active_el === idx || cat.startState, shadow: cat.shadow }"
                v-for="(cat, idx) in categorySearch"
              >
                <a
                  :href="`#searchList__${cat.id}`"
                  @click.stop.prevent="activatedEl(cat.id, idx)"
                >{{ cat.name }}</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="searchPanel__results">
        <div class="container">
          <div class="searchPanel__resultsInner">
            <!--<div class="searchPanel__resultsSection" id="searchList__learning">
              <p class="searchPanel__resultsTitle">Обучение</p>
              <ul class="searchPanel__resultsList">
                <li><a href="#">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, laborum?</a></li>
                <li><a href="#">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, laborum?</a></li>
                <li><a href="#">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, laborum?</a></li>
              </ul>
            </div>-->
            <!--<div class="searchPanel__resultsSection" id="searchList__services">
              <p class="searchPanel__resultsTitle">Сервисы</p>
              <ul class="searchPanel__resultsList">
                <li><a href="#">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, laborum?</a></li>
                <li><a href="#">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, laborum?</a></li>
                <li><a href="#">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, laborum?</a></li>
              </ul>
            </div>-->
            <div class="searchPanel__resultsSection" id="searchList__blog">
              <p class="searchPanel__resultsTitle">Блог</p>
              <Loader v-if="isSearchingBlog"></Loader>
              <ul class="searchPanel__resultsList" v-if="searchResultBlog.length">
                <li v-for="post in searchResultBlog">
                  <div class="flex postsSearchContainer">
                    <router-link
                      :to="{
                        name: 'BlogPost',
                        params: { locale: 'ru', id: post.attributes.slug || post.attributes.slu},
                      }"
                       class="linkList__link"
                       @click="goToStock"
                       :key="post.id"
                       :event="post.disabled ? '' : 'click'"
                    >
                      <img style="max-width: 100px;" :src="post.attributes.preview_picture" alt="">
                      <span>{{ post.attributes.title }}</span>
                    </router-link>
                  </div>
                </li>
              </ul>
            </div>
            <div class="searchPanel__resultsSection" id="searchList__stock">
              <p class="searchPanel__resultsTitle">Активы</p>
              <Loader v-if="isSearching"></Loader>
              <ul class="searchPanel__resultsList" v-if="searchResult.length">
                <li v-for="actives in searchResult">
                  <router-link :to="
                      /*`/${String(route.params.locale).toLowerCase()}/stock/${String(
                        route.params.region,
                      ).toUpperCase()}/${actives.value}/${actives.secid}/info`*/
                      `/${String(route.params.locale).toLowerCase()}/stock/USA/${actives.value}/${actives.secid}/info`
                    "
                    class="linkList__link"
                    @click="goToStock"
                    :key="actives.secid"
                    :event="actives.disabled ? '' : 'click'">
                    <span :key="actives.secid">{{ actives.value }}</span>
                  </router-link>
                </li>
              </ul>
              <!--<p v-else>...</p>-->
            </div>
            <!--<div class="searchPanel__resultsSection" id="searchList__about">
              <p class="searchPanel__resultsTitle">О нас</p>
              <ul class="searchPanel__resultsList">
                <li><a href="#">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, laborum?</a></li>
                <li><a href="#">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, laborum?</a></li>
                <li><a href="#">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, laborum?</a></li>
                <li><a href="#">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, laborum?</a></li>
                <li><a href="#">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, laborum?</a></li>
                <li><a href="#">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, laborum?</a></li>
                <li><a href="#">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, laborum?</a></li>
                <li><a href="#">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, laborum?</a></li>
                <li><a href="#">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, laborum?</a></li>
                <li><a href="#">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, laborum?</a></li>
                <li><a href="#">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, laborum?</a></li>
                <li><a href="#">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, laborum?</a></li>
              </ul>
            </div>-->
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import { debounce } from 'lodash';
  import {defineComponent, computed, onUnmounted} from "vue";
  import { useRoute } from 'vue-router';
  import { useStore } from 'vuex';
  import { useApiFinplan } from "@/use/api/useApiFinplan";

  import Loader from '@/components/Loader/index.vue';
  import axios from "axios";

  export default defineComponent({
    name: 'SearchPanel',
    components: { Loader },
    setup() {
      const store = useStore();
      const route = useRoute();
      const api = useApiFinplan()

      const isSearching = ref(false)
      const isSearchingBlog = ref(false)

      const show = computed(() => store.getters['searchStore/isShowSearch'])
      const active_el = ref(2);
      const search = ref('');
      const categorySearch = ref([
          {name: 'Обучение', id: 'learning', shadow: true, placeholder: 'Введите, название'},
          {name: 'Сервисы', id: 'services', shadow: true, placeholder: 'Введите, название'},
          {name: 'Блог', id: 'blog', startState: true, placeholder: 'Введите, название статьи или поста'},
          {name: 'Активы', id: 'stock', placeholder: 'Введите, что Вы хотите найти(в акциях доступен поиск только по США)'},
          {name: 'О нас', id: 'about', shadow: true, placeholder: 'Введите, название'}
      ]);
      const searchResult = ref([])
      const searchResultBlog = ref([])
      const iconClosest = ref('@/assets/icons/techAn/close.svg')

      const debounceGetSearching = computed(() => {
        if(active_el.value === 3) {
          return debounce(onSearching,1200)
        } else {
          return debounce(onSearchingBlog,1200)
        }
      })

      const activeSearchPanel = computed(() => {
        return {
          zIndex: store.getters['searchStore/isShowSearch'] ? '999' : '0',
          display: store.getters['searchStore/isShowSearch'] ? 'block' : 'none',
        }
      })

      const closeSearch = () => {
        search.value = ''
        store.commit('searchStore/closeSearch')
        searchResult.value = []
        searchResultBlog.value = []
      }
      const activatedEl = (id, el) => {
        categorySearch.value[2].startState = false
        active_el.value = el
        document.querySelector(`#searchList__${id}`).scrollIntoView({ behavior: 'smooth' })
      }

      const onSearchingBlog = async (event) => {
        isSearchingBlog.value = true

        try {
          if (event.target.value !== '') {
            searchResultBlog.value = []
            console.log('Blog Searching...', event.target.value)
            const response = await axios.get(`http://87.249.49.214:1337/api/blogs?filters[title][$contains]=${event.target.value}`)
            searchResultBlog.value.push(...response.data.data || [])
          } else {
            searchResultBlog.value = []
          }

        } catch (e) {
          console.error(e)
        } finally {
          isSearchingBlog.value = false
        }
      }
      const onSearching = async (event) => {
        isSearching.value = true

        try {
          if (event.target.value !== '') {
            console.log('STOCK SEARCH... true')
            searchResult.value = []
            //const response = await api.searchActives(route.params.region.toUpperCase(), 'shares', event.target.value, 100)
            const response = await api.searchActives('USA', 'shares', event.target.value, 100)
            console.log(response)
            searchResult.value.push(...response.data.suggestions || [])
          } else {
            searchResult.value = []
          }

        } catch (e) {
          console.error(e)
        } finally {
          isSearching.value = false
        }
      }

      const goToStock = () => {
        setTimeout(() => {
          store.commit('searchStore/closeSearch')
          search.value = ''
          searchResult.value = []
          searchResultBlog.value = []
        }, 300)

      }

      onUnmounted(() => {
        search.value = ''
      })

      return {
        route,
        show,
        active_el,
        search,
        categorySearch, searchResult, searchResultBlog, iconClosest, activatedEl, activeSearchPanel, closeSearch, onSearching, onSearchingBlog, isSearching, isSearchingBlog,
        debounceGetSearching,
        goToStock
      }

    }
  })

</script>

<style scoped>

  button.searchPanel__close.icon.icon-close {
    right: 10%;
  }
  button.searchPanel__close.icon.icon-close::before {
    content: '';
    background-image: url('/src/assets/icons/techAn/close_black.svg');
    width: 25px;
    height: 25px;
    transform: rotate(45deg); /* Equal to rotateZ(45deg) */
    transition: all .4s ease;
  }
  button.searchPanel__close.icon.icon-close:hover::before {
    transform: rotate(-45deg);
  }
  .searchPanel__resultsInner ul li {
    list-style-type: none;
  }

  .postsSearchContainer {
    align-items: flex-start;
    justify-content: flex-start;
  }

  .postsSearchContainer img{
    margin-right: 10px;
    border-radius: 10px;
  }

</style>
