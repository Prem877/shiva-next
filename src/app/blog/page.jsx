import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'
// import Error from 'next/error'
import blog1 from '../../assets/img/blog1.jpg';
import blog2 from '../../assets/img/blog2.jpg';
import blog3 from '../../assets/img/blog3.jpg';

//api key cba9ad99a07743948cbe76f7f6413e70
// const getData = async () => {
//     const res = await fetch('https://newsapi.org/v2/everything?q=apple&from=2023-06-24&to=2023-06-24&sortBy=popularity&apiKey=cba9ad99a07743948cbe76f7f6413e70')

//     if (!res.ok) {
//         throw new Error('Failed to fetch data');
//     }

//     return res.json();
// }

const Blog = () => {
    return (
        <div className={styles.maincontainer}>
            <Link href="/blog/test1" className={styles.container}>
                <div className={styles.imageContainer}>
                    <Image
                        src={blog1}
                        alt=""
                        width={400}
                        height={250}
                        className={styles.img}
                    />
                </div>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        Lorem, ipsum.
                    </h1>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, perferendis.
                    </p>
                </div>
            </Link>
            <Link href="/blog/test2" className={styles.container}>
                <div className={styles.imageContainer}>
                    <Image
                        src={blog2}
                        alt=""
                        width={400}
                        height={250}
                        className={styles.img}
                    />
                </div>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        Lorem, ipsum.
                    </h1>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, perferendis.
                    </p>
                </div>
            </Link>
            <Link href="/blog/test3" className={styles.container}>
                <div className={styles.imageContainer}>
                    <Image
                        src={blog3}
                        alt=""
                        width={400}
                        height={250}
                        className={styles.img}
                    />
                </div>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        Lorem, ipsum.
                    </h1>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, perferendis.
                    </p>
                </div>
            </Link>
        </div>
    )
}

export default Blog
