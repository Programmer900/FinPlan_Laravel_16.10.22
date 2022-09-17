<template>
  <div class="greyBg">
    <div class="flexWrapperColumn">
      <ul class="default-w-400">
        <li v-for="index in isTranslationLength" :key="index">
          <p style="font-weight: bold">{{ $t(`${typeStock}[${index - 1}].name`) }}</p>
          <p>
            {{ getValue(
                $t(`${typeStock}[${index - 1}].path`),
                $t(`${typeStock}[${index - 1}].symbol`),
                $t(`${typeStock}[${index - 1}].typeValue`),
                $t(`${typeStock}[${index - 1}].typeIndicator`),
              )
            }}
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
  import {defineComponent, onMounted} from 'vue';
import { find, matchesProperty } from 'lodash';
import i18n from '@/plugins/i18n/vue-i18n';
import type { DynamicObject } from '@/interfaces';

import { formattingNum, formattingToShort } from '@/services/formattingNum.service';
import { useApiFinplan } from "@/use/api/useApiFinplan";

export default defineComponent({
  name: 'DocumentViewInfo',
  setup() {
    const store = useStore();
    const api = useApiFinplan()
    const typeStock = ref<string>()

    const getTranslationLength = (): number => i18n.global.messages.ru.aboutStock.length;
    const getTranslationUSALength = (): number => i18n.global.messages.ru.aboutStockUSA.length;

    const getDocData = computed(() => store.getters['documentStore/getData']);
    const getCurrencyForRegion = computed(() => store.getters['documentStore/getCurrencyForRegion']);
    const getRegion = computed(() => store.getters['documentStore/getRegion'])
    const deepFind = (JSONArray, keyPath, keyValue) =>
      find(JSONArray, matchesProperty(keyPath, keyValue));

    const isTranslationLength = computed(() => {
      if(store.getters['documentStore/getRegion'] === 'RUS') {
        typeStock.value = 'aboutStock'
        return getTranslationLength()
      } else {
        typeStock.value = 'aboutStockUSA'
        return getTranslationUSALength()
      }
    })

    const getValue = (path: string, symbol?: string, typeValue?: string, typeIndicator?: string): string => {
      try {
        let deepObject: undefined | DynamicObject;
        let result = 'Нет данных';

        let sym = ''
        let dividendsDescription = ''
        let dividendsProfitPercent = ''

        const objectPath: string[] = path.split('.');

        objectPath.forEach((_path) => {
          if (deepObject === undefined) {
            if(_path === 'PROP_SEKTOR') {
              _path = 'PROP_SEKTOR'
            }
            deepObject = getDocData.value[_path]; //RADAR_DATA
          } else {
            if(_path === 'SECTOR') {
              _path = 'SECTOR'
            }
            deepObject = deepObject[_path];
          }
        });



        if(path === 'RADAR_DATA.PROPS.PROP_DIVIDENDY_2018') {
          dividendsProfitPercent = getDocData.value['RADAR_DATA']['DYNAM']['Дивиденды %'] ? (' или ' + getDocData.value['RADAR_DATA']['DYNAM']['Дивиденды %'] + '% ') : ''
          dividendsDescription = getDocData.value['RADAR_DATA']['PROPS']['PROP_ISTOCHNIK'] || ''
        }

        if(path === 'RADAR_DATA.PROPS.BETTA') {
          deepObject = deepObject?.toFixed(2)
        }

        if(path === 'RADAR_DATA.PROPS.ISSUESIZE') {
          //@ts-ignore
          deepObject = deepObject?.toLocaleString()
        }

        if(path === 'RADAR_DATA.PROPS.PROP_SHORT') {
          //@ts-ignore
          if(deepObject === '') {
            //@ts-ignore
            deepObject = 'Невозможны'
          } else {
            //@ts-ignore
            deepObject = deepObject?.toLocaleString()
          }
        }

        if(path === 'RADAR_DATA.PROPS.PROP_PROSAD') {
          //@ts-ignore
          deepObject = 100 - Number((getDocData.value.RADAR_DATA.PROPS.PROP_PROSAD / getDocData.value.RADAR_DATA.PROPS.LASTPRICE) * 100)
        }

        if(path === 'RADAR_DATA.PROPS.CAP_X_FREEFLOAT_PERCENT') {
          //@ts-ignore
          deepObject = Number(getDocData.value.RADAR_DATA.PROPS.CAP_X_FREEFLOAT / getDocData.value.RADAR_DATA.PROPS.ISSUECAPITALIZATION) * 100
        }

        if(symbol) {
          switch (symbol) {
            case "currency":
              sym = getCurrencyForRegion.value
              break
            case "%":
              sym = '%'
              break
            case "шт.":
              sym = 'шт.'
              break
          }
        }

        if(typeValue === 'num') {
          result = formattingToShort(Number(deepObject),2, typeIndicator)
        } else {
          result = String(deepObject);
        }

        return result + " " + sym + dividendsProfitPercent + dividendsDescription;
      } catch (e) {
        console.error(e);
        return 'Нет данных';
      }
    };

    const initMiddleSectorValue = async () => {
       const response = await api.getSectorsList(1, 100)
    }


    // const init = async (): Promise<void> => {
    //   if (route.params.document === 'obligation') {
    //     const bond = await getBondInfo(route.params.company, route.params.region);
    //     const emitent = await getEmitentInfo(bond.RADAR_DATA.COMPANY.ID);
    //
    //     bonds.value = emitent.OBLIGATIONS;
    //     console.log(bonds.value);
    //   }
    // };

    return {
      getDocData,
      typeStock,

      isTranslationLength,
      getValue,

      formattingNum,
      formattingToShort,
    };
  },
});
</script>

<style scoped lang="scss">
.flexWrapperColumn {
  margin: auto;

  > ul {
    margin-top: -30px;
    list-style: none;

    > li {
      display: flex;
      flex-direction: row;
      //justify-content: space-between;
      width: 700px;
      margin-top: 30px;

      > p {
        display: flex;
        flex-direction: column;
        width: 50%;
        margin: 0;
        color: black;
        font-size: 18px;
      }

      > span {
        color: #939393;
        font-size: 18px;
      }

      &::before {
        display: none;
      }
    }
  }
}

@media (max-width: 1000px) {
  .flexWrapperColumn {
    > ul {
      margin-top: -30px;

      > li {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        margin-top: 30px;
      }
    }
  }
}

@media (max-width: 600px) {
  .flexWrapperColumn {
    width: 100%;
    padding: 20px;
    > ul {
      margin-top: -30px;

      > li {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        margin-top: 30px;

        > p {
          width: 60%;
          font-size: 16px;
        }

        > span {
          width: 40%;
          margin-left: 20px;
          font-size: 15px;
        }
      }
    }
  }
}
</style>
