import CloseIcon from '@/public/icons/icon-close.svg'
import ImageWrapper from '@/atoms/ImageWrapper'
import { Dispatch, SetStateAction } from 'react'

interface DetailsPanelProps {
  marketData: { [key: string]: any } | undefined
  setOpenPanel: Dispatch<SetStateAction<boolean>>
  openPanel: boolean
}

const DetailsPanel = ({
  marketData,
  setOpenPanel,
  openPanel,
}: DetailsPanelProps) => {
  const showSidebar = openPanel ? 'right-0 ' : '-right-full'
  return (
    <section
      className={`w-[80vw] sm:w-[55vw] md:w-[40vw] lg:w-[40vw] h-full max-w-[540px] absolute z-[999] bg-app-primary text-app-secondary top-0 text-app-secondary p-2 lg:p-4 ease-in-out duration-500 ${showSidebar}`}
    >
      <div className="w-full flex flex-row-reverse justify-between items-start absolute top-0 inset-x-0  p-2 lg:p-4">
        <button
          type="button"
          onClick={() => setOpenPanel(false)}
          className="rounded-full h-max w-max"
        >
          <ImageWrapper
            src={CloseIcon}
            alt="close panel icon"
            imageSize="h-6 w-6"
          />
        </button>
        <h2 className="text-xl lg:text-2xl font-bold w-5/6">
          {marketData?.name}
        </h2>
      </div>
    </section>
  )
}

export default DetailsPanel
