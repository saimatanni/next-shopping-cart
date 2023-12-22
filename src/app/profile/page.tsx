import React from "react";
import Container from "../component/Container";
import ProfileInfo from "../component/ProfileInfo";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await getServerSession();
  if (!session || !session.user) {
    redirect(`/`);
  }
  return (
    <Container className="text-xl font-semibold pb-10 underline underline-offset-4 decoration-[1px]">
      <p>Profile information</p>
      <ProfileInfo />
    </Container>
  );
};

export default page;
