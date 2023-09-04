function isColorObj(obj: Record<string, any>) {
  const { r, g, b, a } = obj;
  return r !== undefined && g !== undefined && b !== undefined && a !== undefined;
}
// 将option中的颜色转换为通用颜色
export function formatColor(option: Record<string, any>) {
  if (Object.prototype.toString.call(option) === '[object Object]') {
    if (isColorObj(option)) {
      return `rgba(${option.r},${option.g},${option.b},${option.a})`;
    }
    let result:Record<string, any> = {};
    for (let key in option) {
      result[key] = formatColor(option[key]);
    }
    return result;
  } else if (Object.prototype.toString.call(option) === '[object Array]') {
    let result:any[] = [];
    for (let i = 0; i < option.length; i++) {
      result[i] = formatColor(option[i]);
    }
    return result;
  } else {
    return option;
  }
}
function formatFunnel(option: Record<string, any>, api: Record<string, any>) {
  const { data = [], baseSeriesOption = {}} = api;
  const series: Record<string, any>[] = [];
  series.push({
    ...baseSeriesOption,
    data
  });
  return {
    ...option,
    series
  };
}
function formatScatter(option: Record<string, any>, api: Record<string, any>) {
  const { data = [], baseSeriesOption = {}} = api;
  const series: Record<string, any>[] = [];
  series.push({
    ...baseSeriesOption,
    data
  });
  return {
    ...option,
    xAxis: {},
    yAxis: {},
    series
  };
}
function formatPie(option: Record<string, any>, api: Record<string, any>) {
  const { data = [], baseSeriesOption = {}} = api;
  const series: Record<string, any>[] = [];
  series.push({
    type: 'pie',
    ...baseSeriesOption,
    data
  });
  return {
    ...option,
    series
  };
}
function formatLineAndBar(option: Record<string, any>, api: Record<string, any>) {
  const { data = [], mapping = {}, baseSeriesOption = {}, basexAxisOption = {}, baseyAxisOption = {}} = api;
  const series: Record<string, any>[] = [];
  const seriesMap: Record<string, any[]> = {};
  const xAxis: { type: string, data: any[] } = {
    type: 'category',
    data: [],
    ...basexAxisOption
  };
  const yAxis: { type: string, data?: any[] } = {
    type: 'value',
    data: [],
    ...baseyAxisOption
  };
  data.forEach((item: Record<string, any>) => {
    Object.keys(mapping).forEach(key => {
      const type = mapping[key];
      const originData = item[key];
      switch (type) {
        case 'x-b':
          if (xAxis.type === 'category') {
            xAxis.data.push(originData);
          } else {
            if (!seriesMap[key]) {
              seriesMap[key] = [];
            }
            seriesMap[key].push(originData);
          }
          break;
        case 'y-l':
          if (yAxis.type === 'category') {
            yAxis.data?.push(originData);
          } else {
            if (!seriesMap[key]) {
              seriesMap[key] = [];
            }
            seriesMap[key].push(originData);
          }
          break;
        default:
          break;
      }
    });
  });
  for (let key in seriesMap) {
    series.push({
      name: key,
      ...baseSeriesOption,
      data: seriesMap[key]
    });
  }
  return {
    ...option,
    series,
    yAxis,
    xAxis
  };
}
export function formatApi(option: Record<string, any>, api: Record<string, any>) {
  const { baseSeriesOption = {}} = api;
  const { type = 'bar' } = baseSeriesOption;

  if (type === 'pie') { // 饼图没有坐标系
    return formatPie(option, api);
  } else if (type === 'scatter') { // 散点图
    return formatScatter(option, api);
  } else if (type === 'funnel' || type === 'gauge' || type === 'liquidFill') { // 漏斗图、仪表盘、水位图
    return formatFunnel(option, api);
  } else {
    return formatLineAndBar(option, api);
  }
}