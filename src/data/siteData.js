import { Blocks, Cable, ChartNoAxesCombined, CloudCog, CodeXml, DatabaseZap, Headphones, LayoutDashboard, Settings2, Sparkles, UsersRound, Workflow } from 'lucide-react';

export const services = [
  { icon: CloudCog, title: 'Salesforce Consulting', text: 'Turn business goals into a practical platform roadmap, architecture, and adoption plan.' },
  { icon: Blocks, title: 'Implementation', text: 'Launch a clean, scalable Salesforce org shaped around the way your teams actually work.' },
  { icon: Settings2, title: 'Customization', text: 'Configure objects, permissions, workflows, and experiences without adding needless complexity.' },
  { icon: CodeXml, title: 'Custom Development', text: 'Build reliable Apex, Lightning Web Components, and purpose-made business applications.' },
  { icon: Cable, title: 'Integrations', text: 'Connect Salesforce to the tools and data your teams depend on through secure APIs.' },
  { icon: UsersRound, title: 'All Salesforce Clouds', text: 'Connect sales, service, marketing, commerce, data, and operations on a Salesforce platform built around your business.' },
  { icon: Workflow, title: 'Process Automation', text: 'Remove repetitive work with maintainable flows, approvals, notifications, and intelligent routing.' },
  { icon: DatabaseZap, title: 'Data Migration', text: 'Clean, map, validate, and move business-critical data with confidence and traceability.' },
  { icon: Headphones, title: 'Support & Maintenance', text: 'Keep your platform healthy, secure, and improving through responsive ongoing support.' },
];

export const solutions = [
  { icon: ChartNoAxesCombined, tag: 'Revenue operations', title: 'A clearer path from lead to revenue', text: 'Lead capture, assignment, pipeline stages, forecasting, approvals, and dashboards in one connected flow.', impact: 'Better visibility. Less admin.' },
  { icon: LayoutDashboard, tag: 'Customer service', title: 'Service that feels personal at scale', text: 'Case routing, service workflows, knowledge access, and performance reporting designed around your support team.', impact: 'Faster, more consistent support.' },
  { icon: Sparkles, tag: 'Custom platform', title: 'Apps that fit your operating model', text: 'Lightning experiences, portals, forms, and integrations that extend Salesforce around your unique processes.', impact: 'Built for the way you work.' },
];

// Verified on the legacy CloudInfy website. Replace monograms with supplied logo files when available.
export const clients = [
  { name: 'Clarity Consulting Group', logo: 'clarity' },
  { name: 'iTech Software Solutions', logo: 'itech' },
  { name: 'Vymo', logo: 'vymo' },
  { name: 'WOW Detailing Studio', logo: 'wow' },
];

// Placeholder copy: replace with approved customer quotes before publishing as testimonials.
export const testimonials = [
  { quote: 'CloudInfy created a website that represents our detailing brand with the quality and confidence we want every customer to experience. They also built Salesforce solutions that give us a clearer way to manage enquiries, follow-ups, and customer relationships. The whole experience was professional, responsive, and genuinely focused on helping WOW Detailing Studio grow.', name: 'Achyut Kishor', role: 'Founder, WOW Detailing Studio' },
  { quote: 'The team stayed close to the business outcome—not just the technical build—and communicated clearly from start to finish.', name: 'Sample client quote', role: 'Technology leader' },
];
