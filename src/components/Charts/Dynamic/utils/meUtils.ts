import { DynamicObject } from '@/interfaces';

class MeUtils {
  private seriesData: DynamicObject[] = [];

  private getSettings(min): DynamicObject {

    return {
      chart: {
        type: 'line',
        backgroundColor: '',
      },
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
          min: (min < 0) ? min : 0,
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
          min:  0,
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
