import React from 'react'
import Items from '../items';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
 const RelatedLots = ({lot}:{lot:any}) => {
             //to find related lots(lots in the same category)
            const lots=useSelector((state:RootState)=>state.persistedReducer.lots)
            const relatedLots=lots.filter((el:any)=>el.category==lot.category && el.id!=lot.id)
            console.log(relatedLots)
  return (
    <>
    <section className="section ec-releted-product section-space-p">
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <div className="section-title">
                        <h2 className="ec-bg-title">محصولات مرتبط</h2>
                        <h2 className="ec-title">محصولات مرتبط</h2>
                        <p className="sub-title"> مرور مجموعه ای از محصولات برتر </p>
                    </div>
                </div>
            </div>
            <div className="row margin-minus-b-30">
            <Items lots={relatedLots} />
            </div>
            </div>
                       
    </section>
    </>
  )
}
export default RelatedLots;
