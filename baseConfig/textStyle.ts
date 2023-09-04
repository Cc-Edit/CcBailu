// echarts文字样式配置提取
export function getTextStyle(prefixKey = '') {
 const textStyleSimple = [
   [
     {
       type: 'Text',
       props: {
         text: '文本颜色'
       }
     },
     {
       type: 'Color',
       mapping: {
         key: `${prefixKey}.textStyle.color`
       },
       props: {
         defaultValue: {
           r: 46,
           g: 48,
           b: 49,
           a: 1
         },
         className: 'flex-1 pl-1 pr-1'
       }
     }
   ],
   [
     {
       type: 'Text',
       props: {
         text: '文本样式'
       }
     },
     {
       type: 'ButtonGroup',
       mapping: {
         key: `${prefixKey}.textStyle.fontStyle`
       },
       props: {
         className: 'flex-1 pl-1 pr-1',
         isRadio: true,
         options: [
           {
             tips: '正常',
             icon: 'Title',
             value: 'normal'
           },
           {
             tips: '斜体',
             icon: 'FormatItalic',
             value: 'italic'
           }
         ],
         defaultValue: 'normal'
       }
     }
   ],
   [
     {
       type: 'Text',
       props: {
         text: '文本换行'
       }
     },
     {
       type: 'ButtonGroup',
       mapping: {
         key: `${prefixKey}.textStyle.overflow`
       },
       props: {
         className: 'flex-1 pl-1 pr-1',
         isRadio: true,
         options: [
           {
             text: '截断',
             value: 'truncate'
           },
           {
             text: '换行',
             value: 'breakAll'
           },
           {
             text: '无',
             value: 'none'
           }
         ],
         defaultValue: 'none'
       }
     }
   ],
   [
     {
       type: 'Text',
       props: {
         text: '文字大小'
       }
     },
     {
       type: 'Number',
       mapping: {
         key: `${prefixKey}.textStyle.fontSize`
       },
       props: {
         className: 'flex-1 pl-1 pr-1',
         defaultValue: 11,
         min: 1,
         max: 50,
         endAdornment: 'px'
       }
     }
   ],
   [
     {
       type: 'Text',
       props: {
         text: '文字粗细'
       }
     },
     {
       type: 'Slider',
       mapping: {
         key: `${prefixKey}.textStyle.fontWeight`
       },
       props: {
         className: 'flex-1 pl-1 pr-1',
         defaultValue: 400,
         min: 100,
         max: 800,
         step: 100
       }
     }
   ]

 ];
 const textStyleComplex = [
   [
     {
       type: 'Text',
       props: {
         text: '文字行高'
       }
     },
     {
       type: 'Number',
       mapping: {
         key: `${prefixKey}.textStyle.lineHeight`
       },
       props: {
         className: 'flex-1 pl-1 pr-1',
         defaultValue: 18,
         min: 1,
         max: 50,
         endAdornment: 'px'
       }
     }
   ]
 ];
 return {
   textStyleSimple,
   textStyleComplex
 };
}
