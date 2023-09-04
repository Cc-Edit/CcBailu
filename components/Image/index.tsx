interface ButtonProp {
  [key: string]: any
}
export default function Image({ attribute = {}, api = {}, event = [] }: ButtonProp) {
  const { className = '', options = {}, position = {}} = attribute;
  return <Image className='w-full h-full border-0' {...options} />;
}