import { ComponentConfig } from '../../../types';
import { commonConfig } from '../../../baseConfig/common';
import { titleSimple, titleComplex } from '../../../baseConfig/Echarts/titleConfig';
import { legendComplex, legendSimple } from '../../../baseConfig/Echarts/legendConfig';
import { gridComplex, gridSimple } from '../../../baseConfig/Echarts/gridConfig';
import { tooltipComplex, tooltipSimple } from '../../../baseConfig/Echarts/tooltipConfig';
import { toolboxComplex, toolboxSimple } from '../../../baseConfig/Echarts/toolboxConfig';
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
                      defaultValue: '基础饼图',
                      placeholder: '请输入组件名称'
                    }
                  }
                ],
                ...commonConfig,
                ...titleSimple,
                ...gridSimple,
                ...tooltipSimple
              ]
            },
            {
              label: '高级',
              value: 'complex',
              config: [
                ...titleComplex,
                ...gridComplex,
                ...tooltipComplex
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
                      hasMapping: false,
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