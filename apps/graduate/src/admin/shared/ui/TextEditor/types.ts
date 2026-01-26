export interface TextEditorProps {
  title: string;
  value: string;
  onChange: (value: string) => void;
  onSave: () => void;
  isSaved?: boolean;
  onFocus?: () => void;
  className?: string;
}
