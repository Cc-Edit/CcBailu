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
                      defaultValue: '装饰1',
                      placeholder: '请输入组件名称'
                    }
                  }
                ],
                [
                  {
                    type: 'Collapse',
                    props: {
                      className: 'flex-1 pl-1',
                      label: '装饰配置',
                      defaultValue: true,
                      child: (componentAttr: Record<string, any> = {}) => {
                        const { options = {}} = componentAttr;
                        const { type = '' } = options;
                        const baseChild: AttributeItem[][] = [
                          [
                            {
                              type: 'Text',
                              props: { text: '主颜色' }
                            },
                            {
                              type: 'Color',
                              mapping: { key: 'options.color[0]' },
                              props: {
                                defaultValue: {
                                  r: 102,
                                  g: 120,
                                  b: 243,
                                  a: 1
                                },
                                className: 'flex-1 pl-1 pr-1'
                              }
                            }
                          ],
                          [
                            {
                              type: 'Text',
                              props: { text: '副颜色' }
                            },
                            {
                              type: 'Color',
                              mapping: { key: 'options.color[1]' },
                              props: {
                                defaultValue: {
                                  r: 173,
                                  g: 200,
                                  b: 241,
                                  a: 1
                                },
                                className: 'flex-1 pl-1 pr-1'
                              }
                            }
                          ]
                        ];
                        switch (type) {
                          case 'Decoration2':
                          case 'Decoration4':
                          case 'Decoration8':
                            baseChild.push(
                              [
                                {
                                  type: 'Text',
                                  props: { text: '翻转' }
                                },
                                {
                                  type: 'Boolean',
                                  mapping: {
                                    key: 'options.reverse'
                                  },
                                  props: {
                                    className: 'flex-1 pl-1 pr-1',
                                    defaultValue: false
                                  }
                                }
                              ]);
                            break;
                          case 'Decoration9':
                            baseChild.push(
                              [
                                {
                                  type: 'Text',
                                  props: { text: '文本内容' }
                                },
                                {
                                  type: 'String',
                                  mapping: {
                                    key: 'options.text'
                                  },
                                  props: {
                                    className: 'flex-1 pl-1 pr-1',
                                    defaultValue: '90%',
                                    placeholder: '请输入标题文本'
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
                                    key: 'options.style.color'
                                  },
                                  props: {
                                    defaultValue: {
                                      r: 130,
                                      g: 200,
                                      b: 226,
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
                                    text: '文字大小'
                                  }
                                },
                                {
                                  type: 'Number',
                                  mapping: {
                                    key: 'options.style.fontSize'
                                  },
                                  props: {
                                    className: 'w-20 pl-1 pr-1',
                                    min: 1,
                                    max: 100,
                                    defaultValue: 14,
                                    endAdornment: 'px'
                                  }
                                }
                              ],
                              [
                                {
                                  type: 'Text',
                                  props: { text: '动画时长' }
                                },
                                {
                                  type: 'Slider',
                                  mapping: {
                                    key: 'options.dur'
                                  },
                                  props: {
                                    className: 'flex-1 pl-1 pr-1',
                                    min: 1,
                                    defaultValue: 3,
                                    max: 60,
                                    step: 1
                                  }
                                }
                              ]);
                            break;
                          case 'Decoration11':
                            baseChild.push(
                              [
                                {
                                  type: 'Text',
                                  props: { text: '文本内容' }
                                },
                                {
                                  type: 'String',
                                  mapping: {
                                    key: 'options.text'
                                  },
                                  props: {
                                    className: 'flex-1 pl-1 pr-1',
                                    defaultValue: '标题文本',
                                    placeholder: '请输入标题文本'
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
                                    key: 'options.style.color'
                                  },
                                  props: {
                                    defaultValue: {
                                      r: 130,
                                      g: 200,
                                      b: 226,
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
                                    text: '文字大小'
                                  }
                                },
                                {
                                  type: 'Number',
                                  mapping: {
                                    key: 'options.style.fontSize'
                                  },
                                  props: {
                                    className: 'w-20 pl-1 pr-1',
                                    min: 1,
                                    max: 100,
                                    defaultValue: 14,
                                    endAdornment: 'px'
                                  }
                                }
                              ]
                              );
                            break;
                          default:
                            break;
                        }
                        return baseChild;
                      }
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