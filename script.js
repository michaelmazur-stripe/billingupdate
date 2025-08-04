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
        meterRevenue: 30700
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

    meterRevenueChartData: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Meter Revenue',
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
    ]
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
}

// Page Navigation Functions
function showPage(pageName) {
    // Get page elements
    const homePage = document.getElementById('home-page');
    const genericPage = document.getElementById('generic-page');
    const genericPageTitle = document.getElementById('generic-page-title');
    const pageNamePlaceholder = document.getElementById('page-name-placeholder');
    
    // Hide all page content first
    if (homePage) homePage.style.display = 'none';
    if (genericPage) genericPage.style.display = 'none';
    
    if (pageName === 'home' || pageName.toLowerCase() === 'home') {
        // Show home page with dashboard content
        if (homePage) homePage.style.display = 'block';
        // Home page title is always "Today" and doesn't need to be changed
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
    document.getElementById('meterRevenueValue').textContent = formatCurrency(mockData.overviewTotals.meterRevenue);
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

    // Meter Revenue Chart
    const meterRevenueCtx = document.getElementById('meterRevenueChart').getContext('2d');
    new Chart(meterRevenueCtx, {
        type: 'line',
        data: mockData.meterRevenueChartData,
        options: createChartOptions(3600) // 0, 1200, 2400, 3600
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