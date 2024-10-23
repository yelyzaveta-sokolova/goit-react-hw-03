import styles from "./Contact.module.css";
import { IoPerson } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";

const Contact = (props) => {
  const { id, name, number, onDeleteContact } = props;

  return (
    <div className={styles.cardContact}>
      <div className={styles.cardInfo}>
        <p>
          <IoPerson className={styles.icons} />
          {name}
        </p>
        <p>
          <BsFillTelephoneFill className={styles.icons} />
          {number}
        </p>
      </div>

      <button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </div>
  );
};
export default Contact;