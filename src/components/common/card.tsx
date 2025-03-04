import { cn } from "@/lib/utils";

const CardBody = ({
  className = "p-4",
  title,
  description,
}: {
  className?: string;
  title: string;
  description: string;
}) => (
  <div className={cn("text-left", className)}>
    <h3 className="text-4xl lg:text-6xl font-black mb-2 text-current">
      {title}
    </h3>
    <p className="text-current/80 text-xl lg:text-2xl">{description}</p>
  </div>
);
export const Card = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div>
      <div className="border-[0.5px] rounded-lg border-zinc-400 relative shadow-[4px_4px_0px_0px_rgba(0,0,0)] ">
        <CardBody title={title} description={description} className="p-6" />
      </div>
    </div>
  );
};
