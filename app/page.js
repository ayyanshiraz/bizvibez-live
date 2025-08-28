// app/page.js
import fs from 'fs';
import path from 'path';
import Hero from '../components/Hero';
import PropertyGrid from '../components/PropertyGrid';

// This function reads your property data from the local file
async function getProperties() {
  const filePath = path.join(process.cwd(), 'content', 'properties.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const properties = JSON.parse(jsonData);
  return properties;
}

export default async function Home() {
  const properties = await getProperties();

  return (
    <main>
      <Hero />

      <h2 style={{
        textAlign: 'center',
        marginTop: '3rem',
        marginBottom: '1rem',
        fontSize: '2.5rem',
        fontWeight: 'bold',
        color: '#99347a'
      }}>
        Featured Properties:
      </h2>
      
      <PropertyGrid properties={properties} />

    </main> // <-- This closing tag was likely missing
  );
} // <-- This closing brace was also likely missing