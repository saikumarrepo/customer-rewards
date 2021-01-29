export const transactionColumns = [
  {
    name: 'Customer Id',
    selector: 'custId',
  },
  {
    name: 'Date',
    selector: 'date',
  },
  {
    name: 'Amount',
    selector: 'amount',
  },
  {
    name: 'Points',
    selector: 'points',
  },
];

export const monthColumns = [
  {
    name: 'Customer',
    selector: 'name',
  },
  {
    name: 'Month',
    selector: 'month',
  },
  {
    name: 'Amount',
    selector: 'amount',
  },
  {
    name: 'Points',
    selector: 'points',
  },
];

const months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];

function calculatePoints(amount) {
  let points = 0;
  
  if(amount > 50 && amount <= 100) {
    points += amount - 50;
  }

  if(amount > 100) {
    points += ((amount - 100) * 2) + 50;
  }

  return points;
}

function transformTransactionData(data) {
  return data.map((transaction) => {
    const { amount, date } = transaction;

    const _date = new Date(date);
    const monthName = months[_date.getMonth()];

    return {
      ...transaction, 
      points: calculatePoints(amount),
      date: date,
      month: monthName,
    };
  });
}

function getTransactionDataByMonth(data) {
  return data.reduce((acc, transaction) => {
    const {custId, month, amount, points} = transaction;

    if(!acc[custId]) {
      acc[custId] = {};
    }

    if(!acc[custId][month]) {
      acc[custId][month] = { ...transaction, children: [{ ...transaction }] };
    } else {
      acc[custId][month]['amount'] += amount;
      acc[custId][month]['points'] += points;
      acc[custId][month]['children'].push({ ...transaction });
    }

    return acc;
  }, {});
}

function getTransactionDataByCustomer(data) {
  return data.reduce((acc, transaction) => {
    const {custId, amount, points} = transaction;

    if(!acc[custId]) {
      acc[custId] = { ...transaction, children: [{ ...transaction }] };
    } else {
      acc[custId]['amount'] += amount;
      acc[custId]['points'] += points;
      acc[custId]['children'].push({ ...transaction });
    }

    return acc;
  }, {});
}

export function calculateRewardsData(transactionsData) {
  const pointsPerTransaction = transformTransactionData(transactionsData);

  const pointsPerCustomerByMonth = getTransactionDataByMonth(pointsPerTransaction);
  const pointsPerCustomerByMonthArray = Object.values(pointsPerCustomerByMonth).map(Object.values).flat();

  const pointsPerCustomerByName = getTransactionDataByCustomer(pointsPerTransaction);
  const pointsPerCustomerByNameArray = Object.values(pointsPerCustomerByName)

  return { 
    pointsPerCustomerByMonth: pointsPerCustomerByMonthArray,
    pointsPerCustomerByName: pointsPerCustomerByNameArray,
  };
}