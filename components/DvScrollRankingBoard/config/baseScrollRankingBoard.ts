import { ComponentConfig } from '@/types';
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
                      defaultValue: '排名轮播表',
                      placeholder: '请输入组件名称'
                    }
                  }
                ],
                [
                  {
                    type: 'Collapse',
                    props: {
                      className: 'flex-1 pl-1',
                      label: '表格配置',
                      defaultValue: true,
                      child: [
                        [
                          {
                            type: 'Text',
                            props: {
                              text: '行数'
                            }
                          },
                          {
                            type: 'Number',
                            mapping: {
                              key: 'options.rowNum'
                            },
                            props: {
                              className: 'w-20 pl-1 pr-1',
                              min: 1,
                              max: 20,
                              defaultValue: 5
                            }
                          }
                        ],
                        [
                          {
                            type: 'Text',
                            props: {
                              text: '轮播时间'
                            }
                          },
                          {
                            type: 'Slider',
                            mapping: {
                              key: 'options.waitTime'
                            },
                            props: {
                              className: 'flex-1 pl-1 pr-1',
                              min: 1000,
                              defaultValue: 2000,
                              max: 60000,
                              step: 1000
                            }
                          }
                        ],
                        [
                          {
                            type: 'Text',
                            props: {
                              text: '轮播方式'
                            }
                          },
                          {
                            type: 'ButtonGroup',
                            mapping: {
                              key: 'options.carousel'
                            },
                            props: {
                              className: 'flex-1 pl-1 pr-1',
                              isRadio: true,
                              options: [
                                {
                                  text: '单条',
                                  value: 'single'
                                },
                                {
                                  text: '整页',
                                  value: 'page'
                                }
                              ],
                              defaultValue: 'single'
                            }
                          }
                        ],
                        [
                          {
                            type: 'Text',
                            props: {
                              text: '数值单位'
                            }
                          },
                          {
                            type: 'String',
                            mapping: {
                              key: 'options.unit'
                            },
                            props: {
                              className: 'flex-1 pl-1 pr-1',
                              defaultValue: '',
                              placeholder: '请输入数值单位'
                            }
                          }
                        ],
                        [
                          {
                            type: 'Text',
                            props: {
                              text: '自动排序'
                            }
                          },
                          {
                            type: 'Boolean',
                            mapping: {
                              key: 'options.sort'
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