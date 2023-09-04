import { AttributeItem } from '@/bailu/types';
// 基础设置
export const toolboxSimple: AttributeItem[][] = [
  [
    {
      type: 'Collapse',
      props: {
        className: 'flex-1 pl-1',
        label: '工具栏',
        defaultValue: true,
        child: [
          [
            {
              type: 'Text',
              props: {
                text: '显示工具'
              }
            },
            {
              type: 'Boolean',
              mapping: {
                key: 'options.toolbox.show'
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
                text: '显示下载'
              }
            },
            {
              type: 'Boolean',
              mapping: {
                key: 'options.toolbox.feature.saveAsImage.show'
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
                text: '显示还原'
              }
            },
            {
              type: 'Boolean',
              mapping: {
                key: 'options.toolbox.feature.restore.show'
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
                text: '显示数据'
              }
            },
            {
              type: 'Boolean',
              mapping: {
                key: 'options.toolbox.feature.dataView.show'
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
                text: '显示缩放'
              }
            },
            {
              type: 'Boolean',
              mapping: {
                key: 'options.toolbox.feature.dataZoom.show'
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
                text: '显示切换'
              }
            },
            {
              type: 'Boolean',
              mapping: {
                key: 'options.toolbox.feature.magicType.show'
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
                text: '工具布局'
              }
            },
            {
              type: 'ButtonGroup',
              mapping: {
                key: 'options.toolbox.orient'
              },
              props: {
                className: 'flex-1 pl-1 pr-1',
                isRadio: true,
                options: [
                  {
                    text: '水平排列',
                    value: 'horizontal'
                  },
                  {
                    text: '垂直排列',
                    value: 'vertical'
                  }
                ],
                defaultValue: 'horizontal'
              }
            }
          ],
          [
            {
              type: 'Text',
              props: {
                text: 'icon大小'
              }
            },
            {
              type: 'Slider',
              mapping: {
                key: 'options.toolbox.itemSize'
              },
              props: {
                className: 'flex-1 pl-1 pr-1',
                min: 13,
                defaultValue: 15,
                max: 30,
                step: 1
              }
            }
          ]
        ]
      }
    }
  ]
];
// 复杂配置
export const toolboxComplex: AttributeItem[][] = [
  [
    {
      type: 'Collapse',
      props: {
        className: 'flex-1 pl-1',
        label: '工具栏',
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
                key: 'options.toolbox.z'
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
                text: '下载提示'
              }
            },
            {
              type: 'String',
              mapping: {
                key: 'options.toolbox.feature.saveAsImage.title'
              },
              props: {
                className: 'flex-1 pl-1 pr-1',
                defaultValue: '保存为图片',
                placeholder: '请输入下载提示内容'
              }
            }
          ],
          [
            {
              type: 'Text',
              props: {
                text: '还原提示'
              }
            },
            {
              type: 'String',
              mapping: {
                key: 'options.toolbox.feature.restore.title'
              },
              props: {
                className: 'flex-1 pl-1 pr-1',
                defaultValue: '还原',
                placeholder: '请输入还原提示内容'
              }
            }
          ],
          [
            {
              type: 'Text',
              props: {
                text: '数据提示'
              }
            },
            {
              type: 'String',
              mapping: {
                key: 'options.toolbox.feature.dataView.title'
              },
              props: {
                className: 'flex-1 pl-1 pr-1',
                defaultValue: '数据视图',
                placeholder: '请输入数据提示内容'
              }
            }
          ],
          [
            {
              type: 'Text',
              props: {
                text: '切换选项'
              }
            },
            {
              type: 'ButtonGroup',
              mapping: {
                key: 'options.toolbox.feature.magicType.type'
              },
              props: {
                className: 'flex-1 pl-1 pr-1',
                isRadio: false,
                options: [
                  {
                    text: '折线图',
                    value: 'line'
                  },
                  {
                    text: '柱状图',
                    value: 'bar'
                  },
                  {
                    text: '堆叠图',
                    value: 'stack'
                  }
                ],
                defaultValue: ['line']
              }
            }
          ],
          [
            {
              type: 'Text',
              props: {
                text: 'icon间隔'
              }
            },
            {
              type: 'Slider',
              mapping: {
                key: 'options.toolbox.itemGap'
              },
              props: {
                className: 'flex-1 pl-1 pr-1',
                min: 0,
                defaultValue: 8,
                max: 20,
                step: 1
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
                key: 'options.toolbox.left'
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
                defaultValue: 'right'
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
                key: 'options.toolbox.top'
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
                key: 'options.toolbox.right'
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
                key: 'options.toolbox.bottom'
              },
              props: {
                className: 'flex-1 pl-1 pr-1',
                min: 0,
                defaultValue: 'auto',
                max: 1000,
                endAdornment: 'px'
              }
            }
          ]
        ]
      }
    }
  ]
];