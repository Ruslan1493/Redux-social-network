import style from '../Users/User.module.scss';

import loader from '../../assets/loader.png';


const Preloader = (props) => {

    return <div>
        <img className={style.loader} src={loader} />
    </div>
}

export default Preloader;