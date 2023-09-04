// @ts-ignore
import { ActiveRingChart } from '@jiaminghi/data-view-react';
import { formatColor } from '@/bailu/components/util';
interface DvProp {
  [key: string]: any
}
export default function DvRingChart({ attribute = {}, api = {}, event = [] }: DvProp) {
  const { options = {}, position = {}} = attribute;
  const { data = [] } = api;
  const { width = 100, height = 80 } = position;
  const eleStyle = {
    width: `${width}px`,
    height: `${height}px`
  };
  const formatOptions = formatColor(options) as Record<string, any>;
  formatOptions.radius && (formatOptions.radius = `${formatOptions.radius}%`);
  formatOptions.activeRadius && (formatOptions.activeRadius = `${formatOptions.activeRadius}%`);
  // 增加key 保证每次重新渲染
  return <ActiveRingChart key={new Date().getTime()} style={eleStyle} config={{ ...formatOptions, data }}></ActiveRingChart>;
}