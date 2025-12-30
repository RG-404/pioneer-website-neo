import Link from "next/link";

const Software = () => {
  return (
    <div className="min-h-screen pt-30 px-12 pb-20">
      <h1 className="mb-8 text-2xl">Softwares</h1>

      <div className="gap-8 grid grid-cols-1">
        {/* Pioneer Regis Labs */}
        <Link href={"/software/labs"}>
          <div className="w-full bg-gradient-to-r from-purple-800 to-purple-700 rounded-4xl flex flex-col justify-center px-12 space-y-4 py-8">
            <p className="text-white/30 text-xs">PREVIEW</p>
            <div className="text-white text-xl">Pioneer Regis® Labs</div>
            <p className="text-sm text-white/40 hidden lg:inline-block">
              Our Laboratory Information System (LIS) is a powerful, end-to-end
              digital platform designed to streamline operations, eliminate
              manual errors, and accelerate diagnostic workflows for modern
              diagnostic centres. Built for accuracy, speed, and scalability, it
              empowers labs to deliver faster results, improve patient
              satisfaction, and operate with complete regulatory confidence.
            </p>
          </div>
        </Link>

        {/* HealthOS */}
        <Link href={"#"}>
          <div className="w-full bg-gradient-to-r from-neutral-800 to-neutral-700 rounded-4xl flex flex-col justify-center px-12 space-y-3 py-8">
            <p className="text-white/30 text-xs">COMING SOON</p>
            <div className="text-white text-xl">HealthOS</div>
            <p className="text-sm text-white/40 hidden lg:inline-block">
              A unified operating system for healthcare organizations—bringing
              patients, providers, data, and workflows together in one secure,
              intelligent platform.
            </p>
          </div>
        </Link>

        {/* Accounts */}
        <Link href={"#"}>
          {" "}
          <div className="w-full bg-gradient-to-r from-neutral-800 to-neutral-700 rounded-4xl flex flex-col justify-center px-12 space-y-3 py-8">
            <p className="text-white/30 text-xs">COMING SOON</p>
            <div className="text-white text-xl">Accounts</div>
            <p className="text-sm text-white/40 hidden lg:inline-block">
              A modern financial and accounting suite built for healthcare and
              enterprise operations—designed for clarity, compliance, and
              control.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Software;
