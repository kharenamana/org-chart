import { getEmployeesHierarchy } from '@/services/employees.api';
import { useQuery } from '@tanstack/react-query';

export const useEmployees = () =>
  useQuery({
    queryKey: ['employees', 'hierarchy'],
    queryFn: getEmployeesHierarchy,
    staleTime: 5 * 60 * 1000,
  });
