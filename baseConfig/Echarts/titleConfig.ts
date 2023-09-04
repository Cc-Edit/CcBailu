import { AttributeItem } from '@/types';
import { getTextStyle } from '@/bailu/baseConfig/textStyle';
// 基础柱状图配置
const { textStyleComplex, textStyleSimple } = getTextStyle('options.title');
// 基础设置
export const titleSimple: AttributeItem[][] = [
  [
    {
      type: 'Collapse',
      props: {
        className: 'flex-1 pl-1',
        label: '图表标题',
        defaultValue: true,
        child: [
          [
            {
              type: 'Text',
              props: {
                text: '显示标题'
              }
            },
            {
              type: 'Boolean',
              mapping: {
                key: 'options.title.show'
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
                text: '标题文本'
              }
            },
            {
              type: 'String',
              mapping: {
                key: 'options.title.text'
              },
              props: {
                className: 'flex-1 pl-1 pr-1',
                defaultValue: '标题',
                placeholder: '请输入标题'
              }
            }
          ],
          ...textStyleSimple,
          [
            {
              type: 'Text',
              props: {
                text: '水平位置'
              }
            },
            {
              type: 'ButtonGroup',
              mapping: {
                key: 'options.title.textAlign'
              },
              props: {
                className: 'flex-1 pl-1 pr-1',
                isRadio: true,
                options: [
                  {
                    tips: '自适应',
                    icon: 'ControlCamera',
                    value: 'auto'
                  },
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
                defaultValue: 'auto'
              }
            }
          ],
          [
            {
              type: 'Text',
              props: {
                text: '垂直位置'
              }
            },
            {
              type: 'ButtonGroup',
              mapping: {
                key: 'options.title.textVerticalAlign'
              },
              props: {
                className: 'flex-1 pl-1 pr-1',
                isRadio: true,
                options: [
                  {
                    tips: '自适应',
                    icon: 'ControlCamera',
                    value: 'auto'
                  },
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
                    tips: '中间对齐',
                    icon: 'AlignVerticalCenter',
                    value: 'middle'
                  }
                ],
                defaultValue: 'auto'
              }
            }
          ]
        ]
      }
    }
  ]
];
// 复杂配置
export const titleComplex: AttributeItem[][] = [
  [
    {
      type: 'Collapse',
      props: {
        className: 'flex-1 pl-1',
        label: '图表标题',
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
                key: 'options.title.z'
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
                text: '标题链接'
              }
            },
            {
              type: 'String',
              mapping: {
                key: 'options.title.link'
              },
              props: {
                className: 'flex-1 pl-1 pr-1',
                defaultValue: '',
                placeholder: '跳转链接'
              }
            }
          ],
          [
            {
              type: 'Text',
              props: {
                text: '链接方式'
              }
            },
            {
              type: 'ButtonGroup',
              mapping: {
                key: 'options.title.target'
              },
              props: {
                className: 'flex-1 pl-1 pr-1',
                isRadio: true,
                options: [
                  {
                    text: '当前窗口',
                    value: 'self',
                    tips: '水平方向适应屏幕，高度自适应'
                  },
                  {
                    text: '新窗口',
                    value: 'blank',
                    tips: '垂直方向适应屏幕，水平自适应'
                  }
                ],
                defaultValue: 'blank'
              }
            }
          ],
          [
            {
              type: 'Text',
              props: {
                text: '链接方式'
              }
            },
            {
              type: 'ButtonGroup',
              mapping: {
                key: 'options.title.target'
              },
              props: {
                className: 'flex-1 pl-1 pr-1',
                isRadio: true,
                options: [
                  {
                    text: '当前窗口',
                    value: 'self',
                    tips: '当前页面打开标题链接'
                  },
                  {
                    text: '新窗口',
                    value: 'blank',
                    tips: '新窗口打开标题链接'
                  }
                ],
                defaultValue: 'blank'
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
                key: 'options.title.padding[0]'
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
                key: 'options.title.padding[1]'
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
                key: 'options.title.padding[2]'
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
                key: 'options.title.padding[3]'
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
                key: 'options.title.left'
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
                defaultValue: 'left'
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
                key: 'options.title.top'
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
                key: 'options.title.right'
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
                key: 'options.title.bottom'
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
                key: 'options.title.backgroundColor'
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
                key: 'options.title.borderColor'
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
                key: 'options.title.borderWidth'
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
                key: 'options.title.borderRadius'
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