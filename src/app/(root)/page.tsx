import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import InterviewCard from "@/components/InterviewCard";
import { getCurrentUser } from "@/lib/actions/auth.action";
import { getInterviewsByUserId, getLatestInterviews } from "@/lib/actions/general.action";
import Footer from "@/components/Footer";
const HomePage = async () => {
  const user = await getCurrentUser();

  const [userInterviews,latestInterviews] = await Promise.all([
    await getInterviewsByUserId(user?.id),
    await getLatestInterviews({userId:user?.id}),
  ])
  const hasPastInterviews = userInterviews?.length > 0;
  const hasUpcomingInterviews = latestInterviews?.length > 0;
  return (
    <>
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
          <p className="font-bold text-xl xl:text-3xl">Sharpen Your Interview Skills with AI-Powered Mock Sessions</p>
          <p className="text-sm md:text-md xl:text-xl">
            Tackle real-world questions and receive instant, actionable insights
          </p>

          <Button asChild className="btn-primary max-sm:w-full">
            <Link href="/interview">Begin Mock Interview</Link>
          </Button>
        </div>

        <Image
          src="/robot.png"
          alt="robo-dude"
          width={400}
          height={400}
          className="max-sm:hidden"
        />
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2>Your Interviews</h2>

        <div className="interviews-section">
          {hasPastInterviews ?  (userInterviews?.map((interview) => (
            <InterviewCard {...interview} key={interview.id} />
          ))) : <p>You haven&apos;t taken any interviews yet</p>}

        </div>
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2>Take an Interview</h2>

        <div className="interviews-section">
        {hasUpcomingInterviews ?  (latestInterviews?.map((interview) => (
            <InterviewCard {...interview} key={interview.id} />
          ))) : <h4>There are no new interviews available</h4>}
        </div>
      </section>

      <footer>
      <Footer />

      </footer>
    </>
  );
};

export default HomePage;
