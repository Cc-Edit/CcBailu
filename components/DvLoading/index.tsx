// @ts-ignore
import { Loading } from '@jiaminghi/data-view-react';
interface DvProp {
  [key: string]: any
}
export default function DvLoading({ attribute = {}, api = {}, event = [] }: DvProp) {
  const { options = {}} = attribute;
  const { text, style = {}, ...otherProp } = options;
  const { color = {}, fontSize } = style;
  const eleStyle = {
    color: `rgba(${color.r},${color.g},${color.b},${color.a})`,
    fontSize: `${fontSize}px`
  };
  return <Loading style={eleStyle} className='w-full h-full border-0 text-current' {...otherProp}>{text}</Loading>;
}