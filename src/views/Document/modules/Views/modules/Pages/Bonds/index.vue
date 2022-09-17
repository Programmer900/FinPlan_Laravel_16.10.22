<template>
  <Loader v-if="!priceAndProfitBond.price.length && priceAndProfitBond.price.length !== 0"></Loader>
  <div class="greyBg" v-else>
    <div v-if="bonds" class="flexWrapperColumn">

      <div v-for="(bond, idx) in bonds" :key="bond.NAME" class="wrapper">
        <router-link
          exact
          :to="{
            name: 'DocumentInfo',
            params: {
              locale: route.params.locale,
              type: 'bond',
              id: bond.CODE,
              company: bond.NAME,
            },
          }"
          class="bond tableValue flexRowBetween"
        >
          <div class="bond tableValue flexRowBetween">
            <p>{{ bond.NAME }}</p>
            <p>{{ $t('bonds.isin') }} {{ bond.CODE }}</p>
            <p>{{ $t('bonds.currentPrice')}}
              <span v-if="priceAndProfitBond.price[idx]">{{ priceAndProfitBond.price[idx] }}</span>
              <span v-else class="loading">...</span>
            </p>
            <p>{{ $t('bonds.totalValue') }}
              <span v-if="priceAndProfitBond.profit[idx]">{{ priceAndProfitBond.profit[idx] }}</span>
              <span v-else class="loading">...</span>
            </p>
          </div>
        </router-link>
      </div>
    </div>
    <h1 v-else class="flexWrapperColumn">Информация об облигациях не найдена</h1>
  </div>
</template>
<script lang="ts">
import {defineComponent, ref, reactive, onMounted, onServerPrefetch, onActivated, onBeforeMount  } from 'vue';
import Loader from '@/components/Loader/index.vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import { useApiFinplan } from '@/use/api/useApiFinplan';

export default defineComponent({
  name: 'DocumentBondsPage',
  components: { Loader },

  setup() {
    const store = useStore();
    const route = useRoute();
    const api = useApiFinplan();

    const priceAndProfitBond = reactive({ price: [], profit: []})

    const getInfoBond = async function() {
      const bonds = store.getters['documentStore/getEmitentData'].OBLIGATIONS
      const bondsList = []
      const bondsPriceList = []
      const bondsProfitList = []

      bonds?.forEach(b => {
        //@ts-ignore
        bondsList.push(b.CODE)
      })

      try {
        for (const b of bondsList) {
          const res = await api.getBond('RUS', b)

          //@ts-ignore
          bondsPriceList.push(res.data['RADAR_DATA']['PROPS']['LASTPRICE'])
          //@ts-ignore
          bondsProfitList.push(res.data['RADAR_DATA']['DYNAM']['Доходность общая'] || '-')
        }

      } catch (e) {
        console.log(e)
      } finally {
        if(priceAndProfitBond.price.length === 0) {
          priceAndProfitBond.price = bondsPriceList
        }

        if(priceAndProfitBond.profit.length === 0) {
          priceAndProfitBond.profit = bondsProfitList
        }

      }
    }



    onMounted(async () => {
      await getInfoBond();
    });


    return {
      bonds: store.getters['documentStore/getEmitentData'].OBLIGATIONS,
      route,
      priceAndProfitBond,
    };
  },
});
</script>
<style scoped lang="scss">
.loading {
  font-weight: bold;
  display:inline-block;
  font-family: monospace;
  font-size: 10px;
  color: #00a44c;
  clip-path: inset(0 3ch 0 0);
  animation: l 1s steps(4) infinite;
}

@keyframes l {
  to {
    clip-path: inset(0 -1ch 0 0)
  }
}
.flexWrapperColumn {
  margin: auto;
}

.wrapper {
  position: relative;
  margin-top: 5px;
  overflow: hidden;
  color: #fff;
  background-color: white;
  border-left: #fec006 5px solid;
  cursor: pointer;

  &:hover::before {
    left: 0;
  }

  > a {
    text-decoration: none;
  }

  &::before {
    position: absolute;
    top: 0;
    left: -100%;
    width: 200%;
    height: 100%;
    background: linear-gradient(
      to right,
      rgb(254, 192, 6) 0%,
      rgba(254, 192, 6, 1) 50%,
      rgb(255, 255, 255) 50%,
      rgb(255, 255, 255) 100%
    );
    transition: left 0.4s;
    content: '';
  }

  .bond {
    position: relative;
    width: 100%;
    padding: 15px 30px;

    > p {
      margin: 0;
    }
  }
}

@media (max-width: 1100px) {
  .greyBg {
    overflow-x: scroll;
    .flexWrapperColumn {
      .wrapper {
        > a {
          padding: 0;
        }
      }
    }
  }
}

@media (max-width: 1000px) {
  .greyBg {
    overflow-x: scroll;
    .flexWrapperColumn {
      padding: 20px;
      .wrapper {
        width: 900px;
      }
    }
  }
}
</style>
