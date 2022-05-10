import Link from "next/link";

const SecondPost = ({ posts }: any) => {
  return (
    <ul>
      <li>{posts}</li>
    </ul>
  );
};

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { id: "1" } },
      { params: { id: "2" } },
      { params: { id: "3" } },
    ],
    fallback: true,
  };
};

export async function getStaticProps(context: any) {
  const { params } = context;
  const id = params.id;
  const api = await fetch("https://jsonplaceholder.typicode.com/users" + id);
  const posts = await api.json();

  return { props: posts };
}

export default SecondPost;
