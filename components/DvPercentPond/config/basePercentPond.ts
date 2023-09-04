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
                      defaultValue: '进度池',
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
                              text: '数值'
                            }
                          },
                          {
                            type: 'Slider',
                            mapping: {
                              key: 'options.value'
                            },
                            props: {
                              className: 'flex-1 pl-1 pr-1',
                              min: 0,
                              defaultValue: 62,
                              max: 100,
                              step: 1
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
                              key: 'options.borderWidth'
                            },
                            props: {
                              className: 'flex-1 pl-1 pr-1',
                              min: 1,
                              defaultValue: 3,
                              max: 30
                            }
                          }
                        ],
                        [
                          {
                            type: 'Text',
                            props: {
                              text: '边框间隙'
                            }
                          },
                          {
                            type: 'Number',
                            mapping: {
                              key: 'options.borderGap'
                            },
                            props: {
                              className: 'flex-1 pl-1 pr-1',
                              min: 1,
                              defaultValue: 3,
                              max: 30
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
                              key: 'options.borderRadius'
                            },
                            props: {
                              className: 'flex-1 pl-1 pr-1',
                              min: 0,
                              defaultValue: 5,
                              max: 100,
                              step: 1
                            }
                          }
                        ],
                        [
                          {
                            type: 'Text',
                            props: {
                              text: '局部渐变'
                            }
                          },
                          {
                            type: 'Boolean',
                            mapping: {
                              key: 'options.localGradient'
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
                    type: 'Empty',
                    props: {
                      className: 'flex-1 pl-1 pr-1',
                      text: '无需配置数据'
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