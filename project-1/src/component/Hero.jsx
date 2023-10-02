const Hero = () => {
return <main className="hero container">
    <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum voluptate provident soluta dignissimos iusto architecto, reiciendis dolor facere rerum. Accusamus odio quas enim, ipsa est maxime aliquid ut temporibus laborum numquam vero rerum nulla nostrum.</p>
        <div className="hero-btn">
            <button>Shop Now</button>
            <button className="secondary-btn">Category</button>
        </div>
        <div className="shopping">
            <p>Also Available only</p>

            <div className="brand-icons">
                <img src="/image/amazon.png" alt="amazon-logo" />
                <img src="/image/flipkart.png" alt="flipkart-logo" />
            </div>
            
        </div>
    </div>
    <div className="hero-image">
        <img src="/image/shoe_image.png" alt="shoe-img.png" />

    </div>
</main>
};

export default Hero;