import { ComponentConfig } from '@/types';
import { commonConfig } from '@/bailu/baseConfig/common';
// 基础按钮配置
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
                      defaultValue: '基础按钮',
                      placeholder: '请输入组件名称'
                    }
                  }
                ],
                [
                  {
                    type: 'Collapse',
                    props: {
                      className: 'flex-1 pl-1',
                      label: '按钮配置',
                      defaultValue: true,
                      child: [
                        [
                          {
                            type: 'Text',
                            props: { text: '按钮文字' }
                          },
                          {
                            type: 'String',
                            mapping: { key: 'options.text' },
                            props: {
                              className: 'flex-1 pl-1 pr-1',
                              defaultValue: '按钮',
                              placeholder: '请输入按钮文字'
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
                      text: '无需配置数据'
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