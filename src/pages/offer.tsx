import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { Link } from "gatsby";
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
      <div className="grid grid-cols-1 md:grid-cols-3  gap-8">
        {offers.map((offer) => (
          <div
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-duration="500"
            data-sal-easing="ease"
            key={offer.name}
            className="border-2  px-4 flex flex-col justify-between border-black dark:shadow-light shadow-dark py-4 rounded-lg dark:border-white"
          >
            <h2 className="text-center text-5xl">{offer.name}</h2>
            <ul className="text-center mt-4 my-4">
              {offer.features.map((feature, index) => (
                <li className="text-xl py-2" key={index}>
                  {feature}
                </li>
              ))}
            </ul>
            <div>
              <div className="text-center flex flex-col text-2xl my-4">
                <span>From: {offer.pricePln} PLN</span>
                <span>/ {offer.priceEuro} EURO </span>
              </div>
              <div className="text-center">
                <Link to="/contact">
                  <button className="border-2 text-center  hover:shadow-[0] dark:hover:shadow-[0] shadow-dark text-black  dark:borer-white dark:shadow-light border-black dark:border-white hover:dark:text-white dark:text-white py-2 px-5 min-w-[33%] rounded-lg bg-teal-400 hover:bg-teal-200 dark:bg-amber-600 dark:hover:bg-amber-500 duration-200">
                    Contact me
                  </button>
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
