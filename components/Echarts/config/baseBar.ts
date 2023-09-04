import { ComponentConfig } from '@/bailu/types';
import { commonConfig } from '../../../baseConfig/common';
import { titleSimple, titleComplex } from '@/bailu/baseConfig/Echarts/titleConfig';
import { legendComplex, legendSimple } from '@/bailu/baseConfig/Echarts/legendConfig';
import { gridComplex, gridSimple } from '@/bailu/baseConfig/Echarts/gridConfig';
import { tooltipComplex, tooltipSimple } from '@/bailu/baseConfig/Echarts/tooltipConfig';
import { toolboxComplex, toolboxSimple } from '@/bailu/baseConfig/Echarts/toolboxConfig';
import { seriesSimple } from '@/bailu/baseConfig/Echarts/barSeriesConfig';
// 基础柱状图配置
const defaultConfig:ComponentConfig = {
  stickyRows: [0],
  attributes: [
    [
      {
        type: 'Tabs',
        props: {
          className: 'w-full sticky top-0',
          variant: 'fullWidth',
          defaultValue: 'base',
          child: [
            {
              label: '基础',
              value: 'base',
              config: [
                [
                  {
                    type: 'Text',
                    props: { text: '名称' }
                  },
                  {
                    type: 'String',
                    mapping: { key: 'name' },
                    props: {
                      className: 'flex-1 pl-1 pr-1',
                      defaultValue: '基础柱状图',
                      placeholder: '请输入组件名称'
                    }
                  }
                ],
                ...commonConfig,
                ...seriesSimple,
                ...titleSimple,
                ...legendSimple,
                ...gridSimple,
                ...tooltipSimple,
                ...toolboxSimple
              ]
            },
            {
              label: '高级',
              value: 'complex',
              config: [
                ...titleComplex,
                ...legendComplex,
                ...gridComplex,
                ...tooltipComplex,
                ...toolboxComplex
              ]
            },
            {
              label: '交互',
              value: 'event',
              config: [
                [
                  {
                    type: 'Event',
                    mapping: { key: 'event' },
                    props: {
                      className: 'flex-1 pl-1 pr-1'
                    }
                  }
                ]
              ]
            },
            {
              label: '数据',
              value: 'data',
              config: [
                [
                  {
                    type: 'MonacoEditor',
                    mapping: {
                      key: 'api'
                    },
                    props: {
                      className: 'flex-1 pl-1 pr-1'
                    }
                  }
                ]
              ]
            }
          ]
        }
      }
    ]
  ]
};
export default defaultConfig;