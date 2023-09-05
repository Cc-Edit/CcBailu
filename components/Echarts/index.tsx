// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from 'echarts/core';
if (typeof window !== 'undefined') {
  // @ts-ignore
  import('echarts-liquidfill');
}
// 引入柱状图图表，图表后缀都为 Chart
import { BarChart, LineChart, PieChart, ScatterChart, FunnelChart, GaugeChart } from 'echarts/charts';
// 引入提示框，标题，直角坐标系，数据集，内置数据转换器组件，组件后缀都为 Component
import {
  TitleComponent,
  LegendComponent,
  TooltipComponent,
  ToolboxComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent
} from 'echarts/components';
// 标签自动布局、全局过渡动画等特性
import { LabelLayout, UniversalTransition } from 'echarts/features';
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from 'echarts/renderers';
// 注册必须的组件
echarts.use([
  TitleComponent,
  LegendComponent,
  TooltipComponent,
  ToolboxComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  BarChart,
  LineChart,
  PieChart,
  FunnelChart,
  GaugeChart,
  ScatterChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer
]);
import { useRef, useEffect, useState } from 'react';
import { formatColor, formatApi } from '@/bailu/components/util';
interface EchartsProp {
  attribute: Record<string, any>
  api: Record<string, any>
  event: Record<string, any>
}
export default function Echarts({ attribute, api, event }: EchartsProp) {
  const { className = '', options = {}, position = {}} = attribute;
  const { width = 100, height = 80 } = position;

  const mergeApiOption = formatApi(options as Record<string, any>, api);
  const chartOption = formatColor(mergeApiOption);
  const chartEle = useRef<HTMLDivElement>(null);
  const [myChart, setMyChart] = useState<echarts.ECharts | null>();
  useEffect(() => {
    myChart?.resize({
      width,
      height
    });
  }, [position, myChart]);
  useEffect(() => {
    const chart = echarts.init(chartEle.current);
    chart.setOption(chartOption as Record<string, any>);
    setMyChart(chart);
    return () => {
      chart.dispose();
      setMyChart(null);
    };
  }, [chartEle, options, api]);
  return <div ref={chartEle} className={`${className} w-full h-full`}></div>;
}