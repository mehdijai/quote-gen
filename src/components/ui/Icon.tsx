import { cn } from "@/lib/utils";

export default function Icon({
  name,
  classNames,
}: {
  name: string;
  classNames?: string;
}) {
  return (
    <div>
      <div className={cn("icon-" + name, classNames ?? "")}></div>
    </div>
  );
}
