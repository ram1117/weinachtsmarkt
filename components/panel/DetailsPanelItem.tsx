import ImageWrapper from '@/atoms/ImageWrapper'
import Link from 'next/link'

interface DetailsPanelItemProps {
  imageSrc: any
  imageAlt: string
  sectionTitle: string
  details: string[]
  isLink?: boolean
  styleList?: boolean
}

const DetailsPanelItem = ({
  imageSrc,
  imageAlt,
  sectionTitle,
  details,
  isLink = false,
  styleList = false,
}: DetailsPanelItemProps) => (
  <div className="lg:my-6 flex gap-4 items-start my-3">
    <ImageWrapper
      src={imageSrc}
      alt={imageAlt}
      imageSize="h-[32px] w-[32px] lg:h-[46px] lg:w-[46px]"
    />
    <div className="w-4/5">
      <h4 className="text-base lg:text-lg font-semibold">{sectionTitle}</h4>
      <ul className={`${styleList ? 'list-square px-2' : 'list-none'}`}>
        {details?.map((item, index) => (
          <li
            className={`text-sm lg:text-base ${styleList ? 'ms-2' : ''}`}
            key={index}
          >
            {isLink && item ? (
              <Link href={item} target="_blank" className="underline">
                <h6 className="break-all">{item}</h6>
              </Link>
            ) : (
              <h6 className="break-all">{item}</h6>
            )}
          </li>
        ))}
      </ul>
    </div>
  </div>
)
export default DetailsPanelItem
