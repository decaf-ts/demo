export interface ModuleData {
  title: string;
  shortDescription?: string;
  description?: string;
  details: ModuleDataDetails[];
}

export interface ModuleDataDetails {
  title: string;
  description?: string;
}
