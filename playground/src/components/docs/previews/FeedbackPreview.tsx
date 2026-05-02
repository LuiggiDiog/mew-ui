"use client";

import {
  Alert,
  AlertDescription,
  AlertTitle,
  Badge,
  EmptyState,
  Progress,
  Skeleton,
  Spinner,
  Toaster,
  toast,
  Button,
} from "@mew/ui";

export default function FeedbackPreview({ name }: { name: string }) {
  switch (name) {
    case "Alert":
      return (
        <Alert variant="info">
          <AlertTitle>Informational</AlertTitle>
          <AlertDescription>Subtle status message.</AlertDescription>
        </Alert>
      );
    case "Badge":
      return <Badge variant="success">Success</Badge>;
    case "EmptyState":
      return <EmptyState title="No data" description="Try creating a new record." />;
    case "Progress":
      return <Progress value={64} />;
    case "Skeleton":
      return <Skeleton width="100%" height={12} variant="shimmer" />;
    case "Spinner":
      return <Spinner />;
    case "Toaster":
    case "Toast":
      return (
        <div className="flex items-center gap-2">
          <Toaster />
          <Button
            size="sm"
            variant="outline"
            onClick={() => toast({ title: "Saved", description: "Changes saved.", variant: "success" })}
          >
            Show toast
          </Button>
        </div>
      );
    default:
      return <p className="text-xs text-text-secondary">See usage snippet below.</p>;
  }
}
