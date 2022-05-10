import React from "react";
import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await res.json();
  const paths = data.map((item: any) => {
    return {
      params: { id: item.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext,
) => {
  const { id }: any = context.params;
  console.log({ id });

  const res = await fetch(`https://jsonplaceholder.typicode.com/users/` + id);
  const data = await res.json();

  return {
    props: { data },
  };
};

const Name = ({ data }: any) => {
  return (
    <>
      <h1>{data.name}</h1>
    </>
  );
};

export default Name;
