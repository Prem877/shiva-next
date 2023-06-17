import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'

const Footer = () => {
    return (
        <div className={styles.container}>
            <div>@2023 Shiva. All rights reserved</div>
                <div className={styles.social}>
                    <Image src="/img/facebook.png" alt="fb-logo" width={15} height={15} className={styles.icon} />
                    <Image src="/img/instagram.png" alt="insta-logo" width={15} height={15} className={styles.icon} />
                    <Image src="/img/youtube.png" alt="yt-logo" width={15} height={15} className={styles.icon} />
                    <Image src="/img/twitter.png" alt="tw-logo" width={15} height={15} className={styles.icon} />
                    <Image src="/img/whatsapp.png" alt="wa-logo" width={15} height={15} className={styles.icon} />
                </div>
        </div>
    )
}

export default Footer
