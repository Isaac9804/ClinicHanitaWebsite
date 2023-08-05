"use client";

import Head from "next/head";
import Navbar1 from "@/app/component/navbar/Navbar1";
import Hero1 from "@/app/component/hero/Hero1";
import Promotion1 from "./component/promotion/Promotion1";
import Panels1 from "./component/panel/Panels1";

export default function Home() {
  return (
    <main>
      {/* ----------------------Header Section--------------------------------------- */}

      <Head>
        <title>KlinikHanita</title>
        <meta name="description" content="Website Klinik Hanita" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      {/* ----------------------Navbar Section--------------------------------------- */}

      <Navbar1 />

      {/* ----------------------Hero Section--------------------------------------- */}

      <Hero1 />

      {/* ----------------------Promotion Section--------------------------------------- */}

      <Promotion1 />

      {/* ----------------------Panels Section--------------------------------------- */}

      <Panels1 />

      {/* ----------------------Footer Section--------------------------------------- */}

      <footer>
        <div className="bg-purple">
          <p className="text-xxxs text-center text-purple1 px-10 py-3">
            Disclaimer: Legal information is not legal advice, read the
            disclaimer. The information provided on this site is not legal
            advice, does not constitute a lawyer referral service, and no
            attorney-client or confidential relationship is or will be formed by
            use of the site.
          </p>
        </div>
      </footer>
    </main>
  );
}
