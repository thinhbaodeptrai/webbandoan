import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import image from '@/assets/images';

function Header() {
    const cx = classNames.bind(styles);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className={cx('header-link')}>
                    <a href="" className={cx('header-link-item')}>
                        Cửa hàng
                    </a>
                    <a href="" className={cx('header-link-item')}>
                        Laptop
                    </a>
                    <a href="" className={cx('header-link-item')}>
                        Máy Tính Bảng
                    </a>
                    <a href="" className={cx('header-link-item')}>
                        Điện Thoại
                    </a>
                    <a href="" className={cx('header-link-item')}>
                        Phụ Kiện
                    </a>
                    <a href="" className={cx('header-link-item')}>
                        Quà tặng
                    </a>
                    <a href="" className={cx('header-link-item')}>
                        Hỗ Trợ
                    </a>
                </div>
                <div className={cx('header-final')}>
                    <div className={cx('header-final-cart')}>
                        <svg height="44" viewBox="0 0 14 44" width="14" xmlns="http://www.w3.org/2000/svg">
                            <path d="m11.3535 16.0283h-1.0205a3.4229 3.4229 0 0 0 -3.333-2.9648 3.4229 3.4229 0 0 0 -3.333 2.9648h-1.02a2.1184 2.1184 0 0 0 -2.117 2.1162v7.7155a2.1186 2.1186 0 0 0 2.1162 2.1167h8.707a2.1186 2.1186 0 0 0 2.1168-2.1167v-7.7155a2.1184 2.1184 0 0 0 -2.1165-2.1162zm-4.3535-1.8652a2.3169 2.3169 0 0 1 2.2222 1.8652h-4.4444a2.3169 2.3169 0 0 1 2.2222-1.8652zm5.37 11.6969a1.0182 1.0182 0 0 1 -1.0166 1.0171h-8.7069a1.0182 1.0182 0 0 1 -1.0165-1.0171v-7.7155a1.0178 1.0178 0 0 1 1.0166-1.0166h8.707a1.0178 1.0178 0 0 1 1.0164 1.0166z"></path>
                        </svg>
                    </div>

                    <a href="" className={cx('header-final-login')}>
                        Đăng nhập
                    </a>
                    <a href="" className={cx('header-final-login')}>
                        Đăng Kí
                    </a>
                </div>
                <div className={cx('header-info')}>
                    <h5 className={cx('info-name')}>Thịnh Văn Bảo</h5>
                    <div className={cx('info-img-container', 'header__navbar-item--noti')}>
                        <img src={image.avataradmin} className={cx('info-image')} />
                        <div className={cx('header-noti')}>
                            <ul className={cx('header-noti-list')}>
                                <li className={cx('header-noti-item')}>
                                    <a className={cx('header-noti-link')}>Tài khoản</a>
                                </li>
                                <li className={cx('header-noti-item')}>
                                    <a className={cx('header-noti-link')}>Đơn mua</a>
                                </li>
                                <li className={cx('header-noti-item')}>
                                    <a className={cx('header-noti-link')}>Đăng xuất</a>
                                </li>{' '}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
