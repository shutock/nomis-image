/* eslint-disable @next/next/no-img-element */
import React from "react";

import type { NextPage } from "next";

import styles from "./index.module.scss";
import { useRouter } from "next/router";

const Page: NextPage = () => {
  const now = new Date().getTime();
  const [address, setAddress] = React.useState<string>(
    "0x297f0458cdda6a60116eac648ed2419293131114"
  );
  const [time, setTime] = React.useState(now);
  const [ens, setEns] = React.useState(false);
  const [score, setScore] = React.useState(69);
  const [size, setSize] = React.useState(350);
  const [type, setType] = React.useState<"default" | "symbiosis" | "xdefi">(
    "default"
  );

  console.log(time);

  const { basePath } = useRouter();

  const attributes: {
    [key: string]: {
      action: React.Dispatch<React.SetStateAction<any>>;
      value: any;
    };
  } = {
    address: { action: setAddress, value: address },
    time: { action: setTime, value: time },
    ens: { action: setEns, value: ens },
    score: { action: setScore, value: score },
    size: { action: setSize, value: size },
    type: { action: setType, value: type },
  };

  for (const key in attributes) {
    console.log(key, ": ", attributes[key].value);
  }

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: string
  ) => {
    e.preventDefault();

    const dispatch = attributes[key].action;

    dispatch(
      key !== "time" ? e.target.value : new Date(e.target.value).getTime()
    );
  };

  const handleOnClick = (e: React.MouseEvent, value: any, key: string) => {
    e.preventDefault();

    const dispatch = attributes[key].action;
    dispatch(value);
  };

  const [url, setUrl] = React.useState<string | null>(null);
  const [fetchTime, setFetchTime] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(false);

  const fetchImage = async () => {
    try {
      setIsLoading(true);
      setFetchTime(0);
      setUrl(null);

      const startTime = performance.now();

      const response = await fetch(
        `/api/score?time=${time}&ens=${ens}&score=${score}&size=${size}&type=${type}&address=${address}`
      );
      const endTime = performance.now();
      setFetchTime(endTime - startTime);

      setUrl(response.url);
      setIsLoading(false);
    } catch (error: any) {
      console.error(error);
      setIsLoading(false);
    }
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchImage();
  };

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>test score image response</h1>
      <div className={styles.section}>
        <form className={styles.form} onSubmit={handleOnSubmit}>
          <label>
            <span>address</span>
            <input
              type="text"
              value={address}
              onChange={(e) => handleOnChange(e, "address")}
            />
          </label>
          <label>
            <span>time</span>
            <input
              type="date"
              defaultValue={formatDate(time)}
              onChange={(e) => handleOnChange(e, "time")}
            />
          </label>
          <label>
            <span>ens</span>
            {[true, false].map((bool) => {
              return (
                <button
                  className={ens === bool ? styles.active : ""}
                  key={`${bool}`}
                  onClick={(e) => handleOnClick(e, bool, "ens")}
                >
                  {bool ? "true" : "false"}
                </button>
              );
            })}
          </label>
          <label>
            <span>score</span>
            <input
              type="number"
              value={score}
              onChange={(e) => handleOnChange(e, "score")}
            />
          </label>
          <label>
            <span>size</span>
            <input
              type="number"
              value={size}
              onChange={(e) => handleOnChange(e, "size")}
            />
          </label>
          <label>
            <span>type</span>
            {["default", "xdefi", "symbiosis"].map((str) => {
              return (
                <button
                  className={type === str ? styles.active : ""}
                  key={str}
                  onClick={(e) => handleOnClick(e, str, "type")}
                >
                  {str}
                </button>
              );
            })}
          </label>
          <button className={styles.submit} type="submit">
            fetch
          </button>
          {isLoading && <div>loading...</div>}
          {fetchTime > 0 && <div>loaded in {fetchTime.toFixed(2)}ms</div>}
        </form>
        <div>
          {url && (
            <>
              <img src={url} alt="" />

              <div>
                <span>image link:</span>
                <br />
                <a target="_blank" href={basePath + url}>
                  {basePath + url}
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;

const formatDate = (timestamp: number) => {
  const date = new Date(timestamp);
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const year = date.getFullYear();

  return `${month}-${day}-${year}`;
};
