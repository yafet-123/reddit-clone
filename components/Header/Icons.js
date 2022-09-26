import IconItem from '../common/IconItem'
import {
    SparklesIcon,
    GlobeAltIcon,
    VideoCameraIcon,
    ChatBubbleBottomCenterIcon,
    BellIcon,
    PlusIcon,
    SpeakerWaveIcon,
    CurrencyDollarIcon,
} from '@heroicons/react/24/outline'

// divide-x divide-[#343536] that is the vertical between left and right line
// 
const style = {
    wrapper: 'flex items-center space-x-2 divide-x divide-[#343536]',
    iconsLeft: 'flex items-center space-x-2',
    iconsRight: 'flex items-center space-x-2 pl-2',
    freeBtn:'bg-coin shadow-coin flex items-center space-x-1 rounded-full py-1 pl-2 pr-4 text-gray-800',
    smallText: 'text-sm',
    dollarIcon: 'h-4 w-4',
}

const Icons = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.iconsLeft}>
                <IconItem Icon={SparklesIcon} />
                <IconItem Icon={GlobeAltIcon} />
                <IconItem Icon={VideoCameraIcon} />
            </div>
            <div className={style.iconsRight}>
                <IconItem Icon={ChatBubbleBottomCenterIcon} />
                <IconItem Icon={BellIcon} />
                <IconItem Icon={PlusIcon} />
                <IconItem Icon={SpeakerWaveIcon} />

                <button className={style.freeBtn}>
                    <CurrencyDollarIcon className={style.dollarIcon} />
                    <span className={style.smallText}>Free</span>
                </button>
            </div>
        </div>
    )
}

export default Icons