import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { Link } from "gatsby";
import Button from "../components/button";
// Define the interface for the component's props
interface OfferProps {
  data: {
    allContentfulOffer: {
      nodes: {
        name: string;
        features: string[];
        pricePln: number;
        priceEuro: number;
      }[];
    };
  };
}

const Offer: React.FC<OfferProps> = ({ data }) => {
  const offers = data.allContentfulOffer.nodes || [];
  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-8 2xl:gap-12">
        {offers.map((offer) => (
          <div
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-duration="500"
            data-sal-easing="ease"
            key={offer.name}
            className="border-2  px-4 flex flex-col justify-between border-black dark:shadow-light shadow-dark py-4 rounded-lg dark:border-white"
          >
            <h2 className="text-center mt-4 text-5xl">{offer.name}</h2>
            <ul className="text-center mt-8 my-4">
              {offer.features.map((feature, index) => (
                <>
                  <li className="text-xl py-2" key={index}>
                    {feature}
                  </li>
                  <>-</>
                </>
              ))}
            </ul>
            <div>
              <div className="text-center flex flex-col text-2xl mt-3">
                <span>From: {offer.pricePln} PLN</span>
                <span>/ {offer.priceEuro} EURO </span>
              </div>
              <div className="text-center">
                <Link to="/contact">
                  <Button type="button">Contact me</Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query OfferQuery {
    allContentfulOffer {
      nodes {
        name
        features
        pricePln
        priceEuro
      }
    }
  }
`;

export default Offer;
