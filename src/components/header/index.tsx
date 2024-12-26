import {
    LikeIcon,
    SearchIcon,
    MenuIcon
} from "../../assets/icons"
import {BucketComponent, NotificationComponent} from "../index.ts";
import {Link} from "react-router-dom";

export default function Component() {

    return (
        <header className={'w-100 flex justify-between items-center mt-5 mb-5'}>
            <h2 className={'font-bold text-xl'}>UzChinaShop</h2>
            <div className="flex items-center !gap-4">
                <NotificationComponent value={5} isActive={false}/>
                <BucketComponent isActive/>
                <Link to={'/favorite'}>
                    <LikeIcon/>
                </Link>
                <Link to={'/search'}>
                    <SearchIcon/>
                </Link>
                <MenuIcon/>
            </div>
        </header>
    )
}