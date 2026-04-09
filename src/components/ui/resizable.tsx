import { GripVertical } from "lucide-react";
import {
  PanelGroup as ResizablePanelGroupPrimitive,
  Panel as ResizablePanelPrimitive,
  PanelResizeHandle as ResizableHandlePrimitive,
} from "react-resizable-panels";

import { cn } from "@/lib/utils";

const ResizablePanelGroup = ({
  className,
  ...props
}: React.ComponentProps<typeof ResizablePanelGroupPrimitive>) => (
  <ResizablePanelGroupPrimitive
    className={cn(
      "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
      className
    )}
    {...props}
  />
);

const ResizablePanel = ResizablePanelPrimitive;

const ResizableHandle = ({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof ResizableHandlePrimitive> & {
  withHandle?: boolean;
}) => (
  <ResizableHandlePrimitive
    className={cn(
      "relative flex w-px items-center justify-center bg-border",
      className
    )}
    {...props}
  >
    {withHandle && (
      <div className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border">
        <GripVertical className="h-2.5 w-2.5" />
      </div>
    )}
  </ResizableHandlePrimitive>
);

export { ResizablePanelGroup, ResizablePanel, ResizableHandle };