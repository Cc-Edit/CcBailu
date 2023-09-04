// @ts-ignore
import { PercentPond } from '@jiaminghi/data-view-react';
import { formatColor } from '../util';
interface DvProp {
  [key: string]: any
}
export default function DvPercentPond({ attribute = {}, api = {}, event = [] }: DvProp) {
  const { options = {}, position = {}} = attribute;
  const { data = [] } = api;
  const { width = 100, height = 80 } = position;
  const eleStyle = {
    width: `${width}px`,
    height: `${height}px`
  };
  const formatOptions = formatColor(options) as Record<string, any>;
  // 增加key 保证每次重新渲染
  return <PercentPond style={eleStyle} config={{ ...formatOptions, data }}></PercentPond>;
}