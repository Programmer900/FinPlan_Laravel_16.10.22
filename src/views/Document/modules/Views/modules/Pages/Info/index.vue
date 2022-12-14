<template>
  <div class="greyBg">
    <div class="flexWrapperColumn">
      <ul class="default-w-400">

          <component
              v-for="index in isTranslationLength"
              :key="index"
          >

          <li
            v-if="getValue($t(`${typeStock}[${index - 1}].path`))"
            style="
              border-bottom: 1px solid #ccc;
              padding-bottom: 10px;
              "
          >

              <p style="font-weight: bold">{{ $t(`${typeStock}[${index - 1}].name`) }}</p>
              <div style="position: relative; display: flex;" class="params-emitent">
                <span>{{ getValue(
                    $t(`${typeStock}[${index - 1}].path`),
                    $t(`${typeStock}[${index - 1}].symbol`),
                    $t(`${typeStock}[${index - 1}].typeValue`),
                    $t(`${typeStock}[${index - 1}].typeIndicator`),
                  )
                }}</span>
                <div class="popper-div" v-if="$t(`${typeStock}[${index - 1}].annotation`)" >
                  <Popper :hover="true" :placement="'top'" :click="true" arrow width="320" zIndex="999999999999">
                    <img alt="!!!" :src="alertIcon" class="alert-icon" />
                    <template #content>
                      <div v-html="$t(`${typeStock}[${index - 1}].annotation`)"></div>
                    </template>
                  </Popper>
                </div>
              </div>

          </li>
          </component>

      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex'
import { find, matchesProperty } from 'lodash';
import i18n from '@/plugins/i18n/vue-i18n';
import type { DynamicObject } from '@/interfaces';

import Popper from 'vue3-popper'
import alertIcon from '@/assets/icons/alert-circle.svg';

import { formattingNum, formattingToShort } from '@/services/formattingNum.service';
import { useApiFinplan } from "@/use/api/useApiFinplan";

enum CurrencyID {
    USD = '$',
    RUB = '??????.',
    SUR = '??????.',
}

export default defineComponent({
  name: 'DocumentViewInfo',
  components: { Popper },
  setup() {
    const store = useStore()
    const api = useApiFinplan()
    const route = useRoute()
    const typeStock = ref<string>()

    const getTranslationLength = (type): number => {
        return i18n.global.messages.ru[type].length
    };
    const getTranslationUSALength = (type): number => {
        return i18n.global.messages.ru[type].length
    }

    const getDocData = computed(() => store.getters['documentStore/getData'])
    const getDocSector = computed(() => store.getters['documentStore/getSector'])

    const getCurrencyForRegion = computed(() => store.getters['documentStore/getCurrencyForRegion']);
    const isTranslationLength = computed(() => {
      if(store.getters['documentStore/getRegion'] === 'RUS') {
          switch (route.params.type) {
            case "bond":
                typeStock.value = 'aboutBond'
                break
            case "stock":
                typeStock.value = 'aboutStock'
                break
            default:
                typeStock.value = 'aboutStock'
          }
        return getTranslationLength(typeStock.value)
      } else {
          switch (route.params.type) {
              case "bond":
                  typeStock.value = 'aboutBondUSA'
                  break
              case "stock":
                  typeStock.value = 'aboutStockUSA'
                  break
              default:
                  typeStock.value = 'aboutStockUSA'
          }
        return getTranslationUSALength(typeStock.value)
      }
    })
    const getValue = (path: string, symbol?: string, typeValue?: string, typeIndicator?: string): string | boolean => {
      try {
        let deepObject: undefined | DynamicObject;
        let result = '?????? ????????????';
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
          dividendsProfitPercent = getDocData.value['RADAR_DATA']['DYNAM']['?????????????????? %'] ? (' ?????? ' + getDocData.value['RADAR_DATA']['DYNAM']['?????????????????? %'] + '% ') : ''
          dividendsDescription = getDocData.value['RADAR_DATA']['PROPS']['PROP_ISTOCHNIK'] || ''
        }

        if(path === 'RADAR_DATA.PROPS.PROP_DIVIDEND_DESCRIPTION') {
          console.log('PROP_DIVIDEND_DESCRIPTION', getDocData.value['RADAR_DATA']['PROPS']['PROP_DIVIDEND_DESCRIPTION'])
          const text = getDocData.value['RADAR_DATA']['PROPS']['PROP_DIVIDEND_DESCRIPTION']

          //@ts-ignore
          deepObject = text.toLocaleString()
        }

        if(path === 'RADAR_DATA.PROPS.CSV_VID_DEFOLT') {
            //@ts-ignore
            if(deepObject === '' || deepObject === undefined) {
                //@ts-ignore
                deepObject = '??????'
            } else {
                //@ts-ignore
                deepObject = deepObject?.toLocaleString()
            }
        }

        if(path === 'RADAR_DATA.PROPS.ACCRUEDINT' ||
           path === 'RADAR_DATA.DYNAM.???????? ??????????????' ||
           path === 'RADAR_DATA.PROPS.FACEVALUE' ||
           path === 'RADAR_DATA.PROPS.COUPONVALUE'
        ) {
          //@ts-ignore
          deepObject = deepObject + ' ' + CurrencyID[getDocData.value['RADAR_DATA']['PROPS']['CURRENCYID']]
        }

        if(path === 'RADAR_DATA.PROPS.COUPONVALUE') {
            let text:any = ''
            if (getDocData.value['RADAR_DATA']['DYNAM']['???????????? ?? %']) {
                text = '(' + getDocData.value['RADAR_DATA']['DYNAM']['???????????? ?? %'].toLocaleString('en-US', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                }) + '%'+ ')'
            }

          //@ts-ignore
          deepObject = deepObject + text
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
            deepObject = '????????????????????'
          } else {
            //@ts-ignore
            deepObject = deepObject?.toLocaleString()
          }
        }

        if(path === 'RADAR_DATA.PROPS.PROP_KREDIT') {
          //@ts-ignore
          if(deepObject === '') {
            //@ts-ignore
            deepObject = '????????????????????'
          } else {
            //@ts-ignore
            deepObject = deepObject?.toLocaleString()
          }
        }

        if(path === 'RADAR_DATA.PROPS.NEXTCOUPON') {
            //@ts-ignore
            let d = new Date(deepObject)
            let date = [d.getDate(), ("0" + (d.getMonth() + 1)).slice(-2), d.getFullYear()].join('.')
            //@ts-ignore
            deepObject = date
        }

        if(path === 'RADAR_DATA.PROPS.MATDATE') {
          //@ts-ignore
          let d = new Date(deepObject)
          let date = [d.getDate(), ("0" + (d.getMonth() + 1)).slice(-2), d.getFullYear()].join('.')
          //@ts-ignore
          deepObject = date
        }

        if(path === 'RADAR_DATA.PROPS.CAP_X_FREEFLOAT_PERCENT') {
          const num = Number((getDocData.value.RADAR_DATA.PROPS.CAP_X_FREEFLOAT / getDocData.value.RADAR_DATA.PROPS.ISSUECAPITALIZATION) * 100)
          if(num % 1 != 0) {
            console.log((num).toFixed(2).substring(2))
            const fractional = num.toFixed(2).substring(2)
            if(fractional === '.00') {
              //@ts-ignore
              deepObject = Math.floor(num)
            } else {
              //@ts-ignore
              deepObject = num.toFixed(2)
            }
            //@ts-ignore

          } else {
            //@ts-ignore
            deepObject = num
          }

        }

        if(path === 'RADAR_DATA.PROPS.OFFERDATE') {
            let text = ''
            if (getDocData.value['RADAR_DATA']['PROPS']['OFFERTYPE']) {
                text = ' (' + getDocData.value['RADAR_DATA']['PROPS']['OFFERTYPE'] + ')'
            }

            //@ts-ignore
            deepObject = deepObject + text
        }

        if(path === 'RADAR_DATA.DYNAM.????????????') {
          console.log(getDocData.value['RADAR_DATA']['PROPS'].PROP_TARGET)
          let text = ''

          if (getDocData.value['RADAR_DATA']['PROPS'].PROP_TARGET) {
            text = ' (' + getDocData.value['RADAR_DATA']['PROPS']['PROP_TARGET'] + ' ??????.  ???? ' + getDocData.value['RADAR_DATA']['PROPS'].PROP_DATA_TARGETA + ')'
          }

          //@ts-ignore
          deepObject = deepObject + '%' + text
        }

        if(path === 'RADAR_DATA.PROPS.PROP_PROSAD') {
          console.log(getDocData.value['RADAR_DATA']['PROPS'].PROP_PROSAD)
          let text = ''
          //@ts-ignore
          result =  (100 - Number((getDocData.value.RADAR_DATA.PROPS.PROP_PROSAD / getDocData.value.RADAR_DATA.PROPS.LASTPRICE) * 100)).toFixed(2)
          if (getDocData.value['RADAR_DATA']['PROPS'].PROP_PROSAD) {
            text = ' (' + getDocData.value['RADAR_DATA']['PROPS'].PROP_PROSAD + ' ??????.  ???? ' + getDocData.value['RADAR_DATA']['PROPS'].PROP_DATA_PROSADA + ')'
          }

          //@ts-ignore
          deepObject = result + '%' + text
        }

        if(path === 'RADAR_DATA.DYNAM.PE') {
          let text = '?????????????? P/E ?????????????? = '

          //@ts-ignore
          deepObject = deepObject + ' (' + text + getDocSector.value[0].PE + ')'
        }

        if(path === 'RADAR_DATA.DYNAM.PB') {
          let text = '?????????????? P/B ?????????????? = '

          //@ts-ignore
          deepObject = deepObject + ' (' + text + getDocSector.value[0].PB.toFixed(2) + ')'
        }

        if(path === 'RADAR_DATA.DYNAM.P/Equity') {
          let text = '?????????????? P/Equity ?????????????? = '

          //@ts-ignore
          deepObject = deepObject + ' (' + text + getDocSector.value[0].PEquity.toFixed(2) + ')'
        }

        if(path === 'RADAR_DATA.DYNAM.P/Sale') {
          let text = '?????????????? P/Sale ?????????????? = '

          //@ts-ignore
          deepObject = deepObject + ' (' + text + getDocSector.value[0].PSale.toFixed(2) + ')'
        }

        if(path === 'RADAR_DATA.PROPS.LASTPRICE') {
          let text = `???????? ?????????? ???? ?????????????? (${new Date().getDate() + "." + (new Date().getMonth() + 1) + "." + new Date().getFullYear()}): `

          //@ts-ignore
          deepObject = text + deepObject?.toFixed(2) + ' ??????.'
        }

        if(path === 'RADAR_DATA.PROPS.PROP_MMVB') {
          const indexes = computed(() => store.getters['documentStore/getIndexes'])
          let text = `???????????? ?????????????? ?? ????????????????: `

          if(indexes.value.length === 1) {
            const index = indexes.value[0]

            //@ts-ignore
            deepObject = text + index
          } else if (indexes.value.length > 1) {
            const index = indexes.value.join(", ")

            //@ts-ignore
            deepObject = text + index
          }

        }


        if(symbol) {
          switch (symbol) {
            case "currency":
              sym = getCurrencyForRegion.value
              break
            case "%":
              sym = '%'
              break
            case "????.":
              sym = '????.'
              break
          }
        }

        if(typeValue === 'num') {
          result = formattingToShort(Number(deepObject),2, typeIndicator)
        } else {
          result = String(deepObject);
        }
        console.log('RES', result, path)

        if(
          result.split(' ')[0] === 'undefined' || result.split(' ')[0] === 'NaN.NaN.NaN' ||
          result === '' || result.split(' ')[0] === 'NaN'
          || result.split(' ')[0] === 'undefined%' || result.split(' ')[0] == undefined
        ) {
          return false
        } else {
          return result + " " + sym + dividendsProfitPercent + dividendsDescription;
        }
      } catch (e) {
        console.error(e)
        return '?????? ????????????';
      }
    };

    return {
      alertIcon,
      getDocData,
      typeStock,
      isTranslationLength,
      getValue,
      formattingNum,
      formattingToShort
    };
  },
});
</script>

<style scoped lang="scss">
.flexWrapperColumn {
  margin: auto;
  .poper {
    max-width: 320px;
    width: 100%
  }
  .popper-div {
    margin-left: 6px;
    margin-top: -2px;


    img {
      width: 15px;
      max-width: 15px;
    }
  }
  .params-emitent {

    span {
      text-align: right;
    }
  }

  > ul {
    margin-top: -30px;
    list-style: none;

    li {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      //width: 700px;
      margin-top: 30px;

      > p {
        display: flex;
        flex-direction: column;
        width: 50%;

        margin: 0;
        margin-right: 5px;
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

      li {
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

      li {
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
