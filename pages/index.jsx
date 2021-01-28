import React from "react";
import Link from "next/link";

const IndexPage = () => {
  return (
    <div>
      <h1>Index Page</h1>

      <Link href="/notes">
        <a>Notes</a>
      </Link>
    </div>
  );
};

export default IndexPage;
