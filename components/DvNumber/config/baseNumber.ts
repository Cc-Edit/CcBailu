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
                      defaultValue: '数字翻牌器',
                      placeholder: '请输入组件名称'
                    }
                  }
                ],
                [
                  {
                    type: 'Collapse',
                    props: {
                      className: 'flex-1 pl-1',
                      label: '组件配置',
                      defaultValue: true,
                      child: [
                        [
                          {
                            type: 'Text',
                            props: {
                              text: '动画时长'
                            }
                          },
                          {
                            type: 'Slider',
                            mapping: {
                              key: 'options.due'
                            },
                            props: {
                              className: 'flex-1 pl-1 pr-1',
                              min: 1,
                              defaultValue: 2,
                              max: 10,
                              step: 1
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
                              key: 'options.toFixed'
                            },
                            props: {
                              className: 'flex-1 pl-1 pr-1',
                              min: 1,
                              defaultValue: 2,
                              max: 9,
                              step: 1
                            }
                          }
                        ],
                        [
                          {
                            type: 'Text',
                            props: {
                              text: '对齐方式'
                            }
                          },
                          {
                            type: 'ButtonGroup',
                            mapping: {
                              key: 'options.textAlign'
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
                              defaultValue: 'center'
                            }
                          }
                        ],
                        [
                          {
                            type: 'Text',
                            props: {
                              text: '行间距'
                            }
                          },
                          {
                            type: 'Slider',
                            mapping: {
                              key: 'options.rowGap'
                            },
                            props: {
                              className: 'flex-1 pl-1 pr-1',
                              min: 0,
                              defaultValue: 0,
                              max: 30,
                              step: 1
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
                              key: 'options.style.fontSize'
                            },
                            props: {
                              className: 'flex-1 pl-1 pr-1',
                              min: 0,
                              defaultValue: 14,
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
                              key: 'options.style.fill'
                            },
                            props: {
                              defaultValue: {
                                r: 0,
                                g: 200,
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