var Product = require('../models/product');
var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping');

var products = [
    new Product ({
    imagePath: 'http://st.motortrend.com/uploads/sites/10/2015/09/2016-volvo-xc90-excellence-front-three-quarters.jpg',
    title: 'Volvo XC90',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quisquam suscipit quasi autem repudiandae ea excepturi vero possimus nostrum illum, commodi quod asperiores similique, fuga, aperiam voluptatem tempore? Porro, eum!',
    price: 50000 
}),
new Product ({
    imagePath: 'http://teknikensvarld.se/wp-content/uploads/2017/03/volvo-xc60-2018-1.jpg',
    title: 'Volvo XC60',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quisquam suscipit quasi autem repudiandae ea excepturi vero possimus nostrum illum, commodi quod asperiores similique, fuga, aperiam voluptatem tempore? Porro, eum!',
    price: 40000 
}),
new Product ({
    imagePath: 'https://media.ed.edmunds-media.com/volvo/s90/2017/oem/2017_volvo_s90_sedan_t6-inscription_fq_oem_5_1280.jpg',
    title: 'Volvo S80',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quisquam suscipit quasi autem repudiandae ea excepturi vero possimus nostrum illum, commodi quod asperiores similique, fuga, aperiam voluptatem tempore? Porro, eum!',
    price: 45000 
}),
new Product ({
    imagePath: 'https://blog.caranddriver.com/wp-content/uploads/2016/06/2018-Volvo-S90-V90-R-Design-116-626x382.jpg',
    title: 'Volvo v90',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quisquam suscipit quasi autem repudiandae ea excepturi vero possimus nostrum illum, commodi quod asperiores similique, fuga, aperiam voluptatem tempore? Porro, eum!',
    price: 30000 
}),
new Product({
    imagePath: 'http://bilder.bild.de/fotos-skaliert/volvo-studie-40-1-volvo-xc40-1000104899-45922854/2,c=0,h=720.bild.jpg',
    title: 'Volvo XC40',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic itaque maxime doloribus nihil beatae totam quisquam laboriosam vero et nesciunt id, vel, voluptate blanditiis placeat harum error illo officia quasi?',
    price: 30000
})
 ];

 var done = 0;
 for (var i=0; i<products.length;i++){
    products[i].save(function(err,result){
        done++;
        if(done === products.length){
            exit();
        }
    });
 }

function exit() {
 mongoose.disconnect();
}

