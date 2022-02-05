export interface User {
  id: number;
  username: string;
  email: string;
  firstname: string;
  lastname: string;
  fullname: string;
  enabled: boolean;
  role: Role;
  createdAt: string;
  manager : User;
  tokenSignature:string
}

export interface Role{
  id:number;
  label:string;
} 

export interface Ilogout{
  tokenSignature: string;
}

export interface Register{
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  managerId: number;
  roleId: number;
}

export interface ILogin{
  username: string;
  password: string
}

export interface ProjectEntity{
  id: number;
  description: string;
  title: string;
  manager: User;
}

export interface Project {
  title: string;
  description: string;
  manager_id: number;
}
export interface Time{
  id: number;
  dateEnd: Date,
  dateOfProject: string;
  dateStart: Date;
  project:ProjectEntity;
}
export interface TimeRequest{
  date_start: Date;
  date_end: Date;
  projectId: number;
}
