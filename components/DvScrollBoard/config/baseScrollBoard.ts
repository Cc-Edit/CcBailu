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
                      defaultValue: '轮播表',
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
                            props: { text: '表头颜色' }
                          },
                          {
                            type: 'Color',
                            mapping: { key: 'options.headerBGC' },
                            props: {
                              defaultValue: {
                                r: 51,
                                g: 68,
                                b: 85,
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
                              text: '表头高度'
                            }
                          },
                          {
                            type: 'Number',
                            mapping: {
                              key: 'options.headerHeight'
                            },
                            props: {
                              className: 'w-20 pl-1 pr-1',
                              min: 1,
                              max: 200,
                              defaultValue: 35
                            }
                          }
                        ],
                        [
                          {
                            type: 'Text',
                            props: { text: '奇数颜色' }
                          },
                          {
                            type: 'Color',
                            mapping: { key: 'options.oddRowBGC' },
                            props: {
                              defaultValue: {
                                r: 25,
                                g: 66,
                                b: 83,
                                a: 1
                              },
                              className: 'flex-1 pl-1 pr-1'
                            }
                          }
                        ],
                        [
                          {
                            type: 'Text',
                            props: { text: '偶数颜色' }
                          },
                          {
                            type: 'Color',
                            mapping: { key: 'options.evenRowBGC' },
                            props: {
                              defaultValue: {
                                r: 44,
                                g: 119,
                                b: 148,
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
                              text: '显示行号'
                            }
                          },
                          {
                            type: 'Boolean',
                            mapping: {
                              key: 'options.index'
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
                              text: '悬浮暂停'
                            }
                          },
                          {
                            type: 'Boolean',
                            mapping: {
                              key: 'options.hoverPause'
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
                              text: '行号表头'
                            }
                          },
                          {
                            type: 'String',
                            mapping: {
                              key: 'options.indexHeader'
                            },
                            props: {
                              className: 'flex-1 pl-1 pr-1',
                              defaultValue: '#',
                              placeholder: '请输入表头内容'
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