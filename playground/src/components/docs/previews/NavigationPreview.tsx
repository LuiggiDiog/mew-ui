"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator, Pagination, PaginationButton, PaginationContent, PaginationItem, PaginationNext, PaginationPrevious, Stepper, Tabs, TabsContent, TabsList, TabsTrigger } from "@luiggidiog/mew-ui";

export default function NavigationPreview({ name }: { name: string }) {
  switch (name) {
    case "Accordion": return <Accordion type="single" collapsible><AccordionItem value="one"><AccordionTrigger>Section</AccordionTrigger><AccordionContent>Content</AccordionContent></AccordionItem></Accordion>;
    case "Tabs": return <Tabs defaultValue="preview"><TabsList><TabsTrigger value="preview">Preview</TabsTrigger><TabsTrigger value="code">Code</TabsTrigger></TabsList><TabsContent value="preview">Panel</TabsContent></Tabs>;
    case "Breadcrumb": return <Breadcrumb><BreadcrumbList><BreadcrumbItem><BreadcrumbLink href="#">Home</BreadcrumbLink></BreadcrumbItem><BreadcrumbSeparator /><BreadcrumbItem><BreadcrumbPage>Page</BreadcrumbPage></BreadcrumbItem></BreadcrumbList></Breadcrumb>;
    case "Pagination": return <Pagination><PaginationContent><PaginationItem><PaginationPrevious /></PaginationItem><PaginationItem><PaginationButton isActive>1</PaginationButton></PaginationItem><PaginationItem><PaginationNext /></PaginationItem></PaginationContent></Pagination>;
    case "Stepper": return <Stepper currentStep={1} steps={[{ label: "Account" }, { label: "Profile" }, { label: "Done" }]} />;
    default: return <p className="m-0 text-xs text-text-secondary">See usage snippet below.</p>;
  }
}
