let data = {
    data: [
      {
        name: 'name1',
        imgUrl: 'https://img1.png',
      },
      {
        name: 'name2',
        imgUrl: 'https://img2.png',
        children: [
          {
            name: 'name21',
            imgUrl: 'https://img21.png',
          },
          {
            name: 'name22',
            imgUrl: 'https://img22.png',
          },
          {
            name: 'name23',
            imgUrl: 'https://img23.png',
          },
        ],
      },
      {
        name: 'name3',
        imgUrl: 'https://img3.png',
      },
      {
        name: 'name4',
        imgUrl: 'https://img4.png',
        children: [
          {
            name: 'name41',
            imgUrl: 'https://img41.png',
          },
          {
            name: 'name42',
            imgUrl: 'https://img42.png',
            children: [
              {
                name: 'name421',
                imgUrl: 'https://img421.png',
              },
              {
                name: 'name422',
                imgUrl: 'https://img422.png',
              },
            ],
          },
          {
            name: 'name43',
            imgUrl: 'https://img43.png',
          },
        ],
      },
      {
        name: 'name5',
        imgUrl: 'https://img5.png',
      },
      {
        name: 'name6',
        imgUrl: 'https://img6.png',
      },
      {
        name: 'name7',
        imgUrl: 'https://img7.png',
      },
    ],
  };

  let imgeUrl = [];

  data.data.forEach(item =>{
      imgeUrl.push(item.imgUrl)
      {
          if(item.children){
             item.children.forEach(item => {
                imgeUrl.push(item.imgUrl)
             })
          }
      }
  })

  console.log(imgeUrl)