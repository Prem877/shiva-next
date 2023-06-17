import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

//Image
import contactUs from '../../assets/img/prototype/contact3.png'
import Button from '@/components/Button/Button'

const Contact = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Let&apos;s Keep in Touch</h1>
            <div className={styles.content}>
                <div className={styles.imgContainer}>
                    <Image
                        src={contactUs}
                        alt=""
                        fill={true}
                        className={styles.img}
                    />
                </div>
                <form className={styles.form}>
                    <input type="text" placeholder="name" className={styles.input} />
                    <input type="email" placeholder="email" className={styles.input} />
                    <textarea
                        className={styles.textArea}
                        cols="30"
                        rows="8"
                    >

                    </textarea>
                    <Button url="#" title="Send" />
                </form>
            </div>
        </div>
    )
}

export default Contact
