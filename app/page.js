import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Расписание ледовой арены
          <code className={styles.code}> Озерки</code>
        </p>
        <div>
          <a
            href="https://katok-ozerki.ru/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={140}
              height={90}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://calendar.google.com/calendar/u/0/embed?src=b491b4e810851afe89db6c0b8055320d09af3246f60b8b7004b39c6bece7164b@group.calendar.google.com&ctz=Europe/Moscow"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Центральная игровая арена <span>-&gt;</span>
          </h2>
          <p>Размер арены 26х56</p>
        </a>

        <a
          href="https://calendar.google.com/calendar/u/0/embed?src=jgl24dlkvmobfa4eh6ob5qomks@group.calendar.google.com&ctz=Europe/Moscow"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Большая арена <span>-&gt;</span>
          </h2>
          <p>Размер арены 26х56</p>
        </a>

        <a
          href="https://calendar.google.com/calendar/u/0/embed?src=pj4va06gncb1vgv76864hbsh08@group.calendar.google.com&ctz=Europe/Moscow"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Малая арена <span>-&gt;</span>
          </h2>
          <p>Размер арены 20х40</p>
        </a>

        <a
          href="https://vk.com/katokozerki"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Мы ВКонтакте <span>-&gt;</span>
          </h2>
          <p>
            Все актуальное здесь.
          </p>
        </a>
      </div>
    </main>
  )
}
