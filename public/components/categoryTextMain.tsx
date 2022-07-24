import React from 'react'

 const CategoryTextMain = ({categories,handleCategoryClick,currentCategory}:{categories:any[],handleCategoryClick:(...args: any[])=>void,currentCategory:any}) => {
    console.log(currentCategory)
  return (
    <>
    <div className="col-lg-3">

<ul className="ec-cat-tab-nav nav">
    {categories.map((el,i)=>{
        return(
            <li className={`cat-item `} key={i} onClick={()=>{handleCategoryClick(el)}}>
            <a className={`cat-link ${el.categoryTitle===currentCategory.categoryTitle &&('active')}`} data-bs-toggle="tab" href="#tab-cat-1">
                <div className="cat-icons">
                    <img className="cat-icon" src={el.imgUrl} alt="cat-icon"/>
                    <img className="cat-icon-hover" src={el.imgUrl}alt="cat-icon"/>
                    </div>
                <div className="cat-desc"><span>{el.categoryTitle}</span><span>440 محصول</span></div>
            </a>
        </li>
        )
    })}
 
</ul>

</div>
    </>
  )
}
export default CategoryTextMain
