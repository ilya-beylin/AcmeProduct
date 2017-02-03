var _products = [
  {id: 1,  name: 'Baseball bat'},
  {id: 2,  name: 'Tennis racquet'},
  {id: 3,  name: 'Golf clubs'}
];

var index = 4;

module.exports = {
    getProducts: function(){return _products;},
    deleteProduct: function(id){
      var toDelete = this.getProducts().filter(function(item){return item.id === id;})[0];
      var idx = this.getProducts().indexOf(toDelete);
      this.getProducts().splice(idx, 1);
    },
    addProduct: function(product){
      _products.push({id: index, name: product});
      index++;
    },
    getProduct: function(id){
      var product = this.getProducts().filter(function(item){return item.id === id;})[0];
      return product;
    },
    editProduct: function(id, name){//pass in the product to edit
      //you've got the product right here. just edit it..
      var toEdit = this.getProducts().filter(function(item){return item.id === id;})[0];
      var idx = this.getProducts().indexOf(toEdit);//don't think you need this..
      this.getProducts()[idx]['name'] = name;//or this
    }
};
