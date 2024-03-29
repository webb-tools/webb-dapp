import { Payout } from '../../types';

export interface PayoutTableProps {
  data?: Payout[];
  pageSize: number;
  updateData: (data: Payout[]) => void;
}
