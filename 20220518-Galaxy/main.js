let pageData ={
    productName:"訂張票到月球",
    productDescription:"月球之旅是搭乘我們最高級的飛行船，可以觀看外太空的風景",
    imageSrc:[
        "images/asteroid.jpg",
        "images/fantasy.jpg",
        "images/space.jpg",
        "images/spaceship.jpg",
    ],
    h2ClassController:{
        centered:true,
        colorFont:true
    },
    pStyleController:{
        color:'blue',
        'margin-left':'50px',
        'font-size':'20px',
        'font-style':'italic'
    },
    imageStyleController:{
        margin:'auto',
        display:'block',
        width:'50%'
    },
    imageAlt:"Photo from space",
    productClasses:[
        {
            name:'Coach',
            price:125000,
            seatAvailable:20,
            earlyBird:true
        },
        {
            name:'Business',
            price:275000,
            seatAvailable:6,
            earlyBird:true
        },
        {
            name:'First', 
            price:430000,
            seatAvailable:2,
            earlyBird:false
        }
    ]
};

const App = Vue.createApp({
    data(){
        return pageData;
    }
});

App.mount("#app");