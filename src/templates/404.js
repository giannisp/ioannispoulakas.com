/**
 * @file 404 page template.
 */

import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';

import Layout from '../components/Layout';

const PageNotFoundTemplate = () => (
  <Layout>
    <Helmet title="404 - Page not found" />

    <div className="mb-16">
      <h1 className="text-gray-800 text-4xl font-bold mb-4">
        404: Page not found
      </h1>
      <p className="text-lg">
        Sorry, we&rsquo;ve misplaced that URL or it&rsquo;s pointing to
        something that doesn&rsquo;t exist.{' '}
      </p>
      <p className="text-lg">
        <Link to="/" className="text-theme-blue">
          Head back home
        </Link>{' '}
        to try finding it again.
      </p>
    </div>
  </Layout>
);

export default PageNotFoundTemplate;
