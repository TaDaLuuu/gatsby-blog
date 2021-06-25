import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import { graphql, Link } from "gatsby";
import * as React from "react";
import { Layout } from "../components/layout /Layout";

const IndexPage = ({ data }) => {
  console.log({ data });
  return (
    <Layout>
      <h1 className="font-bold text-[40px] mb-2">Blog</h1>
      <div className="grid grid-cols-3">
        {data.allMdx.edges.map((post) => {
          const { rawBody, slug } = post.node;
          return (
            <Card
              hoverable
              style={{ width: 240 }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Link to="/Vue 3.1 made by day.mdx">
                <Meta title={slug} description={rawBody} />
              </Link>
            </Card>
          );
        })}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx {
      edges {
        node {
          rawBody
          slug
        }
      }
    }
  }
`;

export default IndexPage;
