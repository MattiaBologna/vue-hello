console.log('test');


        const { createApp } = Vue
        
        createApp({
            data() {
                return {
                    message: 'Testo diverso da: Hello Vue!',
                    anotherMessage: 'Test',
                    imgSrc: 'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
                }
    }
  }).mount('#app')
