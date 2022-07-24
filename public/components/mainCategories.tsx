import React,{useState} from 'react'
import CategoryTextMain from './categoryTextMain'
import CategoryImgMain from './CategoryImgMain'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
 const MainCategories = ({categories}:{categories:any[]}) => {
    // const loading=useSelector((state:RootState)=>state.isLoadingCategory)
   const [loading,setLoading]=useState(false)
    console.log(categories)
    const [currentCategory,setCurrentCategory]=useState(categories[0]
     );
  const handleCategoryClick=(category:any)=>{
    setLoading(true)
     setCurrentCategory(category)
    //  setLoading(false)
     
    }
    const stopLoading=()=>{
        
        setLoading(false)
    }
  return (
    <>
    {console.log(loading)}
 <section className="section ec-category-section section-space-p">
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <div className="section-title">
                        <h2 className="ec-bg-title">کالکشن برتر ما</h2>
                        <h2 className="ec-title"> انتخاب دسته بندی </h2>
                        <p className="sub-title"> مشاهده برترین دسته بندی کالکشن های ما </p>
                    </div>
                </div>
            </div>

            <div className="row">
                <CategoryTextMain categories={categories} handleCategoryClick={handleCategoryClick} currentCategory={currentCategory}/>
               
                  
                
<CategoryImgMain category={currentCategory} loading={loading} stopLoading={stopLoading}/>
               
                
              
            </div>
        </div>
    </section>
       




    </>
  )
}
export default MainCategories;
