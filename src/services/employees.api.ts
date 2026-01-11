// import { Employee } from '@/types/employee';
// import { api } from './axios';

// export const getEmployeesHierarchy = async (): Promise<Employee[]> => {
//   const { data } = await api.get('/employees/hierarchy');
//   return data;
// };

import { Employee } from '@/types/employee';

export async function getEmployeesHierarchy(): Promise<Employee[]> {
  return [
    {
      id: '1',
      name: 'Laura Castillo',
      title: 'Sales Manager',
      department: 'Sales',
      managerId: null,
    },
    {
      id: '2',
      name: 'Javier Luna',
      title: 'Account Executive',
      department: 'Sales',
      managerId: '1',
    },
    {
      id: '3',
      name: 'Tomás Reyes',
      title: 'Sales Intern',
      department: 'Sales',
      managerId: '1',
    },
  ];
}
