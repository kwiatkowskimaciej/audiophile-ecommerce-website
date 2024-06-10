import styles from './page.module.scss';

export default function Home() {
  return (
    <>
      <h1 className={styles.heading}>Heading 1</h1>
      <h2 className={styles.heading}>Heading 2</h2>
      <h3 className={styles.heading}>Heading 3</h3>
      <h4 className={styles.heading}>Heading 4</h4>
      <h5 className={styles.heading}>Heading 5</h5>
      <h6 className={styles.heading}>Heading 6</h6>
      This is a paragraph of text.
      <div className="overline">Lorem ipsum</div>
      <div className="subtitle">Lorem ipsum</div>
    </>
  );
}
