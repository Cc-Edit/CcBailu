// @ts-ignore
import { ScrollBoard } from '@jiaminghi/data-view-react';
import { formatColor } from '../util';
interface DvProp {
  [key: string]: any
}
export default function DvScrollBoard({ attribute = {}, api = {}, event = [] }: DvProp) {
  const { options = {}, position = {}} = attribute;
  const { data = [] } = api;
  const [item = {}] = data;
  const header = Object.keys(item);
  const dataProp = data.map((rowData: Record<string, any>) => header.map(headerKey => rowData[headerKey]));
  const { width = 100, height = 80 } = position;
  const eleStyle = {
    width: `${width}px`,
    height: `${height}px`
  };
  const formatOptions = formatColor(options) as Record<string, any>;

  return <ScrollBoard style={eleStyle} config={{ ...formatOptions, header, data: dataProp }}></ScrollBoard>;
}