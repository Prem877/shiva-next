import React from 'react'
import styles from './page.module.css'
import Button from '@/components/Button/Button'
import Image from 'next/image'
import Imgage1 from '../../../assets/img/portfolio/vectorImg1.svg'

const Category = ({ params }) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.catTitle}>{params.category}</h1>
            <div className={styles.item}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Test</h1>
                    <p className={styles.desc}>Desc</p>
                    <Button url="#" title="See More" />
                </div>
                <div className={styles.imgContainer}>
                    <Image
                        src={Imgage1}
                        alt=""
                        fill
                        className={styles.img}
                    />
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Test</h1>
                    <p className={styles.desc}>Desc</p>
                    <Button url="#" title="See More" />
                </div>
                <div className={styles.imgContainer}>
                    <Image
                        src={Imgage1}
                        alt=""
                        fill
                        className={styles.img}
                    />
                </div>
            </div>
        </div>
    )
}

export default Category
