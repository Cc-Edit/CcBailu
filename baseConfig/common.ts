import { AttributeItem } from '../types';
// 公共配置提取
// 基础设置
export const commonConfig: AttributeItem[][] = [
  [
    {
      type: 'Collapse',
      props: {
        className: 'flex-1 pl-1',
        label: '样式',
        defaultValue: true,
        child: [
          [
            {
              type: 'Text',
              props: {
                text: '尺寸 (px)'
              }
            },
            {
              type: 'Number',
              mapping: {
                key: 'position.width'
              },
              props: {
                className: 'flex-1 pl-1 pr-1',
                min: 1,
                max: 99999,
                endAdornment: 'W'
              }
            },
            {
              type: 'Number',
              mapping: {
                key: 'position.height'
              },
              props: {
                className: 'flex-1 pl-1 pr-1',
                min: 1,
                max: 99999,
                endAdornment: 'H'
              }
            }
          ],
          [
            {
              type: 'Text',
              props: {
                text: '位置'
              }
            },
            {
              type: 'Number',
              mapping: {
                key: 'position.left'
              },
              props: {
                className: 'flex-1 pl-1 pr-1',
                min: 1,
                max: 99999,
                endAdornment: 'X'
              }
            },
            {
              type: 'Number',
              mapping: {
                key: 'position.top'
              },
              props: {
                className: 'flex-1 pl-1 pr-1',
                min: 1,
                max: 99999,
                endAdornment: 'Y'
              }
            }
          ],
          [
            {
              type: 'Text',
              props: {
                text: '旋转角度'
              }
            },
            {
              type: 'Slider',
              mapping: {
                key: 'position.rotate'
              },
              props: {
                className: 'flex-1 pl-1 pr-1',
                min: 0,
                max: 360,
                step: 1
              }
            },
            {
              type: 'Number',
              mapping: {
                key: 'position.rotate'
              },
              props: {
                className: 'w-20 pl-1 pr-1',
                min: 0,
                max: 360,
                endAdornment: '°'
              }
            }
          ],
          [
            {
              type: 'Text',
              props: {
                text: '边框样式'
              }
            },
            {
              type: 'ButtonGroup',
              mapping: {
                key: 'style.borderStyle'
              },
              props: {
                className: 'flex-1 pl-1 pr-1',
                isRadio: true,
                options: [
                  {
                    text: '圆点',
                    value: 'dotted'
                  },
                  {
                    text: '实线',
                    value: 'solid'
                  },
                  {
                    text: '双实线',
                    value: 'double'
                  },
                  {
                    text: '虚线',
                    value: 'dashed'
                  }

                ],
                defaultValue: 'solid'
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
              type: 'Slider',
              mapping: {
                key: 'style.borderWidth'
              },
              props: {
                className: 'flex-1 pl-1 pr-1',
                defaultValue: 0,
                min: 0,
                max: 20,
                step: 1
              }
            },
            {
              type: 'Number',
              mapping: {
                key: 'style.borderWidth'
              },
              props: {
                className: 'w-20 pl-1 pr-1',
                min: 0,
                max: 20,
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
                key: 'style.borderRadius'
              },
              props: {
                className: 'flex-1 pl-1 pr-1',
                defaultValue: 0,
                min: 0,
                max: 200
              }
            },
            {
              type: 'Number',
              mapping: {
                key: 'style.borderRadius'
              },
              props: {
                className: 'w-20 pl-1 pr-1',
                min: 0,
                max: 200,
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
                key: 'style.borderColor'
              },
              props: {
                defaultValue: {
                  r: 182,
                  g: 215,
                  b: 228,
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
                key: 'style.backgroundColor'
              },
              props: {
                defaultValue: {
                  r: 182,
                  g: 215,
                  b: 228,
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
                text: '背景图片'
              }
            },
            {
              type: 'BackgroundImage',
              mapping: {
                key: 'style.backgroundImage'
              },
              props: {
                className: 'flex-1 pl-1 pr-1'
              }
            }
          ],
          [
            {
              type: 'Text',
              props: {
                text: '背景类型'
              }
            },
            {
              type: 'ButtonGroup',
              mapping: {
                key: 'style.backgroundRepeat'
              },
              props: {
                className: 'flex-1 pl-1 pr-1',
                isRadio: true,
                options: [
                  {
                    text: '适应屏幕',
                    value: 'full',
                    tips: '缩放背景图片撑满整个屏幕'
                  },
                  {
                    text: '重复',
                    value: 'repeat',
                    tips: '水平垂直方向重复使用背景图片填充'
                  },
                  {
                    text: '原始大小',
                    value: 'auto',
                    tips: '使用背景图片的原始大小'
                  }
                ],
                defaultValue: 'full'
              }
            }
          ]
        ]
      }
    }
  ]
];