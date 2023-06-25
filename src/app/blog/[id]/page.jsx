import Image from 'next/image'
import React from 'react'
import styles from './page.module.css';
import blog1 from '../../../assets/img/blog1.jpg';
import avatar1 from '../../../assets/img/avatar1.jpg';


const BlogPost = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.info}>
                    <h1 className={styles.title}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </h1>
                    <p className={styles.desc}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde molestias asperiores ipsum at eos praesentium assumenda nostrum rerum ullam officiis itaque esse quasi quidem nisi, expedita perspiciatis sunt laborum odio?
                    </p>
                    <div className={styles.author}>
                        <Image
                            src={avatar1}
                            alt=""
                            width={40}
                            height={40}
                            className={styles.avatar}
                        />
                        <span className={styles.username}>User Name</span>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image
                        src={blog1}
                        alt=""
                        fill={true}
                        className={styles.image}
                    />
                </div>
            </div>
            <div className={styles.content}>
                <p className={styles.text}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum placeat possimus expedita explicabo consectetur inventore! Excepturi optio tempore nisi temporibus perspiciatis minima ipsum repudiandae, tempora, rerum veritatis corrupti? Quidem inventore ducimus fugit odit optio delectus, modi fuga veniam voluptates, dolor mollitia esse voluptatem quod fugiat quae. Id quas porro eligendi nam, voluptates maxime eum ea modi dicta voluptatum sequi, cum eius ipsam sit, magni in perspiciatis. Adipisci repudiandae eius minima, repellendus sunt, culpa eum distinctio corporis magnam in quas perferendis, quia illum. Asperiores voluptatem harum sunt quis velit, ut eum iusto repudiandae, sequi minus vero libero cum dolorum laborum dolore!
                </p>
            </div>
        </div>
    )
}

export default BlogPost
