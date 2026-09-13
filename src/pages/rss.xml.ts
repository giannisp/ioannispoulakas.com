/**
 * RSS feed with the full HTML content of every post.
 */

import rss from '@astrojs/rss';
import type { APIContext } from 'astro';

import { site } from '../site';
import { getSortedPosts } from '../utils/posts';

export const GET = async (context: APIContext) => {
  const posts = await getSortedPosts();

  return rss({
    title: site.title,
    description: site.description,
    site: context.site ?? site.url,
    items: posts.map((post) => ({
      title: post.data.title,
      link: post.data.path,
      pubDate: post.data.date,
      content: post.rendered?.html,
    })),
  });
};
