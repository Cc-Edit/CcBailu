import { AttributeItem, ComponentConfig } from '@/types';
import { commonConfig } from '@/bailu/baseConfig/common';
// 基础配置
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
                      defaultValue: '动态环图',
                      placeholder: '请输入组件名称'
                    }
                  }
                ],
                ...commonConfig,
                [
                  {
                    type: 'Collapse',
                    props: {
                      className: 'flex-1 pl-1',
                      label: '图表配置',
                      defaultValue: true,
                      child: [
                        [
                          {
                            type: 'Text',
                            props: {
                              text: '环半径'
                            }
                          },
                          {
                            type: 'Slider',
                            mapping: {
                              key: 'options.radius'
                            },
                            props: {
                              className: 'flex-1 pl-1 pr-1',
                              defaultValue: 60,
                              min: 0,
                              max: 100,
                              step: 1
                            }
                          }
                        ],
                        [
                          {
                            type: 'Text',
                            props: {
                              text: '高亮半径'
                            }
                          },
                          {
                            type: 'Slider',
                            mapping: {
                              key: 'options.activeRadius'
                            },
                            props: {
                              className: 'flex-1 pl-1 pr-1',
                              defaultValue: 70,
                              min: 0,
                              max: 100,
                              step: 1
                            }
                          }
                        ],
                        [
                          {
                            type: 'Text',
                            props: {
                              text: '环宽度'
                            }
                          },
                          {
                            type: 'Slider',
                            mapping: {
                              key: 'options.lineWidth'
                            },
                            props: {
                              className: 'flex-1 pl-1 pr-1',
                              defaultValue: 20,
                              min: 1,
                              max: 100,
                              step: 1
                            }
                          }
                        ],
                        [
                          {
                            type: 'Text',
                            props: {
                              text: '间隔时间'
                            }
                          },
                          {
                            type: 'Slider',
                            mapping: {
                              key: 'options.activeTimeGap'
                            },
                            props: {
                              className: 'flex-1 pl-1 pr-1',
                              min: 1000,
                              defaultValue: 3000,
                              max: 60000,
                              step: 1000
                            }
                          }
                        ],
                        [
                          {
                            type: 'Text',
                            props: {
                              text: '小数位数'
                            }
                          },
                          {
                            type: 'Slider',
                            mapping: {
                              key: 'options.digitalFlopToFixed'
                            },
                            props: {
                              className: 'flex-1 pl-1 pr-1',
                              min: 0,
                              defaultValue: 0,
                              max: 10,
                              step: 1
                            }
                          }
                        ],
                        [
                          {
                            type: 'Text',
                            props: {
                              text: '原始值'
                            }
                          },
                          {
                            type: 'Boolean',
                            mapping: {
                              key: 'options.showOriginValue'
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
                              text: '文字大小'
                            }
                          },
                          {
                            type: 'Number',
                            mapping: {
                              key: 'options.digitalFlopStyle.fontSize'
                            },
                            props: {
                              className: 'flex-1 pl-1 pr-1',
                              min: 0,
                              defaultValue: 24,
                              max: 100,
                              endAdornment: 'px'
                            }
                          }
                        ],
                        [
                          {
                            type: 'Text',
                            props: {
                              text: '文本颜色'
                            }
                          },
                          {
                            type: 'Color',
                            mapping: {
                              key: 'options.digitalFlopStyle.fill'
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
              ]
            },
            {
              label: '高级',
              value: 'complex',
              config: [
                [
                  {
                    type: 'Empty',
                    props: {
                      className: 'flex-1 pl-1 pr-1',
                      text: '无配置'
                    }
                  }
                ]
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