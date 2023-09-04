import { AttributeItem } from '../../types';
// 基础设置
export const dropletSimple: AttributeItem[][] = [
  [
    {
      type: 'Collapse',
      props: {
        className: 'flex-1 pl-1',
        label: '数据样式',
        defaultValue: true,
        child: [
          [
            {
              type: 'Text',
              props: {
                text: '水位形状'
              }
            },
            {
              type: 'ButtonGroup',
              mapping: {
                key: 'api.baseSeriesOption.shape'
              },
              props: {
                className: 'flex-1 pl-1 pr-1',
                isRadio: true,
                options: [
                  {
                    text: '圆',
                    value: 'circle'
                  },
                  {
                    text: '矩形',
                    value: 'roundRect'
                  },
                  {
                    text: '三角',
                    value: 'triangle'
                  },
                  {
                    text: '菱形',
                    value: 'diamond'
                  },
                  {
                    text: '填充',
                    value: 'container'
                  }
                ],
                defaultValue: 'circle'
              }
            }
          ],
          [
            {
              type: 'Text',
              props: {
                text: '显示边框'
              }
            },
            {
              type: 'Boolean',
              mapping: {
                key: 'api.baseSeriesOption.outline.show'
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
                text: '边框距离'
              }
            },
            {
              type: 'Number',
              mapping: {
                key: 'api.baseSeriesOption.outline.borderDistance'
              },
              props: {
                className: 'flex-1 pl-1 pr-1',
                min: 0,
                defaultValue: 8,
                max: 100,
                endAdornment: 'px'
              }
            }
          ],
          [
            {
              type: 'Text',
              props: {
                text: '边框宽度'
              }
            },
            {
              type: 'Number',
              mapping: {
                key: 'api.baseSeriesOption.outline.itemStyle.borderWidth'
              },
              props: {
                className: 'flex-1 pl-1 pr-1',
                min: 0,
                defaultValue: 8,
                max: 100,
                endAdornment: 'px'
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
                key: 'api.baseSeriesOption.outline.itemStyle.borderColor'
              },
              props: {
                defaultValue: {
                  r: 139,
                  g: 219,
                  b: 240,
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
                text: '背景颜色'
              }
            },
            {
              type: 'Color',
              mapping: {
                key: 'api.baseSeriesOption.backgroundStyle.color'
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
                text: '显示标签'
              }
            },
            {
              type: 'Boolean',
              mapping: {
                key: 'api.baseSeriesOption.label.show'
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
                text: '标签大小'
              }
            },
            {
              type: 'Number',
              mapping: {
                key: 'api.baseSeriesOption.label.fontSize'
              },
              props: {
                className: 'flex-1 pl-1 pr-1',
                min: 0,
                defaultValue: 20,
                max: 50,
                endAdornment: 'px'
              }
            }
          ],
          [
            {
              type: 'Text',
              props: {
                text: '标签颜色'
              }
            },
            {
              type: 'Color',
              mapping: {
                key: 'api.baseSeriesOption.label.color'
              },
              props: {
                defaultValue: {
                  r: 41,
                  g: 77,
                  b: 153,
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
                text: '覆盖颜色'
              }
            },
            {
              type: 'Color',
              mapping: {
                key: 'api.baseSeriesOption.label.insideColor'
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
          ]
        ]
      }
    }
  ]
];
// 复杂配置
export const dropletComplex: AttributeItem[][] = [];