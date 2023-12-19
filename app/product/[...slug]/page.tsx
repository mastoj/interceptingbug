import Link from "next/link";
import React from "react";

type Props = {
  params: {
    slug: any;
  };
};

const Page = ({ params }: Props) => {
  const { slug } = params;
  const slugIsString = typeof slug === "string";
  return (
    <div className="flex flex-col gap-4">
      <div className={slugIsString ? "text-red-600" : ""}>
        Page: {JSON.stringify(slug)}
      </div>
      <Link href={`/stuff/11111111111`}>Click stuff ({11111111111})</Link>
    </div>
  );
};

export default Page;
