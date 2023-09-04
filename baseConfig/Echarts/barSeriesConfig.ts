import { AttributeItem } from '@/bailu/types';
// 基础设置
export const seriesSimple: AttributeItem[][] = [
  [
    {
      type: 'Collapse',
      props: {
        className: 'flex-1 pl-1',
        label: '数据展示',
        defaultValue: true,
        child: [
          [
            {
              type: 'Text',
              props: {
                className: 'w-1/3',
                text: 'X轴对齐刻度'
              }
            },
            {
              type: 'Boolean',
              mapping: {
                key: 'api.basexAxisOption.axisTick.alignWithLabel'
              },
              props: {
                className: 'flex-1 pl-1 pr-1',
                defaultValue: false
              }
            }
          ],
          [
            {
              type: 'Text',
              props: {
                className: 'w-1/3',
                text: 'Y轴对齐刻度'
              }
            },
            {
              type: 'Boolean',
              mapping: {
                key: 'api.baseyAxisOption.axisTick.alignWithLabel'
              },
              props: {
                className: 'flex-1 pl-1 pr-1',
                defaultValue: false
              }
            }
          ]
        ]
      }
    }
  ]
];
// 复杂配置
export const seriesComplex: AttributeItem[][] = [
  [
    {
      type: 'Collapse',
      props: {
        className: 'flex-1 pl-1',
        label: '数据展示',
        defaultValue: false,
        child: []
      }
    }
  ]
];