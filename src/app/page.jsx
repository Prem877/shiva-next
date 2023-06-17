import Image from "next/image";
import uiPrototype from '../assets/img/prototype/home_ui.png';
import styles from './page.module.css'
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item} >
        <h1 className={styles.title}>
          Lorem ipsum dolor sit amet.
        </h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem ut reprehenderit voluptate illum distinctio sit?
        </p>
        <Button url="/portfolio" title="see our works" />
      </div>
      <div className={styles.item}>
        <Image src={uiPrototype} alt="" className={styles.img} />
      </div>
    </div>
  )
}
