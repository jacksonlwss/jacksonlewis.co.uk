/**
 * Template of a single project
 */
import React from 'react'
import { graphql } from 'gatsby'
import Page from '../components/Page'
import SEO from "../components/SEO";
import StandardHero from "../components/StandardHero";
import DefaultPageContent from "../components/DefaultPageContent";


const ProjectTemplate = ({ data }) => {

    const { mdx } = data
    const { frontmatter, html } = mdx

    return (
        <Page>
            <SEO title="Project" />
            <StandardHero>
                <h1>{ frontmatter.title }</h1>
                <span>{ frontmatter.date }</span>
            </StandardHero>
            <DefaultPageContent html={ html } />
        </Page>
    )

}

export default ProjectTemplate

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      frontmatter {
        slug
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
