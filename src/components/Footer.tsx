import React from "react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-background text-foreground border-t mt-20">
      <div className="container mx-auto px-4 py-8 flex flex-col gap-6 md:flex-row md:justify-between lg:justify-around">
        <div className="max-w-md">
          <h3 className="text-xl font-semibold mb-2">About Us</h3>
          <p className="text-md text-muted-foreground mt-4">
            Our platform empowers users to generate personalized mock interviews
            tailored to their goals. After completing the interview, users
            receive a detailed score out of 100—helping them identify strengths,
            improve weaknesses, and prepare confidently for real-world
            opportunities.
          </p>
        </div>

        <div className="text-sm text-muted-foreground self-center md:self-end text-center md:text-right">
          <p>&copy; {new Date().getFullYear()} Mocksy. All rights reserved.</p>
        </div>
      </div>

      <Separator />
    </footer>
  );
};

export default Footer;
