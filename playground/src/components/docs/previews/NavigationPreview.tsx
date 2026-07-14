"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Pagination,
  PaginationButton,
  PaginationContent,
  PaginationItem,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@luiggidiog/mew-ui";

export default function NavigationPreview({ name }: { name: string }) {
  switch (name) {
    case "Accordion":
      return (
        <Accordion type="single" collapsible>
          <AccordionItem value="1">
            <AccordionTrigger>Section</AccordionTrigger>
            <AccordionContent>Accordion content.</AccordionContent>
          </AccordionItem>
        </Accordion>
      );
    case "Breadcrumb":
      return (
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem><BreadcrumbLink href="#">Home</BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbPage>Page</BreadcrumbPage></BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      );
    case "Pagination":
      return (
        <Pagination>
          <PaginationContent>
            <PaginationItem><PaginationButton isActive>1</PaginationButton></PaginationItem>
            <PaginationItem><PaginationButton>2</PaginationButton></PaginationItem>
          </PaginationContent>
        </Pagination>
      );
    case "Tabs":
      return (
        <Tabs defaultValue="preview">
          <TabsList>
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>
          <TabsContent value="preview">Preview content</TabsContent>
          <TabsContent value="code">Code content</TabsContent>
        </Tabs>
      );
    default:
      return <p className="text-xs text-text-secondary">See usage snippet below.</p>;
  }
}
