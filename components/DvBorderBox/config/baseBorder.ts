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
                      defaultValue: '边框1',
                      placeholder: '请输入组件名称'
                    }
                  }
                ],
                [
                  {
                    type: 'Collapse',
                    props: {
                      className: 'flex-1 pl-1',
                      label: '边框配置',
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
                          case 'BorderBox4':
                          case 'BorderBox5':
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
                          case 'BorderBox8':
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
                          case 'BorderBox11':
                            baseChild.push(
                              [
                                {
                                  type: 'Text',
                                  props: { text: '标题' }
                                },
                                {
                                  type: 'String',
                                  mapping: {
                                    key: 'options.title'
                                  },
                                  props: {
                                    className: 'flex-1 pl-1 pr-1',
                                    defaultValue: '边框标题',
                                    placeholder: '请输入边框标题'
                                  }
                                }
                              ],
                              [
                                {
                                  type: 'Text',
                                  props: { text: '标题宽度' }
                                },
                                {
                                  type: 'Number',
                                  mapping: {
                                    key: 'options.titleWidth'
                                  },
                                  props: {
                                    className: 'flex-1 pl-1 pr-1',
                                    min: 0,
                                    defaultValue: 180,
                                    max: 1000,
                                    endAdornment: 'px'
                                  }
                                }
                              ]);
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