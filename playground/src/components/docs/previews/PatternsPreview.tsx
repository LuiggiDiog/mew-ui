"use client";

import { Button, Card, DashboardGrid, Input, LoginCard, SettingsLayout } from "@luiggidiog/mew-ui";

export default function PatternsPreview({ name }: { name: string }) {
  switch (name) {
    case "DashboardGrid": return <DashboardGrid columns={3}><Card>One</Card><Card>Two</Card><Card>Three</Card></DashboardGrid>;
    case "SettingsLayout": return <SettingsLayout title="Settings" items={[{ label: "Profile", href: "#", active: true }, { label: "Billing", href: "#" }]}><Card>Settings content</Card></SettingsLayout>;
    case "LoginCard": return <LoginCard title="Sign in" description="Access your workspace"><Input placeholder="Email" /><Button className="w-full">Continue</Button></LoginCard>;
    default: return <p className="m-0 text-xs text-text-secondary">See usage snippet below.</p>;
  }
}
