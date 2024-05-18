import { MdMessage } from "react-icons/md";
import styles from "./ContactForm.module.css";
import Button from "../Button/Button";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { useState } from "react";
const ContactForm = () => {
  const [name, setName] = useState("Guest");
  const [userMail, setUserMail] = useState("skaz@gmail.com");
  const [textContent, setTextContent] = useState("Its just a content");
  const onSubmit = (event) => {
    event.preventDefault();
    setName(event.target[0].value);
    setUserMail(event.target[1].value);
    setTextContent(event.target[2].value);
  };

  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />
          <Button text="VIA CALL" icon={<FaPhoneAlt fontSize="24px" />} />
        </div>
        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<IoMdMail fontSize="24px" />}
        />
        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="name">E-mail</label>
            <input type="email" name="email" id="" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="name" rows="8" />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button text="SUBMIT" />
          </div>
          <div className={styles.card}>
            <li>{`Name: ${name}`}</li>
            <li>{`E-mail: ${userMail}`}</li>
            <li>{`Text: ${textContent}`}</li>
          </div>
        </form>
      </div>
      <div className={styles.contact_image}>
        <img src="src\assets\Service 24_7-pana 1.svg" alt="Some Image" />
      </div>
    </section>
  );
};

export default ContactForm;
