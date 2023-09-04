import MuiButton from '@mui/material/Button';
interface ButtonProp {
  [key: string]: any
}
export default function Button({ attribute = {}, api = {}, event = [] }: ButtonProp) {
  const { className = '', options = {}, position = {}} = attribute;
  const { text, style = {}, ...otherProp } = options;
  const { color = {}, fontSize } = style;
  const eleStyle = {
    color: `rgba(${color.r},${color.g},${color.b},${color.a})`,
    fontSize: `${fontSize}px`
  };
  return <MuiButton style={eleStyle} className='w-full h-full border-0 text-current' {...otherProp}>{text}</MuiButton>;
}