import { Separator } from './ui/separator';

export const Divider = ({ label }: ComponentsPropsNamespace.DividerProps) => {
  return (
    <div className="flex overflow-hidden py-4">
      <span className="shrink-0 whitespace-nowrap">{label}</span>
      <Separator className="mt-3 ml-3 flex-1" />
    </div>
  );
};
