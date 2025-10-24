export interface Language {
  id: string;
  name: string;
  extension: string;
  icon: string;
  template: string;
}

export interface SavedSnippet {
  id: string;
  title: string;
  language: string;
  code: string;
  created_at: string;
  user_id?: string;
}
