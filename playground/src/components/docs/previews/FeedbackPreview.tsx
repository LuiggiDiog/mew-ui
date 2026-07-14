"use client";

import { Alert, AlertDescription, AlertTitle, Badge, Banner, Button, Callout, EmptyState, ErrorState, LoadingState, MewEmptyState, Progress, Skeleton, Spinner, StatusDot, toast } from "@luiggidiog/mew-ui";

export default function FeedbackPreview({ name }: { name: string }) {
  switch (name) {
    case "Alert": return <Alert><AlertTitle>Heads up</AlertTitle><AlertDescription>Review this before continuing.</AlertDescription></Alert>;
    case "Badge": return <Badge variant="success">Connected</Badge>;
    case "Banner": return <Banner title="Beta" description="This page is improving." action={<Button size="sm" variant="outline">Learn</Button>} />;
    case "Callout": return <Callout title="Tip">Use one dominant action per section.</Callout>;
    case "EmptyState": return <EmptyState title="No projects" description="Create one to start." />;
    case "ErrorState": return <ErrorState title="Could not load" action={<Button size="sm">Retry</Button>} />;
    case "LoadingState": return <LoadingState description="Fetching projects" />;
    case "MewEmptyState": return <MewEmptyState title="No yarn balls" description="A tiny cat wink, still useful." />;
    case "Progress": return <Progress value={64} />;
    case "StatusDot": return <StatusDot status="success" label="Online" />;
    case "Toast": return <Button size="sm" onClick={() => toast({ title: "Saved", variant: "success" })}>Show toast</Button>;
    case "Loading primitives": return <div className="flex items-center gap-3"><Skeleton width={100} height={12} /><Spinner size="sm" /></div>;
    default: return <p className="m-0 text-xs text-text-secondary">See usage snippet below.</p>;
  }
}
