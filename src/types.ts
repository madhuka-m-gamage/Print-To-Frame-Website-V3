export type Page =
  'home' | 'process' | 'capabilities' | 'pipeline' | 'contact' | 'privacy' | 'terms';

export interface PipelineStep {
  act: string;
  title: string;
  description: string;
  role?: string;
  icon: string;
  displayNum?: string;
}

export interface CapabilityItem {
  id: string;
  title: string;
  description: string;
  material: string;
  maxSize: string;
  fixingMethod: string;
  icon: string;
  tag: string;
  imageUrl: string;
}
