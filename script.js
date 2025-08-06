// Mock Data for Stripe-style Dashboard
const mockData = {
    today: {
        grossVolume: 1847.50,
        revenue: 1.01,
        usdBalance: -71587.97,
        debits: 41.60
    },
    
    overviewTotals: {
        totalRevenue: 85200,
        subscriptionRevenue: 54500,
        usageRevenue: 30700
    },
    
    todayChartData: {
        labels: ['12:00 CST', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00'],
        datasets: [{
            label: 'Volume',
            data: [0.5, 0.8, 1.2, 1.01, 0.9, null, null, null],
            borderColor: '#6366f1',
            backgroundColor: 'rgba(99, 102, 241, 0.1)',
            fill: false, 
            tension: 0.4,
            borderWidth: 2,
            pointRadius: 0,
            pointHoverRadius: 4
        }]
    },
    
    totalRevenueChartData: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Total Revenue',
            data: [4200, 5100, 4800, 6200, 7100, 6800, 7900, 8400, 7600, 8100, 8800, 9200],
            borderColor: '#635bff',
            backgroundColor: 'rgba(99, 91, 255, 0.1)',
            fill: false,
            tension: 0.4,
            borderWidth: 2,
            pointRadius: 0,
            pointHoverRadius: 0
        }]
    },

    totalRevenueGrowthChartData: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Total Revenue Growth (%)',
            data: [0, 21.4, -5.9, 29.2, 14.5, -4.2, 16.2, 6.3, -9.5, 6.6, 8.6, 4.5],
            borderColor: '#635bff',
            backgroundColor: 'rgba(99, 91, 255, 0.1)',
            fill: false,
            tension: 0.4,
            borderWidth: 2,
            pointRadius: 0,
            pointHoverRadius: 0
        }]
    },

    subscriptionRevenueChartData: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Subscription Revenue',
            data: [2800, 3200, 3100, 3900, 4500, 4200, 5100, 5600, 5200, 5400, 5900, 6300],
            borderColor: '#635bff',
            backgroundColor: 'rgba(99, 91, 255, 0.1)',
            fill: false,
            tension: 0.4,
            borderWidth: 2,
            pointRadius: 0,
            pointHoverRadius: 0
        }]
    },

    usageRevenueChartData: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Usage Revenue',
            data: [1400, 1900, 1700, 2300, 2600, 2600, 2800, 2800, 2400, 2700, 2900, 2900],
            borderColor: '#635bff',
            backgroundColor: 'rgba(99, 91, 255, 0.1)',
            fill: false,
            tension: 0.4,
            borderWidth: 2,
            pointRadius: 0,
            pointHoverRadius: 0
        }]
    },

    // Subscription overview page specific charts
    subscriptionRevenueBarChartData: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Subscription Revenue',
            data: [2800, 3200, 3100, 3900, 4500, 4200, 5100, 5600, 5200, 5400, 5900, 6300],
            backgroundColor: '#9966FF',
            borderColor: '#9966FF',
            borderWidth: 1
        }]
    },

    // Invoice revenue bar chart data (combines subscription + meter revenue)
    invoiceRevenueBarChartData: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Invoice Revenue',
            data: [4200, 4800, 4600, 5700, 6500, 6100, 7300, 7900, 7400, 7600, 8200, 8700],
            backgroundColor: '#9966FF',
            borderColor: '#9966FF',
            borderWidth: 1
        }]
    },

    // Invoice revenue growth chart data (calculated from invoice revenue data)
    invoiceRevenueGrowthChartData: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Invoice Revenue Growth (%)',
            data: [0, 14.3, -4.2, 23.9, 14.0, -6.2, 19.7, 8.2, -6.3, 2.7, 7.9, 6.1],
            borderColor: '#9966FF',
            backgroundColor: 'rgba(153, 102, 255, 0.1)',
            fill: false,
            tension: 0.4,
            borderWidth: 2,
            pointRadius: 0,
            pointHoverRadius: 4
        }]
    },

    // Meter revenue bar chart data (from homepage meter data)
    meterRevenueBarChartData: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Meter Revenue',
            data: [1400, 1900, 1700, 2300, 2600, 2600, 2800, 2800, 2400, 2700, 2900, 2900],
            backgroundColor: '#9966FF',
            borderColor: '#9966FF',
            borderWidth: 1
        }]
    },

    // Meter revenue growth chart data (calculated from meter revenue data)
    meterRevenueGrowthChartData: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Meter Revenue Growth (%)',
            data: [0, 35.7, -10.5, 35.3, 13.0, 0.0, 7.7, 0.0, -14.3, 12.5, 7.4, 0.0],
            borderColor: '#9966FF',
            backgroundColor: 'rgba(153, 102, 255, 0.1)',
            fill: false,
            tension: 0.4,
            borderWidth: 2,
            pointRadius: 0,
            pointHoverRadius: 4
        }]
    },

    subscriptionGrowthChartData: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Growth Rate (%)',
            data: [8.5, 14.3, -3.1, 25.8, 15.4, -6.7, 21.4, 9.8, -7.1, 3.8, 9.3, 6.8],
            borderColor: '#9966FF',
            backgroundColor: 'rgba(153, 102, 255, 0.1)',
            fill: false,
            tension: 0.4,
            borderWidth: 2,
            pointRadius: 0,
            pointHoverRadius: 0
        }]
    },

    // Subscriber charts data
    activeSubscribersChartData: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Active Subscribers',
            data: [9800, 10150, 10500, 10900, 11250, 11600, 11950, 12100, 12200, 12300, 12350, 12450],
            borderColor: '#9966FF',
            backgroundColor: 'rgba(153, 102, 255, 0.1)',
            fill: false,
            tension: 0.4,
            borderWidth: 2,
            pointRadius: 0,
            pointHoverRadius: 0
        }]
    },

    activeSubscribersGrowthChartData: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Growth Rate (%)',
            data: [5.2, 3.6, 3.4, 3.8, 3.2, 3.1, 3.0, 1.3, 0.8, 0.8, 0.4, 0.8],
            borderColor: '#9966FF',
            backgroundColor: 'rgba(153, 102, 255, 0.1)',
            fill: false,
            tension: 0.4,
            borderWidth: 2,
            pointRadius: 0,
            pointHoverRadius: 0
        }]
    },

    newSubscribersChartData: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'New Subscribers',
            data: [850, 920, 1100, 980, 1050, 1150, 1200, 1180, 1250, 1320, 1280, 1234],
            borderColor: '#9966FF',
            backgroundColor: 'rgba(153, 102, 255, 0.1)',
            fill: false,
            tension: 0.4,
            borderWidth: 2,
            pointRadius: 0,
            pointHoverRadius: 0
        }]
    },

    churnedSubscribersChartData: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Churned Subscribers',
            data: [120, 145, 135, 165, 158, 142, 138, 152, 148, 139, 142, 156],
            borderColor: '#9966FF',
            backgroundColor: 'rgba(153, 102, 255, 0.1)',
            fill: false,
            tension: 0.4,
            borderWidth: 2,
            pointRadius: 0,
            pointHoverRadius: 0
        }]
    },

    // Trial-specific chart data
    newTrialsChartData: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'New Trials',
            data: [2650, 2420, 2890, 3150, 2980, 3240, 3180, 2890, 2650, 2780, 2520, 2847],
            borderColor: '#9966FF',
            backgroundColor: 'rgba(153, 102, 255, 0.1)',
            fill: false,
            tension: 0.4,
            borderWidth: 2,
            pointRadius: 0,
            pointHoverRadius: 0
        }]
    },

    trialConversionRateChartData: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Trial Conversion Rate',
            data: [22.1, 23.8, 24.2, 23.9, 24.5, 25.1, 24.8, 25.3, 24.9, 25.2, 24.6, 24.8],
            borderColor: '#9966FF',
            backgroundColor: 'rgba(153, 102, 255, 0.1)',
            fill: false,
            tension: 0.4,
            borderWidth: 2,
            pointRadius: 0,
            pointHoverRadius: 0
        }]
    },

    activeTrialsChartData: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Active Trials',
            data: [7850, 7920, 8150, 8350, 8280, 8450, 8380, 8180, 7950, 8120, 7890, 8156],
            borderColor: '#9966FF',
            backgroundColor: 'rgba(153, 102, 255, 0.1)',
            fill: false,
            tension: 0.4,
            borderWidth: 2,
            pointRadius: 0,
            pointHoverRadius: 0
        }]
    },

            convertedTrialsChartData: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: 'Converted Trials',
                data: [585, 575, 700, 750, 720, 815, 790, 730, 665, 700, 620, 707],
                borderColor: '#9966FF',
                backgroundColor: 'rgba(153, 102, 255, 0.1)',
                fill: false,
                tension: 0.4,
                borderWidth: 2,
                pointRadius: 0,
                pointHoverRadius: 0
            }]
        },

        // Churn-specific chart data
        subscriberChurnRateChartData: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: 'Subscriber Churn Rate',
                data: [2.8, 3.1, 3.5, 3.2, 2.9, 3.4, 3.6, 3.3, 2.7, 3.0, 3.1, 3.2],
                borderColor: '#9966FF',
                backgroundColor: 'rgba(153, 102, 255, 0.1)',
                fill: false,
                tension: 0.4,
                borderWidth: 2,
                pointRadius: 0,
                pointHoverRadius: 0
            }]
        },
        churnedRevenueChartData: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: 'Churned Revenue',
                data: [15200, 16800, 19200, 17500, 14900, 18600, 20100, 18200, 14200, 16400, 17100, 18456],
                borderColor: '#9966FF',
                backgroundColor: 'rgba(153, 102, 255, 0.1)',
                fill: false,
                tension: 0.4,
                borderWidth: 2,
                pointRadius: 0,
                pointHoverRadius: 0
            }]
        },
        grossMRRChurnRateChartData: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: 'Gross MRR Churn Rate',
                data: [3.8, 4.2, 4.6, 4.3, 3.9, 4.5, 4.7, 4.4, 3.6, 4.0, 4.1, 4.1],
                borderColor: '#9966FF',
                backgroundColor: 'rgba(153, 102, 255, 0.1)',
                fill: false,
                tension: 0.4,
                borderWidth: 2,
                pointRadius: 0,
                pointHoverRadius: 0
            }]
        },
        netMRRChurnRateChartData: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: 'Net MRR Churn Rate',
                data: [1.5, 1.8, 2.1, 1.9, 1.6, 2.0, 2.2, 1.9, 1.4, 1.7, 1.8, 1.8],
                borderColor: '#9966FF',
                backgroundColor: 'rgba(153, 102, 255, 0.1)',
                fill: false,
                tension: 0.4,
                borderWidth: 2,
                pointRadius: 0,
                pointHoverRadius: 0
            }]
        },

    // Customer Economics Charts
    customerEconomicsChartData: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Average Revenue Per User',
            data: [105, 108, 102, 118, 125, 121, 131, 136, 132, 134, 130, 128],
            borderColor: '#635bff',
            backgroundColor: 'rgba(99, 91, 255, 0.1)',
            fill: false,
            tension: 0.4,
            borderWidth: 2,
            pointRadius: 0,
            pointHoverRadius: 0
        }]
    },
    
    transactions: [
        { customer: 'Alice Johnson', amount: 284.50, status: 'completed', date: '2024-01-15' },
        { customer: 'Bob Smith', amount: 125.75, status: 'pending', date: '2024-01-15' },
        { customer: 'Carol Davis', amount: 89.30, status: 'completed', date: '2024-01-14' },
        { customer: 'David Wilson', amount: 345.00, status: 'failed', date: '2024-01-14' },
        { customer: 'Emma Brown', amount: 56.85, status: 'completed', date: '2024-01-13' },
        { customer: 'Frank Miller', amount: 189.40, status: 'pending', date: '2024-01-13' }
    ],
    
    // Detailed chart data for modal
    modalChartData: {
        totalRevenue: {
            title: "Total revenue",
            value: "$85,200",
            description: "This metric represents the total revenue generated from all payment transactions during the selected time period.",
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            data: [4200, 5100, 4800, 6200, 7100, 6800, 7900, 8400, 7600, 8100, 8800, 9200],
            tableData: [
                { 
                    month: 'Subscription revenue', 
                    jan: 2800, feb: 3200, mar: 3100, apr: 3900, may: 4500, jun: 4200,
                    jul: 5100, aug: 5600, sep: 5200, oct: 5400, nov: 5900, dec: 6300,
                    total: 54500
                },
                { 
                    month: 'Usage revenue', 
                    jan: 1400, feb: 1900, mar: 1700, apr: 2300, may: 2600, jun: 2600,
                    jul: 2800, aug: 2800, sep: 2400, oct: 2700, nov: 2900, dec: 2900,
                    total: 30700
                }
            ]
        },
        subscriptionRevenue: {
            title: "Subscription revenue",
            value: "$54,500",
            description: "This metric shows revenue from recurring subscription payments, calculated as the sum of all successful subscription billing cycles in the selected period.",
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            data: [2800, 3200, 3100, 3900, 4500, 4200, 5100, 5600, 5200, 5400, 5900, 6300],
            tableData: [
                { month: 'January', value: 2800, change: '+8.5%' },
                { month: 'February', value: 3200, change: '+14.3%' },
                { month: 'March', value: 3100, change: '-3.1%' },
                { month: 'April', value: 3900, change: '+25.8%' },
                { month: 'May', value: 4500, change: '+15.4%' },
                { month: 'June', value: 4200, change: '-6.7%' },
                { month: 'July', value: 5100, change: '+21.4%' },
                { month: 'August', value: 5600, change: '+9.8%' },
                { month: 'September', value: 5200, change: '-7.1%' },
                { month: 'October', value: 5400, change: '+3.8%' },
                { month: 'November', value: 5900, change: '+9.3%' },
                { month: 'December', value: 6300, change: '+6.8%' }
            ]
        },
        usageRevenue: {
            title: "Usage revenue",
            value: "$30,700",
            description: "This metric represents revenue from usage-based billing, calculated from meter events and associated pricing models during the selected time period.",
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            data: [1400, 1900, 1700, 2300, 2600, 2600, 2800, 2800, 2400, 2700, 2900, 2900],
            tableData: [
                { month: 'January', value: 1400, change: '+5.3%' },
                { month: 'February', value: 1900, change: '+35.7%' },
                { month: 'March', value: 1700, change: '-10.5%' },
                { month: 'April', value: 2300, change: '+35.3%' },
                { month: 'May', value: 2600, change: '+13.0%' },
                { month: 'June', value: 2600, change: '0.0%' },
                { month: 'July', value: 2800, change: '+7.7%' },
                { month: 'August', value: 2800, change: '0.0%' },
                { month: 'September', value: 2400, change: '-14.3%' },
                { month: 'October', value: 2700, change: '+12.5%' },
                { month: 'November', value: 2900, change: '+7.4%' },
                { month: 'December', value: 2900, change: '0.0%' }
            ]
        },
        // Subscription overview page specific modal data
        subscriptionRevenueBar: {
            title: "Subscription revenue",
            value: "$54,500",
            description: "This metric shows revenue from recurring subscription payments, calculated as the sum of all successful subscription billing cycles in the selected period.",
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            data: [2800, 3200, 3100, 3900, 4500, 4200, 5100, 5600, 5200, 5400, 5900, 6300],
            tableData: [
                { month: 'January', value: 2800, change: '+8.5%' },
                { month: 'February', value: 3200, change: '+14.3%' },
                { month: 'March', value: 3100, change: '-3.1%' },
                { month: 'April', value: 3900, change: '+25.8%' },
                { month: 'May', value: 4500, change: '+15.4%' },
                { month: 'June', value: 4200, change: '-6.7%' },
                { month: 'July', value: 5100, change: '+21.4%' },
                { month: 'August', value: 5600, change: '+9.8%' },
                { month: 'September', value: 5200, change: '-7.1%' },
                { month: 'October', value: 5400, change: '+3.8%' },
                { month: 'November', value: 5900, change: '+9.3%' },
                { month: 'December', value: 6300, change: '+6.8%' }
            ]
        },
        subscriptionGrowth: {
            title: "Subscription revenue growth",
            value: "+12.8%",
            description: "This metric shows the percentage growth in subscription revenue compared to the previous period, calculated as the month-over-month change in subscription revenue.",
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            data: [8.5, 14.3, -3.1, 25.8, 15.4, -6.7, 21.4, 9.8, -7.1, 3.8, 9.3, 6.8],
            tableData: [
                { month: 'January', value: '8.5%', change: '+2.3%' },
                { month: 'February', value: '14.3%', change: '+5.8%' },
                { month: 'March', value: '-3.1%', change: '-17.4%' },
                { month: 'April', value: '25.8%', change: '+28.9%' },
                { month: 'May', value: '15.4%', change: '-10.4%' },
                { month: 'June', value: '-6.7%', change: '-22.1%' },
                { month: 'July', value: '21.4%', change: '+28.1%' },
                { month: 'August', value: '9.8%', change: '-11.6%' },
                { month: 'September', value: '-7.1%', change: '-16.9%' },
                { month: 'October', value: '3.8%', change: '+10.9%' },
                { month: 'November', value: '9.3%', change: '+5.5%' },
                { month: 'December', value: '6.8%', change: '-2.5%' }
            ]
        },
        // Subscriber modal data
        activeSubscribers: {
            title: "Active subscribers",
            value: "12,450",
            description: "This metric shows the total number of active subscribers with ongoing subscriptions during the selected period.",
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            data: [9800, 10150, 10500, 10900, 11250, 11600, 11950, 12100, 12200, 12300, 12350, 12450],
            tableData: [
                { month: 'January', value: 9800, change: '+5.2%' },
                { month: 'February', value: 10150, change: '+3.6%' },
                { month: 'March', value: 10500, change: '+3.4%' },
                { month: 'April', value: 10900, change: '+3.8%' },
                { month: 'May', value: 11250, change: '+3.2%' },
                { month: 'June', value: 11600, change: '+3.1%' },
                { month: 'July', value: 11950, change: '+3.0%' },
                { month: 'August', value: 12100, change: '+1.3%' },
                { month: 'September', value: 12200, change: '+0.8%' },
                { month: 'October', value: 12300, change: '+0.8%' },
                { month: 'November', value: 12350, change: '+0.4%' },
                { month: 'December', value: 12450, change: '+0.8%' }
            ]
        },
        activeSubscribersGrowth: {
            title: "Active subscribers growth",
            value: "+8.2%",
            description: "This metric shows the percentage growth in active subscribers compared to the previous period.",
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            data: [5.2, 3.6, 3.4, 3.8, 3.2, 3.1, 3.0, 1.3, 0.8, 0.8, 0.4, 0.8],
            tableData: [
                { month: 'January', value: '5.2%', change: '+1.2%' },
                { month: 'February', value: '3.6%', change: '-1.6%' },
                { month: 'March', value: '3.4%', change: '-0.2%' },
                { month: 'April', value: '3.8%', change: '+0.4%' },
                { month: 'May', value: '3.2%', change: '-0.6%' },
                { month: 'June', value: '3.1%', change: '-0.1%' },
                { month: 'July', value: '3.0%', change: '-0.1%' },
                { month: 'August', value: '1.3%', change: '-1.7%' },
                { month: 'September', value: '0.8%', change: '-0.5%' },
                { month: 'October', value: '0.8%', change: '0.0%' },
                { month: 'November', value: '0.4%', change: '-0.4%' },
                { month: 'December', value: '0.8%', change: '+0.4%' }
            ]
        },
        newSubscribers: {
            title: "New subscribers",
            value: "1,234",
            description: "This metric shows the number of new subscribers acquired during the selected period.",
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            data: [850, 920, 1100, 980, 1050, 1150, 1200, 1180, 1250, 1320, 1280, 1234],
            tableData: [
                { month: 'January', value: 850, change: '+12.5%' },
                { month: 'February', value: 920, change: '+8.2%' },
                { month: 'March', value: 1100, change: '+19.6%' },
                { month: 'April', value: 980, change: '-10.9%' },
                { month: 'May', value: 1050, change: '+7.1%' },
                { month: 'June', value: 1150, change: '+9.5%' },
                { month: 'July', value: 1200, change: '+4.3%' },
                { month: 'August', value: 1180, change: '-1.7%' },
                { month: 'September', value: 1250, change: '+5.9%' },
                { month: 'October', value: 1320, change: '+5.6%' },
                { month: 'November', value: 1280, change: '-3.0%' },
                { month: 'December', value: 1234, change: '-3.6%' }
            ]
        },
        churnedSubscribers: {
            title: "Churned subscribers",
            value: "156",
            description: "This metric shows the number of subscribers who cancelled their subscriptions during the selected period.",
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            data: [120, 145, 135, 165, 158, 142, 138, 152, 148, 139, 142, 156],
            tableData: [
                { month: 'January', value: 120, change: '-8.5%' },
                { month: 'February', value: 145, change: '+20.8%' },
                { month: 'March', value: 135, change: '-6.9%' },
                { month: 'April', value: 165, change: '+22.2%' },
                { month: 'May', value: 158, change: '-4.2%' },
                { month: 'June', value: 142, change: '-10.1%' },
                { month: 'July', value: 138, change: '-2.8%' },
                { month: 'August', value: 152, change: '+10.1%' },
                { month: 'September', value: 148, change: '-2.6%' },
                { month: 'October', value: 139, change: '-6.1%' },
                { month: 'November', value: 142, change: '+2.2%' },
                { month: 'December', value: 156, change: '+9.9%' }
            ]
        },
        totalRevenueGrowth: {
            title: "Total revenue growth",
            value: "18%",
            description: "This metric shows the percentage growth in total revenue compared to the previous period, calculated as the change in total revenue over time.",
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            data: [8.2, 12.4, 21.4, -5.9, 29.2, 14.5, -4.2, 16.2, 6.3, -9.5, 6.6, 8.6],
            tableData: [
                { month: 'January', value: '8.2%', change: '+2.1%' },
                { month: 'February', value: '12.4%', change: '+4.2%' },
                { month: 'March', value: '21.4%', change: '+9.0%' },
                { month: 'April', value: '-5.9%', change: '-27.3%' },
                { month: 'May', value: '29.2%', change: '+35.1%' },
                { month: 'June', value: '14.5%', change: '-14.7%' },
                { month: 'July', value: '-4.2%', change: '-18.7%' },
                { month: 'August', value: '16.2%', change: '+20.4%' },
                { month: 'September', value: '6.3%', change: '-9.9%' },
                { month: 'October', value: '-9.5%', change: '-15.8%' },
                { month: 'November', value: '6.6%', change: '+16.1%' },
                { month: 'December', value: '8.6%', change: '+2.0%' }
            ]
        },
        grossRevenue: {
            title: "Gross revenue",
            value: "$89,460",
            description: "This metric represents the total revenue before any deductions, including taxes, fees, and refunds, providing a complete view of income generated.",
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            data: [4410, 5355, 5040, 6510, 7455, 7140, 8295, 8820, 7980, 8505, 9240, 9660],
            tableData: [
                { month: 'January', value: 4410, change: '+12.4%' },
                { month: 'February', value: 5355, change: '+21.4%' },
                { month: 'March', value: 5040, change: '-5.9%' },
                { month: 'April', value: 6510, change: '+29.2%' },
                { month: 'May', value: 7455, change: '+14.5%' },
                { month: 'June', value: 7140, change: '-4.2%' },
                { month: 'July', value: 8295, change: '+16.2%' },
                { month: 'August', value: 8820, change: '+6.3%' },
                { month: 'September', value: 7980, change: '-9.5%' },
                { month: 'October', value: 8505, change: '+6.6%' },
                { month: 'November', value: 9240, change: '+8.6%' },
                { month: 'December', value: 9660, change: '+4.5%' }
            ]
        },
        netRevenue: {
            title: "Net revenue",
            value: "$81,940",
            description: "This metric represents revenue after deducting taxes, processing fees, and refunds, showing the actual income retained by the business.",
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            data: [3780, 4590, 4320, 5580, 6390, 6120, 7110, 7560, 6840, 7290, 7920, 8280],
            tableData: [
                { month: 'January', value: 3780, change: '+12.4%' },
                { month: 'February', value: 4590, change: '+21.4%' },
                { month: 'March', value: 4320, change: '-5.9%' },
                { month: 'April', value: 5580, change: '+29.2%' },
                { month: 'May', value: 6390, change: '+14.5%' },
                { month: 'June', value: 6120, change: '-4.2%' },
                { month: 'July', value: 7110, change: '+16.2%' },
                { month: 'August', value: 7560, change: '+6.3%' },
                { month: 'September', value: 6840, change: '-9.5%' },
                { month: 'October', value: 7290, change: '+6.6%' },
                { month: 'November', value: 7920, change: '+8.6%' },
                { month: 'December', value: 8280, change: '+4.5%' }
            ]
        },
        mrr: {
            title: "Monthly Recurring Revenue",
            value: "$54,500",
            description: "This metric represents the predictable recurring revenue from subscription customers, calculated by normalizing all subscription revenue to a monthly basis.",
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            data: [2800, 3200, 3100, 3900, 4500, 4200, 5100, 5600, 5200, 5400, 5900, 6300],
            tableData: [
                { month: 'January', value: 2800, change: '+8.5%' },
                { month: 'February', value: 3200, change: '+14.3%' },
                { month: 'March', value: 3100, change: '-3.1%' },
                { month: 'April', value: 3900, change: '+25.8%' },
                { month: 'May', value: 4500, change: '+15.4%' },
                { month: 'June', value: 4200, change: '-6.7%' },
                { month: 'July', value: 5100, change: '+21.4%' },
                { month: 'August', value: 5600, change: '+9.8%' },
                { month: 'September', value: 5200, change: '-7.1%' },
                { month: 'October', value: 5400, change: '+3.8%' },
                { month: 'November', value: 5900, change: '+9.3%' },
                { month: 'December', value: 6300, change: '+6.8%' }
            ]
        },
        meterRevenue: {
            title: "Meter revenue",
            value: "$30,700",
            description: "This metric represents revenue generated from metered usage billing, calculated from meter events and their associated pricing tiers during the selected period.",
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            data: [1400, 1900, 1700, 2300, 2600, 2600, 2800, 2800, 2400, 2700, 2900, 2900],
            tableData: [
                { month: 'January', value: 1400, change: '+5.3%' },
                { month: 'February', value: 1900, change: '+35.7%' },
                { month: 'March', value: 1700, change: '-10.5%' },
                { month: 'April', value: 2300, change: '+35.3%' },
                { month: 'May', value: 2600, change: '+13.0%' },
                { month: 'June', value: 2600, change: '0.0%' },
                { month: 'July', value: 2800, change: '+7.7%' },
                { month: 'August', value: 2800, change: '0.0%' },
                { month: 'September', value: 2400, change: '-14.3%' },
                { month: 'October', value: 2700, change: '+12.5%' },
                { month: 'November', value: 2900, change: '+7.4%' },
                { month: 'December', value: 2900, change: '0.0%' }
            ]
        },
        arpu: {
            title: "Average revenue per user",
            value: "$128",
            description: "This metric shows the average monthly revenue generated per active user, calculated by dividing total revenue by the number of active users in the period.",
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            data: [105, 108, 102, 118, 125, 121, 131, 136, 132, 134, 130, 128],
            tableData: [
                { month: 'January', value: 105, change: '+2.4%' },
                { month: 'February', value: 108, change: '+2.9%' },
                { month: 'March', value: 102, change: '-5.6%' },
                { month: 'April', value: 118, change: '+15.7%' },
                { month: 'May', value: 125, change: '+5.9%' },
                { month: 'June', value: 121, change: '-3.2%' },
                { month: 'July', value: 131, change: '+8.3%' },
                { month: 'August', value: 136, change: '+3.8%' },
                { month: 'September', value: 132, change: '-2.9%' },
                { month: 'October', value: 134, change: '+1.5%' },
                { month: 'November', value: 130, change: '-3.0%' },
                { month: 'December', value: 128, change: '-1.5%' }
            ]
        },
        lifetimeValue: {
            title: "Lifetime value",
            value: "$2,450",
            description: "Predicted total revenue a customer will generate over their entire relationship with your business, based on historical data and predictive modeling.",
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            data: [2180, 2220, 2190, 2280, 2350, 2320, 2410, 2380, 2420, 2460, 2440, 2450],
            tableData: [
                { month: 'January', value: 2180, change: '+1.8%' },
                { month: 'February', value: 2220, change: '+1.8%' },
                { month: 'March', value: 2190, change: '-1.4%' },
                { month: 'April', value: 2280, change: '+4.1%' },
                { month: 'May', value: 2350, change: '+3.1%' },
                { month: 'June', value: 2320, change: '-1.3%' },
                { month: 'July', value: 2410, change: '+3.9%' },
                { month: 'August', value: 2380, change: '-1.2%' },
                { month: 'September', value: 2420, change: '+1.7%' },
                { month: 'October', value: 2460, change: '+1.7%' },
                { month: 'November', value: 2440, change: '-0.8%' },
                { month: 'December', value: 2450, change: '+0.4%' }
            ]
        },
        netDollarRetention: {
            title: "Net dollar retention",
            value: "118%",
            description: "Percentage of recurring revenue retained from existing customers including expansions and contractions, measuring the growth or decline in customer value over time.",
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            data: [112, 114, 111, 116, 119, 117, 121, 120, 119, 120, 118, 118],
            tableData: [
                { month: 'January', value: 112, change: '+1.8%' },
                { month: 'February', value: 114, change: '+1.8%' },
                { month: 'March', value: 111, change: '-2.6%' },
                { month: 'April', value: 116, change: '+4.5%' },
                { month: 'May', value: 119, change: '+2.6%' },
                { month: 'June', value: 117, change: '-1.7%' },
                { month: 'July', value: 121, change: '+3.4%' },
                { month: 'August', value: 120, change: '-0.8%' },
                { month: 'September', value: 119, change: '-0.8%' },
                { month: 'October', value: 120, change: '+0.8%' },
                { month: 'November', value: 118, change: '-1.7%' },
                { month: 'December', value: 118, change: '0.0%' }
            ]
        }
    },
    
    activities: [
        {
            icon: '💳',
            title: 'Payment processed',
            description: '$284.50 from Alice Johnson',
            time: '2 min ago'
        },
        {
            icon: '👤',
            title: 'New customer',
            description: 'Bob Smith registered',
            time: '5 min ago'
        },
        {
            icon: '🔄',
            title: 'Subscription renewed',
            description: 'Monthly plan - Carol Davis',
            time: '12 min ago'
        },
        {
            icon: '⚠️',
            title: 'Payment failed',
            description: '$345.00 - Insufficient funds',
            time: '18 min ago'
        },
        {
            icon: '📧',
            title: 'Invoice sent',
            description: 'INV-2024-001 to Emma Brown',
            time: '25 min ago'
        },
        {
            icon: '🔔',
            title: 'Webhook delivered',
            description: 'payment.succeeded event',
            time: '32 min ago'
        }
    ],

    // Billing page stacked chart data
    billingStackedChartData: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Subscription Revenue',
                data: [41200, 42800, 44100, 46200, 47800, 49300, 50700, 51900, 52800, 53600, 54100, 54500],
                backgroundColor: '#9966FF',
                borderColor: '#9966FF',
                borderWidth: 0
            },
            {
                label: 'Usage Revenue',
                data: [22400, 24600, 26100, 27800, 28900, 29200, 29800, 30100, 29600, 30200, 30400, 30700],
                backgroundColor: '#0055BC',
                borderColor: '#0055BC',
                borderWidth: 0
            }
        ]
    },

    // Billing page metric module data
    billingMetricData: {
        totalRevenueGrowth: {
            value: '18%',
            chartData: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [{
                    data: [12, 15, 14, 18, 22, 20, 18, 16, 15, 17, 18, 18],
                    borderColor: '#635bff',
                    backgroundColor: 'rgba(99, 91, 255, 0.1)',
                    fill: false,
                    tension: 0.4,
                    borderWidth: 2,
                    pointRadius: 0,
                    pointHoverRadius: 0
                }]
            }
        },
        grossRevenue: {
            value: '$89,460',
            chartData: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [{
                    data: [65800, 68200, 71100, 74800, 77200, 79100, 80900, 82600, 83800, 85100, 87200, 89460],
                    borderColor: '#635bff',
                    backgroundColor: 'rgba(99, 91, 255, 0.1)',
                    fill: false,
                    tension: 0.4,
                    borderWidth: 2,
                    pointRadius: 0,
                    pointHoverRadius: 0
                }]
            }
        },
        netRevenue: {
            value: '$81,940',
            chartData: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [{
                    data: [60200, 62400, 65000, 68300, 70600, 72300, 73900, 75500, 76600, 77800, 79700, 81940],
                    borderColor: '#635bff',
                    backgroundColor: 'rgba(99, 91, 255, 0.1)',
                    fill: false,
                    tension: 0.4,
                    borderWidth: 2,
                    pointRadius: 0,
                    pointHoverRadius: 0
                }]
            }
        },
        mrr: {
            value: '$54,500',
            chartData: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [{
                    data: [41200, 42800, 44100, 46200, 47800, 49300, 50700, 51900, 52800, 53600, 54100, 54500],
                    borderColor: '#635bff',
                    backgroundColor: 'rgba(99, 91, 255, 0.1)',
                    fill: false,
                    tension: 0.4,
                    borderWidth: 2,
                    pointRadius: 0,
                    pointHoverRadius: 0
                }]
            }
        },
        meterRevenue: {
            value: '$30,700',
            chartData: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [{
                    data: [22400, 24600, 26100, 27800, 28900, 29200, 29800, 30100, 29600, 30200, 30400, 30700],
                    borderColor: '#635bff',
                    backgroundColor: 'rgba(99, 91, 255, 0.1)',
                    fill: false,
                    tension: 0.4,
                    borderWidth: 2,
                    pointRadius: 0,
                    pointHoverRadius: 0
                }]
            }
        }
    }
};

// Utility Functions
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(amount);
}

function formatNumber(num) {
    return new Intl.NumberFormat('en-US').format(num);
}

// Helper function to create chart options
function createChartOptions(maxValue, isPercentage = false) {
    return {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                mode: 'index',
                intersect: false,
                backgroundColor: '#1f2937',
                titleColor: '#f9fafb',
                bodyColor: '#f9fafb',
                borderColor: '#374151',
                borderWidth: 1,
                callbacks: isPercentage ? {
                    label: function(context) {
                        return context.dataset.label + ': ' + context.parsed.y + '%';
                    }
                } : undefined
            }
        },
        scales: {
            x: {
                grid: {
                    display: false
                },
                border: {
                    display: false
                },
                ticks: {
                    color: '#9ca3af',
                    font: {
                        size: 11
                    },
                    callback: function(value, index) {
                        // Only show Jan (index 0) and Dec (index 11)
                        if (index === 0 || index === 11) {
                            return this.getLabelForValue(value);
                        }
                        return '';
                    }
                }
            },
            y: {
                position: 'right',
                grid: {
                    color: '#f3f4f6',
                    borderDash: [2, 2]
                },
                border: {
                    display: false
                },
                min: isPercentage ? -10 : 0,
                max: maxValue,
                ticks: {
                    color: '#9ca3af',
                    font: {
                        size: 11
                    },
                    stepSize: isPercentage ? 10 : maxValue / 3, // For percentage: -10, 0, 10, 20, 30
                    callback: function(value) {
                        return isPercentage ? value + '%' : '$' + value.toLocaleString();
                    }
                }
            }
        },
        elements: {
            point: {
                radius: 0,
                hoverRadius: 0,
                backgroundColor: '#635bff',
                borderColor: '#ffffff',
                borderWidth: 1
            }
        },
        interaction: {
            intersect: false,
            mode: 'index'
        }
    };
}

// Setup Overview Chart Interactivity (Home Page)
function setupOverviewChartInteractivity() {
    // Add click event listeners to overview chart containers
    const totalRevenueContainer = document.querySelector('#totalRevenueValue').closest('.overview-chart-container');
    const totalRevenueGrowthContainer = document.querySelector('#totalRevenueGrowthValue').closest('.overview-chart-container');
    const subscriptionRevenueContainer = document.querySelector('#subscriptionRevenueValue').closest('.overview-chart-container');
    const meterRevenueContainer = document.querySelector('#meterRevenueValue').closest('.overview-chart-container');
    
    if (totalRevenueContainer) {
        totalRevenueContainer.addEventListener('click', () => {
            showModal('totalRevenue');
        });
    }
    
    if (totalRevenueGrowthContainer) {
        totalRevenueGrowthContainer.addEventListener('click', () => {
            showModal('totalRevenueGrowth');
        });
    }
    
    if (subscriptionRevenueContainer) {
        subscriptionRevenueContainer.addEventListener('click', () => {
            showModal('subscriptionRevenue');
        });
    }
    
    if (meterRevenueContainer) {
        meterRevenueContainer.addEventListener('click', () => {
            showModal('meterRevenue');
        });
    }
}

// Initialize Dashboard
function initDashboard() {
    updateMetrics();
    createCharts();
    setupOverviewChartInteractivity();
    setupNavigationInteractivity();
    addInteractivity();
    setupModalInteractivity();
    setupBillingPageInteractivity();
}

// Page Navigation Functions
function showPage(pageName) {
    // Get page elements
    const homePage = document.getElementById('home-page');
    const revenuePage = document.getElementById('revenue-page');
    const subscriptionsPage = document.getElementById('subscriptions-page');
    const invoicesPage = document.getElementById('invoices-page');
    const metersPage = document.getElementById('meters-page');
    const genericPage = document.getElementById('generic-page');
    const genericPageTitle = document.getElementById('generic-page-title');
    const pageNamePlaceholder = document.getElementById('page-name-placeholder');
    
    // Hide all page content first and cleanup page-specific functionality
    if (homePage) homePage.style.display = 'none';
    if (revenuePage) revenuePage.style.display = 'none';
    if (subscriptionsPage) subscriptionsPage.style.display = 'none';
    if (invoicesPage) invoicesPage.style.display = 'none';
    if (metersPage) metersPage.style.display = 'none';
    if (genericPage) genericPage.style.display = 'none';
    
    // Clean up sticky filters when navigating away from revenue/subscriptions pages
    cleanupStickyFilters();
    
    if (pageName === 'home' || pageName.toLowerCase() === 'home') {
        // Show home page with dashboard content
        if (homePage) homePage.style.display = 'block';
        // Home page title is always "Today" and doesn't need to be changed
    } else if (pageName === 'revenue' || pageName.toLowerCase() === 'revenue') {
        // Show billing revenue page
        if (revenuePage) revenuePage.style.display = 'block';
        // Update billing chart total
        updateBillingChartTotal();
        // Create billing charts when showing the page
        setTimeout(() => {
            createBillingCharts();
            createCustomerEconomicsCharts();
            setupCustomerEconomicsInteractivity();
            setupStickyFilters();
        }, 100);
    } else if (pageName === 'subscriptions' || pageName.toLowerCase() === 'subscriptions') {
        // Show subscriptions page with sticky filters and subscription charts
        if (subscriptionsPage) subscriptionsPage.style.display = 'block';
        // Setup sticky filters and create subscription charts for subscriptions page
        setTimeout(() => {
            setupStickyFilters();
            createSubscriptionOverviewCharts();
            setupSubscriptionChartInteractivity();
        }, 100);
    } else if (pageName === 'invoices' || pageName.toLowerCase() === 'invoices') {
        // Show invoices page with tabs
        if (invoicesPage) invoicesPage.style.display = 'block';
        // Initialize invoices tabs functionality, sticky filters, and charts
        setTimeout(() => {
            initInvoicesTabs();
            setupStickyFilters();
            createInvoicesOverviewCharts();
            setupInvoicesChartInteractivity();
        }, 100);
    } else if (pageName === 'meters' || pageName.toLowerCase() === 'meters') {
        // Show meters page with tabs
        if (metersPage) metersPage.style.display = 'block';
        // Initialize meters tabs functionality, sticky filters, and charts
        setTimeout(() => {
            initMetersTabs();
            setupStickyFilters();
            createMetersOverviewCharts();
            setupMetersChartInteractivity();
        }, 100);
    } else {
        // Show generic page with placeholder content
        if (genericPage) genericPage.style.display = 'block';
        if (genericPageTitle) genericPageTitle.textContent = pageName;
        if (pageNamePlaceholder) pageNamePlaceholder.textContent = pageName;
    }
}

// Navigation Accordion Functionality
function setupNavigationInteractivity() {
    // Handle expandable navigation items
    const expandableItems = document.querySelectorAll('.nav-item.expandable');
    
    expandableItems.forEach(item => {
        const mainItem = item.querySelector('.nav-item-main');
        
        mainItem.addEventListener('click', (e) => {
            e.preventDefault();
            toggleNavItem(item);
        });
    });
    
    // Handle regular navigation item clicks
    document.querySelectorAll('.nav-item:not(.expandable)').forEach(item => {
        item.addEventListener('click', () => {
            const pageName = item.querySelector('.nav-text').textContent;
            const pageSlug = pageName.toLowerCase() === 'home' ? 'home' : pageName;
            
            // Close any open accordions when navigating to regular pages
            closeAllAccordions();
            
            // Update URL
            try {
                if (pageName.toLowerCase() === 'home') {
                    window.history.pushState({page: 'home'}, '', '/');
                } else {
                    const urlSlug = pageSlug.toLowerCase().replace(/\s+/g, '-');
                    window.history.pushState({page: pageSlug}, '', `/${urlSlug}`);
                }
            } catch (error) {
                try {
                    const urlSlug = pageSlug.toLowerCase().replace(/\s+/g, '-');
                    const fullUrl = window.location.origin + '/' + urlSlug;
                    window.history.pushState({page: pageSlug}, '', fullUrl);
                } catch (error2) {
                    window.location.hash = pageSlug.toLowerCase().replace(/\s+/g, '-');
                }
            }
            
            showPage(pageSlug);
            setActiveNavItem(item);
        });
    });
    
    // Handle submenu item clicks
    document.querySelectorAll('.nav-subitem').forEach(item => {
        item.addEventListener('click', (e) => {
            e.stopPropagation();
            e.preventDefault();
            
            const pageName = item.textContent;
            const pageSlug = pageName.toLowerCase().replace(/\s+/g, '-');
            
            // Update URL
            try {
                window.history.pushState({page: pageSlug}, '', `/${pageSlug}`);
            } catch (error) {
                try {
                    const fullUrl = window.location.origin + '/' + pageSlug;
                    window.history.pushState({page: pageSlug}, '', fullUrl);
                } catch (error2) {
                    window.location.hash = pageSlug;
                }
            }
            
            showPage(pageName);
            setActiveSubNavItem(item);
        });
    });
}

function toggleNavItem(navItem) {
    const isExpanded = navItem.getAttribute('data-expanded') === 'true';
    
    if (isExpanded) {
        // Collapse
        navItem.setAttribute('data-expanded', 'false');
    } else {
        // First, close all other expandable nav items
        document.querySelectorAll('.nav-item.expandable').forEach(item => {
            if (item !== navItem) {
                item.setAttribute('data-expanded', 'false');
            }
        });
        
        // Then expand this one
        navItem.setAttribute('data-expanded', 'true');
    }
}

function closeAllAccordions() {
    // Close all expandable nav items
    document.querySelectorAll('.nav-item.expandable').forEach(item => {
        item.setAttribute('data-expanded', 'false');
    });
}

function setActiveNavItem(navItem) {
    // Remove active class from all nav items
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
        item.classList.remove('has-active-subpage');
    });
    document.querySelectorAll('.nav-subitem').forEach(item => {
        item.classList.remove('active');
    });
    
    // Add active class to clicked item
    navItem.classList.add('active');
}

function setActiveSubNavItem(subNavItem) {
    // Remove active class from all items
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
        item.classList.remove('has-active-subpage');
    });
    document.querySelectorAll('.nav-subitem').forEach(item => {
        item.classList.remove('active');
    });
    
    // Add active class to clicked subitem
    subNavItem.classList.add('active');
    
    // Add has-active-subpage class to parent expandable nav item
    const parentNavItem = subNavItem.closest('.nav-item.expandable');
    if (parentNavItem) {
        parentNavItem.classList.add('has-active-subpage');
    }
}

// Update Today Metrics
function updateMetrics() {
    // Today metrics
    document.getElementById('grossVolume').textContent = formatCurrency(mockData.today.grossVolume);
    document.getElementById('todayRevenue').textContent = formatCurrency(mockData.today.revenue);
    document.getElementById('usdBalance').textContent = formatCurrency(mockData.today.usdBalance);
    document.getElementById('debits').textContent = formatCurrency(mockData.today.debits);
    
    // Overview chart totals
    document.getElementById('totalRevenueValue').textContent = formatCurrency(mockData.overviewTotals.totalRevenue);
    document.getElementById('subscriptionRevenueValue').textContent = formatCurrency(mockData.overviewTotals.subscriptionRevenue);
    document.getElementById('meterRevenueValue').textContent = formatCurrency(mockData.overviewTotals.usageRevenue);
}

// Create Charts
function createCharts() {
    // Today Chart (small line chart)
    const todayCtx = document.getElementById('todayChart').getContext('2d');
    new Chart(todayCtx, {
        type: 'line',
        data: mockData.todayChartData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                    backgroundColor: '#1f2937',
                    titleColor: '#f9fafb',
                    bodyColor: '#f9fafb',
                    borderColor: '#374151',
                    borderWidth: 1
                }
            },
            scales: {
                x: {
                    display: true,
                    grid: {
                        display: false
                    },
                    ticks: {
                        color: '#9ca3af',
                        font: {
                            size: 12
                        }
                    }
                },
                y: {
                    display: false,
                    grid: {
                        display: false
                    },
                    beginAtZero: true
                }
            },
            elements: {
                point: {
                    radius: 0,
                    hoverRadius: 4
                }
            },
            interaction: {
                intersect: false,
                mode: 'index'
            }
        }
    });
    
    // Total Revenue Chart
    const totalRevenueCtx = document.getElementById('totalRevenueChart').getContext('2d');
    new Chart(totalRevenueCtx, {
        type: 'line',
        data: mockData.totalRevenueChartData,
        options: createChartOptions(12000) // 0, 4000, 8000, 12000
    });

    // Total Revenue Growth Chart
    const totalRevenueGrowthCtx = document.getElementById('totalRevenueGrowthChart').getContext('2d');
    new Chart(totalRevenueGrowthCtx, {
        type: 'line',
        data: mockData.totalRevenueGrowthChartData,
        options: createChartOptions(30, true) // percentage chart with -10 to 30 range
    });

    // Subscription Revenue Chart
    const subscriptionRevenueCtx = document.getElementById('subscriptionRevenueChart').getContext('2d');
    new Chart(subscriptionRevenueCtx, {
        type: 'line',
        data: mockData.subscriptionRevenueChartData,
        options: createChartOptions(9000) // 0, 3000, 6000, 9000
    });

    // Usage Revenue Chart
    const meterRevenueCtx = document.getElementById('meterRevenueChart').getContext('2d');
    new Chart(meterRevenueCtx, {
        type: 'line',
        data: mockData.usageRevenueChartData,
        options: createChartOptions(3600) // 0, 1200, 2400, 3600
    });
}

// Setup click handlers for subscription overview charts
function setupSubscriptionChartInteractivity() {
    // Add click event listeners to first set of subscription overview chart containers
    const subscriptionRevenueContainer = document.querySelector('#subscriptionRevenueValueSubs').closest('.overview-chart-container');
    const subscriptionGrowthContainer = document.querySelector('#subscriptionGrowthValue').closest('.overview-chart-container');
    
    if (subscriptionRevenueContainer) {
        subscriptionRevenueContainer.addEventListener('click', () => {
            showModal('subscriptionRevenueBar');
        });
    }
    
    if (subscriptionGrowthContainer) {
        subscriptionGrowthContainer.addEventListener('click', () => {
            showModal('subscriptionGrowth');
        });
    }
    
    // Add click event listeners to subscriber chart containers
    const activeSubscribersContainer = document.querySelector('#activeSubscribersValue').closest('.overview-chart-container');
    const activeSubscribersGrowthContainer = document.querySelector('#activeSubscribersGrowthValue').closest('.overview-chart-container');
    const newSubscribersContainer = document.querySelector('#newSubscribersValue').closest('.overview-chart-container');
    const churnedSubscribersContainer = document.querySelector('#churnedSubscribersValue').closest('.overview-chart-container');
    
    if (activeSubscribersContainer) {
        activeSubscribersContainer.addEventListener('click', () => {
            showModal('activeSubscribers');
        });
    }
    
    if (activeSubscribersGrowthContainer) {
        activeSubscribersGrowthContainer.addEventListener('click', () => {
            showModal('activeSubscribersGrowth');
        });
    }
    
    if (newSubscribersContainer) {
        newSubscribersContainer.addEventListener('click', () => {
            showModal('newSubscribers');
        });
    }
    
    if (churnedSubscribersContainer) {
        churnedSubscribersContainer.addEventListener('click', () => {
            showModal('churnedSubscribers');
        });
    }
}

// Create Subscription Overview Charts (for subscriptions page)
function createSubscriptionOverviewCharts() {
    // Subscription Revenue Bar Chart
    const subscriptionBarCtx = document.getElementById('subscriptionRevenueBarChart');
    if (subscriptionBarCtx) {
        new Chart(subscriptionBarCtx.getContext('2d'), {
            type: 'bar',
            data: mockData.subscriptionRevenueBarChartData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                    backgroundColor: '#1f2937',
                    titleColor: '#f9fafb',
                    bodyColor: '#f9fafb',
                    borderColor: '#374151',
                    borderWidth: 1
                }
            },
            scales: {
                x: {
                        display: true,
                    grid: {
                        display: false
                    },
                        ticks: {
                            color: '#9ca3af',
                            font: {
                                size: 12
                            }
                        }
                    },
                    y: {
                        position: 'right',
                        grid: {
                            color: '#f3f4f6',
                            borderDash: [2, 2]
                    },
                    border: {
                        display: false
                    },
                        min: 0,
                        max: 8000,
                        ticks: {
                            color: '#9ca3af',
                            font: {
                                size: 11
                            },
                            stepSize: 2000, // Creates ticks: 0, 2000, 4000, 6000, 8000
                            callback: function(value) {
                                return '$' + Math.round(value).toLocaleString();
                            }
                        }
                    }
                },
                interaction: {
                    intersect: false,
                    mode: 'index'
                }
            }
        });
    }

    // Subscription Growth Line Chart
    const subscriptionGrowthCtx = document.getElementById('subscriptionGrowthChart');
    if (subscriptionGrowthCtx) {
        new Chart(subscriptionGrowthCtx.getContext('2d'), {
            type: 'line',
            data: mockData.subscriptionGrowthChartData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        mode: 'index',
                        intersect: false,
                        backgroundColor: '#1f2937',
                        titleColor: '#f9fafb',
                        bodyColor: '#f9fafb',
                        borderColor: '#374151',
                        borderWidth: 1,
                        callbacks: {
                            label: function(context) {
                                return context.dataset.label + ': ' + context.parsed.y + '%';
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        display: true,
                        grid: {
                        display: false
                    },
                    ticks: {
                        color: '#9ca3af',
                        font: {
                            size: 12
                        }
                    }
                },
                y: {
                    position: 'right',
                    grid: {
                        color: '#f3f4f6',
                        borderDash: [2, 2]
                    },
                    border: {
                        display: false
                    },
                        min: -10,
                        max: 30,
                    ticks: {
                        color: '#9ca3af',
                        font: {
                                size: 11
                        },
                            stepSize: 10, // Creates ticks: -10, 0, 10, 20, 30
                        callback: function(value) {
                                return Math.round(value) + '%';
                        }
                        }
                }
            },
            elements: {
                point: {
                        radius: 0,
                        hoverRadius: 4
                }
            },
            interaction: {
                intersect: false,
                mode: 'index'
            }
        }
    });
}

    // Create subscriber charts
    // Active Subscribers Chart
    const activeSubscribersCtx = document.getElementById('activeSubscribersChart');
    if (activeSubscribersCtx) {
        new Chart(activeSubscribersCtx.getContext('2d'), {
            type: 'line',
            data: mockData.activeSubscribersChartData,
            options: createChartOptions(15000)
        });
    }

    // Active Subscribers Growth Chart
    const activeSubscribersGrowthCtx = document.getElementById('activeSubscribersGrowthChart');
    if (activeSubscribersGrowthCtx) {
        new Chart(activeSubscribersGrowthCtx.getContext('2d'), {
            type: 'line',
            data: mockData.activeSubscribersGrowthChartData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        mode: 'index',
                        intersect: false,
                        backgroundColor: '#1f2937',
                        titleColor: '#f9fafb',
                        bodyColor: '#f9fafb',
                        borderColor: '#374151',
                        borderWidth: 1,
                        callbacks: {
                            label: function(context) {
                                return context.dataset.label + ': ' + context.parsed.y + '%';
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        grid: {
                            display: false
                        },
                        border: {
                            display: false
                        },
                        ticks: {
                            color: '#9ca3af',
                            font: {
                                size: 11
                            },
                            callback: function(value, index) {
                                if (index === 0 || index === 11) {
                                    return this.getLabelForValue(value);
                                }
                                return '';
                            }
                        }
                    },
                    y: {
                        position: 'right',
                        grid: {
                            color: '#f3f4f6',
                            borderDash: [2, 2]
                        },
                        border: {
                            display: false
                        },
                        min: 0,
                        max: 6,
                        ticks: {
                            color: '#9ca3af',
                            font: {
                                size: 11
                            },
                            stepSize: 2,
                            callback: function(value) {
                                return Math.round(value) + '%';
                            }
                        }
                    }
                },
                elements: {
                    point: {
                        radius: 0,
                        hoverRadius: 0
                    }
                },
                interaction: {
                    intersect: false,
                    mode: 'index'
                }
            }
        });
    }

    // New Subscribers Chart
    const newSubscribersCtx = document.getElementById('newSubscribersChart');
    if (newSubscribersCtx) {
        new Chart(newSubscribersCtx.getContext('2d'), {
            type: 'line',
            data: mockData.newSubscribersChartData,
            options: createChartOptions(1600)
        });
    }

    // Churned Subscribers Chart
    const churnedSubscribersCtx = document.getElementById('churnedSubscribersChart');
    if (churnedSubscribersCtx) {
        new Chart(churnedSubscribersCtx.getContext('2d'), {
            type: 'line',
            data: mockData.churnedSubscribersChartData,
            options: createChartOptions(200)
        });
    }
}

// Create Billing Page Charts
function createBillingCharts() {
    // Main stacked bar chart
    const billingStackedCtx = document.getElementById('billingStackedChart');
    if (billingStackedCtx) {
        new Chart(billingStackedCtx.getContext('2d'), {
            type: 'bar',
            data: mockData.billingStackedChartData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                    backgroundColor: '#1f2937',
                    titleColor: '#f9fafb',
                    bodyColor: '#f9fafb',
                    borderColor: '#374151',
                        borderWidth: 1,
                        callbacks: {
                            label: function(context) {
                                return context.dataset.label + ': ' + formatCurrency(context.parsed.y);
                            }
                        }
                }
            },
            scales: {
                x: {
                        stacked: true,
                    grid: {
                        display: false
                    },
                    ticks: {
                        color: '#9ca3af',
                        font: {
                            size: 12
                        }
                    }
                },
                y: {
                        stacked: true,
                    position: 'right',
                    grid: {
                        color: '#f3f4f6',
                        borderDash: [2, 2]
                    },
                    border: {
                        display: false
                    },
                        min: 0,
                        max: 100000,
                    ticks: {
                            stepSize: 25000,
                        color: '#9ca3af',
                        font: {
                            size: 12
                        },
                        callback: function(value) {
                                return formatCurrency(value);
                            }
                        }
                }
            },
            interaction: {
                intersect: false,
                mode: 'index'
            }
        }
    });
}

    // Billing metric module charts
    Object.keys(mockData.billingMetricData).forEach(metricKey => {
        const canvasId = metricKey === 'meterRevenue' ? 'meterRevenueChartBilling' : metricKey + 'Chart';
        const ctx = document.getElementById(canvasId);
        if (ctx) {
            new Chart(ctx.getContext('2d'), {
                type: 'line',
                data: mockData.billingMetricData[metricKey].chartData,
                options: createChartOptions(Math.max(...mockData.billingMetricData[metricKey].chartData.datasets[0].data) * 1.2)
            });
        }
    });
}

// Create Customer Economics Charts
function createCustomerEconomicsCharts() {
    console.log('createCustomerEconomicsCharts called');
    console.log('Chart.js available:', typeof Chart !== 'undefined');
    console.log('mockData available:', typeof mockData !== 'undefined');
    
    // Main ARPU line chart
    const customerEconomicsCtx = document.getElementById('customerEconomicsChart');
    console.log('Canvas element:', customerEconomicsCtx);
    console.log('Chart data:', mockData.customerEconomicsChartData);
    
    if (customerEconomicsCtx) {
        console.log('Creating chart...');
        const chart = new Chart(customerEconomicsCtx.getContext('2d'), {
            type: 'line',
            data: mockData.customerEconomicsChartData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        mode: 'index',
                        intersect: false,
                        backgroundColor: '#1f2937',
                        titleColor: '#f9fafb',
                        bodyColor: '#f9fafb',
                        borderColor: '#374151',
                        borderWidth: 1,
                        callbacks: {
                            label: function(context) {
                                return 'ARPU: $' + context.parsed.y;
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            color: '#9ca3af',
                            font: {
                                size: 12
                            }
                        }
                    },
                    y: {
                        position: 'right',
                        grid: {
                            color: '#f3f4f6',
                            borderDash: [2, 2]
                        },
                        border: {
                            display: false
                        },
                        min: 80,
                        max: 160,
                        ticks: {
                            stepSize: 20,
                            color: '#9ca3af',
                            font: {
                                size: 12
                            },
                            callback: function(value) {
                                return '$' + value;
                            }
                        }
                    }
                },
                interaction: {
                    intersect: false,
                    mode: 'index'
                }
            }
        });
        console.log('Chart created successfully:', chart);
    } else {
        console.log('Canvas element not found!');
    }

    // Customer economics metric module charts (lifetime value and net dollar retention)
    const lifetimeValueCtx = document.getElementById('lifetimeValueChart');
    if (lifetimeValueCtx) {
        new Chart(lifetimeValueCtx.getContext('2d'), {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [{
                    data: [2100, 2200, 2150, 2350, 2400, 2300, 2500, 2600, 2450, 2500, 2550, 2450],
                    borderColor: '#635bff',
                    backgroundColor: 'rgba(99, 91, 255, 0.1)',
                    fill: false,
                    tension: 0.4,
                    borderWidth: 2,
                    pointRadius: 0,
                    pointHoverRadius: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        mode: 'index',
                        intersect: false,
                        backgroundColor: '#1f2937',
                        titleColor: '#f9fafb',
                        bodyColor: '#f9fafb',
                        borderColor: '#374151',
                        borderWidth: 1
                    }
                },
                scales: {
                    x: {
                        grid: { display: false },
                        border: { display: false },
                        ticks: {
                            color: '#9ca3af',
                            font: { size: 11 },
                            callback: function(value, index) {
                                if (index === 0 || index === 11) return this.getLabelForValue(value);
                                return '';
                            }
                        }
                    },
                    y: {
                        min: 0,
                        max: 2800,
                        grid: { display: false },
                        border: { display: false },
                        ticks: { display: false }
                    }
                },
                interaction: { intersect: false, mode: 'index' }
            }
        });
    }

    const netDollarRetentionCtx = document.getElementById('netDollarRetentionChart');
    if (netDollarRetentionCtx) {
        new Chart(netDollarRetentionCtx.getContext('2d'), {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [{
                    data: [115, 117, 114, 119, 121, 118, 123, 125, 120, 122, 124, 118],
                    borderColor: '#635bff',
                    backgroundColor: 'rgba(99, 91, 255, 0.1)',
                    fill: false,
                    tension: 0.4,
                    borderWidth: 2,
                    pointRadius: 0,
                    pointHoverRadius: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        mode: 'index',
                        intersect: false,
                        backgroundColor: '#1f2937',
                        titleColor: '#f9fafb',
                        bodyColor: '#f9fafb',
                        borderColor: '#374151',
                        borderWidth: 1
                    }
                },
                scales: {
                    x: {
                        grid: { display: false },
                        border: { display: false },
                        ticks: {
                            color: '#9ca3af',
                            font: { size: 11 },
                            callback: function(value, index) {
                                if (index === 0 || index === 11) return this.getLabelForValue(value);
                                return '';
                            }
                        }
                    },
                    y: {
                        min: 0,
                        max: 140,
                        grid: { display: false },
                        border: { display: false },
                        ticks: { display: false }
                    }
                },
                interaction: { intersect: false, mode: 'index' }
            }
        });
    }
}

// Add Interactivity
function addInteractivity() {
    // Explore button click
    document.querySelector('.explore-btn')?.addEventListener('click', () => {
        alert('Explore functionality would open detailed analytics here');
    });
    
    // View links
    document.querySelectorAll('.view-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            alert('View details functionality would open here');
        });
    });
    
    // Company selector click
    document.querySelector('.company-selector')?.addEventListener('click', () => {
        alert('Company selector dropdown would open here');
    });
}

// Simulate real-time updates
function startRealTimeUpdates() {
    setInterval(() => {
        // Slightly update gross volume
        const currentVolume = mockData.today.grossVolume;
        const change = (Math.random() - 0.5) * 10; // Random change between -5 and +5
        mockData.today.grossVolume = Math.max(0, currentVolume + change);
        
        // Update display
        document.getElementById('grossVolume').textContent = formatCurrency(mockData.today.grossVolume);
    }, 15000); // Update every 15 seconds
}

// Handle browser back/forward navigation
window.addEventListener('popstate', (event) => {
    const currentPath = window.location.pathname;
    
    if (currentPath === '/' || currentPath === '') {
        // Navigating to home - close accordions
        closeAllAccordions();
        showPage('home');
    } else {
        const pageName = currentPath.substring(1).replace(/-/g, ' ');
        // Capitalize first letter of each word
        const formattedPageName = pageName.replace(/\w\S*/g, (txt) => 
            txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
        );
        
        // Define top-level pages that should close accordions
        const topLevelPages = ['balances', 'transactions', 'customers', 'product-catalog'];
        const currentPageSlug = currentPath.substring(1).toLowerCase();
        
        // Only close accordions if navigating to a top-level page
        if (topLevelPages.includes(currentPageSlug)) {
            closeAllAccordions();
        }
        
        showPage(formattedPageName);
    }
});

// Search Header Functionality
function setupSearchHeaderInteractions() {
    // Search input functionality
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('focus', () => {
            searchInput.parentElement.style.boxShadow = '0 0 0 3px rgba(99, 91, 255, 0.1)';
        });
        
        searchInput.addEventListener('blur', () => {
            searchInput.parentElement.style.boxShadow = 'none';
        });
        
        searchInput.addEventListener('input', (e) => {
            // Search functionality would go here
            console.log('Search query:', e.target.value);
        });
    }
    
    // Header button interactions
    const headerButtons = {
        '.help-btn': () => console.log('Help clicked'),
        '.notifications-btn': () => console.log('Notifications clicked'),
        '.settings-btn': () => console.log('Settings clicked'),
        '.add-btn': () => console.log('Add/Create clicked')
    };
    
    Object.entries(headerButtons).forEach(([selector, handler]) => {
        const button = document.querySelector(selector);
        if (button) {
            button.addEventListener('click', handler);
        }
    });
}

// Modal Functionality
let modalChart = null;

function setupModalInteractivity() {
    // Add click event listeners to chart containers
    const chartContainers = document.querySelectorAll('.overview-chart-container');
    chartContainers.forEach((container, index) => {
        container.addEventListener('click', () => {
            const chartTypes = ['totalRevenue', 'subscriptionRevenue', 'usageRevenue'];
            const chartType = chartTypes[index];
            if (chartType) {
                showModal(chartType);
            }
        });
    });
    
    // Add close button functionality
    const closeBtn = document.querySelector('.modal-close-btn');
    if (closeBtn) {
        closeBtn.addEventListener('click', hideModal);
    }
    
    // Close modal when clicking outside
    const modalOverlay = document.getElementById('chartModal');
    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                hideModal();
            }
        });
    }
    
    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            hideModal();
        }
    });
}

function showModal(chartType) {
    const modal = document.getElementById('chartModal');
    const data = mockData.modalChartData[chartType];
    
    if (!modal || !data) return;
    
    // Update modal content
    document.getElementById('modalMetricName').textContent = data.title;
    document.getElementById('modalMetricValue').textContent = data.value;
    document.getElementById('modalCalculationText').textContent = data.description;
    
    // Update table - horizontal layout
    const tableHead = document.getElementById('modalTableHead');
    const tableBody = document.getElementById('modalTableBody');
    
    // Clear existing content
    tableHead.innerHTML = '';
    tableBody.innerHTML = '';
    
    // Check if this is the new breakdown format (total revenue) or the old format
    if (data.tableData.length > 0 && data.tableData[0].hasOwnProperty('jan')) {
        // New breakdown format - show revenue type breakdown
        const headerRow = document.createElement('tr');
        headerRow.innerHTML = '<th>Product</th><th>Jan</th><th>Feb</th><th>Mar</th><th>Apr</th><th>May</th><th>Jun</th><th>Jul</th><th>Aug</th><th>Sep</th><th>Oct</th><th>Nov</th><th>Dec</th><th>Total</th>';
        tableHead.appendChild(headerRow);
        
        // Create rows for each revenue type
        data.tableData.forEach((row, index) => {
            const tableRow = document.createElement('tr');
            const isSubscription = row.month === 'Subscription revenue';
            const checkboxColor = isSubscription ? '#9966FF' : '#0055BC';
            const datasetIndex = index;
            
            tableRow.innerHTML = `
                <td>
                    <label class="revenue-checkbox-container">
                        <input type="checkbox" 
                               class="revenue-checkbox" 
                               data-dataset="${datasetIndex}"
                               data-color="${checkboxColor}"
                               checked>
                        <span class="revenue-checkbox-checkmark" style="border-color: ${checkboxColor};"></span>
                        ${row.month}
                    </label>
                </td>
                <td>${formatCurrency(row.jan)}</td>
                <td>${formatCurrency(row.feb)}</td>
                <td>${formatCurrency(row.mar)}</td>
                <td>${formatCurrency(row.apr)}</td>
                <td>${formatCurrency(row.may)}</td>
                <td>${formatCurrency(row.jun)}</td>
                <td>${formatCurrency(row.jul)}</td>
                <td>${formatCurrency(row.aug)}</td>
                <td>${formatCurrency(row.sep)}</td>
                <td>${formatCurrency(row.oct)}</td>
                <td>${formatCurrency(row.nov)}</td>
                <td>${formatCurrency(row.dec)}</td>
                <td><strong>${formatCurrency(row.total)}</strong></td>
            `;
            tableBody.appendChild(tableRow);
        });
        
        // Add event listeners for checkboxes
        setTimeout(() => {
            const checkboxes = document.querySelectorAll('.revenue-checkbox');
            checkboxes.forEach(checkbox => {
                checkbox.addEventListener('change', function() {
                    const datasetIndex = parseInt(this.getAttribute('data-dataset'));
                    const isChecked = this.checked;
                    const color = this.getAttribute('data-color');
                    const checkmark = this.nextElementSibling;
                    
                    // Update checkbox appearance
                    if (isChecked) {
                        checkmark.style.backgroundColor = color;
                        checkmark.style.borderColor = color;
                    } else {
                        checkmark.style.backgroundColor = 'transparent';
                        checkmark.style.borderColor = '#d1d5db';
                    }
                    
                    // Update chart
                    if (modalChart && modalChart.data.datasets[datasetIndex]) {
                        modalChart.data.datasets[datasetIndex].hidden = !isChecked;
                        modalChart.update();
                    }
                });
                
                // Initialize checkbox appearance
                const color = checkbox.getAttribute('data-color');
                const checkmark = checkbox.nextElementSibling;
                checkmark.style.backgroundColor = color;
                checkmark.style.borderColor = color;
            });
        }, 100);
    } else {
        // Old format - show monthly values
        const headerRow = document.createElement('tr');
        headerRow.innerHTML = '<th>Product</th>' + data.tableData.map(row => `<th>${row.month}</th>`).join('');
        tableHead.appendChild(headerRow);
        
        // Create value row only
        const valueRow = document.createElement('tr');
        
        // Format values based on metric type
        const formatValue = (value, title) => {
            if (title.toLowerCase().includes('retention') || title.toLowerCase().includes('growth')) {
                return `${value}%`;
            } else {
                return formatCurrency(value);
            }
        };
        
        valueRow.innerHTML = `<td>${data.title}</td>` + 
            data.tableData.map(row => `<td>${formatValue(row.value, data.title)}</td>`).join('');
        tableBody.appendChild(valueRow);
    }
    
    // Show modal
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
    // Create modal chart
    setTimeout(() => {
        createModalChart(data);
    }, 100);
}

function hideModal() {
    const modal = document.getElementById('chartModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        
        // Destroy existing chart
        if (modalChart) {
            modalChart.destroy();
            modalChart = null;
        }
    }
}

function createModalChart(data) {
    const ctx = document.getElementById('modalChart');
    if (!ctx) return;
    
    // Destroy existing chart if it exists
    if (modalChart) {
        modalChart.destroy();
    }
    
    // Check if this is the total revenue chart - use stacked bar chart
    if (data.title === 'Total revenue') {
        modalChart = new Chart(ctx.getContext('2d'), {
            type: 'bar',
            data: {
                labels: data.labels,
                datasets: [
                    {
                        label: 'Subscription Revenue',
                        data: [2800, 3200, 3100, 3900, 4500, 4200, 5100, 5600, 5200, 5400, 5900, 6300],
                        backgroundColor: '#9966FF',
                        borderColor: '#9966FF',
                        borderWidth: 0
                    },
                    {
                        label: 'Usage Revenue',
                        data: [1400, 1900, 1700, 2300, 2600, 2600, 2800, 2800, 2400, 2700, 2900, 2900],
                        backgroundColor: '#0055BC',
                        borderColor: '#0055BC',
                        borderWidth: 0
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        mode: 'index',
                        intersect: false,
                        backgroundColor: '#1f2937',
                        titleColor: '#f9fafb',
                        bodyColor: '#f9fafb',
                        borderColor: '#374151',
                        borderWidth: 1,
                        callbacks: {
                            label: function(context) {
                                return context.dataset.label + ': ' + formatCurrency(context.parsed.y);
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        stacked: true,
                        grid: {
                            display: false
                        },
                        border: {
                            display: false
                        },
                        ticks: {
                            color: '#99a5b8',
                            font: {
                                size: 12
                            }
                        }
                    },
                    y: {
                        stacked: true,
                        position: 'right',
                        grid: {
                            color: '#f3f4f6',
                            borderDash: [2, 2]
                        },
                        border: {
                            display: false
                        },
                        ticks: {
                            maxTicksLimit: 6,
                            color: '#99a5b8',
                            font: {
                                size: 12
                            },
                            callback: function(value) {
                                return formatCurrency(value);
                            }
                        }
                    }
                },
                interaction: {
                    intersect: false,
                    mode: 'index'
                }
            }
        });
    } else {
        // Default line chart for other metrics
        modalChart = new Chart(ctx.getContext('2d'), {
            type: 'line',
            data: {
                labels: data.labels,
                datasets: [{
                    label: data.title,
                    data: data.data,
                    borderColor: '#635bff',
                    backgroundColor: 'transparent',
                    fill: false,
                    tension: 0.4,
                    borderWidth: 3,
                    pointRadius: 0,
                    pointHoverRadius: 0,
                    pointBackgroundColor: '#635bff',
                    pointBorderColor: '#ffffff',
                    pointBorderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        mode: 'index',
                        intersect: false,
                        backgroundColor: '#1f2937',
                        titleColor: '#f9fafb',
                        bodyColor: '#f9fafb',
                        borderColor: '#374151',
                        borderWidth: 1,
                        callbacks: {
                            label: function(context) {
                                return formatCurrency(context.parsed.y);
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        grid: {
                            display: false
                        },
                        border: {
                            display: false
                        },
                        ticks: {
                            color: '#99a5b8',
                            font: {
                                size: 12
                            }
                        }
                    },
                    y: {
                        position: 'right',
                        grid: {
                            color: '#f3f4f6',
                            borderDash: [2, 2]
                        },
                        border: {
                            display: false
                        },
                        ticks: {
                            maxTicksLimit: 6,
                            color: '#99a5b8',
                            font: {
                                size: 12
                            },
                            callback: function(value) {
                                return formatCurrency(value);
                            }
                        }
                    }
                },
                interaction: {
                    intersect: false,
                    mode: 'index'
                }
            }
        });
    }
}

// Create Trials Charts (only subscriber charts)
function createTrialsCharts() {
    // New Trials Chart
    const trialsActiveSubscribersCtx = document.getElementById('trialsActiveSubscribersChart');
    if (trialsActiveSubscribersCtx) {
        new Chart(trialsActiveSubscribersCtx.getContext('2d'), {
            type: 'line',
            data: mockData.newTrialsChartData,
            options: createChartOptions(3500)
        });
    }

    // Trial Conversion Rate Chart
    const trialsActiveSubscribersGrowthCtx = document.getElementById('trialsActiveSubscribersGrowthChart');
    if (trialsActiveSubscribersGrowthCtx) {
        new Chart(trialsActiveSubscribersGrowthCtx.getContext('2d'), {
            type: 'line',
            data: mockData.trialConversionRateChartData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        mode: 'index', intersect: false, backgroundColor: '#1f2937', titleColor: '#f9fafb', bodyColor: '#f9fafb', borderColor: '#374151', borderWidth: 1,
                        callbacks: { label: function(context) { return context.dataset.label + ': ' + context.parsed.y + '%'; } }
                    }
                },
                scales: {
                    x: {
                        grid: { display: false }, border: { display: false },
                        ticks: {
                            color: '#9ca3af', font: { size: 11 },
                            callback: function(value, index) {
                                if (index === 0 || index === 11) {
                                    return this.getLabelForValue(value);
                                }
                                return '';
                            }
                        }
                    },
                    y: {
                        position: 'right',
                        grid: { color: '#f3f4f6', borderDash: [2, 2] },
                        border: { display: false },
                        min: 20, max: 30,
                        ticks: {
                            color: '#9ca3af', font: { size: 11 }, stepSize: 2.5,
                            callback: function(value) { return Math.round(value * 10) / 10 + '%'; }
                        }
                    }
                },
                elements: { point: { radius: 0, hoverRadius: 0 } },
                interaction: { intersect: false, mode: 'index' }
            }
        });
    }

    // Active Trials Chart
    const trialsNewSubscribersCtx = document.getElementById('trialsNewSubscribersChart');
    if (trialsNewSubscribersCtx) {
        new Chart(trialsNewSubscribersCtx.getContext('2d'), {
            type: 'line',
            data: mockData.activeTrialsChartData,
            options: createChartOptions(9000)
        });
    }

    // Converted Trials Chart
    const trialsChurnedSubscribersCtx = document.getElementById('trialsChurnedSubscribersChart');
    if (trialsChurnedSubscribersCtx) {
        new Chart(trialsChurnedSubscribersCtx.getContext('2d'), {
            type: 'line',
            data: mockData.convertedTrialsChartData,
            options: createChartOptions(900)
        });
    }
}

// Setup click handlers for trials charts (only subscriber charts)
function setupTrialsChartInteractivity() {
    // Subscriber charts
    const trialsActiveSubscribersContainer = document.querySelector('#trialsActiveSubscribersValue').closest('.overview-chart-container');
    const trialsActiveSubscribersGrowthContainer = document.querySelector('#trialsActiveSubscribersGrowthValue').closest('.overview-chart-container');
    const trialsNewSubscribersContainer = document.querySelector('#trialsNewSubscribersValue').closest('.overview-chart-container');
    const trialsChurnedSubscribersContainer = document.querySelector('#trialsChurnedSubscribersValue').closest('.overview-chart-container');
    
    if (trialsActiveSubscribersContainer) {
        trialsActiveSubscribersContainer.addEventListener('click', () => {
            showModal('activeSubscribers');
        });
    }
    
    if (trialsActiveSubscribersGrowthContainer) {
        trialsActiveSubscribersGrowthContainer.addEventListener('click', () => {
            showModal('activeSubscribersGrowth');
        });
    }
    
    if (trialsNewSubscribersContainer) {
        trialsNewSubscribersContainer.addEventListener('click', () => {
            showModal('newSubscribers');
        });
    }
    
    if (trialsChurnedSubscribersContainer) {
        trialsChurnedSubscribersContainer.addEventListener('click', () => {
            showModal('churnedSubscribers');
        });
    }
}

// Create Churn Charts
function createChurnCharts() {
    // Subscriber Churn Rate Chart
    const churnActiveSubscribersCtx = document.getElementById('churnActiveSubscribersChart');
    if (churnActiveSubscribersCtx) {
        new Chart(churnActiveSubscribersCtx.getContext('2d'), {
            type: 'line',
            data: mockData.subscriberChurnRateChartData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        mode: 'index', intersect: false, backgroundColor: '#1f2937', titleColor: '#f9fafb', bodyColor: '#f9fafb', borderColor: '#374151', borderWidth: 1,
                        callbacks: { label: function(context) { return context.dataset.label + ': ' + context.parsed.y + '%'; } }
                    }
                },
                scales: {
                    x: {
                        grid: { display: false }, border: { display: false },
                        ticks: {
                            color: '#9ca3af', font: { size: 11 },
                            callback: function(value, index) {
                                if (index === 0 || index === 11) {
                                    return this.getLabelForValue(value);
                                }
                                return '';
                            }
                        }
                    },
                    y: {
                        position: 'right',
                        grid: { color: '#f3f4f6', borderDash: [2, 2] },
                        border: { display: false },
                        min: 2, max: 5,
                        ticks: {
                            color: '#9ca3af', font: { size: 11 }, stepSize: 0.5,
                            callback: function(value) { return Math.round(value * 10) / 10 + '%'; }
                        }
                    }
                },
                elements: { point: { radius: 0, hoverRadius: 0 } },
                interaction: { intersect: false, mode: 'index' }
            }
        });
    }

    // Churned Revenue Chart
    const churnActiveSubscribersGrowthCtx = document.getElementById('churnActiveSubscribersGrowthChart');
    if (churnActiveSubscribersGrowthCtx) {
        new Chart(churnActiveSubscribersGrowthCtx.getContext('2d'), {
            type: 'line',
            data: mockData.churnedRevenueChartData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        mode: 'index', intersect: false, backgroundColor: '#1f2937', titleColor: '#f9fafb', bodyColor: '#f9fafb', borderColor: '#374151', borderWidth: 1,
                        callbacks: { label: function(context) { return context.dataset.label + ': $' + context.parsed.y.toLocaleString(); } }
                    }
                },
                scales: {
                    x: {
                        grid: { display: false }, border: { display: false },
                        ticks: {
                            color: '#9ca3af', font: { size: 11 },
                            callback: function(value, index) {
                                if (index === 0 || index === 11) {
                                    return this.getLabelForValue(value);
                                }
                                return '';
                            }
                        }
                    },
                    y: {
                        position: 'right',
                        grid: { color: '#f3f4f6', borderDash: [2, 2] },
                        border: { display: false },
                        min: 10000, max: 25000,
                        ticks: {
                            color: '#9ca3af', font: { size: 11 }, stepSize: 5000,
                            callback: function(value) { return '$' + (value / 1000) + 'k'; }
                        }
                    }
                },
                elements: { point: { radius: 0, hoverRadius: 0 } },
                interaction: { intersect: false, mode: 'index' }
            }
        });
    }

    // Gross MRR Churn Rate Chart
    const churnNewSubscribersCtx = document.getElementById('churnNewSubscribersChart');
    if (churnNewSubscribersCtx) {
        new Chart(churnNewSubscribersCtx.getContext('2d'), {
            type: 'line',
            data: mockData.grossMRRChurnRateChartData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        mode: 'index', intersect: false, backgroundColor: '#1f2937', titleColor: '#f9fafb', bodyColor: '#f9fafb', borderColor: '#374151', borderWidth: 1,
                        callbacks: { label: function(context) { return context.dataset.label + ': ' + context.parsed.y + '%'; } }
                    }
                },
                scales: {
                    x: {
                        grid: { display: false }, border: { display: false },
                        ticks: {
                            color: '#9ca3af', font: { size: 11 },
                            callback: function(value, index) {
                                if (index === 0 || index === 11) {
                                    return this.getLabelForValue(value);
                                }
                                return '';
                            }
                        }
                    },
                    y: {
                        position: 'right',
                        grid: { color: '#f3f4f6', borderDash: [2, 2] },
                        border: { display: false },
                        min: 3, max: 5,
                        ticks: {
                            color: '#9ca3af', font: { size: 11 }, stepSize: 0.5,
                            callback: function(value) { return Math.round(value * 10) / 10 + '%'; }
                        }
                    }
                },
                elements: { point: { radius: 0, hoverRadius: 0 } },
                interaction: { intersect: false, mode: 'index' }
            }
        });
    }

    // Net MRR Churn Rate Chart
    const churnChurnedSubscribersCtx = document.getElementById('churnChurnedSubscribersChart');
    if (churnChurnedSubscribersCtx) {
        new Chart(churnChurnedSubscribersCtx.getContext('2d'), {
            type: 'line',
            data: mockData.netMRRChurnRateChartData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        mode: 'index', intersect: false, backgroundColor: '#1f2937', titleColor: '#f9fafb', bodyColor: '#f9fafb', borderColor: '#374151', borderWidth: 1,
                        callbacks: { label: function(context) { return context.dataset.label + ': ' + context.parsed.y + '%'; } }
                    }
                },
                scales: {
                    x: {
                        grid: { display: false }, border: { display: false },
                        ticks: {
                            color: '#9ca3af', font: { size: 11 },
                            callback: function(value, index) {
                                if (index === 0 || index === 11) {
                                    return this.getLabelForValue(value);
                                }
                                return '';
                            }
                        }
                    },
                    y: {
                        position: 'right',
                        grid: { color: '#f3f4f6', borderDash: [2, 2] },
                        border: { display: false },
                        min: 1, max: 3,
                        ticks: {
                            color: '#9ca3af', font: { size: 11 }, stepSize: 0.5,
                            callback: function(value) { return Math.round(value * 10) / 10 + '%'; }
                        }
                    }
                },
                elements: { point: { radius: 0, hoverRadius: 0 } },
                interaction: { intersect: false, mode: 'index' }
            }
        });
    }
}

// Setup click handlers for churn charts (same as trials)
function setupChurnChartInteractivity() {
    // Subscriber charts
    const churnActiveSubscribersContainer = document.querySelector('#churnActiveSubscribersValue').closest('.overview-chart-container');
    const churnActiveSubscribersGrowthContainer = document.querySelector('#churnActiveSubscribersGrowthValue').closest('.overview-chart-container');
    const churnNewSubscribersContainer = document.querySelector('#churnNewSubscribersValue').closest('.overview-chart-container');
    const churnChurnedSubscribersContainer = document.querySelector('#churnChurnedSubscribersValue').closest('.overview-chart-container');
    
    if (churnActiveSubscribersContainer) {
        churnActiveSubscribersContainer.addEventListener('click', () => {
            showModal('activeSubscribers');
        });
    }
    
    if (churnActiveSubscribersGrowthContainer) {
        churnActiveSubscribersGrowthContainer.addEventListener('click', () => {
            showModal('activeSubscribersGrowth');
        });
    }
    
    if (churnNewSubscribersContainer) {
        churnNewSubscribersContainer.addEventListener('click', () => {
            showModal('newSubscribers');
        });
    }
    
    if (churnChurnedSubscribersContainer) {
        churnChurnedSubscribersContainer.addEventListener('click', () => {
            showModal('churnedSubscribers');
        });
    }
}

// Create Invoices Overview Charts
function createInvoicesOverviewCharts() {
    // Invoice Revenue Bar Chart for Invoices
    const invoicesSubscriptionBarCtx = document.getElementById('invoicesSubscriptionRevenueBarChart');
    if (invoicesSubscriptionBarCtx) {
        new Chart(invoicesSubscriptionBarCtx.getContext('2d'), {
            type: 'bar',
            data: mockData.invoiceRevenueBarChartData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        mode: 'index', intersect: false, backgroundColor: '#1f2937', titleColor: '#f9fafb', bodyColor: '#f9fafb', borderColor: '#374151', borderWidth: 1
                    }
                },
                scales: {
                    x: {
                        display: true, grid: { display: false },
                        ticks: { color: '#9ca3af', font: { size: 12 } }
                    },
                    y: {
                        position: 'right', grid: { color: '#f3f4f6', borderDash: [2, 2] }, border: { display: false },
                        min: 0, max: 10000,
                        ticks: {
                            color: '#9ca3af', font: { size: 11 }, stepSize: 2000,
                            callback: function(value) { return '$' + Math.round(value).toLocaleString(); }
                        }
                    }
                },
                interaction: { intersect: false, mode: 'index' }
            }
        });
    }

    // Invoice Revenue Growth Line Chart for Invoices
    const invoicesSubscriptionGrowthCtx = document.getElementById('invoicesSubscriptionGrowthChart');
    if (invoicesSubscriptionGrowthCtx) {
        new Chart(invoicesSubscriptionGrowthCtx.getContext('2d'), {
            type: 'line',
            data: mockData.invoiceRevenueGrowthChartData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        mode: 'index', intersect: false, backgroundColor: '#1f2937', titleColor: '#f9fafb', bodyColor: '#f9fafb', borderColor: '#374151', borderWidth: 1,
                        callbacks: { label: function(context) { return context.dataset.label + ': ' + context.parsed.y + '%'; } }
                    }
                },
                scales: {
                    x: {
                        display: true, grid: { display: false },
                        ticks: { color: '#9ca3af', font: { size: 12 } }
                    },
                    y: {
                        position: 'right', grid: { color: '#f3f4f6', borderDash: [2, 2] }, border: { display: false },
                        min: -10, max: 30,
                        ticks: {
                            color: '#9ca3af', font: { size: 11 }, stepSize: 10,
                            callback: function(value) { return Math.round(value) + '%'; }
                        }
                    }
                },
                elements: { point: { radius: 0, hoverRadius: 4 } },
                interaction: { intersect: false, mode: 'index' }
            }
        });
    }
}

// Create Meters Overview Charts
function createMetersOverviewCharts() {
    // Meter Revenue Bar Chart for Meters
    const metersSubscriptionBarCtx = document.getElementById('metersSubscriptionRevenueBarChart');
    if (metersSubscriptionBarCtx) {
        new Chart(metersSubscriptionBarCtx.getContext('2d'), {
            type: 'bar',
            data: mockData.meterRevenueBarChartData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        mode: 'index', intersect: false, backgroundColor: '#1f2937', titleColor: '#f9fafb', bodyColor: '#f9fafb', borderColor: '#374151', borderWidth: 1
                    }
                },
                scales: {
                    x: {
                        display: true, grid: { display: false },
                        ticks: { color: '#9ca3af', font: { size: 12 } }
                    },
                    y: {
                        position: 'right', grid: { color: '#f3f4f6', borderDash: [2, 2] }, border: { display: false },
                        min: 0, max: 3000,
                        ticks: {
                            color: '#9ca3af', font: { size: 11 }, stepSize: 500,
                            callback: function(value) { return '$' + Math.round(value).toLocaleString(); }
                        }
                    }
                },
                interaction: { intersect: false, mode: 'index' }
            }
        });
    }

    // Meter Revenue Growth Line Chart for Meters
    const metersSubscriptionGrowthCtx = document.getElementById('metersSubscriptionGrowthChart');
    if (metersSubscriptionGrowthCtx) {
        new Chart(metersSubscriptionGrowthCtx.getContext('2d'), {
            type: 'line',
            data: mockData.meterRevenueGrowthChartData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        mode: 'index', intersect: false, backgroundColor: '#1f2937', titleColor: '#f9fafb', bodyColor: '#f9fafb', borderColor: '#374151', borderWidth: 1,
                        callbacks: { label: function(context) { return context.dataset.label + ': ' + context.parsed.y + '%'; } }
                    }
                },
                scales: {
                    x: {
                        display: true, grid: { display: false },
                        ticks: { color: '#9ca3af', font: { size: 12 } }
                    },
                    y: {
                        position: 'right', grid: { color: '#f3f4f6', borderDash: [2, 2] }, border: { display: false },
                        min: -20, max: 40,
                        ticks: {
                            color: '#9ca3af', font: { size: 11 }, stepSize: 10,
                            callback: function(value) { return Math.round(value) + '%'; }
                        }
                    }
                },
                elements: { point: { radius: 0, hoverRadius: 4 } },
                interaction: { intersect: false, mode: 'index' }
            }
        });
    }
}

// Setup Invoices Chart Interactivity
function setupInvoicesChartInteractivity() {
    // Find chart containers for invoices page
    const invoicesSubscriptionContainer = document.querySelector('#tab-invoices-overview .overview-chart-container:nth-child(1)');
    const invoicesGrowthContainer = document.querySelector('#tab-invoices-overview .overview-chart-container:nth-child(2)');
    
    if (invoicesSubscriptionContainer) {
        invoicesSubscriptionContainer.addEventListener('click', () => {
            showModal('subscriptionRevenue');
        });
    }
    
    if (invoicesGrowthContainer) {
        invoicesGrowthContainer.addEventListener('click', () => {
            showModal('subscriptionRevenueGrowth');
        });
    }
}

// Setup Meters Chart Interactivity
function setupMetersChartInteractivity() {
    // Find chart containers for meters page
    const metersSubscriptionContainer = document.querySelector('#tab-meters-overview .overview-chart-container:nth-child(1)');
    const metersGrowthContainer = document.querySelector('#tab-meters-overview .overview-chart-container:nth-child(2)');
    
    if (metersSubscriptionContainer) {
        metersSubscriptionContainer.addEventListener('click', () => {
            showModal('subscriptionRevenue');
        });
    }
    
    if (metersGrowthContainer) {
        metersGrowthContainer.addEventListener('click', () => {
            showModal('subscriptionRevenueGrowth');
        });
    }
}

// Tab functionality for subscriptions page
function initSubscriptionsTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');
            
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Show corresponding tab content
            const targetContent = document.getElementById(`tab-${targetTab}`);
            if (targetContent) {
                targetContent.classList.add('active');
                
                // Initialize functionality for specific tabs
                if (targetTab === 'trials') {
                    // Initialize trials tab with charts and sticky filters
                    setTimeout(() => {
                        setupStickyFilters();
                        createTrialsCharts();
                        setupTrialsChartInteractivity();
                    }, 100);
                } else if (targetTab === 'churn') {
                    // Initialize churn tab with charts and sticky filters
                    setTimeout(() => {
                        setupStickyFilters();
                        createChurnCharts();
                        setupChurnChartInteractivity();
                    }, 100);
                } else if (targetTab === 'overview') {
                    // Re-initialize overview tab when switching back
                    setTimeout(() => {
                        setupStickyFilters();
                        createSubscriptionOverviewCharts();
                        setupSubscriptionChartInteractivity();
                    }, 100);
                }
            }
        });
    });
}

// Tab functionality for invoices page
function initInvoicesTabs() {
    const invoicesPage = document.getElementById('invoices-page');
    if (!invoicesPage) return;
    
    const tabButtons = invoicesPage.querySelectorAll('.tab-button');
    const tabContents = invoicesPage.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');
            
            // Remove active class from all buttons and contents within invoices page
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Show corresponding tab content
            const targetContent = document.getElementById(`tab-invoices-${targetTab}`);
            if (targetContent) {
                targetContent.classList.add('active');
                
                // Initialize functionality for specific tabs
                if (targetTab === 'overview') {
                    // Setup sticky filters and charts for the overview tab
                    setTimeout(() => {
                        setupStickyFilters();
                        createInvoicesOverviewCharts();
                        setupInvoicesChartInteractivity();
                    }, 100);
                }
            }
        });
    });
}

// Tab functionality for meters page
function initMetersTabs() {
    const metersPage = document.getElementById('meters-page');
    if (!metersPage) return;
    
    const tabButtons = metersPage.querySelectorAll('.tab-button');
    const tabContents = metersPage.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');
            
            // Remove active class from all buttons and contents within meters page
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Show corresponding tab content
            const targetContent = document.getElementById(`tab-meters-${targetTab}`);
            if (targetContent) {
                targetContent.classList.add('active');
                
                // Initialize functionality for specific tabs
                if (targetTab === 'overview') {
                    // Setup sticky filters and charts for the overview tab
                    setTimeout(() => {
                        setupStickyFilters();
                        createMetersOverviewCharts();
                        setupMetersChartInteractivity();
                    }, 100);
                }
            }
        });
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Show home page by default
    showPage('home');
    
    initDashboard();
    
    // Initialize subscriptions tabs
    initSubscriptionsTabs();
    
    // Initialize invoices tabs
    initInvoicesTabs();
    
    // Initialize meters tabs
    initMetersTabs();
    
    // Start real-time updates after initial load
    setTimeout(() => {
        startRealTimeUpdates();
    }, 5000);
    
    // Setup search header interactions
    setupSearchHeaderInteractions();
    
    // Add some loading animation
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Setup Billing Page Interactions
function setupBillingPageInteractivity() {
    // Add click event listeners to billing metric modules
    const billingModules = document.querySelectorAll('.billing-metric-module');
    billingModules.forEach((module) => {
        module.addEventListener('click', () => {
            // Get the chart type from the data attribute
            const chartType = module.getAttribute('data-chart');
            if (chartType && mockData.modalChartData[chartType]) {
                showModal(chartType);
            }
        });
    });

    // Add click event listener to main billing chart
    const mainChart = document.querySelector('.billing-chart-main');
    if (mainChart) {
        mainChart.addEventListener('click', () => {
            const chartType = mainChart.getAttribute('data-chart');
            if (chartType && mockData.modalChartData[chartType]) {
                showModal(chartType);
            }
        });
    }
}

function setupCustomerEconomicsInteractivity() {
    // Add click event listeners to customer economics metric modules in sidebar
    const customerEconomicsModules = document.querySelectorAll('.customer-economics-content .billing-metric-module');
    customerEconomicsModules.forEach((module) => {
        module.addEventListener('click', () => {
            // Get the chart type from the data attribute
            const chartType = module.getAttribute('data-chart');
            if (chartType && mockData.modalChartData[chartType]) {
                showModal(chartType);
            }
        });
    });

    // Add click event listener to main customer economics chart (ARPU)
    const mainChart = document.querySelector('.customer-economics-content .billing-chart-main');
    if (mainChart) {
        mainChart.addEventListener('click', () => {
            const chartType = mainChart.getAttribute('data-chart');
            if (chartType && mockData.modalChartData[chartType]) {
                showModal(chartType);
            }
        });
    }
}

function setupStickyFilters() {
    // Find the visible billing-filters element (from the currently shown page)
    const revenuePage = document.getElementById('revenue-page');
    const subscriptionsPage = document.getElementById('subscriptions-page');
    const invoicesPage = document.getElementById('invoices-page');
    const metersPage = document.getElementById('meters-page');
    
    let billingFilters = null;
    
    // Check which page is currently visible and get the corresponding billing-filters
    if (revenuePage && revenuePage.style.display !== 'none') {
        billingFilters = revenuePage.querySelector('.billing-filters');
    } else if (subscriptionsPage && subscriptionsPage.style.display !== 'none') {
        billingFilters = subscriptionsPage.querySelector('.billing-filters');
    } else if (invoicesPage && invoicesPage.style.display !== 'none') {
        billingFilters = invoicesPage.querySelector('.billing-filters');
    } else if (metersPage && metersPage.style.display !== 'none') {
        billingFilters = metersPage.querySelector('.billing-filters');
    }
    
    const searchHeader = document.querySelector('.search-header');
    
    if (!billingFilters || !searchHeader) return;
    
    // Store original position values
    let originalLeft = 0;
    let originalWidth = 0;
    
    // Calculate the trigger point and original position
    const getFiltersData = () => {
        const filtersRect = billingFilters.getBoundingClientRect();
        const searchHeaderRect = searchHeader.getBoundingClientRect();
        
        originalLeft = filtersRect.left;
        originalWidth = filtersRect.width;
        
        return {
            triggerPoint: window.scrollY + filtersRect.top - searchHeaderRect.height,
            left: originalLeft,
            width: originalWidth
        };
    };
    
    let filtersData = getFiltersData();
    
    // Handle scroll events
    const handleScroll = () => {
        const currentScroll = window.scrollY;
        
        if (currentScroll > filtersData.triggerPoint) {
            billingFilters.classList.add('sticky');
            // Set exact position to match original
            billingFilters.style.left = filtersData.left + 'px';
            billingFilters.style.width = filtersData.width + 'px';
            billingFilters.style.right = 'auto';
        } else {
            billingFilters.classList.remove('sticky');
            // Clear inline styles
            billingFilters.style.left = '';
            billingFilters.style.width = '';
            billingFilters.style.right = '';
        }
    };
    
    // Handle resize events to recalculate trigger point and position
    const handleResize = () => {
        // Temporarily remove sticky to get accurate measurements
        const wasSticky = billingFilters.classList.contains('sticky');
        billingFilters.classList.remove('sticky');
        billingFilters.style.left = '';
        billingFilters.style.width = '';
        billingFilters.style.right = '';
        
        filtersData = getFiltersData();
        
        if (wasSticky && window.scrollY > filtersData.triggerPoint) {
            handleScroll();
        }
    };
    
    // Add event listeners
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    // Store references for cleanup
    window.stickyFiltersHandlers = { handleScroll, handleResize };
    
    // Initial check
    handleScroll();
}

function cleanupStickyFilters() {
    // Clean up sticky filters from all pages with billing filters
    const revenuePage = document.getElementById('revenue-page');
    const subscriptionsPage = document.getElementById('subscriptions-page');
    const invoicesPage = document.getElementById('invoices-page');
    const metersPage = document.getElementById('meters-page');
    
    const revenueFilters = revenuePage ? revenuePage.querySelector('.billing-filters') : null;
    const subscriptionsFilters = subscriptionsPage ? subscriptionsPage.querySelector('.billing-filters') : null;
    const invoicesFilters = invoicesPage ? invoicesPage.querySelector('.billing-filters') : null;
    const metersFilters = metersPage ? metersPage.querySelector('.billing-filters') : null;
    
    // Remove sticky class and clear inline styles from all pages
    [revenueFilters, subscriptionsFilters, invoicesFilters, metersFilters].forEach(filters => {
        if (filters) {
            filters.classList.remove('sticky');
            filters.style.left = '';
            filters.style.width = '';
            filters.style.right = '';
        }
    });
    
    // Remove event listeners
    if (window.stickyFiltersHandlers) {
        window.removeEventListener('scroll', window.stickyFiltersHandlers.handleScroll);
        window.removeEventListener('resize', window.stickyFiltersHandlers.handleResize);
        window.stickyFiltersHandlers = null;
    }
}

// Update Billing Chart Total
function updateBillingChartTotal() {
    const totalElement = document.getElementById('billingChartTotal');
    if (totalElement) {
        // Calculate total from last month of stacked chart data (latest values)
        const subscriptionData = mockData.billingStackedChartData.datasets[0].data;
        const usageData = mockData.billingStackedChartData.datasets[1].data;
        const lastIndex = subscriptionData.length - 1;
        const total = subscriptionData[lastIndex] + usageData[lastIndex];
        totalElement.textContent = formatCurrency(total);
    }
}

// Metrics Calculations Panel Functionality
class MetricsPanel {
    constructor() {
        this.metricsPanel = document.getElementById('metricsPanel');
        this.metricDetailPanel = document.getElementById('metricDetailPanel');
        this.currentMetric = null;
        this.originalSettings = {};
        this.hasChanges = false;
        this.currentPanelType = 'revenue'; // 'revenue' or 'customer-economics'
        
        this.initEventListeners();
        this.setupMetricData();
    }
    
    initEventListeners() {
        // Main panel triggers
        const metricsLink = document.getElementById('metricsCalculationsLink');
        const subscriptionsMetricsLink = document.getElementById('subscriptionsMetricsCalculationsLink');
        const subscribersMetricsLink = document.getElementById('subscribersMetricsCalculationsLink');
        const trialsSubscribersMetricsLink = document.getElementById('trialsSubscribersMetricsCalculationsLink');
        const churnSubscribersMetricsLink = document.getElementById('churnSubscribersMetricsCalculationsLink');
        const customerEconomicsLink = document.getElementById('customerEconomicsLink');
        
        if (metricsLink) {
            metricsLink.addEventListener('click', (e) => {
                e.preventDefault();
                this.currentPanelType = 'revenue';
                this.openMainPanel();
            });
        }
        
        if (subscriptionsMetricsLink) {
            subscriptionsMetricsLink.addEventListener('click', (e) => {
                e.preventDefault();
                this.currentPanelType = 'subscriptions';
                this.openMainPanel();
            });
        }
        
        if (subscribersMetricsLink) {
            subscribersMetricsLink.addEventListener('click', (e) => {
                e.preventDefault();
                this.currentPanelType = 'subscribers';
                this.openMainPanel();
            });
        }
        
        if (trialsSubscribersMetricsLink) {
            trialsSubscribersMetricsLink.addEventListener('click', (e) => {
                e.preventDefault();
                this.currentPanelType = 'trials';
                this.openMainPanel();
            });
        }
        
        if (churnSubscribersMetricsLink) {
            churnSubscribersMetricsLink.addEventListener('click', (e) => {
                e.preventDefault();
                this.currentPanelType = 'churn';
                this.openMainPanel();
            });
        }
        
        if (customerEconomicsLink) {
            customerEconomicsLink.addEventListener('click', (e) => {
                e.preventDefault();
                this.currentPanelType = 'customer-economics';
                this.openMainPanel();
            });
        }
        
        // Main panel close events
        const mainPanelClose = document.getElementById('metricsPanelClose');
        const mainPanelOverlay = document.getElementById('metricsPanelOverlay');
        
        if (mainPanelClose) {
            mainPanelClose.addEventListener('click', () => this.closeMainPanel());
        }
        
        if (mainPanelOverlay) {
            mainPanelOverlay.addEventListener('click', () => this.closeMainPanel());
        }
        
        // Detail panel close events
        const detailPanelClose = document.getElementById('metricDetailPanelClose');
        const detailPanelOverlay = document.getElementById('metricDetailPanelOverlay');
        const breadcrumbBack = document.getElementById('breadcrumbBack');
        
        if (detailPanelClose) {
            detailPanelClose.addEventListener('click', () => this.closeDetailPanel());
        }
        
        if (detailPanelOverlay) {
            detailPanelOverlay.addEventListener('click', () => this.closeDetailPanel());
        }
        
        if (breadcrumbBack) {
            breadcrumbBack.addEventListener('click', () => this.backToMainPanel());
        }
        
        // Metric item clicks are handled dynamically in populateMainPanel()
        
        // Detail panel action buttons
        const cancelButton = document.querySelector('.metric-detail-cancel');
        const applyButton = document.querySelector('.metric-detail-apply');
        
        if (cancelButton) {
            cancelButton.addEventListener('click', () => this.closeDetailPanel());
        }
        
        if (applyButton) {
            applyButton.addEventListener('click', () => this.applyMetricSettings());
        }
        
        // ESC key to close panels
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                if (this.metricDetailPanel && this.metricDetailPanel.classList.contains('open')) {
                    this.closeDetailPanel();
                } else if (this.metricsPanel && this.metricsPanel.classList.contains('open')) {
                    this.closeMainPanel();
                }
            }
        });
    }
    
    setupMetricData() {
        this.metrics = {
            'total-committed-revenue': {
                title: 'Total committed revenue',
                shortDescription: 'A sum of your recurring revenue and usage charges.',
                description: 'A sum of your billing revenue and usage charges measured by meters. Usage and billing revenue have been committed by customers but may not have yet been collected. Decide whether discounts, credits, and uncollected committed revenue are included in your calculation.',
                controls: [
                    {
                        id: 'toggleMRR',
                        title: 'Monthly recurring revenue',
                        description: 'Include revenue that is committed in total revenue but has not yet been collected',
                        checked: true
                    },
                    {
                        id: 'toggleDiscounts',
                        title: 'One time discounts',
                        description: 'Include one time discounts in your total revenue',
                        checked: true
                    },
                    {
                        id: 'toggleCredits',
                        title: 'Free credits',
                        description: 'Include free credits in your total revenue',
                        checked: true
                    }
                ]
            },
            'total-revenue-growth': {
                title: 'Total revenue growth',
                shortDescription: 'Percent change of revenue over a given period of time.',
                description: 'Percent change of revenue over a given period of time. Configure how growth is calculated and what time periods to compare.',
                controls: [
                    {
                        id: 'toggleYearOverYear',
                        title: 'Year-over-year comparison',
                        description: 'Compare current period to same period last year',
                        checked: true
                    },
                    {
                        id: 'toggleSeasonalAdjustment',
                        title: 'Seasonal adjustment',
                        description: 'Apply seasonal adjustments to growth calculations',
                        checked: false
                    }
                ]
            },
            'gross-revenue': {
                title: 'Gross revenue',
                shortDescription: 'Total revenue minus Stripe expenses.',
                description: 'Total revenue minus Stripe expenses. Configure which fees and expenses are included in the calculation.',
                controls: [
                    {
                        id: 'toggleProcessingFees',
                        title: 'Processing fees',
                        description: 'Include Stripe processing fees in expense calculation',
                        checked: true
                    },
                    {
                        id: 'toggleChargebackFees',
                        title: 'Chargeback fees',
                        description: 'Include chargeback fees in expense calculation',
                        checked: true
                    }
                ]
            },
            'net-revenue': {
                title: 'Net revenue',
                shortDescription: 'Gross revenue that has landed in your account.',
                description: 'Gross revenue that has landed in your account. Configure how pending and refunded amounts are handled.',
                controls: [
                    {
                        id: 'togglePendingPayouts',
                        title: 'Pending payouts',
                        description: 'Include pending payouts in net revenue calculation',
                        checked: false
                    },
                    {
                        id: 'toggleRefunds',
                        title: 'Refunds',
                        description: 'Subtract refunds from net revenue',
                        checked: true
                    }
                ]
            },
            'mrr': {
                title: 'MRR',
                shortDescription: 'Current months committed subscription revenue.',
                description: 'Current months committed subscription revenue. Configure how subscription changes and prorations are handled.',
                controls: [
                    {
                        id: 'toggleProrations',
                        title: 'Prorations',
                        description: 'Include prorated charges in MRR calculation',
                        checked: true
                    },
                    {
                        id: 'toggleAnnualSubscriptions',
                        title: 'Annual subscriptions',
                        description: 'Include annual subscriptions normalized to monthly',
                        checked: true
                    }
                ]
            },
            'meter-revenue': {
                title: 'Meter revenue',
                shortDescription: 'Average revenue measured by your meters.',
                description: 'Average revenue measured by your meters. Configure how usage is aggregated and calculated.',
                controls: [
                    {
                        id: 'toggleAggregation',
                        title: 'Usage aggregation',
                        description: 'Use sum aggregation for usage calculations',
                        checked: true
                    },
                    {
                        id: 'toggleTiering',
                        title: 'Tiered pricing',
                        description: 'Apply tiered pricing to usage calculations',
                        checked: false
                    }
                ]
            },
            'arpu': {
                title: 'Average revenue per user (ARPU)',
                shortDescription: 'Average monthly revenue per active user.',
                description: 'Average monthly revenue generated per active user. Configure how users are counted and revenue is attributed.',
                controls: [
                    {
                        id: 'toggleActiveUsers',
                        title: 'Active users only',
                        description: 'Include only users with activity in the period',
                        checked: true
                    },
                    {
                        id: 'toggleTrialUsers',
                        title: 'Trial users',
                        description: 'Include users in trial periods in ARPU calculation',
                        checked: false
                    }
                ]
            },
            'lifetime-value': {
                title: 'Lifetime value',
                shortDescription: 'Predicted total revenue per customer.',
                description: 'Predicted total revenue a customer will generate over their entire relationship. Configure prediction model and time horizons.',
                controls: [
                    {
                        id: 'togglePredictionModel',
                        title: 'Machine learning predictions',
                        description: 'Use ML models for lifetime value predictions',
                        checked: true
                    },
                    {
                        id: 'toggleChurnAdjustment',
                        title: 'Churn adjustment',
                        description: 'Adjust predictions based on churn probability',
                        checked: true
                    }
                ]
            },
            'net-dollar-retention': {
                title: 'Net dollar retention',
                shortDescription: 'Percentage of recurring revenue retained.',
                description: 'Percentage of recurring revenue retained from existing customers including expansions and contractions.',
                controls: [
                    {
                        id: 'toggleExpansions',
                        title: 'Include expansions',
                        description: 'Include revenue expansions in NDR calculation',
                        checked: true
                    },
                    {
                        id: 'toggleDowngrades',
                        title: 'Include downgrades',
                        description: 'Include revenue contractions in NDR calculation',
                        checked: true
                    }
                ]
            },
            'subscription-revenue': {
                title: 'Subscription revenue',
                shortDescription: 'Revenue from recurring subscription payments.',
                description: 'This metric shows revenue from recurring subscription payments, calculated as the sum of all successful subscription billing cycles in the selected period. It includes all subscription charges but excludes one-time payments, usage charges, and other non-recurring revenue sources.',
                controls: [
                    {
                        id: 'includeTrials',
                        title: 'Include trial conversions',
                        description: 'Include revenue from subscriptions that converted from trial periods',
                        checked: true
                    },
                    {
                        id: 'includeUpgrades',
                        title: 'Include plan upgrades',
                        description: 'Include additional revenue from subscription plan upgrades',
                        checked: true
                    }
                ]
            },
            'subscription-revenue-growth': {
                title: 'Subscription revenue growth',
                shortDescription: 'Percentage growth in subscription revenue compared to previous period.',
                description: 'This metric shows the percentage growth in subscription revenue compared to the previous period, calculated as the month-over-month change in subscription revenue. It helps track the growth trajectory of your subscription business and identifies trends in recurring revenue performance.',
                controls: [
                    {
                        id: 'excludeChurn',
                        title: 'Exclude churned accounts',
                        description: 'Calculate growth excluding revenue lost from churned subscriptions',
                        checked: false
                    }
                ]
            },
            'active-subscribers': {
                title: 'Active subscribers',
                shortDescription: 'Total number of subscribers with active recurring subscriptions.',
                description: 'This metric shows the total number of active subscribers with ongoing subscriptions during the selected period. It includes all subscribers with valid, non-cancelled subscriptions regardless of billing frequency or subscription plan type.',
                controls: [
                    {
                        id: 'includeTrialSubscribers',
                        title: 'Include trial subscribers',
                        description: 'Include subscribers currently in trial periods',
                        checked: true
                    },
                    {
                        id: 'includePausedSubscriptions',
                        title: 'Include paused subscriptions',
                        description: 'Include subscribers with temporarily paused subscriptions',
                        checked: false
                    }
                ]
            },
            'active-subscribers-growth': {
                title: 'Active subscribers growth',
                shortDescription: 'Percentage growth in active subscriber count compared to previous period.',
                description: 'This metric shows the percentage growth in active subscribers compared to the previous period, calculated as the month-over-month change in subscriber count. It helps track subscriber acquisition and retention trends.',
                controls: [
                    {
                        id: 'excludeChurnedSubscribers',
                        title: 'Net growth calculation',
                        description: 'Calculate net growth including both new acquisitions and churned subscribers',
                        checked: true
                    }
                ]
            },
            'new-subscribers': {
                title: 'New subscribers',
                shortDescription: 'Number of new subscribers acquired during the selected period.',
                description: 'This metric shows the total number of new subscribers who started their first subscription during the selected period. It includes conversions from trials, direct signups, and subscribers acquired through different channels.',
                controls: [
                    {
                        id: 'includeTrialConversions',
                        title: 'Include trial conversions',
                        description: 'Include subscribers who converted from trial to paid subscriptions',
                        checked: true
                    },
                    {
                        id: 'includeReactivations',
                        title: 'Include reactivations',
                        description: 'Include previously churned subscribers who reactivated',
                        checked: false
                    }
                ]
            },
            'churned-subscribers': {
                title: 'Churned subscribers',
                shortDescription: 'Number of subscribers who cancelled their subscriptions during the selected period.',
                description: 'This metric shows the total number of subscribers who cancelled or failed to renew their subscriptions during the selected period. It includes voluntary cancellations, payment failures, and expired subscriptions.',
                controls: [
                    {
                        id: 'includePaymentFailures',
                        title: 'Include payment failures',
                        description: 'Include subscribers lost due to payment processing failures',
                        checked: true
                    },
                    {
                        id: 'excludeVoluntaryPauses',
                        title: 'Exclude voluntary pauses',
                        description: 'Exclude subscribers who voluntarily paused rather than cancelled',
                        checked: true
                    }
                ]
            },
            
            // Trials-specific metrics
            'new-trials': {
                title: 'New trials',
                shortDescription: 'Number of new trial subscriptions started.',
                description: 'This metric shows the total number of new trial subscriptions that were started during the selected period. It includes all trial sign-ups regardless of their conversion outcome or trial duration.',
                controls: [
                    {
                        id: 'includeFreePlans',
                        title: 'Include free plan trials',
                        description: 'Include trials on free plans in the count',
                        checked: true
                    },
                    {
                        id: 'excludeEmployeeTrials',
                        title: 'Exclude employee trials',
                        description: 'Exclude trial accounts created by company employees',
                        checked: true
                    }
                ]
            },
            'trial-conversion-rate': {
                title: 'Trial conversion rate',
                shortDescription: 'Percentage of trials that convert to paid subscriptions.',
                description: 'This metric shows the percentage of trial subscriptions that successfully convert to paid subscriptions. The calculation includes trials that converted during the selected period, regardless of when the trial originally started.',
                controls: [
                    {
                        id: 'includeExtendedTrials',
                        title: 'Include extended trials',
                        description: 'Include trials that were extended beyond the standard period',
                        checked: true
                    },
                    {
                        id: 'excludeDowngrades',
                        title: 'Exclude plan downgrades',
                        description: 'Exclude conversions to lower-tier plans from conversion rate',
                        checked: false
                    }
                ]
            },
            'active-trials': {
                title: 'Active trials',
                shortDescription: 'Number of currently active trial subscriptions.',
                description: 'This metric shows the total number of trial subscriptions that are currently active and have not yet expired or converted. It provides a snapshot of trial activity at the end of the selected period.',
                controls: [
                    {
                        id: 'includeExpiredUnconverted',
                        title: 'Include expired unconverted',
                        description: 'Include trials that expired without converting',
                        checked: false
                    },
                    {
                        id: 'includeExtensions',
                        title: 'Include trial extensions',
                        description: 'Include trials that have been extended beyond standard duration',
                        checked: true
                    }
                ]
            },
            'converted-trials': {
                title: 'Converted trials',
                shortDescription: 'Number of trials that converted to paid subscriptions.',
                description: 'This metric shows the total number of trial subscriptions that successfully converted to paid subscriptions during the selected period. It tracks the effectiveness of your trial-to-paid conversion funnel.',
                controls: [
                    {
                        id: 'includeImmediateConversions',
                        title: 'Include immediate conversions',
                        description: 'Include trials that converted before the trial period ended',
                        checked: true
                    },
                    {
                        id: 'trackByConversionDate',
                        title: 'Track by conversion date',
                        description: 'Count conversions by when they occurred, not when trial started',
                        checked: true
                    }
                ]
            },
            
            // Churn-specific metrics
            'subscriber-churn-rate': {
                title: 'Subscriber churn rate',
                shortDescription: 'Percentage of subscribers who cancelled in the period.',
                description: 'This metric shows the percentage of subscribers who cancelled their subscriptions during the selected period, calculated as cancelled subscribers divided by total subscribers at the beginning of the period. It measures customer retention and subscription business health.',
                controls: [
                    {
                        id: 'includeInvoluntaryChurn',
                        title: 'Include involuntary churn',
                        description: 'Include cancellations due to payment failures and expired cards',
                        checked: true
                    },
                    {
                        id: 'excludeDowngrades',
                        title: 'Exclude downgrades',
                        description: 'Exclude plan downgrades from churn calculation',
                        checked: true
                    }
                ]
            },
            'churned-revenue': {
                title: 'Churned revenue',
                shortDescription: 'Total revenue lost from cancelled subscriptions.',
                description: 'This metric shows the total amount of recurring revenue lost due to subscription cancellations during the selected period. It includes the monthly recurring revenue that was lost when subscribers cancelled their subscriptions.',
                controls: [
                    {
                        id: 'includeProrations',
                        title: 'Include prorated amounts',
                        description: 'Include prorated revenue adjustments for mid-cycle cancellations',
                        checked: true
                    },
                    {
                        id: 'excludeDowngradeRevenue',
                        title: 'Exclude downgrade revenue',
                        description: 'Exclude revenue lost due to plan downgrades rather than full cancellations',
                        checked: false
                    }
                ]
            },
            'gross-mrr-churn-rate': {
                title: 'Gross MRR churn rate',
                shortDescription: 'Percentage of MRR lost from cancellations and downgrades.',
                description: 'This metric shows the percentage of Monthly Recurring Revenue (MRR) lost due to subscription cancellations and downgrades during the selected period. It includes all forms of revenue reduction but excludes expansion revenue from existing customers.',
                controls: [
                    {
                        id: 'includeDowngradeRevenue',
                        title: 'Include downgrade revenue',
                        description: 'Include MRR lost from plan downgrades in addition to cancellations',
                        checked: true
                    },
                    {
                        id: 'excludeSeasonalPauses',
                        title: 'Exclude seasonal pauses',
                        description: 'Exclude temporary subscription pauses from MRR churn calculation',
                        checked: true
                    }
                ]
            },
            'net-mrr-churn-rate': {
                title: 'Net MRR churn rate',
                shortDescription: 'Net percentage of MRR lost after accounting for expansions.',
                description: 'This metric shows the net percentage of Monthly Recurring Revenue (MRR) lost after accounting for expansion revenue from existing customers. It calculates gross MRR churn minus expansion MRR from upgrades and add-ons from existing subscribers.',
                controls: [
                    {
                        id: 'includeExpansionRevenue',
                        title: 'Include expansion revenue',
                        description: 'Include MRR gained from existing customer upgrades and add-ons',
                        checked: true
                    },
                    {
                        id: 'excludeNewCustomerRevenue',
                        title: 'Exclude new customer revenue',
                        description: 'Exclude MRR from completely new customers in net churn calculation',
                        checked: true
                    }
                ]
            }
        };
    }
    
    openMainPanel() {
        if (this.metricsPanel) {
            this.populateMainPanel();
            this.metricsPanel.classList.add('open');
            document.body.style.overflow = 'hidden';
        }
    }
    
    populateMainPanel() {
        const panelBody = this.metricsPanel.querySelector('.metrics-panel-body');
        if (!panelBody) return;
        
        // Clear existing content
        panelBody.innerHTML = '';
        
        // Define which metrics to show based on panel type
        let metricsToShow = [];
        if (this.currentPanelType === 'revenue') {
            metricsToShow = [
                'total-committed-revenue',
                'total-revenue-growth', 
                'gross-revenue',
                'net-revenue',
                'mrr',
                'meter-revenue'
            ];
        } else if (this.currentPanelType === 'subscriptions') {
            metricsToShow = [
                'subscription-revenue',
                'subscription-revenue-growth'
            ];
        } else if (this.currentPanelType === 'subscribers') {
            metricsToShow = [
                'active-subscribers',
                'active-subscribers-growth',
                'new-subscribers',
                'churned-subscribers'
            ];
        } else if (this.currentPanelType === 'trials') {
            metricsToShow = [
                'new-trials',
                'trial-conversion-rate',
                'active-trials',
                'converted-trials'
            ];
        } else if (this.currentPanelType === 'churn') {
            metricsToShow = [
                'subscriber-churn-rate',
                'churned-revenue',
                'gross-mrr-churn-rate',
                'net-mrr-churn-rate'
            ];
        } else if (this.currentPanelType === 'customer-economics') {
            metricsToShow = [
                'arpu',
                'lifetime-value',
                'net-dollar-retention'
            ];
        }
        
        // Create metric items
        metricsToShow.forEach(metricId => {
            const metricData = this.metrics[metricId];
            if (metricData) {
                const metricItem = document.createElement('div');
                metricItem.className = 'metric-item';
                metricItem.setAttribute('data-metric', metricId);
                
                metricItem.innerHTML = `
                    <div class="metric-item-content">
                        <h3 class="metric-item-title">${metricData.title}</h3>
                        <p class="metric-item-description">${metricData.shortDescription}</p>
                    </div>
                    <svg class="metric-item-chevron" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                `;
                
                // Add click event listener
                metricItem.addEventListener('click', () => {
                    this.openDetailPanel(metricId);
                });
                
                panelBody.appendChild(metricItem);
            }
        });
    }
    
    closeMainPanel() {
        if (this.metricsPanel) {
            this.metricsPanel.classList.remove('open');
            document.body.style.overflow = '';
        }
    }
    
    openDetailPanel(metricId) {
        this.currentMetric = metricId;
        const metricData = this.metrics[metricId];
        
        if (metricData && this.metricDetailPanel) {
            // Update panel content
            this.updateDetailPanelContent(metricData);
            
            // Close main panel and open detail panel
            this.closeMainPanel();
            setTimeout(() => {
                this.metricDetailPanel.classList.add('open');
                document.body.style.overflow = 'hidden';
            }, 100);
        }
    }
    
    closeDetailPanel() {
        if (this.metricDetailPanel) {
            this.metricDetailPanel.classList.remove('open');
            document.body.style.overflow = '';
            this.currentMetric = null;
        }
    }
    
    backToMainPanel() {
        this.closeDetailPanel();
        setTimeout(() => {
            this.openMainPanel();
        }, 100);
    }
    
    updateDetailPanelContent(metricData) {
        // Update title and description
        const titleElement = document.getElementById('metricDetailTitle');
        const descriptionElement = document.getElementById('metricDetailDescription');
        
        if (titleElement) titleElement.textContent = metricData.title;
        if (descriptionElement) descriptionElement.textContent = metricData.description;
        
        // Update controls
        const controlsContainer = document.querySelector('.metric-detail-controls');
        if (controlsContainer && metricData.controls) {
            controlsContainer.innerHTML = '';
            
            // Store original settings
            this.originalSettings = {};
            
            metricData.controls.forEach(control => {
                // Store original value
                this.originalSettings[control.id] = control.checked;
                
                const controlItem = document.createElement('div');
                controlItem.className = 'metric-control-item';
                controlItem.innerHTML = `
                    <div class="metric-control-content">
                        <h4 class="metric-control-title">${control.title}</h4>
                        <p class="metric-control-description">${control.description}</p>
                    </div>
                    <div class="toggle-switch">
                        <input type="checkbox" id="${control.id}" ${control.checked ? 'checked' : ''}>
                        <label for="${control.id}" class="toggle-slider"></label>
                    </div>
                `;
                controlsContainer.appendChild(controlItem);
                
                // Add change listener to each toggle
                const toggle = controlItem.querySelector('input[type="checkbox"]');
                if (toggle) {
                    toggle.addEventListener('change', () => this.handleSettingChange());
                }
            });
        }
        
        // Reset apply button state
        this.resetApplyButton();
    }
    
    handleSettingChange() {
        // Check if any settings have changed from original
        this.hasChanges = false;
        
        Object.keys(this.originalSettings).forEach(controlId => {
            const toggle = document.getElementById(controlId);
            if (toggle && toggle.checked !== this.originalSettings[controlId]) {
                this.hasChanges = true;
            }
        });
        
        // Update apply button state
        this.updateApplyButtonState();
    }
    
    resetApplyButton() {
        const applyButton = document.querySelector('.metric-detail-apply');
        if (applyButton) {
            applyButton.disabled = true;
            applyButton.textContent = 'Apply';
            applyButton.style.background = '#d1d5db';
            applyButton.style.borderColor = '#d1d5db';
            applyButton.style.color = '#9ca3af';
            applyButton.style.cursor = 'not-allowed';
        }
        this.hasChanges = false;
    }
    
    updateApplyButtonState() {
        const applyButton = document.querySelector('.metric-detail-apply');
        if (applyButton) {
            if (this.hasChanges) {
                applyButton.disabled = false;
                applyButton.style.background = '#6366f1';
                applyButton.style.borderColor = '#6366f1';
                applyButton.style.color = 'white';
                applyButton.style.cursor = 'pointer';
            } else {
                this.resetApplyButton();
            }
        }
    }
    
    applyMetricSettings() {
        const applyButton = document.querySelector('.metric-detail-apply');
        if (applyButton && !applyButton.disabled) {
            // Show loading state
            const originalText = applyButton.textContent;
            applyButton.textContent = 'Applying...';
            applyButton.disabled = true;
            applyButton.style.cursor = 'not-allowed';
            
            // Simulate API call delay
            setTimeout(() => {
                // Close the panel
                this.closeDetailPanel();
                
                // Show toast notification
                this.showToastNotification();
                
                // Reset button state for next time
                applyButton.textContent = originalText;
                applyButton.disabled = false;
                applyButton.style.cursor = 'pointer';
            }, 800);
        }
    }
    
    showToastNotification() {
        // Create toast element
        const toast = document.createElement('div');
        toast.className = 'toast-notification';
        toast.innerHTML = `
            <div class="toast-content">
                <svg class="toast-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM13.7071 8.70711C14.0976 8.31658 14.0976 7.68342 13.7071 7.29289C13.3166 6.90237 12.6834 6.90237 12.2929 7.29289L9 10.5858L7.70711 9.29289C7.31658 8.90237 6.68342 8.90237 6.29289 9.29289C5.90237 9.68342 5.90237 10.3166 6.29289 10.7071L8.29289 12.7071C8.68342 13.0976 9.31658 13.0976 9.70711 12.7071L13.7071 8.70711Z" fill="#10b981"/>
                </svg>
                <div class="toast-text">
                    <div class="toast-title">Metric calculation updated successfully</div>
                    <div class="toast-subtitle">Changes will be reflected in 24 hours</div>
                </div>
            </div>
        `;
        
        // Add to document
        document.body.appendChild(toast);
        
        // Trigger animation
        setTimeout(() => {
            toast.classList.add('show');
        }, 100);
        
        // Remove after 4 seconds
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => {
                if (toast.parentNode) {
                    toast.parentNode.removeChild(toast);
                }
            }, 300);
        }, 4000);
    }
}

// Initialize metrics panel when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    new MetricsPanel();
}); 