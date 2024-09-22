import { HtmlHTMLAttributes, ReactNode, forwardRef } from "react";

interface IRoundedContainerProps extends HtmlHTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  ref?: React.RefObject<HTMLDivElement>;
  members: number;
  description: string;
}
// ! ---------------------------------------------- !//
// The forwardRef function is used when you
// want to forward a ref from a parent component
// to a child component that is implemented as
// a functional component.It allows you to pass
// the ref along so that it can be accessed
// and used on the underlying DOM element or child component
// ! ---------------------------------------------- !//
// * Since this component also can take refrence we have to forward that ref to the child container. If we fail to forward the ref we wont be able to access the div inside it.

const ReportCard = forwardRef<HTMLDivElement, IRoundedContainerProps>(
  ({ children, members, description, className, ...restProps }, ref) => {
    return (
      <div
        ref={ref}
        className={`rounded-xl flex justify-center gap-1 items-start flex-col  bg-white p-4   sm:w-fit sm:h-fit w-[11rem] border border-gray-300 transition-all duration-200 ${className}`}
        {...restProps}
      >
        <span className="text-orange-500 font-bold">{members}</span>
        <span className="text-slate-800 font-normal text-sm">
          {description}
        </span>
        {children}
      </div>
    );
  }
);

export default ReportCard;
