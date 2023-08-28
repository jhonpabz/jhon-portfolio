import { Separator } from './ui/separator';

export const Divider = ({ label }: ComponentsPropsNamespace.DividerProps) => {
  return (
    <div className="flex overflow-hidden py-4">
      {label} <Separator className="mt-3 ml-3" />
    </div>
  );
};
