"use client";

import { Doc } from "@/convex/_generated/dataModel";

interface ToolbarProps {
  initialData: Doc<"documents">;
  preview?: boolean;
}

export const Toolbar = ({ initialData }: ToolbarProps) => {
  return <div>Toolbar</div>;
};
