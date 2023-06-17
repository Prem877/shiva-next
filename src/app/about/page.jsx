import React from 'react'
import styles from './page.module.css';
import Image from 'next/image';

//Image
import about from '../../assets/img/prototype/about.jpg';
import Button from '@/components/Button/Button';

const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image
                    src={about}
                    alt='about'
                    fill={true}
                    className={styles.img}
                />
                <div className={styles.imgText}>
                    <h1 className={styles.imgTitle}>Lorem, ipsum.</h1>
                    <h2 className={styles.imgDesc}>Lorem ipsum dolor, sit amet consectetur adipisicing.</h2>
                </div>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.item}>
                    <h1 className={styles.title}>Who are we?</h1>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla sed perspiciatis dolorum nihil officiis vel iure odio accusamus cumque odit nemo in veniam cum consectetur atque inventore rem, impedit illo modi cupiditate voluptatibus quis?
                        <br />
                        <br />
                        Aut eligendi illum expedita id atque adipisci laborum nulla quam laboriosam commodi exercitationem dolorem corrupti vero quibusdam consequatur ea, sed, ratione provident eum in dicta eius.
                    </p>
                </div>
                <div className={styles.item}>
                    <h1 className={styles.title}>What we do?</h1>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla sed perspiciatis dolorum nihil officiis vel iure odio accusamus cumque odit nemo in veniam cum consectetur atque inventore rem, impedit illo modi cupiditate voluptatibus quis?
                        <br />
                        <br /> - Admin Dashboard
                        <br /> - Websites
                        <br /> - Mobile UI
                    </p>
                    <Button url="contact" title="contact" />
                </div>
            </div>
        </div>
    )
}

export default About
