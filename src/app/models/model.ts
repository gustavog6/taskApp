export interface Task {
  id: string;
  title: string;
  description: string;
  start: string;
  status: 'pending' | 'in progress' | 'done';
}
