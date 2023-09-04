interface ButtonProp {
  [key: string]: any
}
export default function DvImage({ attribute = {}, api = {}, event = [] }: ButtonProp) {
  const { className = '', options = {}, position = {}} = attribute;
  return <img className='w-full h-full border-0' {...{...options, src: options.src || '/illustrations/upload.png'}}/>;
}