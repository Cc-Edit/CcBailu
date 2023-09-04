// @ts-ignore
import { DigitalFlop } from '@jiaminghi/data-view-react';
import { formatColor } from '@/bailu/components/util';
import { useState, useEffect } from 'react';
import { delay } from '@/components/util';
interface DvProp {
  [key: string]: any
}
export default function DvNumber({ attribute = {}, api = {}, event = [] }: DvProp) {
  const { options = {}, position = {}} = attribute;
  const [number, setNumber] = useState([0]);
  const { data = [0] } = api;
  const { width = 100, height = 80 } = position;
  const { due = 1, ...otherProp } = options;
  const eleStyle = {
    width: `${width}px`,
    height: `${height}px`
  };
  useEffect(() => {
    delay(300).then(() => {
      setNumber(data);
    });
  }, []);
  const formatOptions = formatColor(otherProp) as Record<string, any>;
  // 增加key 保证每次重新渲染
  return <DigitalFlop style={eleStyle} config={{ ...formatOptions, number, animationFrame: due * 50 }}></DigitalFlop>;
}