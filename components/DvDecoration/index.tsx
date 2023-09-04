// @ts-ignore
import { Decoration1, Decoration2, Decoration3, Decoration4, Decoration5, Decoration6, Decoration7, Decoration8, Decoration9, Decoration10, Decoration11 } from '@jiaminghi/data-view-react';
import { formatColor } from '@/bailu/components/util';
interface DvProp {
  [key: string]: any
}
const DecorationMap: Record<string, any> = {
  Decoration1, Decoration2, Decoration3, Decoration4, Decoration5, Decoration6, Decoration7, Decoration8, Decoration9, Decoration10, Decoration11
};
export default function DvDecoration({ attribute = {}, api = {}, event = [] }: DvProp) {
  const { options = {}, position = {}} = attribute;
  const { text = '', style = {}, type, ...otherProp } = options;
  const { width = 100, height = 80 } = position;
  const { color = {}, fontSize } = style;
  const eleStyle = {
    width: `${width}px`,
    height: `${height}px`,
    color: `rgba(${color.r},${color.g},${color.b},${color.a})`,
    fontSize: `${fontSize}px`
  };

  const formatOptions = formatColor(otherProp) as Record<string, any>;
  const DecorationItem = DecorationMap[type];

  return <DecorationItem style={eleStyle} {...formatOptions}>{text}</DecorationItem>;
}