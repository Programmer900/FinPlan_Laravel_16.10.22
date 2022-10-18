import { DynamicObject } from '@/interfaces';

class MeUtils {
  private seriesData: DynamicObject[] = [];

  private getSettings(min): DynamicObject {

    return {
      chart: {
        type: 'line',
        backgroundColor: '',
      },
      colors: [
        '#910000', '#8bbc21', '#4f00ed', '#0d233a', '#1aadce', '#42220f','#492970', '#f28f43', '#ff5e00',
        '#77a1e5', '#2b394c', '#a6c96a', '#330331', '#1cb075', '#0d5c3c', '#d8db1f', '#db3b69','#00756a',
        '#3a11b8', '#ba735f', '#171716', '#000000', '#bd13b4', '#754351', '#016b03', '#ff0000'
      ],
      title: {
        text: '',
      },
      legend: {
        enabled: false,
        verticalAlign: 'top',
        itemStyle: {
          fontSize: '16px',
          fontFamily: 'Montserrat',
        },
      },
      credits: {
        enabled: false,
      },
      yAxis: [
        {
          //min: 0,
          //min: (min < 0) ? min : 0,
          gridLineColor: '#c2c2c2',
          title: {
            text: '',
          },
          labels: {
            style: {
              fontSize: '16px',
              color: '#838383',
              fontFamily: 'Montserrat',
            },
          },
        },
        {
          opposite: true,
          //min: 0,
          //min:  0,
          gridLineColor: '#c2c2c2',
          title: {
            text: '',
          },
          labels: {
            style: {
              fontSize: '16px',
              color: '#838383',
              fontFamily: 'Montserrat',
            },
          },
        },
      ],
      xAxis: [],

    };
  }

  private initSeriesData() {
    this.seriesData = [];
  }

  public init(data: DynamicObject): DynamicObject {
    const arMin:[] = []
    let min = 0
    //@ts-ignore
    Array.prototype.MaxVal = function() {
      return Math.max.apply(null, this);
    };
    //@ts-ignore
    Array.prototype.MinVal = function() {
      return Math.min.apply(null, this);
    };

    //@ts-ignore
    data.forEach(el => el.data.forEach(e => arMin.push(e)))

    //@ts-ignore
    if(arMin.MinVal() < 0) {
      //@ts-ignore
      min = arMin.MinVal()
    }

    return this.getSettings(min);
  }
}

export const meUtils = new MeUtils();
