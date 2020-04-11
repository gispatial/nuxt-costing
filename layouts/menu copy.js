export default {
  items: [
    {
      name: 'DASHBOARD',
      url: '/',
      icon: 'icon-speedometer',
      badge: {
        variant: 'primary',
        text: 'NEW'
      }
    },
    {
      title: true,
      name: 'Monthly Profit',
      class: '',
      wrapper: {
        element: '',
        attributes: {}
      }
    },
    {
      name: 'New Costing',
      url: '/base/forms',
      icon: 'icon-drop'
    },
    {
      name: 'Standard Cost Status',
      url: '/base/forms',
      icon: 'icon-pencil'
    },
    {
      title: true,
      name: 'Daily Profit',
      class: '',
      wrapper: {
        element: '',
        attributes: {}
      }
    },
    {
      name: 'Daily Costing Reports',
      url: '/charts',
      icon: 'icon-pie-chart',
      children: [
        {
          name: 'Daily Profit Reports',
          url: '/charts',
          icon: 'icon-pie-chart'
        },
      ]
    },
    {
      name: 'GitHub Repository',
      url: 'https://github.com/gispatial/nuxt-costing',
      icon: 'icon-cloud-download',
      class: 'mt-auto',
      variant: 'success'
    },
    {
      name: 'Login',
      url: '/pages/login',
      icon: 'icon-layers',
      variant: 'danger'
    }
  ]
}
