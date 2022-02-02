export interface User {
  id: number;
  username: string;
  email: string;
  firstname: string;
  lastname: string;
  fullname: string;
  enabled: boolean;
  role_id: number;
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
  title: string;
  description: string;
  manager_id: number;
}

export interface Time{
  date_start: string;
  date_end: string;
  user_id: number;
}
