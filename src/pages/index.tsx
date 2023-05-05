import Link from "next/link";

import type { NextPage } from "next";

const Page: NextPage = () => {
  return (
    <>
      <h1>This app is using only to generate images</h1>
      <div>
        <p>
          If you are looking for Nomis visit{" "}
          <Link href={"https://nomis.cc"}>nomis.cc</Link>.
        </p>
      </div>
    </>
  );
};

export default Page;
