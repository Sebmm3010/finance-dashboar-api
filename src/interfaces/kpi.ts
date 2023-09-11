export interface IKpi {
  totalProfit: string;
  totalRevenue: string;
  totalExpenses: string;
  monthlyData: IMontlyData[];
  dailyData: IDailyData[];
}

export interface IMontlyData {
  month: string;
  revenue: string;
  expenses: string;
  operationalExpenses: string;
  nonOperationalExpenses: string;
}

export interface IDailyData {
  date: string;
  revenue: string;
  expenses: string;
}
