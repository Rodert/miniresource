const resources = [
  {
    id: 1,
    title: '微信小程序开发文档',
    description: '官方小程序开发文档，包含完整的API说明和开发指南',
    url: 'https://developers.weixin.qq.com/miniprogram/dev/framework/',
    category: 'development',
    createTime: '2024-01-01',
    icon: '📱',
    rating: 4.8,
    downloads: 15000,
    tags: ['小程序', '开发', '文档']
  },
  {
    id: 2,
    title: 'GitHub',
    description: '全球最大的代码托管平台，数百万开发者的开源项目',
    url: 'https://github.com',
    category: 'tools',
    createTime: '2024-01-02',
    icon: '🐱',
    rating: 4.9,
    downloads: 25000,
    tags: ['代码托管', '开源', '协作']
  },
  {
    id: 3,
    title: 'MDN Web Docs',
    description: 'Mozilla的Web技术开发文档，提供全面的Web开发学习资源',
    url: 'https://developer.mozilla.org',
    category: 'learning',
    createTime: '2024-01-03',
    icon: '📚',
    rating: 4.7,
    downloads: 12000,
    tags: ['Web开发', '学习', '文档']
  },
  {
    id: 4,
    title: 'VS Code',
    description: '微软出品的强大代码编辑器，支持多种编程语言和丰富的插件生态',
    url: 'https://code.visualstudio.com',
    category: 'development',
    createTime: '2024-01-04',
    icon: '💻',
    rating: 4.8,
    downloads: 18000,
    tags: ['编辑器', 'IDE', '开发工具']
  },
  {
    id: 5,
    title: 'Stack Overflow',
    description: '全球最大的程序员问答社区，解决各类编程问题',
    url: 'https://stackoverflow.com',
    category: 'learning',
    createTime: '2024-01-05',
    icon: '❓',
    rating: 4.6,
    downloads: 20000,
    tags: ['问答', '社区', '学习']
  }
];

const categories = [
  {
    id: 'development',
    name: '开发工具',
    icon: 'code',
    color: '#4CAF50',
    description: '各类编程开发必备工具'
  },
  {
    id: 'tools',
    name: '实用工具',
    icon: 'wrench',
    color: '#2196F3',
    description: '提高效率的实用工具集'
  },
  {
    id: 'learning',
    name: '学习资源',
    icon: 'book',
    color: '#FF9800',
    description: '优质的学习平台和教程'
  },
  {
    id: 'community',
    name: '技术社区',
    icon: 'team',
    color: '#9C27B0',
    description: '开发者交流和分享平台'
  },
  {
    id: 'framework',
    name: '开发框架',
    icon: 'api',
    color: '#E91E63',
    description: '主流的开发框架和库'
  }
];

module.exports = {
  resources,
  categories
};