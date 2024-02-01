import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { ProfileSection } from "../../components/ProfileSection/ProfileSection";

export const Profile = () => {
  return (
    <React.Fragment>
      <Navbar />
      <ProfileSection />
    </React.Fragment>
  );
};
