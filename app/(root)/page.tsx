import { Button } from "@/components/ui/button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};
const HomePage = () => {
  return (
    <>
      <div className="center-screen">
        <Button variant="default">Press</Button>
      </div>
    </>
  );
};

export default HomePage;
