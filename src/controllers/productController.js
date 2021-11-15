const producto = require("../../public/product.js");

const productController = {
  renderProduct(req, res) {
    res.render("pages/product", {
      title: `Producto ${req.params.id}`,
      producto: producto,
      session: req.session,
    });
  },
};

module.exports = productController;
