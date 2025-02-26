import React from 'react';

const Allproduct = ({ data = [] }) => {
  return (
    <div>
      <section className="shop_section layout_padding-t">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>Latest Products</h2>
          </div>
          <div className="row">
            {data.length > 0 ? (
              data.map((product) => (
                <div
                  className="col-sm-6 col-md-4 col-lg-3"
                  key={product.id || product._id} // Use a unique identifier
                >
                  <div className="box">
                    <a href={`/single?id=${product.id}`} className="text-decorastion">
                      <div className="img-box">
                        {/* Use the product image from the API */}
                        <img
                          src={product.image || "assets/images/p8.png"} // Fallback if no image
                          alt={product.jewellery_name}
                        />
                      </div>
                      <div className="detail-box">
                        <h6>{product.jewellery_name}</h6>
                        <h6>
                          Price <span>${product.price || "N/A"}</span>
                        </h6>
                      </div>
                      {product.isNew && (
                        <div className="new">
                          <span>New</span>
                        </div>
                      )}
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <p>No products available</p>
            )}
          </div>
          <div className="btn-box">
            <a href="/" className="text-decorastion">View All Products</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Allproduct;
