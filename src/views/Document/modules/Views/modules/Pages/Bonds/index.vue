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
      <div v-for="(bond, idx) in bonds2" :key="bond.NAME" class="wrapper">
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
              <span v-if="priceAndProfitBond2.price[idx]">{{ priceAndProfitBond2.price[idx] }}</span>
              <span v-else class="loading">...</span>
            </p>
            <p>{{ $t('bonds.totalValue') }}
              <span v-if="priceAndProfitBond2.profit[idx]">{{ priceAndProfitBond2.profit[idx] }}</span>
              <span v-else class="loading">...</span>
            </p>
          </div>
        </router-link>
      </div>
      <div v-for="(bond, idx) in bonds3" :key="bond.NAME" class="wrapper">
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
              <span v-if="priceAndProfitBond3.price[idx]">{{ priceAndProfitBond3.price[idx] }}</span>
              <span v-else class="loading">...</span>
            </p>
            <p>{{ $t('bonds.totalValue') }}
              <span v-if="priceAndProfitBond3.profit[idx]">{{ priceAndProfitBond3.profit[idx] }}</span>
              <span v-else class="loading">...</span>
            </p>
          </div>
        </router-link>
      </div>

      <div v-for="(bond, idx) in bondsUsa2" :key="bond.NAME" class="wrapper">
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
              <span v-if="priceAndProfitBondUsa2.price[idx]">{{ priceAndProfitBondUsa2.price[idx] }}</span>
              <span v-else class="loading">...</span>
            </p>
            <p>{{ $t('bonds.totalValue') }}
              <span v-if="priceAndProfitBondUsa2.profit[idx]">{{ priceAndProfitBondUsa2.profit[idx] }}</span>
              <span v-else class="loading">...</span>
            </p>
          </div>
        </router-link>
      </div>
      <div v-for="(bond, idx) in bondsUsa3" :key="bond.NAME" class="wrapper">
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
              <span v-if="priceAndProfitBondUsa3.price[idx]">{{ priceAndProfitBondUsa3.price[idx] }}</span>
              <span v-else class="loading">...</span>
            </p>
            <p>{{ $t('bonds.totalValue') }}
              <span v-if="priceAndProfitBondUsa3.profit[idx]">{{ priceAndProfitBondUsa3.profit[idx] }}</span>
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

      const priceAndProfitBond2 = reactive({ price: [], profit: []})
      const priceAndProfitBond3 = reactive({ price: [], profit: []})

      const priceAndProfitBondUsa2 = reactive({ price: [], profit: []})
      const priceAndProfitBondUsa3 = reactive({ price: [], profit: []})

      const getInfoBond = async function() {
        const bonds = store.getters['documentStore/getEmitentData']?.OBLIGATIONS
        const bonds2 = store.getters['documentStore/getEmitentData2']?.OBLIGATIONS
        const bonds3 = store.getters['documentStore/getEmitentData3']?.OBLIGATIONS
        const bondsUsa2 = store.getters['documentStore/getEmitentDataUsa2']?.OBLIGATIONS
        const bondsUsa3 = store.getters['documentStore/getEmitentDataUsa3']?.OBLIGATIONS

        console.log('bonds2', bonds2)
        console.log('bonds3', bonds3)

        const bondsList = []

        const bondsList2 = []
        const bondsList3 = []

        const bondsListUsa2 = []
        const bondsListUsa3 = []

        const bondsPriceList = []
        const bondsPriceList2 = []
        const bondsPriceList3 = []
        const bondsPriceListUsa2 = []
        const bondsPriceListUsa3 = []

        const bondsProfitList = []
        const bondsProfitList2 = []
        const bondsProfitList3 = []
        const bondsProfitListUsa2 = []
        const bondsProfitListUsa3 = []

        bonds?.forEach(b => {
          //@ts-ignore
          bondsList.push(b.CODE)
        })

        bonds2?.forEach(b => {
          //@ts-ignore
          bondsList2.push(b.CODE)
        })

        bonds3?.forEach(b => {
          //@ts-ignore
          bondsList3.push(b.CODE)
        })

        bondsUsa2?.forEach(b => {
          //@ts-ignore
          bondsListUsa2.push(b.CODE)
        })

        bondsUsa3?.forEach(b => {
          //@ts-ignore
          bondsListUsa3.push(b.CODE)
        })

        try {
          for (const b of bondsList) {
            const res = await api.getBond('RUS', b)

            //@ts-ignore
            bondsPriceList.push(res.data['RADAR_DATA']['PROPS']['LASTPRICE'])
            //@ts-ignore
            bondsProfitList.push(res.data['RADAR_DATA']['DYNAM']['Доходность общая'] || '-')
          }

          for (const b of bondsList2) {
            const res = await api.getBond('RUS', b)

            //@ts-ignore
            bondsPriceList2.push(res.data['RADAR_DATA']['PROPS']['LASTPRICE'])
            //@ts-ignore
            bondsProfitList2.push(res.data['RADAR_DATA']['DYNAM']['Доходность общая'] || '-')
          }

          for (const b of bondsList3) {
            const res = await api.getBond('RUS', b)

            //@ts-ignore
            bondsPriceList3.push(res.data['RADAR_DATA']['PROPS']['LASTPRICE'])
            //@ts-ignore
            bondsProfitList3.push(res.data['RADAR_DATA']['DYNAM']['Доходность общая'] || '-')
          }

          for (const b of bondsListUsa2) {
            const res = await api.getBond('RUS', b)

            //@ts-ignore
            bondsPriceListUsa2.push(res.data['RADAR_DATA']['PROPS']['LASTPRICE'])
            //@ts-ignore
            bondsProfitListUsa2.push(res.data['RADAR_DATA']['DYNAM']['Доходность общая'] || '-')
          }

          for (const b of bondsListUsa3) {
            const res = await api.getBond('RUS', b)

            //@ts-ignore
            bondsPriceListUsa3.push(res.data['RADAR_DATA']['PROPS']['LASTPRICE'])
            //@ts-ignore
            bondsProfitListUsa3.push(res.data['RADAR_DATA']['DYNAM']['Доходность общая'] || '-')
          }


        } catch (e) {
          console.log(e)
        } finally {
          if(priceAndProfitBond.price.length === 0) {
            priceAndProfitBond.price = bondsPriceList
          }

          if(priceAndProfitBond2.price.length === 0) {
            priceAndProfitBond2.price = bondsPriceList2
          }
          if(priceAndProfitBond3.price.length === 0) {
            priceAndProfitBond3.price = bondsPriceList3
          }

          if(priceAndProfitBondUsa2.price.length === 0) {
            priceAndProfitBondUsa2.price = bondsPriceListUsa2
          }
          if(priceAndProfitBondUsa3.price.length === 0) {
            priceAndProfitBondUsa3.price = bondsPriceListUsa3
          }


          if(priceAndProfitBond.profit.length === 0) {
            priceAndProfitBond.profit = bondsProfitList
          }

          if(priceAndProfitBond2.profit.length === 0) {
            priceAndProfitBond2.profit = bondsProfitList2
          }
          if(priceAndProfitBond3.profit.length === 0) {
            priceAndProfitBond3.profit = bondsProfitList3
          }

          if(priceAndProfitBondUsa2.profit.length === 0) {
            priceAndProfitBondUsa2.profit = bondsProfitListUsa2
          }
          if(priceAndProfitBondUsa3.profit.length === 0) {
            priceAndProfitBondUsa3.profit = bondsProfitListUsa3
          }

        }
      }



      onMounted(async () => {
        await getInfoBond();
      });


      return {
        bonds: store.getters['documentStore/getEmitentData'].OBLIGATIONS,
        bonds2: store.getters['documentStore/getEmitentData2']?.OBLIGATIONS,
        bonds3: store.getters['documentStore/getEmitentData3']?.OBLIGATIONS,

        bondsUsa2: store.getters['documentStore/getEmitentDataUsa2']?.OBLIGATIONS,
        bondsUsa3: store.getters['documentStore/getEmitentDataUsa3']?.OBLIGATIONS,
        route,
        priceAndProfitBond,
        priceAndProfitBond2,
        priceAndProfitBond3,

        priceAndProfitBondUsa2,
        priceAndProfitBondUsa3,
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
