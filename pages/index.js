import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'

const style = {
    wrapper: `flex min-h-screen flex-col bg-black text-white`,
    main: `mx-auto flex w-full max-w-5xl flex-1 space-x-6 py-5 px-6`,
    content: `w-full space-y-4 lg:w-2/3`,
    infoContainer: `hidden w-1/3 lg:block`,
}

export default function Home() {
    return (
        <div className={style.wrapper}>
            <Header />
        </div>
    )
}
