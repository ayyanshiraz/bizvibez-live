// app/blog/[slug]/page.js
import { getPostData } from '../../../lib/posts'; // Adjust path if needed

export default async function Post({ params }) {
  // The 'slug' from the URL is available in params
  const postData = await getPostData(params.slug);

  return (
    <article>
      <h1>{postData.title}</h1>
      <div>
        <p>By {postData.author} on {postData.date}</p>
      </div>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </article>
  );
}