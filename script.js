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
            label: 'Monthly Committed Revenue (MCR)',
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
            label: 'MCR Growth Rate (%)',
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
            data: [58400, 56200, 51600, 62800, 68500, 61700, 55900, 54800, 67200, 71300, 78600, 73200],
            backgroundColor: '#9966FF',
            borderColor: '#9966FF',
            borderWidth: 1
        }]
    },

    // MRR bar chart data for subscriptions overview
    mrrBarChartData: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Monthly Recurring Revenue',
            data: [42300, 43200, 41800, 44600, 45900, 44200, 43100, 42600, 45800, 46700, 47200, 46800],
            backgroundColor: '#9966FF',
            borderColor: '#9966FF',
            borderWidth: 1
        }]
    },

    // Invoice revenue bar chart data (combines subscription + monthly usage revenue)
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

    // Monthly usage revenue bar chart data (from homepage meter data)
    meterRevenueBarChartData: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Monthly Usage Revenue',
            data: [1400, 1900, 1700, 2300, 2600, 2600, 2800, 2800, 2400, 2700, 2900, 2900],
            backgroundColor: '#9966FF',
            borderColor: '#9966FF',
            borderWidth: 1
        }]
    },

    // Monthly usage revenue growth chart data (calculated from monthly usage revenue data)
    meterRevenueGrowthChartData: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Monthly Usage Revenue Growth (%)',
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

    // Meters usage chart data for individual meter tracking
    modelRunsChartData: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Model Run API Calls (Millions)',
            data: [1.8, 2.2, 2.6, 3.1, 2.9, 3.4, 3.8, 4.2, 3.9, 4.1, 4.5, 2.8],
            backgroundColor: '#9966FF',
            borderColor: '#9966FF',
            borderWidth: 1
        }]
    },

    tokensProcessedChartData: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Token Processing API Calls (Billions)',
            data: [89.2, 105.8, 118.6, 132.4, 124.7, 139.5, 148.2, 156.8, 145.3, 151.7, 162.4, 142.8],
            backgroundColor: '#9966FF',
            borderColor: '#9966FF',
            borderWidth: 1
        }]
    },

    trainingHoursChartData: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Training Session API Calls (Thousands)',
            data: [4.2, 6.8, 7.9, 9.5, 8.1, 9.8, 10.2, 11.6, 9.7, 10.4, 11.8, 8.4],
            backgroundColor: '#9966FF',
            borderColor: '#9966FF',
            borderWidth: 1
        }]
    },

    inferenceSecondsChartData: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Inference API Calls (Thousands)',
            data: [298.5, 342.8, 385.2, 421.6, 398.4, 445.7, 468.9, 501.2, 465.8, 488.1, 512.4, 476.2],
            backgroundColor: '#9966FF',
            borderColor: '#9966FF',
            borderWidth: 1
        }]
    },

    // Aggregate usage chart data combining all meters usage
    aggregateUsageChartData: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Total Aggregate Usage (Billions)',
            data: [0.95, 1.08, 1.22, 1.15, 1.34, 1.41, 1.28, 1.19, 1.37, 1.45, 1.24, 1.31],
            backgroundColor: '#9966FF',
            borderColor: '#9966FF',
            borderWidth: 1
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
            title: "Monthly committed revenue (MCR)",
            value: "$85,200",
            description: "This metric represents the monthly committed revenue generated from all payment transactions during the selected time period.",
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
            title: "MCR growth rate",
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
            title: "Gross payment volume",
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
            title: "Net payment volume",
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
            value: "$46,800",
            description: "This metric represents only the predictable, recurring portion of subscription revenue. It excludes one-time setup fees, annual plan recognition spikes, usage overages, and other non-recurring subscription components. MRR is the foundation that can be counted on month after month.",
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            data: [42300, 43200, 41800, 44600, 45900, 44200, 43100, 42600, 45800, 46700, 47200, 46800],
            tableData: [
                { month: 'January', value: 42300, change: '+1.8%' },
                { month: 'February', value: 43200, change: '+2.1%' },
                { month: 'March', value: 41800, change: '-3.2%' },
                { month: 'April', value: 44600, change: '+6.7%' },
                { month: 'May', value: 45900, change: '+2.9%' },
                { month: 'June', value: 44200, change: '-3.7%' },
                { month: 'July', value: 43100, change: '-2.5%' },
                { month: 'August', value: 42600, change: '-1.2%' },
                { month: 'September', value: 45800, change: '+7.5%' },
                { month: 'October', value: 46700, change: '+2.0%' },
                { month: 'November', value: 47200, change: '+1.1%' },
                { month: 'December', value: 46800, change: '-0.8%' }
            ]
        },
        meterRevenue: {
            title: "Monthly usage revenue",
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
        },
        arpu: {
            title: "Average revenue per user",
            value: "$128",
            description: "This metric represents the average revenue generated per customer during the selected time period, calculated by dividing total revenue by the number of active customers.",
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            data: [105, 108, 102, 118, 125, 121, 131, 136, 132, 134, 130, 128],
            tableData: [
                { month: 'January', value: 105, change: '+2.9%' },
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
        aggregateUsage: {
            title: "Aggregate usage",
            value: "1.24B",
            description: "This metric shows the total number of API calls across all your meters, including data processing, compute operations, and other billable usage events.",
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            data: [950000000, 1080000000, 1220000000, 1150000000, 1340000000, 1410000000, 1280000000, 1190000000, 1370000000, 1450000000, 1240000000, 1310000000],
            tableData: [
                { month: 'January', value: '950M', change: '+12.4%' },
                { month: 'February', value: '1.08B', change: '+13.7%' },
                { month: 'March', value: '1.22B', change: '+13.0%' },
                { month: 'April', value: '1.15B', change: '-5.7%' },
                { month: 'May', value: '1.34B', change: '+16.5%' },
                { month: 'June', value: '1.41B', change: '+5.2%' },
                { month: 'July', value: '1.28B', change: '-9.2%' },
                { month: 'August', value: '1.19B', change: '-7.0%' },
                { month: 'September', value: '1.37B', change: '+15.1%' },
                { month: 'October', value: '1.45B', change: '+5.8%' },
                { month: 'November', value: '1.24B', change: '-14.5%' },
                { month: 'December', value: '1.31B', change: '+5.6%' }
            ]
        },
        utilizationRate: {
            title: "Utilization rate",
            value: "68%",
            description: "This metric shows the average percentage of subscription data limits used by customers each month. It measures how much of their allocated subscription capacity (data, API calls, storage, etc.) your users are consuming relative to their plan limits.",
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            data: [62, 65, 58, 66, 69, 73, 75, 78, 71, 68, 72, 68],
            tableData: [
                { month: 'January', value: '62%', change: '+3.2%', description: 'Average utilization across 2,847 active users' },
                { month: 'February', value: '65%', change: '+4.8%', description: 'Average utilization across 2,931 active users' },
                { month: 'March', value: '58%', change: '-10.8%', description: 'Average utilization across 2,765 active users' },
                { month: 'April', value: '66%', change: '+13.8%', description: 'Average utilization across 3,012 active users' },
                { month: 'May', value: '69%', change: '+4.5%', description: 'Average utilization across 3,156 active users' },
                { month: 'June', value: '73%', change: '+5.8%', description: 'Average utilization across 3,289 active users' },
                { month: 'July', value: '75%', change: '+2.7%', description: 'Average utilization across 3,401 active users' },
                { month: 'August', value: '78%', change: '+4.0%', description: 'Average utilization across 3,524 active users' },
                { month: 'September', value: '71%', change: '-9.0%', description: 'Average utilization across 3,387 active users' },
                { month: 'October', value: '68%', change: '-4.2%', description: 'Average utilization across 3,198 active users' },
                { month: 'November', value: '72%', change: '+5.9%', description: 'Average utilization across 3,245 active users' },
                { month: 'December', value: '68%', change: '-5.6%', description: 'Average utilization across 3,089 active users' }
            ]
        }
    },
    
    // AI Company Invoice Data
    invoices: [
        { id: 'AI2024-0001', customer: 'TechCorp Solutions', email: 'billing@techcorp.ai', total: 4250.00, currency: 'USD', status: 'Paid', frequency: 'Monthly', service: 'AI Platform Subscription', due: 'Aug 15', created: 'Aug 1, 2:30 PM', finalized: 'Aug 1, 2:30 PM' },
        { id: 'API-DRAFT-0089', customer: 'DataFlow Inc', email: 'accounts@dataflow.com', total: 0.00, currency: 'USD', status: 'Draft', frequency: 'Daily', service: 'API Usage', due: '—', created: 'Aug 1, 2:15 PM', finalized: '—' },
        { id: 'ML2024-0156', customer: 'Neural Networks Ltd', email: 'finance@neuralnet.co.uk', total: 12500.00, currency: 'USD', status: 'Open', frequency: 'Monthly', service: 'Custom Model Training', due: 'Aug 20', created: 'Aug 1, 1:45 PM', finalized: '—' },
        { id: 'CONS-DRAFT-0034', customer: 'StartupAI', email: 'billing@startup.ai', total: 2500.00, currency: 'USD', status: 'Draft', frequency: 'One-time', service: 'AI Consulting', due: '—', created: 'Aug 1, 1:30 PM', finalized: '—' },
        { id: 'API2024-0445', customer: 'CloudVision Corp', email: 'payments@cloudvision.io', total: 850.75, currency: 'USD', status: 'Past due', frequency: 'Daily', service: 'Computer Vision API', due: 'Jul 28', created: 'Jul 28, 3:20 PM', finalized: 'Jul 28, 3:20 PM' },
        { id: 'DATA-0298', customer: 'AnalyticsPro', email: 'invoices@analytics.pro', total: 1875.00, currency: 'USD', status: 'Paid', frequency: 'Monthly', service: 'Data Processing', due: '—', created: 'Aug 1, 12:45 PM', finalized: 'Aug 1, 12:45 PM' },
        { id: 'ML-DRAFT-0067', customer: 'RoboTech Industries', email: 'finance@robotech.com', total: 0.00, currency: 'USD', status: 'Draft', frequency: 'Monthly', service: 'Machine Learning Platform', due: '—', created: 'Aug 1, 12:30 PM', finalized: '—' },
        { id: 'API2024-0446', customer: 'SmartRetail Solutions', email: 'billing@smartretail.ai', total: 3200.00, currency: 'USD', status: 'Open', frequency: 'Monthly', service: 'Recommendation Engine', due: 'Aug 18', created: 'Aug 1, 11:15 AM', finalized: '—' },
        { id: 'NLP2024-0112', customer: 'LinguaAI', email: 'accounts@linguaai.com', total: 5600.00, currency: 'USD', status: 'Paid', frequency: 'Monthly', service: 'Natural Language Processing', due: '—', created: 'Aug 1, 10:30 AM', finalized: 'Aug 1, 10:30 AM' },
        { id: 'CONS2024-0078', customer: 'HealthTech Innovations', email: 'billing@healthtech.ai', total: 8900.00, currency: 'USD', status: 'Open', frequency: 'One-time', service: 'Healthcare AI Consulting', due: 'Aug 25', created: 'Aug 1, 9:45 AM', finalized: '—' },
        { id: 'API-DRAFT-0090', customer: 'FinanceBot Ltd', email: 'payments@financebot.co', total: 125.50, currency: 'USD', status: 'Draft', frequency: 'Daily', service: 'Financial Analysis API', due: '—', created: 'Aug 1, 9:20 AM', finalized: '—' },
        { id: 'SAAS2024-0233', customer: 'AutoDrive Systems', email: 'billing@autodrive.ai', total: 15000.00, currency: 'USD', status: 'Paid', frequency: 'Monthly', service: 'Autonomous Vehicle AI', due: '—', created: 'Aug 1, 8:30 AM', finalized: 'Aug 1, 8:30 AM' },
        { id: 'ML2024-0157', customer: 'GameAI Studios', email: 'finance@gameai.studio', total: 2750.00, currency: 'USD', status: 'Open', frequency: 'Monthly', service: 'Game AI Development', due: 'Aug 22', created: 'Aug 1, 8:00 AM', finalized: '—' },
        { id: 'API2024-0447', customer: 'VoiceFlow Inc', email: 'billing@voiceflow.ai', total: 950.25, currency: 'USD', status: 'Paid', frequency: 'Daily', service: 'Speech Recognition API', due: '—', created: 'Aug 1, 7:45 AM', finalized: 'Aug 1, 7:45 AM' },
        { id: 'DATA-DRAFT-0156', customer: 'BigData Corp', email: 'accounts@bigdata.ai', total: 0.00, currency: 'USD', status: 'Draft', frequency: 'Monthly', service: 'Data Analytics Platform', due: '—', created: 'Aug 1, 7:15 AM', finalized: '—' },
        { id: 'EDGE2024-0089', customer: 'EdgeCompute Solutions', email: 'billing@edgecompute.io', total: 6750.00, currency: 'USD', status: 'Open', frequency: 'Monthly', service: 'Edge AI Processing', due: 'Aug 19', created: 'Aug 1, 6:30 AM', finalized: '—' },
        { id: 'API2024-0448', customer: 'TranslateAI', email: 'payments@translate.ai', total: 1200.00, currency: 'USD', status: 'Past due', frequency: 'Daily', service: 'Translation API', due: 'Jul 30', created: 'Jul 30, 4:20 PM', finalized: 'Jul 30, 4:20 PM' },
        { id: 'ML2024-0158', customer: 'PredictiveAnalytics Co', email: 'finance@predictive.ai', total: 4500.00, currency: 'USD', status: 'Paid', frequency: 'Monthly', service: 'Predictive Modeling', due: '—', created: 'Aug 1, 5:45 AM', finalized: 'Aug 1, 5:45 AM' },
        { id: 'CHAT-DRAFT-0045', customer: 'ChatBot Solutions', email: 'billing@chatbot.ai', total: 750.00, currency: 'USD', status: 'Draft', frequency: 'Monthly', service: 'Conversational AI', due: '—', created: 'Aug 1, 5:20 AM', finalized: '—' },
        { id: 'API2024-0449', customer: 'ImageRecognition Pro', email: 'accounts@imagerecog.ai', total: 3400.00, currency: 'USD', status: 'Open', frequency: 'Monthly', service: 'Image Recognition API', due: 'Aug 16', created: 'Aug 1, 4:30 AM', finalized: '—' }
    ],
    
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
        },
        utilizationRate: {
            value: '68%',
            chartData: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [{
                    data: [62, 65, 58, 66, 69, 73, 75, 78, 71, 68, 72, 68],
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

// Helper function to create chart options for subscriber counts
function createSubscriberChartOptions(maxValue) {
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
                borderWidth: 1
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
                min: 0,
                max: maxValue,
                ticks: {
                    color: '#9ca3af',
                    font: {
                        size: 11
                    },
                    stepSize: maxValue / 3,
                    callback: function(value) {
                        return Math.round(value).toLocaleString();
                    }
                }
            }
        },
        elements: {
            point: {
                radius: 0,
                hoverRadius: 0,
                backgroundColor: '#635bff',
                borderColor: '#635bff'
            },
            line: {
                borderColor: '#635bff',
                backgroundColor: 'rgba(99, 91, 255, 0.1)'
            }
        },
        interaction: {
            intersect: false,
            mode: 'index'
        }
    };
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
                        return isPercentage ? value + '%' : '$' + Math.round(value).toLocaleString();
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
    // Set page position to top immediately when navigation occurs (no animation)
    window.scrollTo(0, 0);
    
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
        // Create billing charts when showing the page
        setTimeout(() => {
            createBillingCharts();
            createCustomerEconomicsCharts();
            setupCustomerEconomicsInteractivity();
            // Update billing chart total after charts are created
            updateBillingChartTotal();
            // Setup info icon tooltip with additional delay to ensure DOM is ready
            setTimeout(() => {
                setupInfoIconTooltip();
            }, 200);
        }, 100);
        
        // Setup sticky filters with proper cleanup first
        setTimeout(() => {
            cleanupStickyFilters(); // Clean up any existing handlers
            setupStickyFilters();
        }, 200);
        
        // Additional fallback to ensure customer economics chart is created
        setTimeout(() => {
            const customerEconomicsCanvas = document.getElementById('customerEconomicsChart');
            if (customerEconomicsCanvas && !customerEconomicsCanvas.chart) {
                console.log('Fallback: Creating customer economics chart');
                createCustomerEconomicsCharts();
            }
            // Additional fallback for interactivity
            setupCustomerEconomicsInteractivity();
        }, 500);
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

// Store chart instances for cleanup
let chartInstances = {};

// Create Charts
function createCharts() {
    // Destroy existing charts to prevent canvas reuse errors
    Object.keys(chartInstances).forEach(key => {
        if (chartInstances[key]) {
            chartInstances[key].destroy();
            delete chartInstances[key];
        }
    });
    // Today Chart (small line chart)
    const todayCtx = document.getElementById('todayChart').getContext('2d');
    chartInstances.todayChart = new Chart(todayCtx, {
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
    
    // Monthly Committed Revenue Chart
    const totalRevenueCtx = document.getElementById('totalRevenueChart').getContext('2d');
    chartInstances.totalRevenueChart = new Chart(totalRevenueCtx, {
        type: 'line',
        data: mockData.totalRevenueChartData,
        options: createChartOptions(12000) // 0, 4000, 8000, 12000
    });

    // MCR Growth Rate Chart
    const totalRevenueGrowthCtx = document.getElementById('totalRevenueGrowthChart').getContext('2d');
    chartInstances.totalRevenueGrowthChart = new Chart(totalRevenueGrowthCtx, {
        type: 'line',
        data: mockData.totalRevenueGrowthChartData,
        options: createChartOptions(30, true) // percentage chart with -10 to 30 range
    });

    // Subscription Revenue Chart
    const subscriptionRevenueCtx = document.getElementById('subscriptionRevenueChart').getContext('2d');
    chartInstances.subscriptionRevenueChart = new Chart(subscriptionRevenueCtx, {
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
    
    // Add click event listener for MRR chart container
    const mrrContainer = document.querySelector('#mrrValue').closest('.overview-chart-container');
    if (mrrContainer) {
        mrrContainer.addEventListener('click', () => {
            showModal('mrr');
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

    // MRR Bar Chart
    const mrrBarCtx = document.getElementById('mrrChart');
    if (mrrBarCtx) {
        new Chart(mrrBarCtx.getContext('2d'), {
            type: 'bar',
            data: mockData.mrrBarChartData,
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
}

    // Create subscriber charts
    // Active Subscribers Chart
    const activeSubscribersCtx = document.getElementById('activeSubscribersChart');
    if (activeSubscribersCtx) {
        new Chart(activeSubscribersCtx.getContext('2d'), {
            type: 'line',
            data: mockData.activeSubscribersChartData,
            options: createSubscriberChartOptions(15000)
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
            options: createSubscriberChartOptions(1600)
        });
    }

    // Churned Subscribers Chart
    const churnedSubscribersCtx = document.getElementById('churnedSubscribersChart');
    if (churnedSubscribersCtx) {
        new Chart(churnedSubscribersCtx.getContext('2d'), {
        type: 'line',
            data: mockData.churnedSubscribersChartData,
            options: createSubscriberChartOptions(200)
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
                                return new Intl.NumberFormat('en-US', {
                                    style: 'currency',
                                    currency: 'USD',
                                    minimumFractionDigits: 0,
                                    maximumFractionDigits: 0
                                }).format(value);
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
        try {
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
        } catch (error) {
            console.error('Error creating customer economics chart:', error);
        }
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

    // Utilization Rate Chart
    const utilizationRateCtx = document.getElementById('utilizationRateChart');
    if (utilizationRateCtx) {
        new Chart(utilizationRateCtx.getContext('2d'), {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [{
                    data: [62, 65, 58, 66, 69, 73, 75, 78, 71, 68, 72, 68],
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
                        borderWidth: 1,
                        callbacks: { label: function(context) { return context.parsed.y + '%'; } }
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
                        min: 50,
                        max: 85,
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
    
    // Map chart types to metric keys for getting definitions
    const chartTypeToMetricKey = {
        'totalRevenue': 'total-committed-revenue',
        'totalRevenueGrowth': 'total-revenue-growth',
        'subscriptionRevenue': 'subscription-revenue',
        'subscriptionRevenueBar': 'subscription-revenue',
        'subscriptionGrowth': 'subscription-revenue-growth',
        'meterRevenue': 'meter-revenue',
        'mrr': 'mrr',
        'arpu': 'arpu',
        'lifetimeValue': 'lifetime-value',
        'netDollarRetention': 'net-dollar-retention',
        'invoiceRevenue': 'invoice-revenue',
        'invoiceRevenueGrowth': 'invoice-revenue-growth',
        'aggregateUsage': 'aggregate-usage',
        'utilizationRate': 'utilization-rate'
    };
    
    // Get the metric definition if available
    let calculationText = data.description;
    const metricKey = chartTypeToMetricKey[chartType];
    if (metricKey && window.metricsPanel && window.metricsPanel.metrics && window.metricsPanel.metrics[metricKey]) {
        const metricDefinition = window.metricsPanel.metrics[metricKey];
        calculationText = metricDefinition.description;
    }
    
    // Update modal content
    document.getElementById('modalMetricName').textContent = data.title;
    document.getElementById('modalMetricValue').textContent = data.value;
    document.getElementById('modalCalculationText').textContent = calculationText;
    
    // Update table - horizontal layout
    const tableHead = document.getElementById('modalTableHead');
    const tableBody = document.getElementById('modalTableBody');
    
    // Clear existing content
    tableHead.innerHTML = '';
    tableBody.innerHTML = '';
    
            // Check if this is the new breakdown format (monthly committed revenue) or the old format
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
            if (title.toLowerCase().includes('retention') || title.toLowerCase().includes('growth') || title.toLowerCase().includes('utilization')) {
                // For percentage-based metrics, return value as-is if it already has % or add % if it doesn't
                return value.toString().includes('%') ? value : `${value}%`;
            } else if (title.toLowerCase().includes('usage') || title.toLowerCase().includes('calls')) {
                // For usage metrics, return the value as-is since it's already formatted (e.g., "1.24B", "950M")
                return value;
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
    
            // Check if this is the monthly committed revenue chart - use stacked bar chart
        if (data.title === 'Monthly committed revenue (MCR)') {
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
        // Check if this is an aggregate usage chart or utilization rate chart for special formatting
        const isUsageChart = data.title.toLowerCase().includes('usage') || data.title.toLowerCase().includes('calls');
        const isUtilizationChart = data.title.toLowerCase().includes('utilization');
        
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
                                if (isUsageChart) {
                                    // Format usage numbers with B/M abbreviations
                                    const value = context.parsed.y;
                                    if (value >= 1000000000) {
                                        return (value / 1000000000).toFixed(2) + 'B calls';
                                    } else if (value >= 1000000) {
                                        return (value / 1000000).toFixed(0) + 'M calls';
                                    } else {
                                        return value.toLocaleString() + ' calls';
                                    }
                                } else if (isUtilizationChart) {
                                    // Format utilization as percentage
                                    return context.parsed.y + '%';
                                } else {
                                    return formatCurrency(context.parsed.y);
                                }
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
                                if (isUsageChart) {
                                    // Format y-axis with B abbreviations for usage charts
                                    if (value >= 1000000000) {
                                        return (value / 1000000000).toFixed(1) + 'B';
                                    } else if (value >= 1000000) {
                                        return (value / 1000000).toFixed(0) + 'M';
                                    } else {
                                        return value.toLocaleString();
                                    }
                                } else if (isUtilizationChart) {
                                    // Format y-axis as whole percentages for utilization charts
                                    return Math.round(value) + '%';
                                } else {
                                    return formatCurrency(value);
                                }
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
            options: createSubscriberChartOptions(3500)
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
                            callback: function(value) { return Math.round(value) + '%'; }
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
            options: createSubscriberChartOptions(9000)
        });
    }

    // Converted Trials Chart
    const trialsChurnedSubscribersCtx = document.getElementById('trialsChurnedSubscribersChart');
    if (trialsChurnedSubscribersCtx) {
        new Chart(trialsChurnedSubscribersCtx.getContext('2d'), {
            type: 'line',
            data: mockData.convertedTrialsChartData,
            options: createSubscriberChartOptions(900)
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
                            callback: function(value) { return Math.round(value) + '%'; }
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
                            callback: function(value) { return '$' + Math.round(value / 1000) + 'k'; }
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
                            callback: function(value) { return Math.round(value) + '%'; }
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
                            callback: function(value) { return Math.round(value) + '%'; }
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
    // Aggregate Usage Bar Chart
    const aggregateUsageCtx = document.getElementById('aggregateUsageChart');
    if (aggregateUsageCtx) {
        new Chart(aggregateUsageCtx.getContext('2d'), {
            type: 'bar',
            data: mockData.aggregateUsageChartData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        mode: 'index', intersect: false, backgroundColor: '#1f2937', titleColor: '#f9fafb', bodyColor: '#f9fafb', borderColor: '#374151', borderWidth: 1,
                        callbacks: {
                            label: function(context) {
                                const value = context.parsed.y;
                                if (value >= 1) {
                                    return (value).toFixed(2) + 'B calls';
                                } else {
                                    return (value * 1000).toFixed(0) + 'M calls';
                                }
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        display: true, grid: { display: false },
                        ticks: { color: '#9ca3af', font: { size: 12 } }
                    },
                    y: {
                        position: 'right', grid: { color: '#f3f4f6', borderDash: [2, 2] }, border: { display: false },
                        min: 0, max: 1.6,
                        ticks: {
                            color: '#9ca3af', font: { size: 11 }, stepSize: 0.4,
                            callback: function(value) { return Math.round(value * 10) / 10 + 'B'; }
                        }
                    }
                },
                interaction: { intersect: false, mode: 'index' }
            }
        });
    }

    // Monthly Usage Revenue Bar Chart for Meters
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
                            color: '#9ca3af', font: { size: 11 }, stepSize: 750,
                            callback: function(value) { return '$' + Math.round(value).toLocaleString(); }
                        }
                    }
                },
                interaction: { intersect: false, mode: 'index' }
            }
        });
    }

    // Monthly Usage Revenue Growth Line Chart for Meters
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
                            color: '#9ca3af', font: { size: 11 }, stepSize: 15,
                            callback: function(value) { return Math.round(value) + '%'; }
                        }
                    }
                },
                elements: { point: { radius: 0, hoverRadius: 4 } },
                interaction: { intersect: false, mode: 'index' }
            }
        });
    }

    // Meters Usage Charts
    // API Requests Chart
    const apiRequestsCtx = document.getElementById('metersChart1');
    if (apiRequestsCtx) {
        new Chart(apiRequestsCtx.getContext('2d'), {
            type: 'bar',
            data: mockData.modelRunsChartData,
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
                        min: 0, max: 60,
                        ticks: {
                            color: '#9ca3af', font: { size: 11 }, stepSize: 15,
                            callback: function(value) { return Math.round(value) + 'M'; }
                        }
                    }
                },
                interaction: { intersect: false, mode: 'index' }
            }
        });
    }

    // Data Transfer Chart
    const dataTransferCtx = document.getElementById('metersChart2');
    if (dataTransferCtx) {
        new Chart(dataTransferCtx.getContext('2d'), {
            type: 'bar',
            data: mockData.tokensProcessedChartData,
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
                        min: 0, max: 12,
                        ticks: {
                            color: '#9ca3af', font: { size: 11 }, stepSize: 3,
                            callback: function(value) { return Math.round(value) + 'TB'; }
                        }
                    }
                },
                interaction: { intersect: false, mode: 'index' }
            }
        });
    }

    // Email Deliveries Chart
    const emailDeliveriesCtx = document.getElementById('metersChart3');
    if (emailDeliveriesCtx) {
        new Chart(emailDeliveriesCtx.getContext('2d'), {
            type: 'bar',
            data: mockData.trainingHoursChartData,
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
                        min: 0, max: 220,
                        ticks: {
                            color: '#9ca3af', font: { size: 11 }, stepSize: 55,
                            callback: function(value) { return Math.round(value) + 'K'; }
                        }
                    }
                },
                interaction: { intersect: false, mode: 'index' }
            }
        });
    }

    // Storage Usage Chart
    const storageUsageCtx = document.getElementById('metersChart4');
    if (storageUsageCtx) {
        new Chart(storageUsageCtx.getContext('2d'), {
            type: 'bar',
            data: mockData.inferenceSecondsChartData,
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
                        min: 0, max: 4,
                        ticks: {
                            color: '#9ca3af', font: { size: 11 }, stepSize: 1,
                            callback: function(value) { return value.toFixed(1) + 'GB'; }
                        }
                    }
                },
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
            showModal('invoiceRevenue');
        });
    }
    
    if (invoicesGrowthContainer) {
        invoicesGrowthContainer.addEventListener('click', () => {
            showModal('invoiceRevenueGrowth');
        });
    }
}

// Setup Meters Chart Interactivity
function setupMetersChartInteractivity() {
    // Find chart containers for meters page
    const metersSubscriptionContainer = document.querySelector('#tab-meters-overview .overview-chart-container:nth-child(1)');
    const metersGrowthContainer = document.querySelector('#tab-meters-overview .overview-chart-container:nth-child(2)');
    const aggregateUsageContainer = document.querySelector('#tab-meters-overview .overview-chart-container:nth-child(3)');
    
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
    
    if (aggregateUsageContainer) {
        aggregateUsageContainer.addEventListener('click', () => {
            showModal('aggregateUsage');
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
                } else if (targetTab === 'invoices') {
                    // Initialize invoice list functionality
                    setTimeout(() => {
                        initInvoiceList();
                    }, 100);
                }
            }
        });
    });
}

// Invoice List Functionality
let currentInvoiceFilter = 'all';

function initInvoiceList() {
    populateInvoiceTable();
    setupInvoiceListInteractivity();
    updatePaginationInfo('all');
}

function populateInvoiceTable(statusFilter = 'all') {
    const tbody = document.getElementById('invoice-table-body');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    // Filter invoices based on status
    const filteredInvoices = statusFilter === 'all' ? 
        mockData.invoices : 
        mockData.invoices.filter(invoice => {
            const invoiceStatus = invoice.status.toLowerCase().replace(' ', '-');
            return invoiceStatus === statusFilter;
        });
    
    filteredInvoices.forEach(invoice => {
        const row = document.createElement('tr');
        
        // Format total amount
        const totalFormatted = invoice.total === 0 ? '$0.00' : 
            `$${invoice.total.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
        
        // Format status class
        const statusClass = invoice.status.toLowerCase().replace(' ', '-');
        
        // Get frequency icon
        const frequencyIcon = getFrequencyIcon(invoice.frequency);
        
        row.innerHTML = `
            <td>
                <span class="invoice-total">${totalFormatted}</span>
                <span class="invoice-currency">USD</span>
            </td>
            <td>
                <div class="invoice-frequency">
                    ${frequencyIcon}
                    ${invoice.frequency}
                </div>
            </td>
            <td>
                <div class="invoice-status ${statusClass}">${invoice.status}</div>
            </td>
            <td><span class="invoice-number">${invoice.id}</span></td>
            <td><span class="invoice-customer">${invoice.customer || '—'}</span></td>
            <td><span class="invoice-email">${invoice.email}</span></td>
            <td><span class="invoice-date">${invoice.due}</span></td>
            <td><span class="invoice-date">${invoice.created}</span></td>
            <td><span class="invoice-date">${invoice.finalized}</span></td>
            <td>
                <div class="invoice-actions">
                    <button class="invoice-actions-btn" title="More actions">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                            <circle cx="8" cy="2" r="1.5"/>
                            <circle cx="8" cy="8" r="1.5"/>
                            <circle cx="8" cy="14" r="1.5"/>
                        </svg>
                    </button>
                </div>
            </td>
        `;
        
        tbody.appendChild(row);
    });
}

function getFrequencyIcon(frequency) {
    switch (frequency.toLowerCase()) {
        case 'daily':
            return `<svg class="invoice-frequency-icon" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M8 2a6 6 0 100 12A6 6 0 008 2zM7 6a1 1 0 112 0v2.5l1.5 1a1 1 0 11-1 1.732L8 10.5A1 1 0 017 9.5V6z"/>
                    </svg>`;
        case 'monthly':
            return `<svg class="invoice-frequency-icon" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M3.5 2A1.5 1.5 0 002 3.5v9A1.5 1.5 0 003.5 14h9a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0012.5 2h-9zM3 5h10v7.5a.5.5 0 01-.5.5h-9a.5.5 0 01-.5-.5V5z"/>
                    </svg>`;
        case 'one-time':
            return `<svg class="invoice-frequency-icon" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M8 2a6 6 0 100 12A6 6 0 008 2z"/>
                    </svg>`;
        default:
            return '';
    }
}

function setupInvoiceListInteractivity() {
    // Status pill interactions (functional filtering)
    const statusPills = document.querySelectorAll('.invoice-pill');
    statusPills.forEach(pill => {
        pill.addEventListener('click', () => {
            // Remove active state from all pills
            statusPills.forEach(p => p.classList.remove('active'));
            
            // Add active state to clicked pill
            pill.classList.add('active');
            
            // Get filter status and apply filter
            const filterStatus = pill.getAttribute('data-status');
            currentInvoiceFilter = filterStatus;
            
            // Repopulate table with filtered data
            populateInvoiceTable(filterStatus);
            
            // Update pagination info
            updatePaginationInfo(filterStatus);
        });
    });
    
    // Table row hover effects are handled by CSS
    // Pagination is currently disabled since we only have 20 items
}

function updatePaginationInfo(statusFilter = 'all') {
    const paginationRange = document.getElementById('pagination-range');
    if (!paginationRange) return;
    
    // Count filtered invoices
    const filteredCount = statusFilter === 'all' ? 
        mockData.invoices.length : 
        mockData.invoices.filter(invoice => {
            const invoiceStatus = invoice.status.toLowerCase().replace(' ', '-');
            return invoiceStatus === statusFilter;
        }).length;
    
    paginationRange.textContent = `1-${filteredCount} of ${filteredCount}`;
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
            if (chartType === 'arpu') {
                showModal('arpu');
            } else if (chartType && typeof mockData !== 'undefined' && mockData.modalChartData && mockData.modalChartData[chartType]) {
                showModal(chartType);
            }
        });
    }
    
    // Add document-level event delegation as backup (only once)
    if (!window.arpuClickListenerAdded) {
        window.arpuClickListenerAdded = true;
        document.addEventListener('click', function(event) {
            const target = event.target.closest('.billing-chart-main[data-chart="arpu"]');
            if (target) {
                event.preventDefault();
                event.stopPropagation();
                showModal('arpu');
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
        totalElement.innerHTML = formatCurrency(total) + ' <span class="amount-growth">+11.2%</span>';
    }
}

// Setup Info Icon Tooltip Functionality
function setupInfoIconTooltip() {
    // Find all info icons on the page
    const infoIcons = document.querySelectorAll('.billing-chart-info-icon');
    
    infoIcons.forEach(infoIcon => {
        // Get the metric key from the icon's data attribute
        const metricKey = infoIcon.getAttribute('data-metric');
        
        // Find the corresponding tooltip
        const tooltip = infoIcon.closest('.billing-chart-info-icon-container').querySelector('.info-tooltip');
        
        if (!tooltip || !metricKey) {
            return;
        }
        
        setupSingleTooltip(infoIcon, tooltip, metricKey);
    });
}

// Setup functionality for a single tooltip
function setupSingleTooltip(infoIcon, tooltip, metricKey) {
    
    // Function to populate tooltip content
    function populateTooltipContent() {
        // Access metrics data from MetricsPanel instance
        const metricsPanel = window.metricsPanel;
        
        if (!metricsPanel || !metricsPanel.metrics || !metricsPanel.metrics[metricKey]) {
            // Show fallback content with inline "View more" link
            const tooltipContent = tooltip.querySelector('.tooltip-content');
            let fallbackContent = `<p>A sum of your billing revenue and usage charges measured by meters. Usage and billing revenue have been committed by customers but may not have yet been collected. <a href="#" class="tooltip-view-more-link" data-metric="${metricKey}">View more</a></p><div class="tooltip-settings"><div class="tooltip-setting-item">Monthly recurring revenue is included</div><div class="tooltip-setting-item">One time discounts are included</div><div class="tooltip-setting-item">Free credits are included</div></div>`;
            
            tooltipContent.innerHTML = fallbackContent;
            
            // Add click event listener to the fallback View more link
            const fallbackViewMoreLink = tooltipContent.querySelector('.tooltip-view-more-link');
            if (fallbackViewMoreLink) {
                fallbackViewMoreLink.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation(); // Prevent event from bubbling up to chart elements
                    e.stopImmediatePropagation(); // Prevent other handlers on the same element
                    
                    // Hide the tooltip
                    tooltip.classList.remove('visible');
                    // Open the metric definition panel directly to the detail view
                    const metricsPanel = window.metricsPanel;
                    if (metricsPanel && metricsPanel.metrics[metricKey]) {
                        metricsPanel.currentPanelType = 'revenue';
                        metricsPanel.currentMetric = metricKey;
                        
                        // Set up the panel content and open directly to detail panel
                        const metricData = metricsPanel.metrics[metricKey];
                        if (metricData && metricsPanel.metricDetailPanel) {
                            metricsPanel.updateDetailPanelContent(metricData);
                            metricsPanel.metricDetailPanel.classList.add('open');
                            document.body.style.overflow = 'hidden';
                        }
                    }
                });
            }
            return;
        }
        
        const metricData = metricsPanel.metrics[metricKey];
        const tooltipContent = tooltip.querySelector('.tooltip-content');
        
        // Build tooltip content with inline "View more" link
        let content = `<p>${metricData.shortDescription} <a href="#" class="tooltip-view-more-link" data-metric="${metricKey}">View more</a></p>`;
        
        // Add settings list with inline status
        if (metricData.controls && metricData.controls.length > 0) {
            content += '<div class="tooltip-settings">';
            metricData.controls.forEach(control => {
                // Determine if the setting title is plural by checking common plural patterns
                const isPlural = control.title.toLowerCase().endsWith('s') && 
                                !control.title.toLowerCase().endsWith('ss') && 
                                !control.title.toLowerCase().endsWith('us') &&
                                !control.title.toLowerCase().endsWith('is');
                const verb = isPlural ? 'are' : 'is';
                
                if (control.checked) {
                    content += `<div class="tooltip-setting-item">${control.title} ${verb} included</div>`;
                } else {
                    content += `<div class="tooltip-setting-item">${control.title} ${verb} <strong>not included</strong></div>`;
                }
            });
            content += '</div>';
        }
        
        tooltipContent.innerHTML = content;
        
        // Add click event listener to the View more link
        const viewMoreLink = tooltipContent.querySelector('.tooltip-view-more-link');
        if (viewMoreLink) {
            viewMoreLink.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation(); // Prevent event from bubbling up to chart elements
                e.stopImmediatePropagation(); // Prevent other handlers on the same element
                
                // Hide the tooltip
                tooltip.classList.remove('visible');
                // Open the metric definition panel directly to the detail view
                const metricsPanel = window.metricsPanel;
                if (metricsPanel && metricsPanel.metrics[metricKey]) {
                    metricsPanel.currentPanelType = 'revenue'; // Set to revenue since this is the monthly committed revenue metric
                    metricsPanel.currentMetric = metricKey;
                    
                    // Set up the panel content and open directly to detail panel
                    const metricData = metricsPanel.metrics[metricKey];
                    if (metricData && metricsPanel.metricDetailPanel) {
                        metricsPanel.updateDetailPanelContent(metricData);
                        metricsPanel.metricDetailPanel.classList.add('open');
                        document.body.style.overflow = 'hidden';
                    }
                }
            });
        }
    }
    
    // Show tooltip on hover
    infoIcon.addEventListener('mouseenter', () => {
        populateTooltipContent();
        tooltip.classList.add('visible');
    });
    
    // Hide tooltip when mouse leaves
    infoIcon.addEventListener('mouseleave', () => {
        tooltip.classList.remove('visible');
    });
    
    // Also hide tooltip when mouse leaves the tooltip itself
    tooltip.addEventListener('mouseleave', () => {
        tooltip.classList.remove('visible');
    });
    
    // Keep tooltip visible when hovering over it
    tooltip.addEventListener('mouseenter', () => {
        tooltip.classList.add('visible');
    });
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
        const invoicesMetricsLink = document.getElementById('invoicesMetricsCalculationsLink');
        const metersMetricsLink = document.getElementById('metersMetricsCalculationsLink');
        
        if (metricsLink) {
            metricsLink.addEventListener('click', (e) => {
                e.preventDefault();
                this.currentPanelType = 'earnings';
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
        
        if (invoicesMetricsLink) {
            invoicesMetricsLink.addEventListener('click', (e) => {
                e.preventDefault();
                this.currentPanelType = 'invoices';
                this.openMainPanel();
            });
        }
        
        if (metersMetricsLink) {
            metersMetricsLink.addEventListener('click', (e) => {
                e.preventDefault();
                this.currentPanelType = 'meters';
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
                title: 'Monthly committed revenue (MCR)',
                shortDescription: 'How much money your business would earn this month from all active paid subscriptions and metered usage so far, assuming nothing changes for the rest of the month.',
                description: 'How much money your business would earn this month from all active paid subscriptions and metered usage so far, assuming nothing changes for the rest of the month. The sum of Monthly Recurring Revenue (MRR) and Monthly Usage Revenue at the point in time measured.',
                controls: [
                    {
                        id: 'toggleDiscounts',
                        title: 'One time discounts',
                        description: 'Include one time discounts in your monthly committed revenue',
                        checked: true
                    },
                    {
                        id: 'toggleCredits',
                        title: 'Free credits',
                        description: 'Include free credits in your monthly committed revenue',
                        checked: true
                    }
                ]
            },
            'total-revenue-growth': {
                title: 'MCR growth rate',
                shortDescription: 'The percentage change in what your business would earn this month from subscriptions and usage, compared to the previous period.',
                description: 'The percentage change in what your business would earn this month from subscriptions and usage, compared to the previous period. The percentage change in Monthly Committed Revenue (MRR + Monthly Usage Revenue) between the current period and the immediately preceding period, excluding trials, free plans, taxes, and discounts.',
                controls: []
            },
            'gross-revenue': {
                title: 'Gross payment volume',
                shortDescription: 'How much money your business has earned from settled payments before any deductions.',
                description: 'How much money your business has earned from settled payments before any deductions. The total revenue from payments that are successfully settled to your Stripe balance, excluding pending or failed payments, and before any deductions for fees, refunds, disputes, or transfers.',
                controls: []
            },
            'gross-volume': {
                title: 'Gross volume',
                shortDescription: 'How much money your business has earned from settled payments before any deductions.',
                description: 'How much money your business has earned from settled payments before any deductions. The total revenue from payments that are successfully settled to your Stripe balance, excluding pending or failed payments, and before any deductions for fees, refunds, disputes, or transfers.',
                controls: []
            },
            'net-revenue': {
                title: 'Net payment volume',
                shortDescription: 'How much money your business has earned from settled payments after fees, refunds, disputes, and transfers are deducted.',
                description: 'How much money your business has earned from settled payments after fees, refunds, disputes, and transfers are deducted. The total revenue from payments that are successfully settled to your Stripe balance, minus Stripe fees, refunds, dispute amounts, and Connect transfers. Pending or failed payments are excluded.',
                controls: []
            },
            'mrr': {
                title: 'Monthly recurring revenue (MRR)',
                shortDescription: 'How much money your business would earn this month from all active paid subscriptions if nothing changed for the rest of the month.',
                description: 'How much money your business would earn this month from all active paid subscriptions if nothing changed for the rest of the month. Monthly recurring revenue is the monthly-normalized value of all active and past_due subscriptions, excluding trials, free plans, taxes, and metered usage products.',
                controls: []
            },
            'meter-revenue': {
                title: 'Monthly usage revenue',
                shortDescription: 'How much money your business would earn this month from metered usage assuming no additional usage for the rest of the month.',
                description: 'How much money your business would earn this month from metered usage assuming no additional usage for the rest of the month. Monthly usage revenue is the total value generated from usage across all meters in a given month, excluding taxes and discounts.',
                controls: []
            },
            'arpu': {
                title: 'Average revenue per user (ARPU)',
                shortDescription: 'How much money your business would earn per active customer this month, based on monthly committed revenue.',
                description: 'How much money your business would earn per active customer this month, based on monthly committed revenue. Monthly Committed Revenue divided by the number of active customers in the same period. An active customer is one with an active subscription or any non-zero metered usage.',
                controls: []
            },
            'lifetime-value': {
                title: 'Lifetime value',
                shortDescription: 'How much money your business would earn from a customer over their entire relationship with you, based on monthly committed revenue.',
                description: 'How much money your business would earn from a customer over their entire relationship with you, based on monthly committed revenue. The projected total revenue from a customer over their lifetime, calculated as ARPU multiplied by the average customer lifetime in months. ARPU is based on Monthly Committed Revenue divided by the number of active customers in the same period, where an active customer is one with an active subscription or any non-zero metered usage.',
                controls: []
            },
            'net-dollar-retention': {
                title: 'Net dollar retention',
                shortDescription: 'How much money your existing customers would earn your business this month compared to the previous period.',
                description: 'How much money your existing customers would earn your business this month compared to the previous period. The percentage change in Monthly Committed Revenue from the same set of customers between the current period and the previous period, excluding revenue from any new customers added in the current period.',
                controls: []
            },
            'utilization-rate': {
                title: 'Utilization rate',
                shortDescription: 'Average percentage of subscription data limits used by customers.',
                description: 'Average percentage of subscription data limits used by customers each month. This metric shows how much of their allocated subscription capacity (data, API calls, storage, etc.) your users are consuming relative to their plan limits.',
                controls: []
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
            },
            
            // Invoice-specific metrics
            'invoice-revenue': {
                title: 'Invoice revenue',
                shortDescription: 'Total revenue generated from issued invoices.',
                description: 'Total revenue generated from issued invoices including subscription charges and one-time fees.',
                controls: [
                    {
                        id: 'includeOneTimeCharges',
                        title: 'One-time charges',
                        description: 'Include one-time fees and setup charges in invoice revenue',
                        checked: true
                    },
                    {
                        id: 'includePendingInvoices',
                        title: 'Pending invoices',
                        description: 'Include revenue from invoices that have been sent but not yet paid',
                        checked: false
                    }
                ]
            },
            'invoice-revenue-growth': {
                title: 'Invoice revenue growth',
                shortDescription: 'Percent change of invoice revenue over time.',
                description: 'Percent change of invoice revenue over time.',
                controls: []
            },
            
            // Meter-specific metrics
            'meter-revenue-growth': {
                title: 'Monthly usage revenue growth',
                shortDescription: 'Percent change of monthly usage revenue over time.',
                description: 'Percent change of monthly usage revenue over time.',
                controls: []
            },
            'aggregate-usage': {
                title: 'Aggregate usage',
                shortDescription: 'Total number of API calls across all your meters.',
                description: 'Aggregate usage shows the absolute number of API calls your meters have made across all your services. This includes all successful metered API requests, data processing calls, and compute operations that contribute to your usage billing.',
                controls: [
                    {
                        id: 'includeTestModeUsage',
                        title: 'Test mode usage',
                        description: 'Include usage from test mode requests in the aggregate calculation',
                        checked: false
                    },
                    {
                        id: 'includeFailedRequests',
                        title: 'Failed requests',
                        description: 'Include failed API requests in the usage aggregate',
                        checked: false
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
        if (this.currentPanelType === 'earnings') {
            metricsToShow = [
                'total-committed-revenue',
                'total-revenue-growth', 
                'gross-revenue',
                'net-revenue',
                'mrr',
                'meter-revenue'
            ];
        } else if (this.currentPanelType === 'revenue') {
            metricsToShow = [
                'total-committed-revenue',
                'total-revenue-growth', 
                'gross-revenue',
                'gross-volume',
                'net-revenue',
                'mrr',
                'meter-revenue',
                'arpu',
                'lifetime-value',
                'net-dollar-retention'
            ];
        } else if (this.currentPanelType === 'subscriptions') {
            metricsToShow = [
                'subscription-revenue',
                'subscription-revenue-growth',
                'mrr'
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
                'net-dollar-retention',
                'utilization-rate'
            ];
        } else if (this.currentPanelType === 'invoices') {
            metricsToShow = [
                'invoice-revenue',
                'invoice-revenue-growth'
            ];
        } else if (this.currentPanelType === 'meters') {
            metricsToShow = [
                'meter-revenue',
                'meter-revenue-growth',
                'aggregate-usage'
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
            
            // Store current settings as baseline for change detection
            this.originalSettings = {};
            
            metricData.controls.forEach(control => {
                // Store current value (reflects any previously saved changes)
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
            // Save current settings to the metric data
            this.saveCurrentSettings();
            
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
    
    saveCurrentSettings() {
        if (!this.currentMetric || !this.metrics[this.currentMetric]) {
            return;
        }
        
        const metricData = this.metrics[this.currentMetric];
        const controlsContainer = document.querySelector('.metric-detail-controls');
        
        if (controlsContainer && metricData.controls) {
            metricData.controls.forEach(control => {
                const checkbox = document.getElementById(control.id);
                if (checkbox) {
                    // Update the metric data with the current checkbox state
                    control.checked = checkbox.checked;
                }
            });
        }
    }
    
    showToastNotification() {
        // Create toast element
        const toast = document.createElement('div');
        toast.className = 'toast-notification';
        toast.innerHTML = `
            <div class="toast-content">
                <div class="toast-text">Update successful, allow 24 hours for changes to appear.</div>
                <button class="toast-close" aria-label="Close">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 4L4 12M4 4l8 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </div>
        `;
        
        // Add to document
        document.body.appendChild(toast);
        
        // Add close button functionality
        const closeButton = toast.querySelector('.toast-close');
        const closeToast = () => {
            toast.classList.remove('show');
            setTimeout(() => {
                if (toast.parentNode) {
                    toast.parentNode.removeChild(toast);
                }
            }, 300);
        };
        
        if (closeButton) {
            closeButton.addEventListener('click', closeToast);
        }
        
        // Trigger animation
        setTimeout(() => {
            toast.classList.add('show');
        }, 100);
        
        // Auto-remove after 4 seconds (optional, since user can close manually)
        setTimeout(() => {
            if (toast.parentNode) {
                closeToast();
            }
        }, 4000);
    }
}

// Initialize metrics panel when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the metrics panel functionality and make it globally accessible
    window.metricsPanel = new MetricsPanel();
    
    // Setup tooltip when DOM is ready
    setTimeout(() => {
        setupInfoIconTooltip();
    }, 1000);
}); 