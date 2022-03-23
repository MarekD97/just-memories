import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';

const ProjectsPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark;

    console.log(frontmatter);

    const styleContainer = {
        width: '50%',
        height: '400px',
        background: 'url("https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty-300x240.jpg")',
        backgroundSize: 'cover',
    }

    return (
        <Layout>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                }}
            >
                <div style={styleContainer} />
                <div style={styleContainer} />
                <div style={styleContainer} />
                <div style={styleContainer} />
                <div style={styleContainer} />
                <div style={styleContainer} />
                <div style={styleContainer} />
            </div>
        </Layout>
    );
};

ProjectsPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object,
        }),
    }),
};

export default ProjectsPage;

export const pageQuery = graphql`
    query ProjectsPageTemplate {
        markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
            frontmatter {
                intro {
                    heading
                }
            }
        }
    }
`;