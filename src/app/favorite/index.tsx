import {useAppSelector} from "../../redux/hooks.ts";
import {ProductGridComponent} from "../../components";
import {ArrowLeftIcon, BucketIcon} from "../../assets/icons";
import {useNavigate} from "react-router-dom";

export default function Controller() {

    const navigate = useNavigate()
    const {carts} = useAppSelector(state => state.variables)

    return (
        <div className="mt-5 bg-white px-3 rounded-lg shadow-lg">
            <div className={'sticky top-0 z-10 pb-4 pt-5 bg-white flex justify-center items-center'}>
                <div onClick={() => navigate(-1)} className={'absolute left-0 cursor-pointer'}>
                    <ArrowLeftIcon/>
                </div>
                <h2 className="text-lg font-semibold">Favorite</h2>
            </div>

            <div className={'mb-24 pb-4'}>
                {carts.map((product) => (
                    <ProductGridComponent key={product.id} {...product} isRoute/>
                ))}
            </div>

            <div className="fixed bottom-0 left-0 right-0 bg-white py-6 px-3">
                <button className="relative bg-primary-blurple text-xs text-white w-full py-4 rounded-[90px] flex justify-center
                items-center gap-4 uppercase">
                    <BucketIcon color={'white'}/>
                    ADD all TO Cart
                </button>
            </div>
        </div>
    )
}