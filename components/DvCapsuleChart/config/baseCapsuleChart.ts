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
                      defaultValue: '胶囊柱图',
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
                              text: '单位'
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
                              placeholder: '请输入单位'
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
                              defaultValue: false
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