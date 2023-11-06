import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import './Detailproduct.scss'
function DetailProduct(){
    // const cx = classNames.bind(styles);
    const [quantity,setquantity] = useState(1);
    const [available,setavailable] = useState(20);
    const [listimg,setListimg] = useState([]);
    const [imgfeature,setImgFeature] = useState(null)
    const [indexListImg, setIndexListImg] = useState(0);


    useEffect(() => {
       setListimg([
           { imglink: 'https://down-vn.img.susercontent.com/file/6bfcf7ddf232bdca104f36374fa720ed',
           id: 2},
           { imglink: 'https://down-vn.img.susercontent.com/file/sg-11134201-22100-ojhnq7zs2biv9a',
           id: 3},
           { imglink: 'https://down-vn.img.susercontent.com/file/306d7edfefe6641ca68c03db05eb58f7',
           id: 4},
           { imglink: 'https://down-vn.img.susercontent.com/file/6bfcf7ddf232bdca104f36374fa720ed',
               id: 5},
           { imglink: 'https://down-vn.img.susercontent.com/file/sg-11134201-22100-ojhnq7zs2biv9a',
               id: 6},
           { imglink: 'https://down-vn.img.susercontent.com/file/306d7edfefe6641ca68c03db05eb58f7',
               id: 7},
               { imglink: 'https://down-vn.img.susercontent.com/file/306d7edfefe6641ca68c03db05eb58f7',
               id: 8}
       ])
    },[]);
    useEffect(() => {
        if (listimg.length > 0) {
            setImgFeature(listimg[indexListImg].imglink);
        }
    },[listimg,indexListImg])

    const handleNextQuantity = () => {
        if(quantity >= available) {
            alert('Hiện tại không đủ số lượng');
        }else {
            setquantity(quantity + 1)
        }

    }
    const  handlePrevQuantity = () => {
        if (quantity > 1) {
            setquantity(quantity - 1)
        }
    }
    const handleSetImgFeature = (index) => {
        setImgFeature(listimg[index].imglink);
        setIndexListImg(index);
    }
    const handlePrevListImg = () => {
        if(indexListImg > 0) {
            setImgFeature(listimg[indexListImg].imglink);
            setIndexListImg(indexListImg - 1);
        }
    }
    const handleNextListImg = () => {
        if (indexListImg < listimg.length -1 ) {
            setIndexListImg(indexListImg + 1);
        }
    }
    return (
        <div className="wrapper-detail-product">
            <div className='detail-product-header'>
                <h3 className='product-header-title'>Sản phẩm / <span>Chi tiết sản phẩm</span> </h3>
            </div>
            <div className="detail-product-body">
                <div className="images-container">
                    <div className="images-feature">
                        <img src={imgfeature} alt=''/>
                        <button onClick={handlePrevListImg} className='feature-controls-prev'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>
                        </button>
                        <button onClick={handleNextListImg} className='feature-controls-next'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
                        </button>
                    </div>
                    <div className="images-list">
                        {listimg.map((item,index) => (
                            <div key={index}><img onClick={() => handleSetImgFeature(index)} key={index} src={item.imglink} alt=''/></div>
                        ))}
                    </div>
                </div>
                <div className="desc-container">
                    <div className="desc-body">
                        <div className="desc-product-name">
                            <h1>Mua 10 gói tặng 1 Gói NEM NƯỚNG PHÊN B.T làm từ bột mì - ĂN CÙNG BÀ NHUNG Vlog</h1>
                        </div>
                        <div className="desc-sold-avalibable">
                            <h5>425<span>đã bán</span></h5>
                            <span>|</span>
                            <h5>{available}<span>sẵn có</span></h5>
                        </div>
                        <div className="desc-price">
                            <h5>Giá tiền </h5>
                            <span>124.000đ</span>
                        </div>
                        <div className="desc-describe">
                            <h5>Mô tả </h5>
                            <p>Mua 10 tặng 1 Gói NEM NƯỚNG PHÊN làm từ bột mì - ĂN CÙNG BÀ TUYẾT.
                                An toàn, đảm bảo: Đồ ăn vặt của Bà Tuyết đều có giấy chứng nhận An toàn vệ sinh thực phẩm,
                                Bao bì đóng hộp chắc chắn, đầy đủ ngày sản xuất và hạn sử dụng.
                                Hàng được Ship đi bằng hộp Cát-tông cứng 3 lớp nên bạn yên tâm đồ ăn chắc chắn sẽ luôn còn mới và ngon lành cho đến khi bạn nhận được.
                            </p>
                        </div>
                    </div>
                    <div className="desc-footer">
                        <div className="desc-footer-quantity">
                            <h5 className='footar-quantity-title'>Số lượng</h5>
                            <div className='footer-quantity-controls'>
                                <button onClick={handlePrevQuantity} className='btn-prev'>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg>
                                </button>
                                <h3 className='quantity-selected'>{quantity}</h3>
                                <button onClick={handleNextQuantity} className='btn-next'>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
                                </button>
                            </div>
                        </div>
                        <div className="desc-footer-btn">
                            <button>Thêm vào giỏ hàng</button>
                            <button>Mua ngay</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default DetailProduct;