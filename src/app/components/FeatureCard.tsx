import Image, { StaticImageData } from 'next/image'

interface FeatureCardProps {
  src: StaticImageData
  alt: string
  title: string
  content: string
}

export function FeatureCard({ title, content, src, alt }: FeatureCardProps) {
  return (
    <li className="bg-white-100 overflow-hidden rounded-lg border-[1px] border-gray-300 min-w-[8.5rem] flex-1 text-gray-500">
      <Image
        src={src}
        alt={alt}
        width={288}
        height={194}
        className="w-screen h-[6.063rem] bg-center bg-cover"
      />
      <div className="px-3 pb-3 pt-2">
        <h3 className="text-base-140-md mb-1">{title}</h3>
        <p className="text-sm-160">{content}</p>
      </div>
    </li>
  )
}
