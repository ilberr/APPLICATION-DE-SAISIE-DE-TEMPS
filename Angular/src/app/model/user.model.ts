export interface User {
  id: number;
  username: string;
  email: string;
  firstname: string;
  lastname: string;
  fullname: string;
  enabled: boolean;
  role: {
    id:number;
    label:string;
  };
  createdAt: string;
  manager_id: number;
}

export interface Role{
  id:number;
  label:string;
} 

export interface Register{
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  roleId: number;
}

export interface Login{
  username: string;
  password: string
}

export interface Project {
  id: number;
  title: string;
  description: string;
  manager_id: number;
}

export interface Time{
  id: number;
  date_start: Date;
  date_end: Date;
  date_of_project: string;
  project_id: number;
  user_id: number;
}
