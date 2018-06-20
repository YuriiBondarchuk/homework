var app = angular.module('app', []);

// контроллер корзины homework from 24/05/18
app.controller('BasketController', function ($rootScope) {

    this.getBasket = function () {

        return $rootScope.basket;
    }
    this.getBasketMessage = function () {

        return $rootScope.basketmessage;
    }


});
/*Конец*/

//Контроллер промо кода homework from 24/05/18

app.controller('PromoController',function ($scope,$rootScope) {
    this.getPromo = function () {

        return $rootScope.promoadd;
    }


  $scope.addPromo = function () {
      $rootScope.promoadd = +$scope.promokod;
      if($rootScope.promoadd == 1234){
       $rootScope.basket *= 2;
      }
      $scope.promokod='';
    }
});
/*Конец*/
/* ********************************* */

/* Модальное окно и сопутсвующий код*/

    app.factory('notifications',function () {
        var message = 'Вы дейсвительно хотите купить товар ?';
        var showmodal = false;
        return {
            get: function () { return message ;},
            hide : function () { return showmodal },
            show : function (value) { return showmodal = value; },
            close : function () { return showmodal = false; }
        };
    });

app.controller('ModalController',function ($scope) {
    this.click = true;
    // this.getModal = notifications.get();
    // this.hideModal = notifications.hide();

    $scope.modalClick = function () {
        this.click = false;
        console.log(this.click );
        // this.showModal = this.click
        // if (this.click ) {
        //     console.log(this.showModal)
        // this.showModal = notifications.show(this.click);
        //     console.log(this.showModal)
        // }
    }





    // this.closeModal = notifications.close();
    //
    //
    //
    // this.getBasket = function () {
    //     return $rootScope.basket;
    // }
    // this.getBasketMessage = function () {
    //     return $rootScope.basketmessage;
    // }
    //
    //
    // $rootScope.basket = 0;
    // $rootScope.basketmessage = 'Нет товаров';
    //
    //
    // $scope.addBasket = function () {
    //     this.modalCtrl.ura = 1;
    //     console.log(this.modalCtrl.ura);
    //
    //
    //     // $rootScope.basket ++;
    //     // $rootScope.basketmessage = ' товар(а/ов)';
    //     // console.log(notifications.hide() );
    // }
});

app.controller("SomeController",function (notifications) {
    if(modalClick === true){
        this.notifications.show(true);
    };
})
/*Конец*/
/* ********************************* */








var random = {
    image: function () {
        return chance.natural({min: 1, max: 3}) + ".jpg";
    }
};


app.controller('PageController', function ($scope) {
    $scope.funclick = function (event) {


        var id = event.path[0].id;

        console.log(id)
        if (id === 'spisok') {
            angular.element(document.getElementsByClassName('model')).css('display', 'none');
            angular.element(document.getElementsByClassName('spisok_main')).css('display', 'block');
        }
        else {
            angular.element(document.getElementsByClassName('model')).css('display', 'block');
            angular.element(document.getElementsByClassName('spisok_main')).css('display', 'none');
        }
    }

})

app.controller('TabController', function () {
    this.tab = 1;
    this.selectedTab = function (tab) {
        this.tab = tab;
    }
    this.isSelectedTab = function (tab) {
        return this.tab == tab;
    }


});

app.controller('GalleryController', function () {
    this.current = 0;
    this.setCurrent = function (index) {
        this.current = index || 0;
    };
});

app.controller('ReviewController', function () {
    this.colors = ['black','white','yellow','green'];
    this.review = {};
    this.arr = [];
    this.addReview = function(color){
       return this.arr.push(color);
       };

});

app.controller('ProductsController', function (notifications,$scope, $rootScope) {




    this.modelfoto = (new Array(3))
        .join('a')
        .split('a')
        .map(function () {
            return {

                image: random.image(),
                images: [random.image(), random.image(), random.image()]
            };
        });
    this.model = [
        {
            price: 450,
            article: 9020,
            description: 'Романтичное летнее платье в цветочном принте, трапециевидного силуэта.',
            img: "",
            size: 'X,L,M',
            specification: "Your information"

        },
        {
            price: 450,
            article: 9030,
            description: 'Повседневное платье-бюстье прямого силуэта c коротким рукавом, с поясом, длинное с разрезами в боковых швах.',
            img: "img/9030",
            size: 'X,L,M',
            specification: "Your information"

        },
        {
            price: 450,
            article: 9040,
            description: 'Летнее платье из хлопка прямого силуэта, с открытой зоной декольте, отрезное по линии талии,с разрезами, длиною в пол.',
            img: "img/9040",
            size: 'X,L,M',
            specification: "Your information"

        },
        {
            price: 450,
            article: 9041,
            description: 'Летнее платье трапециевидного силуэта, с вырезом горловины "лодочка", рукавами-воланами, длиной до колен.',
            img: "img/9041",
            size: 'X,L,M',
            specification: "Your information"

        },
        {
            price: 450,
            article: 9050,
            description: 'Повседневное летнее платье прямого силуэта, с вырезом горловины типа «кармен», притачными широкими воланами, длиной выше колен.',
            img: "img/9050",
            size: 'X,L,M',
            specification: "Your information"

        },
        {
            price: 450,
            article: 9130,
            description: 'Летнее платье трапециевидного силуэта из хлопка с застежкой на кнопки, карманами в боковых швах, с поясом, длиной до середины икры.',
            img: "img/9130",
            size: 'X,L,M',
            specification: "Your information"

        }

    ]
})
























