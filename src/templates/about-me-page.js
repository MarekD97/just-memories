import React from "react";
import Layout from "../components/Layout"

const AboutMePage = () => {
    const image = "https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty-300x240.jpg";
    const heading = "Just memories";
    const description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    return (
        <Layout>
            <div className="about-me">
                <img src={image} alt="" className="about-me__img" />
                <span>
                    <h2 className="about-me__h2">{heading}</h2>
                    <h3 className="about-me__h3">{description}</h3>
                </span>
            </div>
        </Layout>
    )
}

export default AboutMePage;