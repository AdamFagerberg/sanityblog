import { sanityFetch } from "@/sanity/lib/fetch";
import { postsQuery } from "@/sanity/lib/queries";
import { SanityDocument } from "next-sanity";

import Posts from "@/components/Posts";

export default async function Home() {
  const posts = await sanityFetch<SanityDocument[]>({ query: postsQuery });

  return (
    <main className="min-h-screen p-24">
      <h1 className="text-5xl text-center font-semibold">MY BLOG</h1>
      <Posts posts={posts} />
    </main>
  );
}
