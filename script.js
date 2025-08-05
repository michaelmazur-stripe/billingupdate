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

// Initialize Dashboard
function initDashboard() {
    updateMetrics();
    createCharts();
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
    const genericPage = document.getElementById('generic-page');
    const genericPageTitle = document.getElementById('generic-page-title');
    const pageNamePlaceholder = document.getElementById('page-name-placeholder');
    
    // Hide all page content first
    if (homePage) homePage.style.display = 'none';
    if (revenuePage) revenuePage.style.display = 'none';
    if (genericPage) genericPage.style.display = 'none';
    
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
    
    // Helper function to create chart options
    function createChartOptions(maxValue) {
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
                        stepSize: maxValue / 3, // This creates exactly 4 ticks (0, stepSize, 2*stepSize, 3*stepSize)
                        callback: function(value) {
                            return '$' + value.toLocaleString();
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

    // Total Revenue Chart
    const totalRevenueCtx = document.getElementById('totalRevenueChart').getContext('2d');
    new Chart(totalRevenueCtx, {
        type: 'line',
        data: mockData.totalRevenueChartData,
        options: createChartOptions(12000) // 0, 4000, 8000, 12000
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
        valueRow.innerHTML = `<td>${data.title}</td>` + 
            data.tableData.map(row => `<td>${formatCurrency(row.value)}</td>`).join('');
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

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Show home page by default
    showPage('home');
    
    initDashboard();
    
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