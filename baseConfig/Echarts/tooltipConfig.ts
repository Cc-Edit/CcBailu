import { AttributeItem } from '@/bailu/types';
// 基础设置
export const tooltipSimple: AttributeItem[][] = [
  [
    {
      type: 'Collapse',
      props: {
        className: 'flex-1 pl-1',
        label: '提示框',
        defaultValue: true,
        child: [
          [
            {
              type: 'Text',
              props: {
                text: '显示提示'
              }
            },
            {
              type: 'Boolean',
              mapping: {
                key: 'options.tooltip.show'
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
                text: '一直显示'
              }
            },
            {
              type: 'Boolean',
              mapping: {
                key: 'options.tooltip.alwaysShowContent'
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
                text: '背景颜色'
              }
            },
            {
              type: 'Color',
              mapping: {
                key: 'options.tooltip.backgroundColor'
              },
              props: {
                defaultValue: {
                  r: 255,
                  g: 255,
                  b: 255,
                  a: 1
                },
                className: 'flex-1 pl-1 pr-1'
              }
            }
          ],
          [
            {
              type: 'Text',
              props: {
                text: '触发类型'
              }
            },
            {
              type: 'ButtonGroup',
              mapping: {
                key: 'options.tooltip.trigger'
              },
              props: {
                className: 'flex-1 pl-1 pr-1',
                isRadio: true,
                options: [
                  {
                    text: '数据项',
                    tips: '数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用',
                    value: 'item'
                  },
                  {
                    text: '坐标轴',
                    tips: '坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用',
                    value: 'axis'
                  },
                  {
                    text: '不触发',
                    value: 'none'
                  }
                ],
                defaultValue: 'item'
              }
            }
          ],
          [
            {
              type: 'Text',
              props: {
                text: '触发方式'
              }
            },
            {
              type: 'ButtonGroup',
              mapping: {
                key: 'options.tooltip.triggerOn'
              },
              props: {
                className: 'flex-1 pl-1 pr-1',
                isRadio: true,
                options: [
                  {
                    text: '点击',
                    tips: '点击的时候触发',
                    value: 'click'
                  },
                  {
                    text: '移入',
                    tips: '鼠标移动时触发',
                    value: 'mousemove'
                  },
                  {
                    text: '同时',
                    tips: '鼠标移动和点击时都触发',
                    value: 'mousemove|click'
                  },
                  {
                    text: '不触发',
                    value: 'none'
                  }
                ],
                defaultValue: 'mousemove|click'
              }
            }
          ]
        ]
      }
    }
  ]
];
// 复杂配置
export const tooltipComplex: AttributeItem[][] = [
  [
    {
      type: 'Collapse',
      props: {
        className: 'flex-1 pl-1',
        label: '提示框',
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
                key: 'options.tooltip.z'
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
                text: '显示延迟'
              }
            },
            {
              type: 'Slider',
              mapping: {
                key: 'options.tooltip.showDelay'
              },
              props: {
                className: 'flex-1 pl-1 pr-1',
                min: 0,
                defaultValue: 0,
                max: 1000,
                step: 100
              }
            }
          ],
          [
            {
              type: 'Text',
              props: {
                text: '隐藏延迟'
              }
            },
            {
              type: 'Slider',
              mapping: {
                key: 'options.tooltip.hideDelay'
              },
              props: {
                className: 'flex-1 pl-1 pr-1',
                min: 0,
                defaultValue: 0,
                max: 1000,
                step: 100
              }
            }
          ],
          [
            {
              type: 'Text',
              props: {
                text: '动画时长'
              }
            },
            {
              type: 'Slider',
              mapping: {
                key: 'options.tooltip.transitionDuration'
              },
              props: {
                className: 'flex-1 pl-1 pr-1',
                min: 0,
                defaultValue: 0.4,
                max: 1,
                step: 0.1
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
                key: 'options.tooltip.borderColor'
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
                key: 'options.tooltip.borderWidth'
              },
              props: {
                className: 'flex-1 pl-1 pr-1',
                min: 0,
                defaultValue: 0,
                max: 100,
                endAdornment: 'px'
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
                key: 'options.tooltip.padding[0]'
              },
              props: {
                tips: '内边距顶部边距',
                className: 'flex-1 pl-1 pr-1',
                min: 0,
                defaultValue: 5,
                max: 1000
              }
            },
            {
              type: 'Number',
              mapping: {
                key: 'options.tooltip.padding[1]'
              },
              props: {
                tips: '内边距右侧边距',
                className: 'flex-1 pl-1 pr-1',
                min: 0,
                defaultValue: 5,
                max: 1000
              }
            },
            {
              type: 'Number',
              mapping: {
                key: 'options.tooltip.padding[2]'
              },
              props: {
                tips: '内边距底部边距',
                className: 'flex-1 pl-1 pr-1',
                min: 0,
                defaultValue: 5,
                max: 1000
              }
            },
            {
              type: 'Number',
              mapping: {
                key: 'options.tooltip.padding[3]'
              },
              props: {
                tips: '内边距左侧边距',
                className: 'flex-1 pl-1 pr-1',
                min: 0,
                defaultValue: 5,
                max: 1000
              }
            }
          ]
        ]
      }
    }
  ]
];