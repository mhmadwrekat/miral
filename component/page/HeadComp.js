import React from "react";
import Head from "next/head";

const HeadComp = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Miral</title>
        {/* <link rel="icon" href="/assest/saloon.png" /> */}
        {/* <meta name="keywords" content={head_keywords} /> */}
        {/* <meta name="description" content={head_description} /> */}
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />

        <link
          rel="stylesheet"
          href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        {/* <link
          href="https://fonts.googleapis.com/css?family=Work+Sans:200,400&display=swap"
          rel="stylesheet"
        /> */}
        {/* <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/tw-elements/dist/css/index.min.css"
        /> */}
      </Head>
    </React.Fragment>
  );
};

export default HeadComp;
