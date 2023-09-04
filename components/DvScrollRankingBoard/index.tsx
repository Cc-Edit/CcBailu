// @ts-ignore
import { ScrollRankingBoard } from '@jiaminghi/data-view-react';
import { formatColor } from '../util';
interface DvProp {
  [key: string]: any
}
export default function DvScrollRankingBoard({ attribute = {}, api = {}, event = [] }: DvProp) {
  const { options = {}, position = {}} = attribute;
  const { data = [] } = api;
  const { width = 100, height = 80 } = position;
  const eleStyle = {
    width: `${width}px`,
    height: `${height}px`
  };
  const formatOptions = formatColor(options) as Record<string, any>;

  return <ScrollRankingBoard style={eleStyle} config={{ ...formatOptions, data }}></ScrollRankingBoard>;
}