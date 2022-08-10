import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import PhoneInput from "react-phone-input-2";
import styles from "../styles/Home.module.css";
import "react-phone-input-2/lib/material.css";
import { useState } from "react";

const Home: NextPage = () => {
  const [phone, setPhone] = useState("");

  const onChatClick = () => {
    window.open(`https://wa.me/+${phone}`, "_blank");
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Whatstart - Chateá sin agendar</title>
        <meta
          name="description"
          content="Ingresá el numero al que le querés hablar y chateale sin agendar"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://whatstart.vercel.app" />
      </Head>

      <main className={styles.main}>
        <Image
          width="250"
          height="250"
          src="/whatsapp-logo.png"
          alt="Logo 3D de Whatsapp"
        />

        <PhoneInput
          country="ar"
          value={phone}
          onChange={(newPhone) => {
            setPhone(newPhone);
          }}
          onKeyDown={({ key }) => {
            if (key !== "Enter") return;

            onChatClick();
          }}
          inputProps={{
            name: "phone",
            required: true,
            autoFocus: true,
          }}
          specialLabel="Teléfono"
          containerStyle={{ width: "auto" }}
          inputStyle={{ color: "#000" }}
        />

        <button className={styles.button} onClick={onChatClick}>
          Chateá
        </button>
      </main>
    </div>
  );
};

export default Home;
