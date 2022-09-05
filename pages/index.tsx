import type { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [phone, setPhone] = useState("");
  const { t } = useTranslation();

  const onChatClick = () => {
    window.open(`https://wa.me/+${phone}`, "_blank");
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>{t("pageTitle")}</title>
        <meta name="description" content={t("pageDescription")} />

        <link rel="icon" href="/favicon.ico" />
        <link
          rel="alternate"
          hrefLang="es"
          href="https://chateasinagendar.com.ar/"
        />
        <link rel="alternate" hrefLang="en" href="https://chat-directly.com/" />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://chat-directly.com/"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:url" content={t("pageUrl")} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={t("pageTitle")} />
        <meta property="og:description" content={t("pageDescription")} />
        <meta
          property="og:image"
          content="https://chateasinagendar.com.ar/og-image.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content={t("pageUrlWithoutHttp")} />
        <meta property="twitter:url" content={t("pageUrl")} />
        <meta name="twitter:title" content={t("pageTitle")} />
        <meta name="twitter:description" content={t("pageDescription")} />
        <meta
          name="twitter:image"
          content="https://chateasinagendar.com.ar/og-image.png"
        />
      </Head>

      <main className={styles.main}>
        <Image
          width="250"
          height="250"
          src="/whatsapp-logo.png"
          alt={t("logoDescription")}
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
          specialLabel={t("phone")}
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

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default Home;
