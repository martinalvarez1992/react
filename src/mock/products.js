const products = [
    {
      id: '1',
      category: 'plantA',
      name: 'Jade Plant Mini',
      color: 'bg-yellow-500',
      textColor: 'text-yellow-500',
      hoverColor: 'hover:bg-yellow-600',
      description:
        'Are you a sucker for succulents? The Crassula Green Mini will be your dream plant kid. One of the easiest houseplants to look after, the Crassula Green Mini boasts a lush foliage which beautifies any room. Also considered lucky as per Feng Shui for its coin like round plump leaves, so go on, bring some green home, the luck just tags along for free.',
      rectColor: '#f3c06b',
      registerDate: new Date('2017-01-03'),
      capacity: 7,
      image: 'https://i.ibb.co/CnB47Zc/crassulagreenmini-45.webp',
      price: '650',
      stock: 7,
    },
    {
      id: '2',
      category: 'plantC',
      name: 'Broken Heart Plant',
      color: 'bg-blue-500',
      textColor: 'text-blue-500',
      hoverColor: 'hover:bg-blue-600',
      description:
        'One of the most popular houseplants, this easy growing plant with its heart shaped leaves that have holes in the leaf blade is a crowd favourite. Quick to grow with delicate trailing vines that can be styled for every space, the Philodendron broken heart will add an instant tropical feel and charm to your space.',
      rectColor: '#6da3fb',
      registerDate: new Date('2018-03-03'),
      image: 'https://i.ibb.co/GxTxfjj/philodendronbrokenheart-45-1.webp',
      price: '500',
      stock: 2
    },
    {
      id: '3',
      category: 'plantC',
      name: 'Money Plant Golden',
      color: 'bg-purple-500',
      textColor: 'text-purple-500',
      hoverColor: 'hover:bg-purple-600',
      description:
        'A darling of home gardeners everywhere, the Money Plant Golden is famous for its never give up attitude. This plant can survive neglect and adapt to almost all growing conditions to fill your space with a trailing growth of bright green coloured foliage in no time. An air purifier that can be styled for any space to give it an easy tropical look.',
      rectColor: '#a17cf3',
      registerDate: new Date('2018-03-03'),
      image: 'https://i.ibb.co/xz9KtmS/moneygolden-45-1.webp',
      price: '850',
      stock: 1
    },
    {
        id: '4',
        category: 'plantA',
        name: 'Jade Plant Mini',
        color: 'bg-yellow-500',
        textColor: 'text-yellow-500',
        hoverColor: 'hover:bg-yellow-600',
        description:
          'Are you a sucker for succulents? The Crassula Green Mini will be your dream plant kid. One of the easiest houseplants to look after, the Crassula Green Mini boasts a lush foliage which beautifies any room. Also considered lucky as per Feng Shui for its coin like round plump leaves, so go on, bring some green home, the luck just tags along for free.',
        rectColor: '#f3c06b',
        registerDate: new Date('2017-01-03'),
        capacity: 7,
        image: 'https://i.ibb.co/CnB47Zc/crassulagreenmini-45.webp',
        price: '650',
        stock: 7,
      },
      {
        id: '5',
        category: 'plantB',
        name: 'Broken Heart Plant',
        color: 'bg-blue-500',
        textColor: 'text-blue-500',
        hoverColor: 'hover:bg-blue-600',
        description:
          'One of the most popular houseplants, this easy growing plant with its heart shaped leaves that have holes in the leaf blade is a crowd favourite. Quick to grow with delicate trailing vines that can be styled for every space, the Philodendron broken heart will add an instant tropical feel and charm to your space.',
        rectColor: '#6da3fb',
        registerDate: new Date('2018-03-03'),
        image: 'https://i.ibb.co/GxTxfjj/philodendronbrokenheart-45-1.webp',
        price: '500',
        stock: 2
      },
      {
        id: '6',
        category: 'plantA',
        name: 'Money Plant Golden',
        color: 'bg-purple-500',
        textColor: 'text-purple-500',
        hoverColor: 'hover:bg-purple-600',
        description:
          'A darling of home gardeners everywhere, the Money Plant Golden is famous for its never give up attitude. This plant can survive neglect and adapt to almost all growing conditions to fill your space with a trailing growth of bright green coloured foliage in no time. An air purifier that can be styled for any space to give it an easy tropical look.',
        rectColor: '#a17cf3',
        registerDate: new Date('2018-03-03'),
        image: 'https://i.ibb.co/xz9KtmS/moneygolden-45-1.webp',
        price: '850',
        stock: 1
      },
  ];
 
  
//   const categories = [
//     {id: 'plantA', description: 'plantA'},
//     {id: 'plantB', description: 'plantB'},
//     {id: 'plantC', description: 'plantC'}
// ]

const categories = [
  {id: 'plantA', description: 'plantA'},
  {id: 'plantB', description: 'plantB'},
  {id: 'plantC', description: 'plantC'}
]
  export const getCategories = () => {
      return new Promise(resolve => {
          setTimeout(() => {
              resolve(categories)
          }, 500)
      })
  }
  export const getProducts = (category) => {
      return new Promise (resolve => {
          setTimeout(() => {
              resolve (
                category
                ? products.filter((p) => p.category === category)
                : products
              )
          }, 500)
      })
  }

  export const getProductById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
               resolve(products.find((p) => p.id === id))
            }
             )
        }, 500)
  
  }