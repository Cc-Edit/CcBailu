// @ts-ignore
import { ConicalColumnChart } from '@jiaminghi/data-view-react';
import { formatColor } from '@/bailu/components/util';
interface DvProp {
  [key: string]: any
}
const defaultImages: string[] = [
  '/icon/level/1.png',
  '/icon/level/2.png',
  '/icon/level/3.png',
  '/icon/level/4.png',
  '/icon/level/5.png',
  '/icon/level/6.png',
  '/icon/level/7.png',
  '/icon/level/8.png',
  '/icon/level/9.png',
  '/icon/level/10.png',
  '/icon/level/11.png',
  '/icon/level/12.png',
  '/icon/level/13.png',
  '/icon/level/14.png',
  '/icon/level/15.png',
  '/icon/level/16.png',
  '/icon/level/17.png',
  '/icon/level/18.png',
  '/icon/level/19.png',
  '/icon/level/20.png'
];
export default function DvColumnChart({ attribute = {}, api = {}, event = [] }: DvProp) {
  const { options = {}, position = {}} = attribute;
  const { data = [], img = [] } = api;
  const showImage = img.length === 0 ? defaultImages : img;
  const { width = 100, height = 80 } = position;
  const eleStyle = {
    width: `${width}px`,
    height: `${height}px`
  };
  const formatOptions = formatColor(options) as Record<string, any>;
  // 增加key 保证每次重新渲染
  return <ConicalColumnChart style={eleStyle} config={{ ...formatOptions, data, img: showImage }}></ConicalColumnChart>;
}