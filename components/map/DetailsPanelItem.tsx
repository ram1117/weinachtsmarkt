import ImageWrapper from '@/atoms/ImageWrapper'
import Link from 'next/link'

interface DetailsPanelItemProps {
  imageSrc: any
  imageAlt: string
  sectionTitle: string
  details: string[]
  isLink?: boolean
}

const DetailsPanelItem = ({
  imageSrc,
  imageAlt,
  sectionTitle,
  details,
  isLink = false,
}: DetailsPanelItemProps) => (
  <div className="my-2 lg:my-4 flex gap-4 items-start">
    <ImageWrapper
      src={imageSrc}
      alt={imageAlt}
      imageSize="h-[32px] w-[32px] lg:h-[40px] lg:w-[40px]"
    />
    <div className="w-4/5">
      <h4 className="text-base lg:text-lg font-semibold">{sectionTitle}</h4>
      <ul>
        {details?.map((item, index) => (
          <li className="text-sm lg:text-base" key={index}>
            {isLink ? (
              <Link href={item} target="_blank">
                {item}
              </Link>
            ) : (
              <h6>{item}</h6>
            )}
          </li>
        ))}
      </ul>
    </div>
  </div>
)
export default DetailsPanelItem
