import React from "react";
import { useRouter } from "next/router";

const Category = () => {
  const router = useRouter();
  const { category } = router.query;

  return (
    <>
      <main>
        <h1>Category: {category}</h1>
      </main>
    </>
  );
};

export default Category;
