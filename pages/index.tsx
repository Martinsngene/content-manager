import { resources } from "api/data";
import Layout from "components/Layout";
import NewsLetter from "components/NewsLetter";
import ResourceHighlights from "components/ResourceHighlights";
import ResourceList from "components/ResourceList";

export default function Home() {
  return (
    <Layout>
      <ResourceHighlights />
      <NewsLetter />
      <ResourceList />
      {JSON.stringify(resources)}
    </Layout>
  );
}
