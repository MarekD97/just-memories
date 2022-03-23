import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import AlbumCard from '../components/AlbumCard';

const AlbumPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark;

    console.log(frontmatter);

    const image = "https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty-300x240.jpg";
    const loopCard = (count) => {
        let rows = [];
        for(let i = 0; i < count; i++) {
            rows.push(<AlbumCard image={image} heading="Project name" subheading="Project description" />);
        }
        return rows;
    }

    return (
        <Layout>
            <div className="album">
                {loopCard(23)}
            </div>
        </Layout>
    );
};

AlbumPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object,
        }),
    }),
};

export default AlbumPage;

export const pageQuery = graphql`
    query AlbumPageTemplate {
        markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
            frontmatter {
                intro {
                    heading
                }
            }
        }
    }
`;