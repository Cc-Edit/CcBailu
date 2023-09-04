import { AttributeItem } from '../../types';
import { getTextStyle } from '../textStyle';
// 基础柱状图配置
const { textStyleComplex, textStyleSimple } = getTextStyle('options.legend');
// 基础设置
export const legendSimple: AttributeItem[][] = [
  [
    {
      type: 'Collapse',
      props: {
        className: 'flex-1 pl-1',
        label: '图表图例',
        defaultValue: true,
        child: [
          [
            {
              type: 'Text',
              props: {
                text: '显示图例'
              }
            },
            {
              type: 'Boolean',
              mapping: {
                key: 'options.legend.show'
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
                text: '图例类型'
              }
            },
            {
              type: 'ButtonGroup',
              mapping: {
                key: 'options.legend.type'
              },
              props: {
                className: 'flex-1 pl-1 pr-1',
                isRadio: true,
                options: [
                  {
                    text: '普通图例',
                    value: 'plain'
                  },
                  {
                    text: '滚动图例',
                    value: 'scroll'
                  }
                ],
                defaultValue: 'plain'
              }
            }
          ],
          [
            {
              type: 'Text',
              props: {
                text: '每项间隔'
              }
            },
            {
              type: 'Number',
              mapping: {
                key: 'options.legend.itemGap'
              },
              props: {
                className: 'flex-1 pl-1 pr-1',
                min: 0,
                defaultValue: 10,
                max: 1000,
                endAdornment: 'px'
              }
            }
          ],
          ...textStyleSimple,
          [
            {
              type: 'Text',
              props: {
                text: '图例动画'
              }
            },
            {
              type: 'Boolean',
              mapping: {
                key: 'options.legend.animation'
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
                text: '动画时长'
              }
            },
            {
              type: 'Slider',
              mapping: {
                key: 'options.legend.animationDurationUpdate '
              },
              props: {
                className: 'flex-1 pl-1 pr-1',
                min: 0,
                defaultValue: 300,
                max: 1000,
                step: 100
              }
            }
          ]
        ]
      }
    }
  ]
];
// 复杂配置
export const legendComplex: AttributeItem[][] = [
  [
    {
      type: 'Collapse',
      props: {
        className: 'flex-1 pl-1',
        label: '图表图例',
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
                key: 'options.legend.z'
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
                text: '尺寸'
              }
            },
            {
              type: 'Number',
              mapping: {
                key: 'options.legend.width'
              },
              props: {
                className: 'flex-1 pl-1 pr-1',
                min: 1,
                defaultValue: 'auto',
                max: 1000,
                endAdornment: 'px'
              }
            },
            {
              type: 'Number',
              mapping: {
                key: 'options.legend.height'
              },
              props: {
                className: 'flex-1 pl-1 pr-1',
                min: 1,
                defaultValue: 'auto',
                max: 1000,
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
                key: 'options.legend.padding[0]'
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
                key: 'options.legend.padding[1]'
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
                key: 'options.legend.padding[2]'
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
                key: 'options.legend.padding[3]'
              },
              props: {
                tips: '内边距左侧边距',
                className: 'flex-1 pl-1 pr-1',
                min: 0,
                defaultValue: 5,
                max: 1000
              }
            }
          ],
          [
            {
              type: 'Text',
              props: {
                text: '左侧距离'
              }
            },
            {
              type: 'ButtonGroup',
              mapping: {
                key: 'options.legend.left'
              },
              props: {
                className: 'flex-1 pl-1 pr-1',
                isRadio: true,
                options: [
                  {
                    tips: '左对齐',
                    icon: 'AlignHorizontalLeft',
                    value: 'left'
                  },
                  {
                    tips: '右对齐',
                    icon: 'AlignHorizontalRight',
                    value: 'right'
                  },
                  {
                    icon: 'AlignHorizontalCenter',
                    tips: '居中对齐',
                    value: 'center'
                  }
                ],
                defaultValue: 'center'
              }
            }
          ],
          [
            {
              type: 'Text',
              props: {
                text: '顶部距离'
              }
            },
            {
              type: 'ButtonGroup',
              mapping: {
                key: 'options.legend.top'
              },
              props: {
                className: 'flex-1 pl-1 pr-1',
                isRadio: true,
                options: [
                  {
                    tips: '顶部对齐',
                    icon: 'AlignVerticalTop',
                    value: 'top'
                  },
                  {
                    tips: '底部对齐',
                    icon: 'AlignVerticalBottom',
                    value: 'bottom'
                  },
                  {
                    icon: 'AlignVerticalCenter',
                    tips: '中间对齐',
                    value: 'middle'
                  }
                ],
                defaultValue: 'top'
              }
            }
          ],
          [
            {
              type: 'Text',
              props: {
                text: '右侧距离'
              }
            },
            {
              type: 'Number',
              mapping: {
                key: 'options.legend.right'
              },
              props: {
                className: 'flex-1 pl-1 pr-1',
                min: 0,
                defaultValue: 'auto',
                max: 1000,
                endAdornment: 'px'
              }
            }
          ],
          [
            {
              type: 'Text',
              props: {
                text: '底部距离'
              }
            },
            {
              type: 'Number',
              mapping: {
                key: 'options.legend.bottom'
              },
              props: {
                className: 'flex-1 pl-1 pr-1',
                min: 0,
                defaultValue: 'auto',
                max: 1000,
                endAdornment: 'px'
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
                key: 'options.legend.backgroundColor'
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
                key: 'options.legend.borderColor'
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
                key: 'options.legend.borderWidth'
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
                text: '边框圆角'
              }
            },
            {
              type: 'Slider',
              mapping: {
                key: 'options.legend.borderRadius'
              },
              props: {
                className: 'flex-1 pl-1 pr-1',
                min: 0,
                defaultValue: 0,
                max: 100,
                step: 1
              }
            }
          ],
          ...textStyleComplex
        ]
      }
    }
  ]
];