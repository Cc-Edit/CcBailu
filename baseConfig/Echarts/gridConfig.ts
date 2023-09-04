import { AttributeItem } from '@/bailu/types';
// 基础设置
export const gridSimple: AttributeItem[][] = [
  [
    {
      type: 'Collapse',
      props: {
        className: 'flex-1 pl-1',
        label: '图表网格',
        defaultValue: true,
        child: [
          [
            {
              type: 'Text',
              props: {
                text: '显示网格'
              }
            },
            {
              type: 'Boolean',
              mapping: {
                key: 'options.grid.show'
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
                text: '包含坐标'
              }
            },
            {
              type: 'Boolean',
              mapping: {
                key: 'options.grid.containLabel'
              },
              props: {
                className: 'flex-1 pl-1 pr-1',
                defaultValue: true
              }
            }
          ],
          [
            {
              type: 'Text',
              props: {
                text: '背景颜色'
              }
            },
            {
              type: 'Color',
              mapping: {
                key: 'options.grid.backgroundColor'
              },
              props: {
                defaultValue: {
                  r: 182,
                  g: 215,
                  b: 228,
                  a: 0
                },
                className: 'flex-1 pl-1 pr-1'
              }
            }
          ],
          [
            {
              type: 'Text',
              props: {
                text: '边框颜色'
              }
            },
            {
              type: 'Color',
              mapping: {
                key: 'options.grid.borderColor'
              },
              props: {
                defaultValue: {
                  r: 0,
                  g: 0,
                  b: 0,
                  a: 0
                },
                className: 'flex-1 pl-1 pr-1'
              }
            }
          ],
          [
            {
              type: 'Text',
              props: {
                text: '边框线宽'
              }
            },
            {
              type: 'Number',
              mapping: {
                key: 'options.grid.borderWidth'
              },
              props: {
                className: 'flex-1 pl-1 pr-1',
                min: 0,
                defaultValue: 0,
                max: 100,
                endAdornment: 'px'
              }
            }
          ]
        ]
      }
    }
  ]
];
// 复杂配置
export const gridComplex: AttributeItem[][] = [
  [
    {
      type: 'Collapse',
      props: {
        className: 'flex-1 pl-1',
        label: '图表网格',
        defaultValue: false,
        child: [
          [
            {
              type: 'Text',
              props: {
                text: '层数'
              }
            },
            {
              type: 'Number',
              mapping: {
                key: 'options.grid.z'
              },
              props: {
                tips: '层数高的元素会覆盖层数低的元素',
                className: 'flex-1 pl-1 pr-1',
                min: 1,
                defaultValue: 2,
                max: 100,
                endAdornment: 'z'
              }
            }
          ],
          [
            {
              type: 'Text',
              props: {
                text: '内边距'
              }
            },
            {
              type: 'Number',
              mapping: {
                key: 'options.grid.top'
              },
              props: {
                tips: '内边距顶部边距',
                className: 'flex-1 pl-1 pr-1',
                min: 0,
                defaultValue: 2,
                max: 1000
              }
            },
            {
              type: 'Number',
              mapping: {
                key: 'options.grid.right'
              },
              props: {
                tips: '内边距右侧边距',
                className: 'flex-1 pl-1 pr-1',
                min: 0,
                defaultValue: 2,
                max: 1000
              }
            },
            {
              type: 'Number',
              mapping: {
                key: 'options.grid.bottom'
              },
              props: {
                tips: '内边距底部边距',
                className: 'flex-1 pl-1 pr-1',
                min: 0,
                defaultValue: 2,
                max: 1000
              }
            },
            {
              type: 'Number',
              mapping: {
                key: 'options.grid.left'
              },
              props: {
                tips: '内边距左侧边距',
                className: 'flex-1 pl-1 pr-1',
                min: 0,
                defaultValue: 2,
                max: 1000
              }
            }
          ]
        ]
      }
    }
  ]
];