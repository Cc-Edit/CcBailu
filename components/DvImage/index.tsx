import Image from 'next/image';
interface ButtonProp {
  [key: string]: any
}
export default function DvImage({ attribute = {}, api = {}, event = [] }: ButtonProp) {
  const { options = {}} = attribute;
  return <Image
          src={options.src || '/illustrations/upload.png'}
          alt={options.alt || ''}
          fill
          sizes='100vw'
          style={{
            objectFit: 'contain'
          }}
        />;
}