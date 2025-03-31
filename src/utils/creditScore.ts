export function calculateCreditHealth(score: number): {
  status: string;
  color: string;
  message: string;
} {
  if (score >= 750) {
    return {
      status: 'Excellent',
      color: 'text-green-600',
      message: 'Your credit score is excellent! Keep maintaining your good financial habits.',
    };
  }
  if (score >= 650) {
    return {
      status: 'Good',
      color: 'text-blue-600',
      message: 'Your credit score is good. There's room for improvement with consistent payments.',
    };
  }
  return {
    status: 'Needs Improvement',
    color: 'text-yellow-600',
    message: 'Your credit score needs attention. We'll help you improve it step by step.',
  };
}

export function calculateEMI(
  principal: number,
  rate: number,
  tenure: number
): { emi: number; totalInterest: number; totalAmount: number } {
  const monthlyRate = rate / 12 / 100;
  const emi =
    (principal * monthlyRate * Math.pow(1 + monthlyRate, tenure)) /
    (Math.pow(1 + monthlyRate, tenure) - 1);
  const totalAmount = emi * tenure;
  const totalInterest = totalAmount - principal;

  return {
    emi: Math.round(emi),
    totalInterest: Math.round(totalInterest),
    totalAmount: Math.round(totalAmount),
  };
}