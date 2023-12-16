import CloseIcon from '@/public/icons/icon-close.svg'
import ImageWrapper from '@/atoms/ImageWrapper'
import DetailsPanelItem from './DetailsPanelItem'
import { Dispatch, SetStateAction } from 'react'
import {
  AddressIcon,
  CalendarIcon,
  ClockIcon,
  InfoIcon,
  WebIcon,
} from '../map/icons'

interface DetailsPanelProps {
  marketData: { [key: string]: any } | undefined
  setSelectedItem: Dispatch<SetStateAction<null>>
  openPanel: boolean
}

const DetailsPanel = ({
  marketData,
  setSelectedItem,
  openPanel,
}: DetailsPanelProps) => {
  const showSidebar = openPanel ? 'right-0 ' : '-right-full'
  return (
    <section
      className={`w-[80vw] sm:w-[55vw] md:w-[40vw] lg:w-[40vw] h-full max-w-[540px] absolute z-[999] bg-app-secondary top-0 text-app-primary p-2 lg:p-4 ease-in-out duration-500 ${showSidebar} shadow-2xl shadow-slate-500 p-2 lg:p-4`}
    >
      <div className="w-full flex flex-row-reverse justify-between items-start">
        <button
          type="button"
          onClick={() => setSelectedItem(null)}
          className="rounded-full h-max w-max"
        >
          <ImageWrapper
            src={CloseIcon}
            alt="close panel icon"
            imageSize="h-6 w-6"
          />
        </button>
        <h2 className="text-xl lg:text-2xl font-bold w-5/6">
          {marketData?.rss_titel}
        </h2>
      </div>
      <div className="overflow-auto h-4/5">
        <DetailsPanelItem
          imageSrc={CalendarIcon}
          imageAlt="calendar icon"
          sectionTitle="Datum"
          details={[`${marketData?.von} - ${marketData?.bis}`]}
        />
        <DetailsPanelItem
          imageSrc={ClockIcon}
          imageAlt="clock icon"
          sectionTitle="Öffnungszeiten"
          details={marketData?.oeffnungszeiten.split('\n')}
          styleList
        />
        <DetailsPanelItem
          imageSrc={InfoIcon}
          imageAlt="info icon"
          sectionTitle="Informationen"
          details={marketData?.bemerkungen.split('\n')}
          styleList
        />
        <DetailsPanelItem
          imageSrc={AddressIcon}
          imageAlt="address icon"
          sectionTitle="Anfahrt"
          details={[marketData?.strasse, marketData?.plz_ort]}
        />
        <DetailsPanelItem
          imageSrc={WebIcon}
          imageAlt="web globe icon"
          sectionTitle="Webseite, E-amil"
          details={[marketData?.w3, marketData?.email]}
          isLink
        />
      </div>
    </section>
  )
}

export default DetailsPanel
