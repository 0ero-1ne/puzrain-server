const express = require("express"),
      cors = require("cors"),
      morgan = require("morgan"),
      bodyParser = require("body-parser");

const app = express();
const port = 3001;

const Category = require('./models/Category');
const Product = require('./models/Product');
const Review = require('./models/Review');
const User = require('./models/User');

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
 
app.get("/categories", async function (req, res) {
    let categories;

    try {
        categories = await Category.find({});
    } catch(error) {
        throw error;
    }

    res.send(categories);
});

app.get("/products", async function (req, res) {
    let products;

    try {
        products = await Product.find({});
    } catch(error) {
        throw error;
    }

    res.send(products);
});

app.get("/reviews", async function (req, res) {
    let reviews;

    try {
        reviews = await Review.find({});
    } catch(error) {
        throw error;
    }

    res.send(reviews);
});

app.get("/create", function (req, res) {
    const category = new Category({
        title: req.query.title
    });

    category.save((error, result) => {
        if (error) {
            throw error;
        }
        res.redirect("/categories");
    });
});

app.get("/crprod", (req, res) => {
    const product = new Product({
        title: req.query.title,
        price: req.query.price,
        company: req.query.company,
        country: req.query.country,
        quantity: req.query.quantity,
        status: req.query.status,
        category: req.query.category,
        description: req.query.description
    });

    product.save((error, result) => {
        if (error) {
            throw error;
        }
        res.redirect("/products");
    });
})

app.get("/", function (req, res) {
    res.send("<h1>Main page</h1>");
});

app.post("/create_review", async function (req, res) {
    const href = req.body.product_href;
    const review = new Review({
        name: req.body.review_name,
        city: req.body.review_city,
        comment: req.body.review_comment,
        productImg: req.body.review_productImg
    });
    
    review.save((error, result) => {
        if (error) {
            throw error;
        }
        res.redirect(href);
    });
});

app.post("/register", async function (req, res) {
    const host = req.body.host;

    const user = new User({
        username: req.body.reg_username,
        email: req.body.reg_email,
        password: req.body.reg_password
    });
    
    user.save((error, result) => {
        if (error) {
            res.redirect(host + "/login");
        }
        res.redirect(host + "/login");
    });
});

app.get("/product", async function (req, res) {
    let product;

    try {
        product = await Product.findOne({ _id: req.query.id });
    } catch(error) {
        console.log(error);
    }

    res.send(product);    
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});