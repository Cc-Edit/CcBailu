// @ts-ignore
import { BorderBox1, BorderBox2, BorderBox3, BorderBox4, BorderBox5, BorderBox6, BorderBox7, BorderBox8, BorderBox9, BorderBox10, BorderBox11, BorderBox12, BorderBox13 } from '@jiaminghi/data-view-react';
import { formatColor } from '@/bailu/components/util';
interface DvProp {
  [key: string]: any
}
const BorderBoxMap: Record<string, any> = {
  BorderBox1, BorderBox2, BorderBox3, BorderBox4, BorderBox5, BorderBox6, BorderBox7, BorderBox8, BorderBox9, BorderBox10, BorderBox11, BorderBox12, BorderBox13
};
export default function DvBorderBox({ attribute = {}, api = {}, event = [] }: DvProp) {
  const { options = {}} = attribute;
  const { type, ...otherProp } = options;
  const formatOptions = formatColor(otherProp) as Record<string, any>;
  const BorderBoxItem = BorderBoxMap[type];
  return <BorderBoxItem key={new Date().getTime()} {...formatOptions}></BorderBoxItem>;
}