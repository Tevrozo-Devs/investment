"use client";
import { Button } from "@/shared/components/ui/button";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useRouter } from "next/navigation";

const solutionsData = [
  {
    solution: "Asset Classes",
    description:
      "Explore various asset classes including equities, fixed income, real estate, and alternative investments to diversify your portfolio and maximize returns.",
    icon: "mdi:finance",
  },
  {
    solution: "Clients",
    description:
      "Providing tailored investment solutions for individual investors, institutions, and private clients with customized strategies that align with their financial goals.",
    icon: "fluent:people-community-24-filled",
  },
  // {
  //   solution: "Insights",
  //   description:
  //     "Stay informed with expert market analysis, investment insights, and financial reports to help you make well-informed decisions.",
  //   icon: "carbon:chart-line-data",
  // },
  // {
  //   solution: "Resources",
  //   description:
  //     "Access a wide range of resources including educational materials, research reports, and financial tools to support your investment journey.",
  //   icon: "carbon:document",
  // },
];

export default function SolutionsPage() {
  const router = useRouter();
  return (
    <div className=" p-4 mx-auto max-w-screen-2xl md:p-10">
      <section className=" max-w-screen-lg mb-6">
        <h1 className=" text-3xl lg:text-6xl font-bold mb-3">
          Our Investment Solutions
        </h1>
        <p>
          Discover a comprehensive range of investment solutions tailored to
          meet your financial goals. From diverse asset classes to insightful
          market analysis and specialized investment themes, we provide the
          tools and resources to help you make informed decisions and achieve
          sustainable growth. Explore how we can help you build a resilient and
          future-ready investment strategy.
        </p>
      </section>
      <section className=" ">
        <section className=" grid lg:grid-cols-2  py-6 gap-4">
          {solutionsData.map((item) => (
            <article
              key={item.solution}
              className=" bg-neutral-950 border-neutral-900 border relative z-10  "
            >
              <div className=" p-6">
                <div className=" p-5 mb-4 bg-stone-200 w-fit rounded-full">
                  <Icon
                    icon={item.icon}
                    className=" w-12 h-12 text-secondary"
                  />
                </div>
                <h3 className=" font-bold text-2xl mb-3">{item.solution}</h3>
                <p className=" text-neutral-50 line-clamp-2">
                  {item.description}
                </p>
              </div>
              <Button
                onClick={() =>
                  router.push(
                    `/solutions/${item.solution
                      .replaceAll(" ", "-")
                      .toLowerCase()}`
                  )
                }
                className=" w-full bg-white text-black hover:opacity-80 line-clamp-1 flex text-sm  md:text-base justify-start "
              >
                <Icon icon={"solar:alt-arrow-right-linear"} className=" " />
                Learn More about {item.solution}
              </Button>
            </article>
          ))}
        </section>
      </section>
    </div>
  );
}
