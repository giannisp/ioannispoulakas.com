/**
 * @file Post helpers.
 */

import { getCollection } from 'astro:content';

/** All posts, newest first. */
export const getSortedPosts = async () =>
  (await getCollection('posts')).sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime(),
  );

/** Formats a date as "DD MMM YYYY", e.g. "04 Jan 2017". */
export const formatDate = (date: Date) =>
  date
    .toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      timeZone: 'UTC',
    })
    .replace('Sept', 'Sep');
