import { AttributeItem, ComponentConfig } from '@/bailu/types';
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
                      defaultValue: '水位图',
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
                              text: '水位形状'
                            }
                          },
                          {
                            type: 'ButtonGroup',
                            mapping: {
                              key: 'options.shape'
                            },
                            props: {
                              className: 'flex-1 pl-1 pr-1',
                              isRadio: true,
                              options: [
                                {
                                  text: '矩形',
                                  value: 'rect'
                                },
                                {
                                  text: '圆角矩形',
                                  value: 'roundRect'
                                },
                                {
                                  text: '圆形',
                                  value: 'round'
                                }
                              ],
                              defaultValue: 'rect'
                            }
                          }
                        ],
                        [
                          {
                            type: 'Text',
                            props: {
                              text: '波浪数量'
                            }
                          },
                          {
                            type: 'Number',
                            mapping: {
                              key: 'options.waveNum'
                            },
                            props: {
                              className: 'flex-1 pl-1 pr-1',
                              min: 1,
                              defaultValue: 3,
                              max: 10
                            }
                          }
                        ],
                        [
                          {
                            type: 'Text',
                            props: {
                              text: '波浪高度'
                            }
                          },
                          {
                            type: 'Slider',
                            mapping: {
                              key: 'options.waveHeight'
                            },
                            props: {
                              className: 'flex-1 pl-1 pr-1',
                              min: 1,
                              defaultValue: 40,
                              max: 100,
                              step: 1
                            }
                          }
                        ],
                        [
                          {
                            type: 'Text',
                            props: {
                              text: '波浪透明'
                            }
                          },
                          {
                            type: 'Slider',
                            mapping: {
                              key: 'options.waveOpacity'
                            },
                            props: {
                              className: 'flex-1 pl-1 pr-1',
                              min: 0,
                              defaultValue: 0.4,
                              max: 1,
                              step: 0.1
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