import React from 'react';


const Allproduct = ({ data = [] }) => {
  return (
    <div>
      {/* <section className="shop_section layout_padding-t">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>Latest Products</h2>
          </div>
          <div className="row">
            {data.length > 0 ? (
              data.map((product) => (
                <div
                  className="col-sm-6 col-md-4 col-lg-3"
                  key={product.id || product._id} 
                >
                  <div className="box">
                    <a href={`/single?id=${product.id}`} className="text-decorastion">
                      <div className="img-box">
                        <img
                          src={product.image || "assets/images/p8.png"} 
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
      </section> */}
        <section className="shop_section layout_padding">
    <div className="container">
      <div className="heading_container heading_center">
        <h2>
          Latest Products
        </h2>
      </div>
      <div className="row">
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="box">
            <a href="" className='text-decorastion'>
              <div className="img-box">
                <img src="assets/images/p1.png" alt=""/>
              </div>
              <div className="detail-box">
                <h6>
                  Necklace
                </h6>
                <h6>
                  Price
                  <span>
                    $200
                  </span>
                </h6>
              </div>
              <div className="new">
                <span>
                  New
                </span>
              </div>
            </a>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="box">
            <a href="" className='text-decorastion'>
              <div className="img-box">
                <img src="assets/images/p2.png" alt=""/>
              </div>
              <div className="detail-box">
                <h6>
                  Necklace
                </h6>
                <h6>
                  Price
                  <span>
                    $300
                  </span>
                </h6>
              </div>
              <div className="new">
                <span>
                  New
                </span>
              </div>
            </a>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="box">
            <a href="" className='text-decorastion'>
              <div className="img-box">
                <img src="assets/images/p3.png" alt=""/>
              </div>
              <div className="detail-box">
                <h6>
                  Necklace
                </h6>
                <h6>
                  Price
                  <span>
                    $110
                  </span>
                </h6>
              </div>
              <div className="new">
                <span>
                  New
                </span>
              </div>
            </a>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="box">
            <a href="" className='text-decorastion'>
              <div className="img-box">
                <img src="assets/images/p4.png" alt=""/>
              </div>
              <div className="detail-box">
                <h6>
                  Ring
                </h6>
                <h6>
                  Price
                  <span>
                    $45
                  </span>
                </h6>
              </div>
              <div className="new">
                <span>
                  New
                </span>
              </div>
            </a>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="box">
            <a href="" className='text-decorastion'>
              <div className="img-box">
                <img src="assets/images/p5.png" alt=""/>
              </div>
              <div className="detail-box">
                <h6>
                  Ring
                </h6>
                <h6>
                  Price
                  <span>
                    $95
                  </span>
                </h6>
              </div>
              <div className="new">
                <span>
                  New
                </span>
              </div>
            </a>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="box">
            <a href="" className='text-decorastion'>
              <div className="img-box">
                <img src="assets/images/p6.png" alt=""/>
              </div>
              <div className="detail-box">
                <h6>
                  Earrings
                </h6>
                <h6>
                  Price
                  <span>
                    $70
                  </span>
                </h6>
              </div>
              <div className="new">
                <span>
                  New
                </span>
              </div>
            </a>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="box">
            <a href="" className='text-decorastion'>
              <div className="img-box">
                <img src="assets/images/p7.png" alt=""/>
              </div>
              <div className="detail-box">
                <h6>
                  Earrings
                </h6>
                <h6>
                  Price
                  <span>
                    $400
                  </span>
                </h6>
              </div>
              <div className="new">
                <span>
                  New
                </span>
              </div>
            </a>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="box">
            <a href="" className='text-decorastion'>
              <div className="img-box">
                <img src="assets/images/p8.png" alt=""/>
              </div>
              <div className="detail-box">
                <h6>
                  Necklace
                </h6>
                <h6>
                  Price
                  <span>
                    $450
                  </span>
                </h6>
              </div>
              <div className="new">
                <span>
                  New
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="btn-box ">
        <a href="/allproduct" className='text-decorastion'>
          View All Products
        </a>
      </div>
    </div>
  </section>
    </div>
  );
};

export default Allproduct;
