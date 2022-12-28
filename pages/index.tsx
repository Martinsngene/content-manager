/** @format */
import Layout from "components/Layout";
import NewsLetter from "components/NewsLetter";
import ResourceHighlights from "components/ResourceHighlights";
import ResourceList from "components/ResourceList";
import { ResourcesTypes } from "components/types/types";
import {
  GetServerSideProps,
  GetStaticProps,
  InferGetServerSidePropsType,
  InferGetStaticPropsType,
} from "next";

export const Home = ({
  resources,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout>
      <ResourceHighlights resources={resources.slice(0, 2)} />
      <NewsLetter />
      <ResourceList resources={resources.slice(2)} />
    </Layout>
  );
};

// When you use getStaticProps, it is called only once and at build-time
export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("http://localhost:3001/api/resources");
  const data: ResourcesTypes[] = await response.json();

  console.log("Calling getStaticProps");
  return {
    props: {
      resources: data,
    },
  };
};

// When getServerSideProps is used, it called everytime a user visits the page
// This function call is executed on the server
// export const getServerSideProps: GetServerSideProps = async () => {
//   const response = await fetch("http://localhost:3000/api/resources");
//   const data: ResourcesTypes[] = await response.json();
//   return {
//     props: {
//       resources: data,
//     },
//   };
// };

export default Home;
