/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import React from "react";
import QRCode from "qrcode";

import type { NextPage } from "next";

import styles from "./styles.module.scss";

type IRequest = {
  id: string;
  thid: string;
  from: string;
  type: string;
  body: {
    reason: string;
    message: string;
    callbackUrl: string;
    scope: string[];
  };
};

const PolygonIdPage: NextPage = () => {
  const [request, setRequest] = React.useState<IRequest | null>(null);
  const [qr, setQr] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (request) {
      generateQR(setQr, request);
      return;
    }

    getRequest(setRequest);
  }, [request]);

  return (
    <main className={styles.main}>
      <div className={styles.title}>
        <h6 className={styles.subheading}>TEST</h6>
        <h1 className={styles.heading}>Polygon ID</h1>
      </div>
      {qr && (
        <>
          <div className={styles.qr}>
            <img className={styles.img} src={qr} />
            <div className={styles.label}>Scan QR with a Polygon ID app</div>
          </div>
        </>
      )}
    </main>
  );
};

export default PolygonIdPage;

const getRequest = async (setRequest: React.Dispatch<IRequest>) => {
  try {
    const response = await fetch(`/api/auth`);
    const request: IRequest = await response.json();
    setRequest(request);
  } catch (error) {
    console.error(error);
  }
};

const generateQR = async (setQr: React.Dispatch<string>, request: IRequest) => {
  const link = `${JSON.stringify(request)}`;

  try {
    const qr = await QRCode.toDataURL(link);
    setQr(qr);
  } catch (err) {
    console.error(err);
  }
};
