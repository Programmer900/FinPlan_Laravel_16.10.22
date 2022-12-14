<template>
  <div class="whiteBg">
    <div class="flexWrapperColumn">
      <div>
        <div class="stocks">
          <div class="stocksHeader flexRowBetween">
            <div class="imageNameContainer">
              <!--<div class="logo" />-->
              <h1 class="default-w-400">
                {{ getName }}
              </h1>
            </div>
            <div class="priceAndIndexes">
              <span class="default-w-400">{{
                checkValue(getData.RADAR_DATA.PROPS.LASTPRICE)
              }}</span>
              <div class="types default-w-bold">
                <span v-for="index of getIndexes" :key="index">{{ index }}</span>
                <div v-if="getIndexes.length > 0" class="popper-div">
                  <Popper :hover="true" :placement="'top'" :click="true" arrow width="420" zIndex="99">
                    <img alt="!!!" :src="alertIcon" class="alert-icon" />
                    <template #content>
                      <div>
                        {{ getIndexes.length > 1 ? 'Акция содержится в индексах' : 'Акция содержится в индексе' }}

                        <div style="font-size: 14px; line-height: 18px" v-for="index of getIndexes" :key="index"><b>{{ index }}</b></div>
                      </div>
                    </template>
                  </Popper>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="stock">
          <div class="stockInfoHeader">
            <div class="stockInfoHeaderDescription">
              <p class="default-w-400">

                {{ getData.RADAR_DATA.PROPS.PROP_TIP_AKTSII || getData.RADAR_DATA.PROPS.TYPE }}
                {{ $t(`securityHeader.${getType}.name`) }} {{ getName }} ({{
                  $t('securityHeader.stock.ticker')
                }}
                - {{ getData.RADAR_DATA.PROPS.SECID }})
                {{ getData.RADAR_DATA.PROPS.HIDEN ? $t('securityHeader.stock.dateNot') : $t('securityHeader.stock.date') + date }}. {{ $t('securityHeader.stock.emitent') }} {{ getData.RADAR_DATA.COMPANY?.NAME ? getData.RADAR_DATA.COMPANY.NAME : getData.RADAR_DATA.NAME  }}.
              </p>
            </div>

            <div
              v-if="
                getData.RADAR_DATA.DYNAM.MONTH_INCREASE ||
                getData.RADAR_DATA.DYNAM.YEAR_INCREASE ||
                getData.RADAR_DATA.DYNAM.THREE_YEAR_INCREASE
              "
              class="info"
            >
              <h1 class="default-w-500">{{ $t('securityHeader.stock.dynamics.text') }}</h1>
              <div class="dynamic flexRowCenter">
                <div v-if="getData.RADAR_DATA.DYNAM.MONTH_INCREASE" class="percents">
                  <p>
                    {{ getData.RADAR_DATA.DYNAM.MONTH_INCREASE }}%
                    <img
                      alt="arrow up"
                      :class="{ arrowDown: getData.RADAR_DATA.DYNAM.MONTH_INCREASE < 0 }"
                      :src="getData.RADAR_DATA.DYNAM.MONTH_INCREASE < 0 ? arrowDown : arrowUp"
                    />
                  </p>
                  <span>{{ $t('securityHeader.stock.dynamics.month') }}</span>
                </div>
                <div v-if="getData.RADAR_DATA.DYNAM.YEAR_INCREASE" class="percents">
                  <p>
                    {{ getData.RADAR_DATA.DYNAM.YEAR_INCREASE }}%
                    <img
                      alt="arrow up"
                      :class="{ arrowDown: getData.RADAR_DATA.DYNAM.YEAR_INCREASE < 0 }"
                      :src="getData.RADAR_DATA.DYNAM.YEAR_INCREASE < 0 ? arrowDown : arrowUp"
                    />
                  </p>
                  <span>{{ $t('securityHeader.stock.dynamics.year') }}</span>
                </div>
                <div v-if="getData.RADAR_DATA.DYNAM.THREE_YEAR_INCREASE" class="percents">
                  <p>
                    {{ getData.RADAR_DATA.DYNAM.THREE_YEAR_INCREASE }}%
                    <img
                      alt="arrow up"
                      :class="{ arrowDown: getData.RADAR_DATA.DYNAM.THREE_YEAR_INCREASE < 0 }"
                      :src="getData.RADAR_DATA.DYNAM.THREE_YEAR_INCREASE < 0 ? arrowDown : arrowUp"
                    />
                  </p>
                  <span>{{ $t('securityHeader.stock.dynamics.three_years') }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import arrowUp from '@/assets/icons/arrow-up.svg';
import arrowDown from '@/assets/icons/arrow-red.svg';
import alertIcon from '@/assets/icons/alert-circle.svg';

import Popper from 'vue3-popper'

export default defineComponent({
  name: 'DocumentHeader',
  components: { Popper },
  setup() {
    const store = useStore();
    const route = useRoute();

    const checkValue = (value: string | number | null): string => {
      const region = route.params.region

      if (value) {
        let currencySymbol = ''
        if(region === 'RUS') {
          currencySymbol = '₽'
        } else if(region === 'USA') {
          currencySymbol = '$'
        }

        const modifyPrice = new Intl.NumberFormat().format(Number(value))
        return `${modifyPrice} ${currencySymbol}`;
      }
      return 'Нет данных о стоимости';
    };

    const date = ref('');

    onMounted(() => {
      //console.log(store.getters['documentStore/getData'])
      //@ts-ignore
      const GRAPH_CANDLE_DATA = store.getters['documentStore/getData']?.GRAPH_CANDLE_DATA
      console.log('GRAPH_CANDLE_DATA', GRAPH_CANDLE_DATA)
      console.log('GRAPH_CANDLE_DATA', Object.keys(GRAPH_CANDLE_DATA).length)
      if(Object.keys(GRAPH_CANDLE_DATA).length !== 0) {
          //@ts-ignore
          const dateArr = Object.values(
              store.getters['documentStore/getData'].GRAPH_CANDLE_DATA.M
          )[0].UF_DATE_FROM.split('-');
          if(dateArr) {
              dateArr.reverse();
              date.value = dateArr.join('.');
          }
      }
    });

    const getType = computed(() => {
        switch (route.params.type) {
            case 'bond':
                return 'bond'
            case 'stock':
                return 'stock'
        }
    })

    return {
      alertIcon,
      date,
      getData: store.getters['documentStore/getData'],
      getIndexes: store.getters['documentStore/getIndexes'],
      getName: store.getters['documentStore/getName'],
      arrowUp,
      arrowDown,
      checkValue, getType,
      route,
    };
  },
});
</script>

<style scoped lang="scss">
.poper {
  max-width: 350px !important;
}
.flexWrapperColumn {
  margin: 0 auto -50px auto;

  .stocks {
    margin-top: 15px;

    .stocksHeader {
      padding: 0 0 40px 0;
      border-bottom: 1px solid rgba(179, 179, 179, 0.36);

      .priceAndIndexes {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: max-content;

        > span {
          margin-right: 50px;
          white-space: nowrap;
        }
      }

      .imageNameContainer {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;

        .logo {
          width: 95px;
          height: 40px;
          margin-right: 20px;
          background-color: #e0e0e0;
        }

        > h1 {
          margin: 0;
          font-size: 32px;
          line-height: 39px;
        }
      }

      .types {
        display: flex;
        flex-direction: row;
        width: max-content;
        max-width: 270px;

        > span {
          margin-right: 10px;
          margin-bottom: 5px;
          padding: 15px 24px;
          color: white;
          font-size: 20px;
          line-height: 150%;
          background-color: #2a8634;
          border-radius: 10px;
        }
      }

      span {
        font-size: 32px;
        line-height: 39px;
      }
    }
  }

  .stock {
    .stockInfoHeader {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 0 0 39px 0;
      border-bottom: 1px solid rgba(179, 179, 179, 0.36);

      .stockInfoHeaderDescription {
        width: 60%;

        > p {
          margin-top: 39px;
          color: #a3a3a3;
          font-size: 18px;
          line-height: 150%;
        }
      }

      .info {
        display: flex;
        flex-direction: column;
        width: 40%;
        margin-top: 40px;
        padding: 0 0 0 40px;

        > h1 {
          width: max-content;
          margin: 0;
          color: #b2b2b2;
          font-size: 18px;
        }

        .dynamic {
          display: grid;
          //grid-template-columns: max-content;
          grid-template-columns: 1fr 1fr 1fr;
          grid-auto-flow: column;
          grid-column-gap: 15px;
          margin-top: 20px;

          .percents {
            display: flex;
            flex-direction: column;
            width: max-content;

            > span {
              max-width: 100px;
              margin-top: 15px;
              color: #b2b2b2;
              font-weight: 400;
              font-size: 14px;
            }

            > p {
              display: flex;
              flex-direction: row;
              align-items: center;
              margin: 0;
              color: black;
              font-weight: bold;
              font-size: 20px;

              .arrowDown {
                transform: rotate(180deg);
              }

              > img {
                width: 17px;
                height: 17px;
                margin-left: 10px;
              }
            }
          }
        }
      }
    }
  }
}

@media (max-width: 1400px) {
  .flexWrapperColumn {
    padding: 50px 100px;

    .indexes {
      padding: 20px 0;
    }

    .stocks {
      .stocksHeader {
        > h1,
        span {
          font-size: 26px;
        }
      }
    }

    .stock {
      .stockInfoHeader {
        .info {
          > h1 {
            font-size: 16px;
          }

          .dynamic {
            > p {
              font-size: 15px;

              > span {
                font-size: 12px;
              }
            }
          }
        }
      }
    }
  }
}

@media (max-width: 600px) {
  .flexWrapperColumn {
    padding: 35px 20px;

    .indexes {
      flex-direction: column;
      align-items: flex-start;
      margin-left: -50px;
    }

    .stock {
      .stockInfoHeader {
        flex-direction: column;

        .info {
          width: 100%;
          margin-left: -40px;
        }

        > p {
          width: 100%;
        }
      }

      .stockInfo {
        .parameters {
          display: none;
        }

        .info {
          flex-direction: column;

          > h1 {
            width: 100%;
          }

          > p {
            margin-top: 15px;
            margin-left: 0;

            > span {
              margin-top: 5px;
            }
          }
        }
      }
    }

    .stocks {
      margin-top: 80px;

      .stocksHeader {
        flex-direction: column;
        align-items: flex-start;

        > span {
          margin-top: 20px;
        }

        .types {
          margin-top: 20px;
          margin-left: -10px;
        }
      }
    }
  }
}

@media (max-width: 1100px) {
  .flexWrapperColumn {
    .stocks {
      .stocksHeader {
        .priceAndIndexes {
          > span {
            margin-right: 20px;
            font-size: 20px;
          }

          .types {
            > span {
              padding: 7px 12px;
              font-size: 16px;
            }
          }
        }

        .imageNameContainer {
          > h1 {
            font-size: 20px;
          }
        }
      }
    }

    .stock {
      .stockInfoHeader {
        .stockInfoHeaderDescription {
          > p {
            font-size: 16px;
          }
        }

        .info {
          > h1 {
            font-size: 16px;
          }

          .dynamic {
            .percents {
              > span {
                max-width: 80px;
                font-size: 12px;
              }

              > p {
                font-size: 15px;

                > img {
                  width: 13px;
                  height: 13px;
                  margin-left: 5px;
                }
              }
            }
          }
        }
      }
    }
  }
}

@media (max-width: 950px) {
  .flexWrapperColumn {
    .stock {
      .stockInfoHeader {
        flex-direction: column;

        .stockInfoHeaderDescription {
          width: 100%;

          > p {
            font-size: 16px;
          }
        }

        .info {
          width: 80%;
          padding: 0;

          > h1 {
            font-size: 16px;
          }

          .dynamic {
            .percents {
              > span {
                max-width: max-content;
                font-size: 12px;
              }

              > p {
                width: max-content;
                font-size: 15px;

                > img {
                  width: 13px;
                  height: 13px;
                  margin-left: 5px;
                }
              }
            }
          }
        }
      }
    }
  }
}
@media (max-width: 390px) {
  .flexWrapperColumn .stock .stockInfoHeader .info .dynamic {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 5px;
  }
  .flexWrapperColumn .stock .stockInfoHeader .info .dynamic .percents {
    align-items: center;
    text-align: center;
  }
}

@media (max-width: 800px) {
  .flexWrapperColumn {
    width: 100%;

    .stocks {
      .stocksHeader {
        flex-direction: column;
        padding: 0;
        border-bottom: none;

        .imageNameContainer {
          padding: 0 0 10px 0;
          border-bottom: 1px solid #d7d7d7;
        }

        .priceAndIndexes {
          justify-content: space-between;
          width: 100%;
          margin-top: 10px;
          border-bottom: none;

          > span {
            margin-right: 20px;
            font-size: 20px;
          }

          .types {
            > span {
              padding: 7px 12px;
              font-size: 16px;
            }
          }
        }

        .imageNameContainer {
          > h1 {
            font-size: 20px;
          }
        }
      }
    }

    .stock {
      .stockInfoHeader {
        .info {
          width: 100%;
          padding: 0;

          > h1 {
            font-size: 16px;
          }

          .dynamic {
            .percents {
              > span {
                max-width: max-content;
                font-size: 12px;
              }

              > p {
                width: max-content;
                font-size: 15px;

                > img {
                  width: 13px;
                  height: 13px;
                  margin-left: 5px;
                }
              }
            }
          }
        }
      }
    }
  }
}

@media (max-width: 600px) {
  .flexWrapperColumn {
    .stock {
      .stockInfoHeader {
        border-bottom: none;

        .info {
          margin-left: 0;

          > h1 {
            font-size: 16px;
          }

          .dynamic {
            .percents {
              > span {
                max-width: max-content;
                font-size: 12px;
              }

              > p {
                width: max-content;
                font-size: 15px;

                > img {
                  width: 13px;
                  height: 13px;
                  margin-left: 5px;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
