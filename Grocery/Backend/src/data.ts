
export const sample_grocery: any[]=[

  {
  id: "1",
  name: "Milk",
  price: 30,
  tags:['Diary','Fresh'],
  favorite:false,
  stars:3.0,
  imageURl:'assets/foodimage1.png',
  origins:['India','Asia']
  },
  {
    id: "2",
    name: "Egg",
    price: 90,
    tags:['Non-veg'],
    favorite:false,
    stars:4.0,
    imageURl:'assets/foodimage2.png',
    origins:['India','Asia']
    },
    {
      id: "3",
      name: "Rice",
      price: 110,
      tags:['Staples'],
      favorite:true,
      stars:5.0,
      imageURl:'assets/foodimages3.png',
      origins:['India','Asia']
      },
      {
        id: "4",
        name: "Wheat",
        price: 110,
        tags:['Staples'],
        favorite:false,
        stars:4.0,
        imageURl:'assets/foodimage4.png',
        origins:['India','Asia']
        },
        {
          id: "5",
          name: "Tomato",
          price: 50,
          tags:['Veg','Fresh'],
          favorite:false,
          stars:4.0,
          imageURl:'assets/foodimage5.png',
          origins:['India','Asia'],

          },
          {
            id: "6",
            name: "Onion",
            price: 60,
            tags:['Veg','Fresh'],
            favorite:true,
            stars:3.5,
            imageURl:'assets/foodimage6.png',
            origins:['Australia','Asia']
            },
            {
              id: "7",
              name: "Apple",
              price: 90,
              tags:['Fruit','Fresh'],
              favorite:true,
              stars:5.0,
              imageURl:'assets/foodimage7.png',
              origins:['India','Asia']
              },
              {
                id: "8",
                name: "Orange",
                price: 70,
                tags:['Fruit','Fresh'],
                favorite:true,
                stars:4.5,
                imageURl:'assets/foodimage8.png',
                origins:['India','Asia']
                }
]

export const sample_tags:any[]=[
  {  name: 'All',count: 8},
  {  name: 'Fruit',count:2},
  { name: 'Fresh' ,count:5},
  { name: 'Staples',count:2},
  {name:'Veg',count:2},
  {name:'Non-veg',count:1}

]

export const sample_users: any[] = [
  {
    name: "John Doe",
    email: "john@gmail.com",
    password: "12345",
    address: "Toronto On",
    isAdmin: true,
  },
  {
    name: "Jane Doe",
    email: "Jane@gmail.com",
    password: "12345",
    address: "Shanghai",
    isAdmin: false,
  },
];
