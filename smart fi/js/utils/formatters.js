// FINWISE - Number, Currency and Financial Health Calculation Helpers

/**
 * Format numbers in Indian numbering system: ₹1,50,000 or ₹15.5 Lakhs
 */
function formatINR(val, compact = false) {
  if (val === null || val === undefined || isNaN(val)) return "₹0";
  const num = Math.round(Number(val));
  
  if (compact) {
    if (Math.abs(num) >= 10000000) {
      return `₹${(num / 10000000).toFixed(2)} Cr`;
    }
    if (Math.abs(num) >= 100000) {
      return `₹${(num / 100000).toFixed(2)} L`;
    }
    if (Math.abs(num) >= 1000) {
      return `₹${(num / 1000).toFixed(1)}k`;
    }
  }

  // Standard Indian comma separator: 12,34,567
  const isNegative = num < 0;
  const absStr = Math.abs(num).toString();
  
  let lastThree = absStr.substring(absStr.length - 3);
  const otherNumbers = absStr.substring(0, absStr.length - 3);
  if (otherNumbers !== '') {
    lastThree = ',' + lastThree;
  }
  const res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
  return `${isNegative ? '-' : ''}₹${res}`;
}

/**
 * Calculates Financial Health Score (0 - 100) based on Indian financial norms
 */
function calculateHealthScore(monthlyIncome, monthlyExpenses, monthlySavings, emergencyBufferMonths = 4) {
  if (!monthlyIncome || monthlyIncome <= 0) {
    return {
      score: 50,
      grade: "Neutral",
      color: "#F59E0B",
      status: "Initial Assessment",
      breakdown: []
    };
  }

  const savingsRate = (monthlySavings / monthlyIncome) * 100;
  const expenseRatio = (monthlyExpenses / monthlyIncome) * 100;

  // 1. Savings Rate Score (Max 35 points)
  // 20% or more gets full 35 points
  let savingsScore = 0;
  if (savingsRate >= 25) savingsScore = 35;
  else if (savingsRate >= 20) savingsScore = 30;
  else if (savingsRate >= 15) savingsScore = 22;
  else if (savingsRate >= 10) savingsScore = 15;
  else if (savingsRate > 0) savingsScore = 8;

  // 2. Expense Discipline (Max 35 points)
  // Under 70% gets full 35 points
  let expenseScore = 0;
  if (expenseRatio <= 60) expenseScore = 35;
  else if (expenseRatio <= 70) expenseScore = 30;
  else if (expenseRatio <= 80) expenseScore = 22;
  else if (expenseRatio <= 90) expenseScore = 12;
  else expenseScore = 5;

  // 3. Emergency Safety Buffer (Max 20 points)
  let emergencyScore = 0;
  if (emergencyBufferMonths >= 6) emergencyScore = 20;
  else if (emergencyBufferMonths >= 3) emergencyScore = 15;
  else if (emergencyBufferMonths >= 1) emergencyScore = 10;
  else emergencyScore = 4;

  // 4. Financial Literacy Base (10 points)
  const literacyBase = 10;

  const totalScore = Math.min(100, Math.round(savingsScore + expenseScore + emergencyScore + literacyBase));

  let grade = "Needs Attention";
  let color = "#EF4444";
  let badge = "High Risk";
  let advice = "Your expenses are high relative to income. Focus on cutting discretionary wants.";

  if (totalScore >= 80) {
    grade = "Excellent";
    color = "#00F5A0";
    badge = "Wealth Builder";
    advice = "Outstanding financial control! You are on track for accelerated wealth creation.";
  } else if (totalScore >= 70) {
    grade = "Strong";
    color = "#10B981";
    badge = "Financially Resilient";
    advice = "Healthy budget discipline. Try stepping up monthly SIP by 5-10%.";
  } else if (totalScore >= 55) {
    grade = "Moderate";
    color = "#F59E0B";
    badge = "Balanced";
    advice = "Stable, but your emergency buffer could be bolstered to protect against shocks.";
  }

  return {
    score: totalScore,
    grade,
    color,
    badge,
    advice,
    metrics: {
      savingsRate: savingsRate.toFixed(1),
      expenseRatio: expenseRatio.toFixed(1),
      emergencyBuffer: `${emergencyBufferMonths} Months`
    },
    breakdown: [
      { label: "Savings Efficiency", score: savingsScore, max: 35, pct: Math.round((savingsScore / 35) * 100) },
      { label: "Expense Discipline", score: expenseScore, max: 35, pct: Math.round((expenseScore / 35) * 100) },
      { label: "Emergency Cushion", score: emergencyScore, max: 20, pct: Math.round((emergencyScore / 20) * 100) },
      { label: "Planning Habits", score: literacyBase, max: 10, pct: 100 }
    ]
  };
}

/**
 * Compound Interest / SIP Future Value Calculator
 * P = monthly investment, r = annual interest rate (e.g. 12), n = years
 */
function calculateSIP(monthlyInvestment, annualRatePercent, years) {
  const i = (annualRatePercent / 100) / 12; // Monthly rate
  const n = years * 12; // Total months
  const totalInvested = monthlyInvestment * n;
  
  // Future Value of SIP = P * [ ((1 + i)^n - 1) / i ] * (1 + i)
  const futureValue = monthlyInvestment * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
  const estimatedReturns = futureValue - totalInvested;

  return {
    totalInvested: Math.round(totalInvested),
    futureValue: Math.round(futureValue),
    estimatedReturns: Math.round(estimatedReturns),
    wealthMultiplier: (futureValue / (totalInvested || 1)).toFixed(2)
  };
}

/**
 * Calculate Monthly Target required to reach a goal
 */
function calculateRequiredMonthly(targetAmount, currentAmount, targetDateStr) {
  const target = new Date(targetDateStr);
  const now = new Date();
  
  let months = (target.getFullYear() - now.getFullYear()) * 12 + (target.getMonth() - now.getMonth());
  if (months <= 0) months = 1;
  
  const remaining = Math.max(0, targetAmount - currentAmount);
  return {
    monthsLeft: months,
    remainingAmount: remaining,
    suggestedMonthly: Math.ceil(remaining / months)
  };
}
