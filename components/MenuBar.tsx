import ImageWrapper from '@/atoms/ImageWrapper'
import SnowGlobeIcon from '@/public/icons/icon-snow-globe.svg'

const MenuBar = () => (
  <nav className="h-[5vh] lg:h-[8vh] flex items-center bg-menubar-bg p-4">
    <div className=" flex gap-4 items-center">
      <ImageWrapper
        src={SnowGlobeIcon}
        alt="Main Logo"
        imageSize="h-6 w-6 lg:h-10 lg:w-10"
      />
      <h2>Weinachtsmarkt</h2>
    </div>
  </nav>
)

export default MenuBar
