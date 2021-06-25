import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Layout } from "../components/layout /Layout";

const AboutMe = () => {
  return (
    <Layout>
      <h2 className="font-bold text-2xl uppercase mb-2">About me</h2>
      <p className="text-sm">
        An sincerity so extremity he additions. Her yet there truth merit. Mrs
        all projecting favourable now unpleasing. Son law garden chatty temper.
        Oh children provided to mr elegance marriage strongly. Off can
        admiration prosperous now devonshire diminution law
      </p>
      <div className="flex justify-center py-4">
        <StaticImage
          className="object-contain h-96 w-96 text-center"
          alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
          src="../images/avatar.png"
        />
      </div>
      <p className="text-sm">
        Received overcame oh sensible so at an. Formed do change merely to
        county it. Am separate contempt domestic to to oh. On relation my so
        addition branched. Put hearing cottage she norland letters equally
        prepare too. Replied exposed savings he no viewing as up. Soon body add
        him hill. No father living really people estate if. Mistake do produce
        beloved demesne if am pursuit.
      </p>
      <p className="text-sm">
        The Big Oxmox advised her not to do so, because there were thousands of
        bad Commas, wild Question Marks and devious Semikoli, but the Little
        Blind Text didn’t listen. She packed her seven versalia, put her initial
        into the belt and made herself on the way.
      </p>
    </Layout>
  );
};

export default AboutMe;
