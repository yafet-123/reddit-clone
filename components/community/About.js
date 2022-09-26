import Image from 'next/image'

const style = {
    wrapper:'flex flex-col space-y-2 divide-y divide-[#343536] rounded border border-[#343536] bg-[#1a1a1b] p-4 text-gray-300',
    profileInfoContainer: 'flex items-center space-x-4 ',
    profilePicContainer: `relative h-12 w-12`,
    profilePic: 'object-contain rounded-full',
    aboutContent: 'py-2 text-sm',
    statsWrapper: 'flex items-center space-x-16',
    stat: 'flex flex-col',
    statTitle: 'text-xs',
    footer: 'flex flex-col space-y-4 pt-2',
    createdAt: 'text-sm font-light',
    joinedButton:'cursor-pointer rounded-full border border-gray-300 py-1 text-center text-sm font-semibold',
}

const About = () => {
    return (
        <div className={style.wrapper}>
            <div className='pb-2'>
                <div className={style.profileInfoContainer}>
                    <div className={style.profilePicContainer}>
                        <Image
                            src='https://avatars.githubusercontent.com/u/76257965?s=400&u=adc2c5c1e17176149cb6cde9799ee1e4016b771a&v=4'
                            layout='fill'
                            className={style.profilePic}
                            alt='Profile Image'
                        />
                    </div>
                    <p>yafetaddisu</p>
                </div>
                <p className={style.aboutContent}>
                
                </p>

                <div className={style.statsWrapper}>
                    <div className={style.stat}>
                        <span>2.1m</span>
                        <span className={style.statTitle}>Members</span>
                    </div>
                    <div className={style.stat}>
                        <span>246</span>
                        <span className={style.statTitle}>Online</span>
                    </div>
                </div>
            </div>

            <div className={style.footer}>
                <p className={style.createdAt}>Created Jan 31, 2021</p>

                <div className={style.joinedButton}>Joined</div>
            </div>
        </div>
    )
}

export default About
