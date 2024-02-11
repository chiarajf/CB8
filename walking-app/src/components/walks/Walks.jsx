import Link from "next/link";
import styles from "./index.module.scss";

const Walks = () => {
  return (
    <div className={styles.container}>
      <Link href="walking/magna-via-francigena">
        <div className={styles.item}>
          <img src="/magnaviafrancigena.jpg" alt="Magna Via Francigena" />
          <h1>Magna Via Francigena</h1>
          <p>
            Un percorso che segue le antiche strade utilizzate dai pellegrini
            medievali per raggiungere Roma dalla Francia settentrionale. Questo
            tratto della Via Francigena attraversa paesaggi mozzafiato, antichi
            borghi e importanti siti storici, offrendo ai camminatori
            un'esperienza unica nel cuore dell'Europa.
          </p>
        </div>
      </Link>
      <Link href="walking/via-francigena-normanna">
        <div className={styles.item}>
          <img src="/vianormanna.jpg" alt="Via Francigena Normanna" />
          <h1>Via Francigena Normanna</h1>
          <p>
            La Via Francigena Normanna offre un viaggio attraverso la splendida
            campagna normanna, caratterizzata da verdi colline, affascinanti
            castelli e pittoreschi villaggi. Questo percorso storico conduce i
            visitatori lungo le tracce dei pellegrini medievali, permettendo
            loro di immergersi nella ricca storia e cultura della regione.
          </p>
        </div>
      </Link>
      <Link href="walking/via-francigena-fabaria">
        <div className={styles.item}>
          <img src="/fabaria.jpg" alt="Via Francigena Fabaria" />
          <h1>Via Francigena Fabaria</h1>
          <p>
            La Via Francigena Fabaria, conosciuta anche come "La Fabaria", è un
            tratto della Via Francigena che attraversa la regione italiana della
            Fabaria. Questo percorso offre ai camminatori la possibilità di
            esplorare incantevoli paesaggi rurali, antichi monasteri e autentici
            villaggi italiani lungo il loro viaggio verso la rinomata città di
            Roma.
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Walks;
