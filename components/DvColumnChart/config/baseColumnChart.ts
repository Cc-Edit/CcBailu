import { AttributeItem, ComponentConfig } from '../../../types';
import { commonConfig } from '../../../baseConfig/common';
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
                      defaultValue: '锥形柱图',
                      placeholder: '请输入组件名称'
                    }
                  }
                ],
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
                              text: '文字大小'
                            }
                          },
                          {
                            type: 'Slider',
                            mapping: {
                              key: 'options.fontSize'
                            },
                            props: {
                              className: 'flex-1 pl-1 pr-1',
                              min: 1,
                              defaultValue: 8,
                              max: 50,
                              step: 1
                            }
                          }
                        ],
                        [
                          {
                            type: 'Text',
                            props: {
                              text: '图片宽度'
                            }
                          },
                          {
                            type: 'Slider',
                            mapping: {
                              key: 'options.imgSideLength'
                            },
                            props: {
                              className: 'flex-1 pl-1 pr-1',
                              min: 1,
                              defaultValue: 30,
                              max: 100,
                              step: 1
                            }
                          }
                        ],
                        [
                          {
                            type: 'Text',
                            props: {
                              text: '柱颜色'
                            }
                          },
                          {
                            type: 'Color',
                            mapping: {
                              key: 'options.columnColor'
                            },
                            props: {
                              defaultValue: {
                                r: 93,
                                g: 52,
                                b: 219,
                                a: 0.4
                              },
                              className: 'flex-1 pl-1 pr-1'
                            }
                          }
                        ],
                        [
                          {
                            type: 'Text',
                            props: {
                              text: '文字颜色'
                            }
                          },
                          {
                            type: 'Color',
                            mapping: {
                              key: 'options.textColor'
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
                              text: '显示数值'
                            }
                          },
                          {
                            type: 'Boolean',
                            mapping: {
                              key: 'options.showValue'
                            },
                            props: {
                              className: 'flex-1 pl-1 pr-1',
                              defaultValue: true
                            }
                          }
                        ]
                      ]
                    }
                  }
                ],
                ...commonConfig
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