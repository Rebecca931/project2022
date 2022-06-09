let pageData = {
    menbers: [{
                name:'Susan',
                gender: 'Female'
              },
              {
                    name: 'Peter',
                  gender: 'Male'
              },
              {
                    name: 'Bill',
                  gender: 'Unknow'
              }]
};
    
Vue.createApp({
    data(){return pageData;}
}).mount("#app");