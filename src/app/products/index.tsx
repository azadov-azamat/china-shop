import {FilterRowSection, HeaderSection, ProductCardComponent, TopMenuSection} from "../../components"
import {useAppSelector} from "../../redux/hooks.ts";

export default function Controller() {

    const {products} = useAppSelector(state => state.variables)

    return (
        <>
            <div className={'mx-3'}>
                <HeaderSection/>
            </div>
            <div className="sticky top-0 z-10 bg-white pt-5 px-3">
                <TopMenuSection/>
                <div className={'py-6'}>
                    <FilterRowSection/>
                </div>
            </div>
            <div className={'flex flex-wrap max-350:flex-auto gap-4 justify-between px-3'}>
                {products.map((item, index) => <ProductCardComponent
                    key={index}
                    {...item}
                />)}
            </div>
        </>
    )
}