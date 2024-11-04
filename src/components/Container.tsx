import React, { forwardRef } from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  (props, ref) => {
    return (
      <div
        ref={ref}
        className={`container p-6 mx-auto xl:px-0 ${
          props.className ? props.className : ""
        }`}
      >
        {props.children}
      </div>
    );
  }
);

Container.displayName = "Container";
