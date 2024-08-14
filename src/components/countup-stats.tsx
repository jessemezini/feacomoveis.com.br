"use client";
import CountUp from "react-countup";

export default function CountUpStats() {
  return (
    <div className="prose prose-h2:mb-1 flex justify-center gap-10 mx-auto">
      <div>
        <h2>
          +<CountUp end={200} duration={5} />
        </h2>
        <p>Projetos entregues</p>
      </div>
      <div>
        <h2>
          +<CountUp end={13} duration={5} />
        </h2>
        <p>Desde 2011</p>
      </div>
    </div>
  );
}
