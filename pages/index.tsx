import Footer from "components/Footer";
import Navbar from "components/Navbar";
import NewsLetter from "components/NewsLetter";
import ResourceHighlights from "components/ResourceHighlights";
import ResourceList from "components/ResourceList";

export default function Home() {
  return (
    <div>
      <Navbar />
      <ResourceHighlights />
      <NewsLetter />
      <ResourceList />
      <Footer />
    </div>
  );
}
