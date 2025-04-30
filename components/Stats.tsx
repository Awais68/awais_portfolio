"use client";
import CountUp from "react-countup";

const stats = [
  {
    num: 10,
    text: "Years of tutor experience",
  },
  {
    num: 50,
    text: "Projects",
  },
  {
    num: 6,
    text: "Month of intership",
  },
  {
    num: 278,
    text: "Code commits",
  },
];
const Stats = () => {
  return (
    <section className="pb-12 pt-4 xl:pb-0 xl:pt-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex justify-center items-center gap-4 xl:justify-start"
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <p
                  className={`${
                    item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-white/80`}
                >
                  {item.text}{" "}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
