"use client";

import { Doc } from "@/convex/_generated/dataModel";

interface ToolbarProps {
  initialData: Doc<"documents">;
  preview?: boolean;
}

export const Toolbar = ({ initialData, preview }: ToolbarProps) => {
  return <div className="pl-[54px] group relative">
    {!!initialData.icon && !preview && (
      <div className="flex items-center gap-x-2 group/icon pt-6"></div>
    )}
  </div>;
};
