const { Schema, model } = require('mongoose');

const productSchema = Schema(
  {
    category: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      default: 1200,
    },
    description: {
      type: String,
      trim: true,
      default:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi soluta culpa maiores dicta, asperiores facere eaque provident, ducimus eum nobis vero iusto. Ad rerum nostrum veniam? Omnis dolore eaque ipsa?',
    },
    image: {
      type: String,
      default: '/images/no-image.jpg',
    },
    stoke: {
      type: Boolean,
      default: 'true',
    },
  },
  { timestamps: true }
);

const Product = model('products', productSchema);

module.exports = Product;
