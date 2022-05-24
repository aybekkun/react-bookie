//@ts-ignore
import styles from "./donate.module.scss";
//@ts-ignore
import donate from "../../assets/img/donate.jpg";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@material-ui/core";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Donate = () => {
  return (
    <div className={styles.dontate}>
      <div className={styles.donateDiv}>
        <div className={styles.donateImg}>
          <img src={donate} alt="donate" />
        </div>
        <div className={styles.donateDes}>
          <h2>Jańa shoqqılardı birgelikte iyeleyik!</h2>
          <p>
            Biz, jańadan ashılǵan «Bookie» qaraqalpaq tilindegi audiokitarlar
            platforması, siz sıyaqlı keńpeyil hám qayır saqawatlı insanlardıń
            járdemine súyenemiz. Eger usı sózlerdi oqıp atırǵanlar keminde 20
            mıń somnan qayır-saqawat qılsa, joybar jumısları 2 jıl ishinde óz
            juwmaǵına jetedi. Sizden joybardı qollap-quwatlawıńızdı soraymız hám
            bunıń menen siz Qaraqalpaq tiliniń rawajlanıwına úlken úles qosqan
            bolasız.
          </p>
        </div>
      </div>

      <div className={styles.question}>
        <h2>Soraw-juwap</h2>
        <Accordion className={styles.accordion}>
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              1. Puldan tısqarı qanday járdem bere alaman?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              - Jámáátimizge ıqtıyarlı, awdarmashı, dublyaj aktyorı sıpatında
              járdem beriwińiz múmkin. Jámáátimizge qosılıw ushın (____) bul
              jerdi basıń.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={styles.accordion}>
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>2. Sırt ellerden de pul jibere alaman ba?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              - Awa, álbette mine usı silteme arqalı tóleseńiz boladı.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion className={styles.accordion}>
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>3. Ǵárejetler smetası bar ma?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              - Awa, biz hár ayda finanslıq esabat berip baramız. Olardı
              tómendegi kesteden tabıwıńız múmkin.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion className={styles.accordion}>
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>4. Naq pulda qayır-saqawat qılsam bola ma?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              - Yaq. Biz qayır-saqawattı tek ǵana Click, Payme qosımshaları
              Visa, mastercard sistemaları hám bank arqalı qabıl etemiz.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default Donate;
