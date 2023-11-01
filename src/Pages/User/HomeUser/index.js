import classNames from 'classnames/bind';
import styles from './HomeUser.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

function HomeUser() {
    const cx = classNames.bind(styles);

    return (
        <div className={cx('content')}>
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide-to="3"
                        aria-label="Slide 4"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide-to="4"
                        aria-label="Slide 5"
                    ></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="4000">
                        <img
                            src="https://thuthuatmac.com/wp-content/uploads/2021/10/hinh-nen-macbook-pro-2021.jpg"
                            className="d-block w-100"
                            alt="..."
                        />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img
                            src="https://minhancomputercdn.com/media/product/11893_dell_inspiron_16_5620_3.jpg"
                            className="d-block w-100"
                            alt="..."
                        />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default HomeUser;
