import PropertyGrid from '../components/PropertyGrid';
import clientPromise from '../lib/mongodb';

async function getProperties() {
  try {
    const client = await clientPromise;
    const db = client.db("bizvibez");
    const properties = await db.collection("properties").find({}).toArray();
    return JSON.parse(JSON.stringify(properties));
  } catch (error) {
    console.error("Failed to fetch properties from DB", error);
    return [];
  }
}

export default async function Home() {
  const properties = await getProperties();

  return (
    <>
      <div className="video-background">
        <video autoPlay loop muted playsInline>
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
      </div>
      <main className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Find Your Dream Home</h1>
          <div className="search-bar-placeholder">
            <input type="text" placeholder="Enter a location, property type, or keyword" />
            <button type="submit">Search</button>
          </div>
        </div>
      </main>
      <PropertyGrid properties={properties} />
    </>
  );
}