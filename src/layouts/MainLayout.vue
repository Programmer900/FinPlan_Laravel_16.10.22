<template>
  <main>
    <Header />
    <Indexes v-if="isIndexShow"/>
    <UserMenu />
    <slot />
    <SearchPanel :show="showSearch" @onClosestSearch="showSearch = false"/>
  </main>
  <PageFooter />
</template>

<script>
import { defineComponent } from 'vue';
import Header from '../components/header/Header.vue';
import UserMenu from '../components/userMenu/UserMenu.vue';
import Indexes from '../components/indexes/Indexes.vue';
import PageFooter from '../components/Common/Footer/index.vue';
import SearchPanel from '../components/Blocks/SearchPanel/SearchPanel.vue'

export default defineComponent({
  name: 'MainLayout',
  components: {
    PageFooter,
    Indexes,
    UserMenu,
    Header,

    SearchPanel
  },
  data() {
    return {
      showSearch: false,
    }
  },
  computed: {
    isIndexShow() {
      return (this.$route.name == 'Blog' || this.$route.name == 'BlogPost') ? false : true
    }
  }
});
</script>

<style lang="scss" scoped></style>
