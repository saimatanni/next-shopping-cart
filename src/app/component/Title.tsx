import { cn } from "../lib/Utils";

type Props = {
  title: string,
  className?: string,
};
const Title = ({ title, className }: Props) => {
  return <h2 className={cn(' text-3xl font-semibold pb-3  border-b-zinc-500 border-b-[1px]', className)}>Title</h2>;
};

export default Title;
