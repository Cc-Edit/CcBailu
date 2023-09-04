import { AttributeItem } from '../../types';
// 基础柱状图配置
// 基础设置
const baseConfig: AttributeItem[][] = [
  [
    {
      type: 'Text',
      props: {
        text: '页面标题1'
      }
    },
    {
      type: 'String',
      mapping: {
        key: 'design.page.title'
      },
      props: {
        className: 'flex-1 pl-1 pr-1',
        defaultValue: '页面标题',
        placeholder: '请输入页面标题'
      }
    }
  ]
];
// 复杂配置
const complexConfig: AttributeItem[][] = [
  [
    {
      type: 'Text',
      props: {
        text: '组件1配置',
        size: 'text-sm',
        className: 'w-full font-bold border-b text-center'
      }
    }
  ]
];
const titleConfig = {
  baseConfig,
  complexConfig
};
export default titleConfig;